import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Search, 
  Bell, 
  MessageSquare, 
  Briefcase, 
  Users, 
  GraduationCap, 
  Calendar,
  X,
  Menu
} from "lucide-react";

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
      icon: <GraduationCap size={16} />,
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
      className={`bg-gradient-to-r from-card via-card/95 to-card border-b border-border/40 shadow-lg sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4 sm:space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-sm sm:text-lg">M</span>
              </div>
              <span className="text-xl sm:text-2xl font-display font-bold text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                MockHire
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
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
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-foreground/70 hover:text-primary rounded-full hover:bg-primary/5 transition-colors duration-200 z-10 ${isSearchOpen ? 'bg-primary/5 text-primary' : ''}`}
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
                    className="w-full pl-3 pr-10 py-2 text-sm rounded-full border border-border/40 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </form>
              </div>
            </div>
            
            <button className="p-2 text-foreground/70 hover:text-primary rounded-full hover:bg-primary/5 transition-colors duration-200 relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <button className="p-2 text-foreground/70 hover:text-primary rounded-full hover:bg-primary/5 transition-colors duration-200">
              <MessageSquare size={18} />
            </button>
            
            <div className="h-5 w-px bg-border/50 mx-1"></div>
            
            <Link to="/signin">
              <Button 
                variant="ghost" 
                size="sm" 
                className="font-medium rounded-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                variant="default" 
                size="sm" 
                className="font-medium rounded-md bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 px-4"
              >
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleSearch}
              className="p-2 text-foreground hover:text-primary rounded-full hover:bg-primary/5 transition-colors duration-200"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 focus:outline-none transition-colors duration-200"
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
                className="w-full pl-4 pr-10 py-2 text-sm rounded-full border border-border/40 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                autoFocus
              />
              <button 
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-foreground/70 hover:text-primary rounded-full"
              >
                <X size={18} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-card/95 backdrop-blur-md border-t border-border/40">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </a>
          ))}
          
          <div className="pt-3 pb-2 border-t border-border/40">
            <div className="flex space-x-2 px-3 py-2">
              <button className="p-2 text-foreground/70 hover:text-primary rounded-full hover:bg-primary/5 transition-colors duration-200 relative">
                <Bell size={18} />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
              <button className="p-2 text-foreground/70 hover:text-primary rounded-full hover:bg-primary/5 transition-colors duration-200">
                <MessageSquare size={18} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-2 mt-3">
              <Link to="/signin" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full font-medium rounded-md transition-all duration-300 hover:bg-primary/10 hover:text-primary py-3"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full font-medium rounded-md bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-md py-3"
                >
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;