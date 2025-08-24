import React from "react";

const SimpleHeroSection = () => {
  // Booking counter (animated up, but small & calm)
  const [count, setCount] = React.useState(0);
  const endCount = 5282;
  React.useEffect(() => {
    let current = 0;
    if (count < endCount) {
      const iv = setInterval(() => {
        current += Math.ceil((endCount - current) / 25);
        setCount(current >= endCount ? endCount : current);
      }, 16);
      return () => clearInterval(iv);
    }
  }, [count, endCount]);

  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border-b border-border">
      <div className="container mx-auto px-4 sm:px-8 py-7 flex flex-col items-center gap-2 relative">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary mb-1 text-center">
          Book a Real Interview, Unlock Your Next Opportunity
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl text-center mb-3">
          Practice mock interviews with real HRs & top mentors. Honest feedback, up-to-date questions, and instant confidence—powered by AI.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-white font-semibold text-sm shadow transition"
          >
            Book My Interview
          </a>
          <span className="flex items-center gap-1 text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold shadow-sm animate-pulse">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" className="text-blue-300 fill-blue-300" />
              <circle cx="10" cy="10" r="5" className="text-blue-600 fill-blue-600" />
            </svg>
            {count.toLocaleString()}+ booked
          </span>

          {/* Tiny ad chip */}
          <span className="ml-2 px-3 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full text-xs font-medium shadow-xs">
            20% OFF on your first session!
          </span>
        </div>
      </div>
    </section>
  );
};

export default SimpleHeroSection;
