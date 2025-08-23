const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Contact", "Careers", "Blog"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Refund Policy"]
    },
    {
      title: "Support",
      links: ["Help Center", "FAQ", "Community", "Live Chat"]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "📊", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">MockHire</h3>
            <p className="text-background/70 leading-relaxed mb-6">
              Empowering students with real interview experience and connecting them with industry professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 smooth-transition"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/70 hover:text-background smooth-transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 MockHire. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Made with ❤️ for students and professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;