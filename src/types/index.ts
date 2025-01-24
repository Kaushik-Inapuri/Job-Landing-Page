export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'job_seeker' | 'employer';
  created_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  certifications: Certification[];
  about: string;
  contact: ContactInfo;
  portfolio_links: PortfolioLinks;
}

export interface Education {
  degree: string;
  institution: string;
  start_date: string;
  end_date: string;
  grade: string;
  achievements: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string | null;
  current: boolean;
  responsibilities: string[];
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  credential_id?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export interface PortfolioLinks {
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Job {
  id: string;
  employer_id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'internship' | 'contract';
  salary_range?: {
    min: number;
    max: number;
    currency: string;
  };
  skills_required: string[];
  experience_level: string;
  posted_at: string;
  deadline?: string;
  status: 'active' | 'closed';
}