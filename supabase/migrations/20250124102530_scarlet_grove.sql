/*
  # Initial Schema Setup for Job Portal

  1. Tables
    - users
      - Extended user profile information
    - profiles
      - Detailed user profile information
    - jobs
      - Job listings
    - applications
      - Job applications
    - resumes
      - User resumes

  2. Security
    - Enable RLS on all tables
    - Add policies for data access
*/

-- Users table extension
CREATE TABLE IF NOT EXISTS users (
  id uuid REFERENCES auth.users ON DELETE CASCADE,
  full_name text,
  role text CHECK (role IN ('job_seeker', 'employer')),
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (id)
);

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users ON DELETE CASCADE,
  about text,
  contact jsonb,
  education jsonb[],
  experience jsonb[],
  skills text[],
  certifications jsonb[],
  portfolio_links jsonb,
  updated_at timestamptz DEFAULT now(),
  UNIQUE (user_id)
);

-- Jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id uuid REFERENCES users ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  requirements text[],
  location text NOT NULL,
  type text CHECK (type IN ('full-time', 'part-time', 'internship', 'contract')),
  salary_range jsonb,
  skills_required text[],
  experience_level text,
  posted_at timestamptz DEFAULT now(),
  deadline timestamptz,
  status text DEFAULT 'active' CHECK (status IN ('active', 'closed')),
  updated_at timestamptz DEFAULT now()
);

-- Applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES jobs ON DELETE CASCADE,
  user_id uuid REFERENCES users ON DELETE CASCADE,
  resume_id uuid,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'shortlisted', 'rejected', 'accepted')),
  applied_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE (job_id, user_id)
);

-- Resumes table
CREATE TABLE IF NOT EXISTS resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users ON DELETE CASCADE,
  title text NOT NULL,
  content jsonb NOT NULL,
  template text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

-- Users Policies
CREATE POLICY "Users can view their own data"
  ON users
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
  ON users
  FOR UPDATE
  USING (auth.uid() = id);

-- Profiles Policies
CREATE POLICY "Profiles are viewable by owner and employers"
  ON profiles
  FOR SELECT
  USING (
    auth.uid() = user_id OR 
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'employer'
    )
  );

CREATE POLICY "Profiles can be updated by owner"
  ON profiles
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
  ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Jobs Policies
CREATE POLICY "Jobs are viewable by all authenticated users"
  ON jobs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Employers can insert jobs"
  ON jobs
  FOR INSERT
  WITH CHECK (
    auth.uid() = employer_id AND
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'employer'
    )
  );

CREATE POLICY "Employers can update their own jobs"
  ON jobs
  FOR UPDATE
  USING (
    auth.uid() = employer_id AND
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'employer'
    )
  );

-- Applications Policies
CREATE POLICY "Users can view their own applications"
  ON applications
  FOR SELECT
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM jobs 
      WHERE jobs.id = applications.job_id 
      AND jobs.employer_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert their own applications"
  ON applications
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own applications"
  ON applications
  FOR UPDATE
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM jobs 
      WHERE jobs.id = applications.job_id 
      AND jobs.employer_id = auth.uid()
    )
  );

-- Resumes Policies
CREATE POLICY "Users can view their own resumes"
  ON resumes
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own resumes"
  ON resumes
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own resumes"
  ON resumes
  FOR UPDATE
  USING (auth.uid() = user_id);