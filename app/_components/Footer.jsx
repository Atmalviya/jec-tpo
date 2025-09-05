import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Mail, MapPin, Phone, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Companies", href: "#companies" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Code of Conduct", href: "#conduct" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/JECJabalpur",
      name: "Facebook"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/school/jabalpur-engineering-college/",
      name: "LinkedIn"
    },
    {
      icon: ExternalLink,
      href: "https://www.jecjabalpur.ac.in/",
      name: "Website"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="JEC Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">JEC TPO Portal</h3>
                <p className="text-sm text-gray-400">Excellence in Engineering</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Jabalpur Engineering College's Training & Placement Office portal, 
              connecting students with opportunities and companies with talent since 1947.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Gokalpur, Jabalpur<br />
                    Madhya Pradesh, India 482011
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:tpo.student@jecjabalpur.ac.in"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  tpo.student@jecjabalpur.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Jabalpur Engineering College. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by the JEC Development Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
