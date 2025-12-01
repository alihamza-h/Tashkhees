import { Link } from "react-router";
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">Tashkhees</span>
            </div>
            <p className="text-emerald-100 opacity-80">
              Empowering healthcare through innovative AI-based technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-emerald-100 opacity-80 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/about" className="text-emerald-100 opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/services" className="text-emerald-100 opacity-80 hover:opacity-100 transition-opacity">
                Services
              </Link>
              <Link to="/contact" className="text-emerald-100 opacity-80 hover:opacity-100 transition-opacity">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-emerald-100 opacity-80">
                <Mail className="w-4 h-4" />
                <span>info@tashkhees.com</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100 opacity-80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100 opacity-80">
                <MapPin className="w-4 h-4" />
                <span>123 Medical Plaza, Tech City</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-emerald-800 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-emerald-800 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-emerald-800 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-emerald-800 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 text-center text-emerald-100 opacity-70">
          <p>&copy; {new Date().getFullYear()} Tashkhees. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
