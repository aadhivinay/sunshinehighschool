import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import SchoolLogo from './SchoolLogo';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/80 via-orange-800/70 to-red-700/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Large Logo */}
          <div className="flex justify-center mb-6 md:mb-8">
            <SchoolLogo size="xl" className="animate-pulse" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mt-2">
              Sunshine High School
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-3 md:mb-4 max-w-4xl mx-auto leading-relaxed">
            Nurturing young minds from Nursery to Tenth Standard in Chandur, Nalgonda
          </p>
          
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Where every child's potential shines bright. Join our caring community 
            dedicated to academic excellence and holistic development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Enroll Now</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center">
              <Play className="h-4 w-4 md:h-5 md:w-5" />
              <span>School Tour</span>
            </button> */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-8 text-center max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Happy Students' },
              { number: '25+', label: 'Dedicated Teachers' },
              { number: '15+', label: 'Years of Excellence' },
              { number: '100%', label: 'Pass Rate' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-300 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-200 text-xs md:text-sm lg:text-base leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;