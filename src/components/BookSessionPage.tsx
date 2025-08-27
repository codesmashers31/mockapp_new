import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Star, MapPin, Clock, BookOpen, Users, Award, 
  Calendar, CheckCircle, CreditCard, Shield, Video,
  ChevronLeft, ChevronRight, X, MessageCircle, ThumbsUp,
  User, Mail, Phone, Home, Search, Bell, MessageSquare,
  Briefcase, Zap, Settings2,
  Menu
} from "lucide-react";

const BookSessionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = location.state || {};
  
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showMobileBooking, setShowMobileBooking] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [showProfile, setShowProfile] = useState(false);
  const scrollRef = useRef(null);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Frontend Developer",
      rating: 5,
      comment: "The mock interview was incredibly helpful. The feedback was detailed and actionable.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "UX Designer",
      rating: 5,
      comment: "I felt much more confident after this session. The coach provided great insights.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      rating: 4,
      comment: "Good session overall. The questions were relevant to real interviews.",
      date: "2 weeks ago"
    }
  ];

  // Dates for the next 7 days
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  // Time slots for each day
  const timeSlots = [
    { time: "09:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "01:30 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "04:30 PM", available: false },
    { time: "06:00 PM", available: true },
    { time: "07:30 PM", available: true },
  ];

  const handleBooking = () => {
    if (selectedSlot) {
      alert(`Mock session booked with ${profile.name} for ${dates[selectedDate].toDateString()} at ${selectedSlot.time}!`);
      navigate('/');
    }
  };

  // Helper for category colors
  function getCategoryColor(section) {
    if (section === "IT") return "text-blue-700 bg-blue-100";
    if (section === "HR") return "text-purple-700 bg-purple-100";
    if (section === "Business") return "text-amber-700 bg-amber-100";
    return "text-gray-700 bg-gray-100";
  }

  // Navigation component (matching your index page)
  const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        setScrolled(isScrolled);
      };

      // Close search when clicking outside
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsSearchOpen(false);
        }
        
        if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
          setIsMenuOpen(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isMenuOpen]);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      // Close search if open when opening menu
      if (isSearchOpen && !isMenuOpen) {
        setIsSearchOpen(false);
      }
    };

    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
      // Close menu if open when opening search
      if (isMenuOpen && !isSearchOpen) {
        setIsMenuOpen(false);
      }
      
      if (!isSearchOpen) {
        // Focus on input after a small delay to allow for animation
        setTimeout(() => {
          const input = document.getElementById("search-input");
          if (input) input.focus();
        }, 100);
      }
    };

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        // Handle search functionality here
        console.log("Searching for:", searchQuery);
        // You can redirect to search page or perform search action
      }
    };

    const navItems = [
      { 
        name: "Find HRs", 
        href: "#find-hrs", 
        icon: <Users size={16} />,
      },
      { 
        name: "Find Mentors", 
        href: "#find-mentors", 
        icon: <Briefcase size={16} />,
      },
      { 
        name: "My Sessions", 
        href: "#my-sessions", 
        icon: <Calendar size={16} />,
      },
    ];

    return (
      <nav 
        ref={menuRef}
        className={`bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-4 sm:space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="font-bold text-xl text-gray-800">MockMaster</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-blue-50"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right side actions */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Search bar that expands when clicked */}
              <div ref={searchRef} className={`relative transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-10'}`}>
                <button 
                  onClick={toggleSearch}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 z-10 ${isSearchOpen ? 'bg-blue-50 text-blue-600' : ''}`}
                >
                  <Search size={18} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isSearchOpen ? 'opacity-100 w-full' : 'opacity-0 w-0'}`}>
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-3 pr-10 py-2 text-sm rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </form>
                </div>
              </div>
              
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 relative">
                <Bell size={18} />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
                <MessageSquare size={18} />
              </button>
              
              <div className="h-5 w-px bg-gray-300 mx-1"></div>
              
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                My Account
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleSearch}
                className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile search bar (appears below nav when activated) */}
          {isSearchOpen && (
            <div className="md:hidden mt-3 transition-all duration-300">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 text-sm rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <button 
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:text-blue-600 rounded-full"
                >
                  <X size={18} />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            ))}
            
            <div className="pt-3 pb-2 border-t border-gray-200">
              <div className="flex space-x-2 px-3 py-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 relative">
                  <Bell size={18} />
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
                  <MessageSquare size={18} />
                </button>
              </div>
              
              <div className="flex flex-col space-y-2 mt-3">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  // Bottom Navigation for mobile
  const BottomNav = () => (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-20">
      <div className="grid grid-cols-4 py-3">
        <button className="flex flex-col items-center text-blue-600" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <Search size={20} />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center text-gray-600" onClick={() => setShowProfile(true)}>
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <Settings2 size={20} />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </div>
      
      {/* Profile Sheet (slide up) */}
      {showProfile && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center">
          <div className="w-full bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto p-5 animate-slideUpShadow shadow-2xl">
            <button className="absolute right-5 top-4 text-xl" onClick={() => setShowProfile(false)}>✕</button>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Your Profile</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-600">john.doe@example.com</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg text-center">
                    <span className="block font-bold text-blue-700">5</span>
                    <span className="text-xs text-gray-600">Sessions</span>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <span className="block font-bold text-green-700">4.8</span>
                    <span className="text-xs text-gray-600">Avg Rating</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes slideUpShadow {
          0% { transform: translateY(100%) scale(0.97); opacity:0 }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-slideUpShadow { animation: slideUpShadow 0.25s cubic-bezier(.3,.9,.4,1) both; }
      `}</style>
    </div>
  );

  // Promo Banner Component
  const PromoBanner = () => (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-5 text-white mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Special Offer!</h3>
          <p className="text-blue-100">Book 2 sessions and get 15% discount on your next booking</p>
        </div>
        <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
          Claim Offer
        </button>
      </div>
    </div>
  );

  // Booking Sidebar Component
  const BookingSidebar = () => (
    <div className="space-y-6">
      {/* Time Slot Selection - Cinema Style */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Select Time Slot</h3>
          <div className="flex gap-2">
            <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        
        {/* Date Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {dates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(index)}
              className={`flex-1 min-w-[100px] py-3 px-4 rounded-lg text-center transition ${
                selectedDate === index
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <div className="font-medium text-sm">
                {index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="text-xs">
                {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
            </button>
          ))}
        </div>
        
        {/* Time Grid */}
        <div className="grid grid-cols-2 gap-3">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              disabled={!slot.available}
              onClick={() => setSelectedSlot(slot)}
              className={`p-3 rounded-lg border text-center transition ${
                slot.available
                  ? selectedSlot?.time === slot.time
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <div className="font-semibold">{slot.time}</div>
              <div className="text-xs mt-1">
                {slot.available ? "Available" : "Booked"}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Booking Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>
        
        {selectedSlot ? (
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Session with</span>
              <span className="font-semibold">{profile.name}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Date & Time</span>
              <span className="font-semibold text-right">
                {dates[selectedDate].toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {selectedSlot.time}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Duration</span>
              <span className="font-semibold">60 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 text-lg font-bold mt-4">
              <span>Total Amount</span>
              <span className="text-blue-700">{profile.price}</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Calendar size={40} className="mx-auto mb-2 text-blue-200" />
            <p>Select a time slot to see booking summary</p>
          </div>
        )}

        <button
          onClick={handleBooking}
          disabled={!selectedSlot}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 ${
            selectedSlot
              ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <CreditCard size={16} />
          {selectedSlot ? "Book Now" : "Select a Time Slot"}
        </button>

        <div className="flex items-center gap-2 text-xs text-gray-500 mt-3 justify-center">
          <Shield size={12} className="text-blue-500" />
          <span>Secure booking • Can reschedule up to 24 hours before</span>
        </div>
      </div>

      {/* Advertisement Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-5 text-white">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Premium Membership</h3>
          <p className="text-purple-100 text-sm mb-3">Get unlimited access to all coaches and exclusive resources</p>
          <button className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg text-sm hover:bg-purple-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  // Main Banner for Booking Page
  const BookingBanner = () => (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8 px-4 rounded-xl mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Prepare for Success</h2>
            <p className="text-blue-100 max-w-md">Book a mock session with industry experts and ace your next interview</p>
          </div>
          <div className="flex items-center">
            <div className="bg-white/20 p-4 rounded-lg mr-4">
              <Users className="text-white" size={32} />
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <Award className="text-white" size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f4f6fa] to-[#f8fafc] pb-16 lg:pb-0">
      <Navigation />
      
      {/* Mobile Booking Button */}
      <div className="lg:hidden fixed bottom-16 right-4 z-10">
        <button 
          onClick={() => setShowMobileBooking(true)}
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Calendar size={24} />
        </button>
      </div>

      {/* Mobile Booking Modal */}
      {showMobileBooking && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-xl font-bold">Book Session</h3>
              <button onClick={() => setShowMobileBooking(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <BookingSidebar />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Booking Banner */}
        <BookingBanner />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Promo Banner */}
            <PromoBanner />
            
            {/* Coach Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={profile.logo}
                  alt={profile.name}
                  className="w-24 h-24 rounded-xl border-2 border-white shadow-md object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`p-2 rounded-lg ${getCategoryColor(profile.category)}`}>
                      {profile.category === "IT" && <BookOpen size={20} />}
                      {profile.category === "HR" && <Users size={20} />}
                      {profile.category === "Business" && <Briefcase size={20} />}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">{profile.role}</h2>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg font-semibold text-gray-800">{profile.name}</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium text-sm">
                      {profile.experience}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={16} fill="currentColor" className="text-yellow-500" />
                    <span className="font-semibold">{profile.rating}</span>
                    <span className="text-gray-500">({profile.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-600" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-blue-600" />
                      <span>{profile.openings} slots left</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Expertise Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs for Details and Reviews */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("details")}
                    className={`px-6 py-3 font-medium text-sm border-b-2 transition ${
                      activeTab === "details"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Session Details
                  </button>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`px-6 py-3 font-medium text-sm border-b-2 transition ${
                      activeTab === "reviews"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Reviews ({reviews.length})
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === "details" ? (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-blue-600" size={20} />
                      <h3 className="text-xl font-bold text-gray-800">Mock Session Details</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg mb-6">
                      <div className="flex items-center gap-3">
                        <Clock className="text-blue-600" size={18} />
                        <div>
                          <div className="font-semibold">Duration</div>
                          <div className="text-sm text-gray-600">60 minutes</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Video className="text-blue-600" size={18} />
                        <div>
                          <div className="font-semibold">Format</div>
                          <div className="text-sm text-gray-600">Video Call</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="text-blue-600" size={18} />
                        <div>
                          <div className="font-semibold">Focus</div>
                          <div className="text-sm text-gray-600">{profile.category} Interview</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-800">Interview Process:</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold">1</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Introduction & Warm-up</h5>
                            <p className="text-sm text-gray-600">Brief introduction and discussion about your background and goals.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold">2</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Technical Questions</h5>
                            <p className="text-sm text-gray-600">Industry-specific technical questions tailored to your experience level.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold">3</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Problem-solving Scenario</h5>
                            <p className="text-sm text-gray-600">Real-world scenario to assess your problem-solving approach.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold">4</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Feedback & Discussion</h5>
                            <p className="text-sm text-gray-600">Detailed feedback on your performance and areas for improvement.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">What you'll get:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Real-time feedback on your performance",
                          "Industry-specific questions and scenarios", 
                          "Detailed improvement suggestions",
                          "Session recording for future reference",
                          "Follow-up resources and tips",
                          "Certificate of completion"
                        ].map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {reviews.map(review => (
                      <div key={review.id} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold">{review.name.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold">{review.name}</h4>
                                <p className="text-sm text-gray-600">{review.role}</p>
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex items-center gap-1 my-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={16} 
                                  fill={i < review.rating ? "currentColor" : "none"} 
                                  className={i < review.rating ? "text-yellow-500" : "text-gray-300"} 
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                            <div className="flex items-center gap-4 mt-3">
                              <button className="flex items-center gap-1 text-sm text-gray-500">
                                <ThumbsUp size={16} />
                                <span>Helpful</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Section (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24">
              <BookingSidebar />
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default BookSessionPage;