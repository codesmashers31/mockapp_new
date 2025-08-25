import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Star, MapPin, Clock, BookOpen, Users, Zap, Award, 
  Calendar, CheckCircle, User, Phone, Mail, CreditCard, Shield
} from "lucide-react";

const BookSessionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = location.state || {};
  
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    focusAreas: ''
  });

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const availableSlots = [
    { time: "10:00 AM", date: "Today", available: true, price: profile.price },
    { time: "2:00 PM", date: "Today", available: false, price: profile.price },
    { time: "4:00 PM", date: "Today", available: true, price: profile.price },
    { time: "10:00 AM", date: "Tomorrow", available: true, price: profile.price },
    { time: "11:30 AM", date: "Tomorrow", available: true, price: profile.price },
    { time: "3:00 PM", date: "Tomorrow", available: true, price: profile.price },
    { time: "9:00 AM", date: "Wed, Aug 27", available: true, price: profile.price },
    { time: "1:00 PM", date: "Wed, Aug 27", available: true, price: profile.price },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = () => {
    if (selectedSlot && formData.name && formData.email) {
      alert(`Mock session booked with ${profile.name} for ${selectedSlot.date} at ${selectedSlot.time}!`);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f9fb]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Book Mock Session</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Coach Profile & Session Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Coach Profile Card */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={profile.logo}
                  alt={profile.name}
                  className="w-20 h-20 rounded-xl border-2 border-white shadow-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{profile.role}</h2>
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
                      <MapPin size={16} />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
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
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Session Details */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
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
                  <Zap className="text-blue-600" size={18} />
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

              <div>
                <h4 className="font-semibold mb-3">What you'll get:</h4>
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
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Available Slots */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-blue-600" size={20} />
                <h3 className="text-xl font-bold text-gray-800">Select Time Slot</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {availableSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    disabled={!slot.available}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-4 rounded-lg border text-left transition ${
                      slot.available
                        ? selectedSlot?.time === slot.time && selectedSlot?.date === slot.date
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                        : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <div className="font-semibold">{slot.date}</div>
                    <div className="text-sm text-gray-600">{slot.time}</div>
                    <div className="text-xs text-blue-600 font-medium mt-1">{slot.price}</div>
                    {!slot.available && (
                      <div className="text-xs text-red-500 mt-1">Booked</div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Form & Summary */}
          <div className="space-y-6">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select your experience</option>
                    <option value="fresher">Fresher (0-1 years)</option>
                    <option value="junior">Junior (1-3 years)</option>
                    <option value="mid">Mid-level (3-5 years)</option>
                    <option value="senior">Senior (5+ years)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Focus Areas (Optional)
                  </label>
                  <textarea
                    name="focusAreas"
                    value={formData.focusAreas}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What specific areas would you like to focus on during the session?"
                  />
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>
              
              {selectedSlot ? (
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Session Date</span>
                    <span className="font-semibold">{selectedSlot.date}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Time</span>
                    <span className="font-semibold">{selectedSlot.time}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">60 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-700">{selectedSlot.price}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Calendar size={40} className="mx-auto mb-2" />
                  <p>Select a time slot to see booking summary</p>
                </div>
              )}

              <button
                onClick={handleBooking}
                disabled={!selectedSlot || !formData.name || !formData.email}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 ${
                  selectedSlot && formData.name && formData.email
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <CreditCard size={16} />
                {selectedSlot && formData.name && formData.email ? "Confirm Booking" : "Complete Required Fields"}
              </button>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-3 justify-center">
                <Shield size={12} />
                <span>Secure booking • Can reschedule up to 24 hours before</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSessionPage;
