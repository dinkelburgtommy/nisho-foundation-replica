import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const TikTokIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "NEWS", href: "/news" },
    { label: "SUPPORT US", href: "/support" },
    { label: "CONTACT", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "/contact", label: "Instagram" },
    { icon: Facebook, href: "/contact", label: "Facebook" },
    { icon: TikTokIcon, href: "/contact", label: "TikTok" },
    { icon: Mail, href: "mailto:nishofoundation@gmail.com", label: "Email" },
  ];

  const showTransparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showTransparent
          ? "bg-primary text-primary-foreground"
          : "bg-background/98 backdrop-blur-sm shadow-sm"
      )}
    >
      {/* Top Bar with Social Links */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          isScrolled || !isHome ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100",
          showTransparent ? "border-primary-foreground/20" : "border-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-end gap-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return social.href.startsWith("mailto:") ? (
              <a
                key={social.label}
                href={social.href}
                className="hover:opacity-70 transition-opacity"
                aria-label={social.label}
              >
                <IconComponent />
              </a>
            ) : (
              <Link
                key={social.label}
                to={social.href}
                className="hover:opacity-70 transition-opacity"
                aria-label={social.label}
              >
                <IconComponent />
              </Link>
            );
          })}
          <div className="flex items-center gap-2 ml-4 border-l border-primary-foreground/20 pl-4">
            <span className="text-xs font-medium">EN</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-4xl font-bold leading-none">
              <div className={cn(
                "transition-colors font-extrabold tracking-tight",
                showTransparent ? "text-primary-foreground" : "text-foreground"
              )}>
                N<span className="text-[hsl(0,90%,55%)]">I</span><span className={cn(
                  "transition-colors",
                  showTransparent ? "text-primary-foreground" : "text-foreground"
                )}>SHO</span>
              </div>
              <div className="text-base font-bold tracking-[0.2em] text-[hsl(0,75%,45%)] mt-0.5">
                FOUNDATION
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium relative group transition-colors",
                  showTransparent ? "text-primary-foreground hover:opacity-80" : "text-foreground hover:text-primary",
                  location.pathname === item.href && "text-primary"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
