import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const profile = {
  name: "Balamugunthan Shakthi",
  avatar: "/media/avatars/myimages.jpg", // Replace with real image path
  role: "US IT Recruiter",
  org: "Two95 International Staffing Se...",
  profilePercent: 72
};

const Sidebar = () => {
  return (
    <aside className="w-full max-w-xs mx-auto mt-2">
      {/* Main Profile Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg px-6 pt-7 pb-6 mb-7 flex flex-col items-center">
        {/* Avatar with circular completion gauge */}
        <div className="relative mb-2">
          <div className="w-20 h-20 rounded-full border-4 border-blue-100 flex items-center justify-center overflow-hidden">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-18 h-18 rounded-full object-cover"
            />
          </div>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-blue-500 px-2 py-0.5 rounded-full text-xs font-medium shadow"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {profile.profilePercent}%
          </span>
        </div>
        {/* Name and Info */}
        <div className="text-center">
          <div className="font-bold text-lg text-gray-800">{profile.name}</div>
          <div className="text-sm text-gray-600 font-medium">{profile.role}</div>
          <div className="text-xs text-gray-400 font-normal my-1">
            @ {profile.org}
          </div>
          <div className="text-xs text-gray-500 mb-2">Last updated today</div>
        </div>
        <Button className="w-full rounded-full font-semibold text-base bg-blue-600 hover:bg-blue-700 mb-3 transition">
          Complete profile
        </Button>
        {/* Profile Performance */}
        <div className="w-full bg-blue-50 rounded-xl px-3 py-3 mb-2">
          <div className="font-bold text-[15px] text-blue-900 flex items-center justify-between mb-2">
            Profile performance
            <span className="text-gray-400 text-base cursor-pointer" title="More info">ⓘ</span>
          </div>
          <div className="flex items-center justify-between mb-2 text-blue-800">
            <div className="flex flex-col items-center flex-1">
              <div className="font-bold text-lg">8</div>
              <div className="text-xs text-gray-600 text-center">Search appearances</div>
            </div>
            <div className="h-6 border-l border-blue-200 mx-2" />
            <div className="flex flex-col items-center flex-1">
              <div className="font-bold text-lg">0</div>
              <div className="text-xs text-gray-600 text-center">Recruiter actions</div>
            </div>
          </div>
          <div className="mt-2 w-full">
            <div className="flex items-center gap-2 bg-white rounded-lg py-2 px-3 border border-blue-100 text-[13px] text-blue-700 font-medium cursor-pointer hover:bg-blue-100 transition">
              <span>⚡</span>
              Get 3X boost to your profile performance
            </div>
          </div>
        </div>
      </div>

      {/* (Optional): More sections here, e.g., categories, quick actions, etc. */}
    </aside>
  );
};

export default Sidebar;
