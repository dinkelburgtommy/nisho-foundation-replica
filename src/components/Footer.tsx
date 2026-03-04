import { Instagram, Facebook, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const TikTokIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              N<span className="text-[hsl(0,85%,50%)]">I</span>SHO
              <div className="text-sm text-[hsl(0,75%,45%)] tracking-[0.2em] mt-1">FOUNDATION</div>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Empowering the Aramaic community through education, culture, and heritage preservation. Building bridges between Eastern wisdom and Western thought.
            </p>
            <div className="flex gap-4">
              <Link to="/contact"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="/contact"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="/contact"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <TikTokIcon />
              </Link>
              <a href="mailto:nishofoundation@gmail.com"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/news" className="text-primary-foreground/80 hover:text-accent transition-colors">News</Link></li>
              <li><Link to="/support" className="text-primary-foreground/80 hover:text-accent transition-colors">Support Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Stichting Nisho Foundation</li>
              <li>Rekkenbrink 3</li>
              <li>7544 LA Enschede</li>
              <li>The Netherlands</li>
              <li className="pt-2">
                <a href="tel:+31617475410" className="hover:text-accent transition-colors">+31 6 174 754 10</a>
              </li>
              <li>
                <a href="mailto:nishofoundation@gmail.com" className="hover:text-accent transition-colors">nishofoundation@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-accent animate-pulse" /> by Nisho Foundation © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
