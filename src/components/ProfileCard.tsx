import { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Star, BookOpen } from 'lucide-react';

const CoachSessionCard = () => {
  // Sample data for profile cards
  const profiles = [
    {
      name: "Sarah Johnson",
      role: "Senior HR Manager",
      experience: "8+ years",
      skills: ["Technical Hiring", "Behavioral Analysis", "Leadership"],
      rating: 4.8,
      price: "₹299/session",
      type: "hr",
      company: "Cognizant",
      companyLogo: "/cognizant-logo.png",
      reviews: 42,
      postedAgo: "3 days ago",
      salary: "Not Disclosed",
      location: "Remote",
      officeLocation: "Hyderabad"
    },
    {
      name: "Rajesh Kumar",
      role: "Full Stack Developer",
      experience: "6+ years",
      skills: ["React", "Node.js", "System Design"],
      rating: 4.9,
      price: "₹399/session",
      type: "mentor",
      company: "Microsoft",
      companyLogo: "/microsoft-logo.png",
      reviews: 87,
      postedAgo: "1 day ago",
      salary: "Competitive",
      location: "Hybrid",
      officeLocation: "Bangalore"
    },
    {
      name: "Priya Sharma",
      role: "Tech Recruiter",
      experience: "5+ years",
      skills: ["Frontend", "Backend", "DevOps"],
      rating: 4.7,
      price: "₹249/session",
      type: "hr",
      company: "Google",
      companyLogo: "/google-logo.png",
      reviews: 56,
      postedAgo: "5 days ago",
      salary: "Industry Standard",
      location: "Remote",
      officeLocation: "Chennai"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">BS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Balamugunthan Shakhti</h1>
                <p className="text-gray-600">US IT Recruiter @ Two95 International Staffing Se...</p>
                <p className="text-sm text-gray-500 mt-1">Last updated today</p>
              </div>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-800">Edit Profile</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Complete Profile Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-semibold text-lg mb-4">Complete profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Profile performance</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Search appearances</span>
                      <span className="font-semibold">24</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Recruiter actions</span>
                      <span className="font-semibold">8</span>
                    </li>
                  </ul>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold text-sm">
                    Get 3X boost to your profile performance
                  </button>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Introducing Naukri 360 Pro!</h3>
                  <p className="text-sm text-blue-700">
                    Get AI-enhanced profile, hidden jobs, pro resume templates, and more
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm transition hover:shadow-md">
                <div className="text-xl md:text-2xl font-bold text-blue-600">150+</div>
                <div className="text-xs text-gray-600 font-medium">Active HRs</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm transition hover:shadow-md">
                <div className="text-xl md:text-2xl font-bold text-green-600">200+</div>
                <div className="text-xs text-gray-600 font-medium">Mentors</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm transition hover:shadow-md col-span-2 sm:col-span-1">
                <div className="text-xl md:text-2xl font-bold text-purple-600">95%</div>
                <div className="text-xs text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center space-x-4 my-5">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1" />
              <span className="text-xs md:text-sm font-bold text-gray-600 bg-gray-50 px-3">
                Available Coaches
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1" />
            </div>

            {/* Profile Cards */}
            <div className="space-y-6">
              {profiles.map((profile, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-blue-600">{profile.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800">{profile.name}</h3>
                        <p className="text-sm text-gray-600">{profile.role}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                            {profile.experience}
                          </span>
                          <div className="flex items-center ml-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={`${i < Math.floor(profile.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                            <span className="text-xs text-gray-600 ml-1">{profile.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {profile.skills.map((skill, i) => (
                            <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        {/* Job details section */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary font-semibold text-sm">{profile.company}</span>
                            <span className="text-yellow-500 text-xs font-bold flex items-center gap-1">
                              ★ {profile.rating}
                            </span>
                            <span className="text-xs text-gray-500"> {profile.reviews} Reviews</span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 mt-2">
                            <span className="flex items-center gap-1"><Briefcase size={14} /> {profile.experience}</span>
                            <span className="flex items-center gap-1">₹ {profile.salary}</span>
                            <span className="flex items-center gap-1"><MapPin size={14} /> {profile.location}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-gray-500 text-xs mt-2">
                            <span>Hiring office located in</span>
                            <span className="font-medium">{profile.officeLocation}</span>
                          </div>
                          
                          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span><Clock size={14} className="inline-block" /> <b className="text-gray-700">{profile.postedAgo}</b></span>
                              <span>Openings: <b className="text-gray-700">20</b></span>
                              <span>Applicants: <b className="text-gray-700">100+</b></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <div className="font-bold text-gray-800">{profile.price}</div>
                      <div className="flex gap-2 mt-4">
                        <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded-full text-sm font-medium transition hover:bg-blue-50">
                          Save
                        </button>
                        <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition">
                          {profile.type === 'hr' ? 'Book Session' : 'Connect'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ad Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-lg text-blue-800 mb-2">75 Early access roles from top companies</h3>
              <p className="text-sm text-blue-700 mb-4">
                See what recruiters are searching for, even before they post a job
              </p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-800">View all</button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Strength */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="font-semibold text-lg mb-4">Profile Strength</h2>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mb-6">65% Complete</p>
              
              <div className="space-y-4">
                {[
                  { label: 'Personal Details', completed: true },
                  { label: 'Education', completed: true },
                  { label: 'Work Experience', completed: false },
                  { label: 'Skills', completed: false }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      item.completed ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      {item.completed ? (
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="font-semibold text-lg mb-4">Recommended jobs for you</h2>
              
              <div className="flex border-b border-gray-200 mb-4">
                <button className="px-3 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                  Profile (71)
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-600">
                  You might like (65)
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-600">
                  Preferences (0)
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Hiring - Work from Home', company: 'Cognizant', rating: 3.7, location: 'Remote' },
                  { title: 'Technical Recruiter', company: 'randstad offshore', location: 'Hybrid - Hyderabad' },
                  { title: 'Customer Support', company: 'Trigent', location: 'Bengaluru' }
                ].map((job, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium text-gray-800">{job.title}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-gray-600">{job.company}</span>
                      {job.rating && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">+ {job.rating}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{job.location}</p>
                  </div>
                ))}
              </div>
              
              <button className="text-blue-600 font-semibold text-sm mt-4 hover:text-blue-800">View all</button>
            </div>

            {/* Needs Attention */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="font-semibold text-lg mb-4">Needs attention</h2>
              <p className="text-gray-600 text-sm mb-4">Where are you in your job search journey?</p>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Actively searching jobs',
                  'Preparing for interviews',
                  'Appearing for interviews',
                  'Received a job offer',
                  'Casually exploring jobs',
                  'Not looking for jobs'
                ].map((status) => (
                  <div 
                    key={status}
                    className={`p-2 rounded-md border text-center cursor-pointer text-xs ${
                      status === 'Actively searching jobs' 
                        ? 'border-blue-600 bg-blue-50 text-blue-800' 
                        : 'border-gray-200 text-gray-600 hover:border-blue-300'
                    }`}
                  >
                    {status}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachSessionCard;