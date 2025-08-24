import React, { useRef } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";

// ---- Helper for section backgrounds ----
function getSectionBg(section) {
  if (section === "IT") return "bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-100";
  if (section === "HR") return "bg-gradient-to-r from-pink-50 via-purple-50 to-pink-100";
  if (section === "Business") return "bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100";
  return "bg-gray-50";
}

// ---- DATA ----
const profiles = [
  {
    name: "Sarah Johnson",
    role: "Senior HR Manager",
    experience: "8+ years",
    skills: ["Technical Hiring", "Behavioral Analysis", "Leadership"],
    rating: 4.8,
    price: "₹299/session",
    type: "hr",
    category: "HR",
    company: "Mock-in",
    logo: "media/avatars/300-16.png",
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
    category: "IT",
    company: "Mock-in",
    logo: "media/avatars/300-18.png",
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
    category: "HR",
    company: "Mock-in",
    logo: "media/avatars/300-17.png",
    postedAgo: "2 days ago",
    location: "Remote",
    officeLocation: "Pune",
    openings: 12,
    applicants: 70,
    reviews: 220
  },
  {
    name: "Vikram Singh",
    role: "Business Consultant",
    experience: "9+ years",
    skills: ["Strategy", "Business Analysis", "Operation Management"],
    rating: 4.6,
    price: "₹399/session",
    type: "business",
    category: "Business",
    company: "Mock-in",
    logo: "media/avatars/300-20.png",
    postedAgo: "4 days ago",
    location: "Remote",
    officeLocation: "Mumbai",
    openings: 4,
    applicants: 21,
    reviews: 120
  },
  {
    name: "Alok Mehta",
    role: "Cloud Engineer",
    experience: "7+ years",
    skills: ["AWS", "Azure", "GCP", "DevOps"],
    rating: 4.8,
    price: "₹449/session",
    type: "mentor",
    category: "IT",
    company: "Mock-in",
    logo: "media/avatars/300-21.png",
    postedAgo: "1 day ago",
    location: "Remote",
    officeLocation: "Delhi",
    openings: 10,
    applicants: 55,
    reviews: 190
  },
  {
    name: "Simran Dhawan",
    role: "Business Analyst",
    experience: "5+ years",
    skills: ["Finance", "Reporting", "Excel", "Extremely Long Skill For Clamp"],
    rating: 4.5,
    price: "₹299/session",
    type: "business",
    category: "Business",
    company: "Mock-in",
    logo: "media/avatars/300-22.png",
    postedAgo: "6 days ago",
    location: "Remote",
    officeLocation: "Chennai",
    openings: 6,
    applicants: 32,
    reviews: 95
  }
];

// ---- CarouselSlider: horizontal scroll arrows ----
const CarouselSlider = ({ title, cards }) => {
  const scrollRef = useRef(null);
  const scrollBy = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="font-bold text-xl text-gray-800 tracking-tight">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy(-380)}
            className="p-1.5 ml-2 rounded-full backdrop-blur bg-white/60 border border-blue-200 shadow text-blue-600 hover:scale-110 active:scale-90 transition"
            aria-label="Scroll Left"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20"><path fill="none" stroke="currentColor" strokeWidth="2" d="M13 4l-6 6 6 6" /></svg>
          </button>
          <button
            onClick={() => scrollBy(380)}
            className="p-1.5 rounded-full backdrop-blur bg-white/60 border border-blue-200 shadow text-blue-600 hover:scale-110 active:scale-90 transition"
            aria-label="Scroll Right"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20"><path fill="none" stroke="currentColor" strokeWidth="2" d="M7 4l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-2 no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cards.map((c, idx) => (
          <div
            key={idx}
            className="h-[230px] w-[340px] md:w-[370px] flex-shrink-0 scroll-snap-align-start"
          >
            {c}
          </div>
        ))}
      </div>
      <style>{`
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
};

// ---- getCards: card content with clamp, fixed sizing ----
function getCards(category) {
  const filtered = profiles.filter((p) => p.category === category);
  return filtered.map((profile, idx) => (
    <div
      key={idx}
      className="rounded-xl border border-gray-200 bg-white shadow flex flex-col justify-between h-full w-full px-5 py-4 transition-all duration-200 hover:shadow-lg"
    >
      <div>
        <div className="flex items-start gap-3 mb-2">
          <img src={profile.logo} alt={profile.company} className="w-14 h-14 rounded-lg border bg-white object-cover shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-base text-gray-900 truncate max-w-[100px]">{profile.name}</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 rounded-full font-semibold">{profile.experience}</span>
              <span className="text-yellow-500 text-xs flex items-center gap-1 font-medium ml-1">★ {profile.rating}</span>
              <span className="ml-1 text-xs text-gray-400">{profile.reviews}</span>
            </div>
            <div className="text-xs text-gray-600 truncate">{profile.role}</div>
            <div className="flex flex-wrap items-center gap-2 mt-0.5 text-gray-600 text-xs">
              <span className="flex items-center gap-1 line-clamp-1"><Briefcase className="w-4 h-4" />{profile.skills.join(", ")}</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between gap-2 pt-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-500"><MapPin className="inline w-4 h-4" /> {profile.officeLocation}</span>
          <span className="text-xs text-gray-500"><Clock className="inline w-4 h-4" /> {profile.postedAgo}</span>
        </div>
        <div className="flex flex-col items-end min-w-[70px]">
          <span className="font-semibold text-[15px] text-blue-700">{profile.price}</span>
          <button className="mt-1.5 px-4 py-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow transition">
            Book Mock
          </button>
        </div>
      </div>
    </div>
  ));
}

// ---- HomePage ----
export default function CarouselPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f4f6fa] to-[#f8fafc] px-2 py-7">
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent flex-1" />
        <span className="text-sm md:text-base font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-full shadow">
          Mock Interview Coaches
        </span>
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent flex-1" />
      </div>
      <div className={`rounded-2xl mb-12 px-2 py-6 md:px-8 shadow-inner ${getSectionBg("IT")}`}>
        <CarouselSlider title="IT Mock Sessions" cards={getCards("IT")} />
      </div>
      <div className={`rounded-2xl mb-12 px-2 py-6 md:px-8 shadow-inner ${getSectionBg("HR")}`}>
        <CarouselSlider title="HR Mock Sessions" cards={getCards("HR")} />
      </div>
      <div className={`rounded-2xl mb-12 px-2 py-6 md:px-8 shadow-inner ${getSectionBg("Business")}`}>
        <CarouselSlider title="Business People Mock Sessions" cards={getCards("Business")} />
      </div>
    </div>
  );
}
