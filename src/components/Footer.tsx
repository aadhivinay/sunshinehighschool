import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import SchoolLogo from './SchoolLogo';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#features' },
    { name: 'Admissions', href: '#contact' },
    { name: 'Academic Programs', href: '#features' },
    { name: 'School Events', href: '#events' },
    { name: 'Facilities', href: '#facilities' }
  ];

  const academics = [
    { name: 'Nursery Program', href: '#' },
    { name: 'Primary School ', href: '#' },
    { name: 'Middle School ', href: '#' },
    { name: 'High School ', href: '#' },

  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <SchoolLogo size="md" />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Sunshine High School</h3>
                <p className="text-gray-400 text-xs md:text-sm">Knowledge is Divine...</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Sunshine High School is committed to providing quality education 
              and nurturing young minds in a caring environment.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 md:p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm md:text-base"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Academics</h4>
            <ul className="space-y-2 md:space-y-3">
              {academics.map((academic, index) => (
                <li key={index}>
                  <a
                    href={academic.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm md:text-base"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {academic.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contact Info</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm md:text-base">Chandur, Nalgonda</p>
                  <p className="text-gray-400 text-sm md:text-base">Telangana - 508255</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm md:text-base">9440831185</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm md:text-base">sunshinehighschool@gmail.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 md:mt-8">
              <h5 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 md:px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500 text-white text-sm md:text-base"
                />
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 px-3 md:px-4 py-2 rounded-r-lg hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

       {/* Bottom Section */}
<div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
      © 2024 Sunshine High School. Developed by{' '}
      <a
        href="https://aadhivinayportfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 hover:text-orange-500 hover:underline transition-colors duration-300 font-medium"
      >
        Aadhi Vinay
      </a>
    </p>
    <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
        Privacy Policy
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
        Terms of Service
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
        Admissions Policy
      </a>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;