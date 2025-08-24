import { Briefcase, MapPin, Clock } from "lucide-react";

const profiles = [
  {
    name: "Sarah Johnson",
    role: "Senior HR Manager",
    experience: "8+ years",
    skills: ["Technical Hiring", "Behavioral Analysis", "Leadership"],
    rating: 4.8,
    price: "₹299/session",
    type: "hr",
    company: "Mock-in",
    logo: "/logo-company.png", // replace with your actual logo path
    postedAgo: "3 days ago",
    location: "Remote",
    officeLocation: "Bengaluru",
    openings: 8,
    applicants: 30,
    reviews: 290
  },
  {
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    experience: "6+ years",
    skills: ["React", "Node.js", "System Design"],
    rating: 4.9,
    price: "₹399/session",
    type: "mentor",
    company: "Mock-in",
    logo: "/logo-company.png",
    postedAgo: "5 days ago",
    location: "Remote",
    officeLocation: "Hyderabad",
    openings: 5,
    applicants: 35,
    reviews: 180
  },
  {
    name: "Priya Sharma",
    role: "Tech Recruiter",
    experience: "5+ years",
    skills: ["Frontend", "Backend", "DevOps"],
    rating: 4.7,
    price: "₹249/session",
    type: "hr",
    company: "Mock-in",
    logo: "/logo-company.png",
    postedAgo: "2 days ago",
    location: "Remote",
    officeLocation: "Pune",
    openings: 12,
    applicants: 70,
    reviews: 220
  }
];

const CoachSessionCard = () => (
  <section className="w-full">
    {/* Quick Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
      <div className="bg-white p-4 rounded-lg border border-gray-200 text-center shadow-sm transition hover:shadow-md">
        <div className="text-xl md:text-2xl font-bold text-blue-600">150+</div>
        <div className="text-xs text-gray-600 font-medium">Active HRs</div>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200 text-center shadow-sm transition hover:shadow-md">
        <div className="text-xl md:text-2xl font-bold text-green-600">200+</div>
        <div className="text-xs text-gray-600 font-medium">Mentors</div>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200 text-center shadow-sm transition hover:shadow-md col-span-2 sm:col-span-1">
        <div className="text-xl md:text-2xl font-bold text-purple-600">95%</div>
        <div className="text-xs text-gray-600 font-medium">Success Rate</div>
      </div>
    </div>

    {/* Divider */}
    <div className="flex items-center space-x-4 mb-5">
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1" />
      <span className="text-xs md:text-sm font-bold text-gray-600 bg-gray-50 px-3">
        Available Coaches
      </span>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1" />
    </div>

    {/* Profile/Session Cards  */}
    <div className="space-y-6">
      {profiles.map((profile, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 flex flex-col gap-2 transition hover:shadow-lg"
        >
          <div className="flex items-start justify-between gap-4">
            {/* Left: Avatar + Main Info */}
            <div className="flex-1 min-w-0 flex gap-4">
              <img
                src={profile.logo}
                alt={profile.company}
                className="w-14 h-14 rounded-full border bg-white object-cover mt-1"
              />
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base font-bold text-foreground">{profile.name}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold">{profile.experience}</span>
                  <span className="ml-1 text-yellow-500 text-xs flex items-center gap-1 font-medium" title="Rating">
                    ★ {profile.rating}
                  </span>
                  <span className="ml-1 text-xs text-gray-500">({profile.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="text-sm text-gray-600 truncate">{profile.role}</div>
                <div className="flex items-center gap-4 mt-1 text-gray-600 text-sm flex-wrap">
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{profile.skills.join(", ")}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Right: Action/Price */}
            <div className="flex flex-col items-end justify-between h-full">
              <span className="font-semibold text-base md:text-lg text-blue-700">{profile.price}</span>
              <button
                className={`mt-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow`}
              >
                {profile.type === "hr" ? "Book Session" : "Connect"}
              </button>
            </div>
          </div>

          {/* Desc/Location Row */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-xs mt-2">
            <span><MapPin className="inline w-4 h-4" /> Office: {profile.officeLocation}</span>
            <span><Clock className="inline w-4 h-4" /> Posted: {profile.postedAgo}</span>
            <span>Openings: <b className="text-gray-700">{profile.openings}</b></span>
            <span>Applicants: <b className="text-gray-700">{profile.applicants}+</b></span>
          </div>
        </div>
      ))}
    </div>

    {/* Ad Banner (Naukri style) */}
    <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
      <h3 className="font-semibold text-lg text-blue-800 mb-2">
        75 Early access roles from top companies
      </h3>
      <p className="text-sm text-blue-700 mb-4">
        See what recruiters are searching for, even before they post a job
      </p>
      <button className="text-blue-600 font-semibold text-sm">
        View all
      </button>
    </div>
  </section>
);

export default CoachSessionCard;
