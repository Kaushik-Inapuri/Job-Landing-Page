import { Link } from 'react-router-dom';
import { BriefcaseIcon, FileTextIcon, SearchIcon } from 'lucide-react';


export function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
        Craft Your Future  
        </h1> <br></br>
        <span className="text-indigo-600 text-xl">  Your Ultimate Job Portal & Resume Builder  </span>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Create polished, professional resumes and discover tailored job opportunities in one place. Simplify your job search and apply seamlessly.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link
            to="/auth"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="relative p-6 bg-white rounded-lg shadow-md">
          <div className="absolute -top-4 left-4 bg-indigo-600 rounded-lg p-3">
            <FileTextIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900">Design Impactful Resumes</h3>
          <p className="mt-2 text-base text-gray-500">
          Create professional, industry-specific resumes effortlessly with customizable templates. Highlight your strengths, achievements, and skills in a polished format. Make your resume stand out to impress potential employers.
          </p>
        </div>

        <div className="relative p-6 bg-white rounded-lg shadow-md">
          <div className="absolute -top-4 left-4 bg-indigo-600 rounded-lg p-3">
            <SearchIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900">Find Jobs That Fit You</h3>
          <p className="mt-2 text-base text-gray-500">
          Discover roles tailored to your skills, experience, and location using advanced filters. Get personalized job recommendations to simplify your search. Find opportunities that align with your career goals effortlessly.
          </p>
        </div>

        <div className="relative p-6 bg-white rounded-lg shadow-md">
          <div className="absolute -top-4 left-4 bg-indigo-600 rounded-lg p-3">
            <BriefcaseIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900">Shape Your Career Path</h3>
          <p className="mt-2 text-base text-gray-500">
          Manage your applications, prepare for interviews, and track your progress toward success. Build a complete career portfolio that highlights your potential. Take control of your growth with effective tools and insights.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
              1
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Register & Set Up Your Profile</h3>
            <p className="mt-2 text-sm text-gray-500">Create your account and showcase your skills, experience, and achievements.            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
              2
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Craft a Professional Resume</h3>
            <p className="mt-2 text-sm text-gray-500">Choose from tailored templates to design a resume that highlights your strengths.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
              3
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Explore Job Opportunities</h3>
            <p className="mt-2 text-sm text-gray-500">Search and discover job listings that align with your skills and career goals.            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
              4
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Apply & Monitor Progress</h3>
            <p className="mt-2 text-sm text-gray-500">Apply to jobs effortlessly and track your application status in real time</p>
          </div>
        </div>
      </section>
    </div>
  );
}