const PromoBanner = () => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gradient-to-b from-[#fffce7] to-[#f6fafd] border border-blue-100 rounded-2xl px-4 py-4 shadow mb-7 relative overflow-hidden">
    {/* Left: Image and tag */}
    <div className="flex items-center gap-4 flex-1 min-w-0">
      <div className="relative">
        <img
          src="/media/avatars/300-3.png" // Use the AI banner girl here!
          alt="AI-powered Interview"
          className="h-20 w-20 object-cover rounded-xl border shadow"
        />
        {/* AI badge */}
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white text-[10px] px-2 py-0.5 rounded-full border text-blue-700 font-semibold shadow flex items-center gap-1">
          <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8" className="text-blue-400 fill-blue-200"/>
            <text x="10" y="14" className="text-xs font-bold" textAnchor="middle" fill="#2563eb">AI</text>
          </svg>
          powered
        </span>
      </div>
      <div className="flex flex-col justify-center min-w-0 ml-2">
        <h2 className="font-extrabold text-lg md:text-xl text-gray-900 mb-1 truncate">
          Introducing <span className="text-primary">Mock++</span>!
        </h2>
        <div className="text-xs md:text-sm text-gray-700 max-w-xs mb-1 truncate">
          Get your Dream Job! Interview prep is now <span className="text-blue-700 font-medium">AI-powered</span> with instant feedback and realistic practice.
        </div>
      </div>
    </div>
    {/* Button */}
    <div className="flex-initial mt-3 md:mt-0 ml-0 md:ml-6">
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-full text-white font-semibold text-base shadow transition whitespace-nowrap"
      >
        Subcribe Now
      </a>
    </div>
  </div>
);

export default PromoBanner;
