import React from 'react';
import { BookOpen, Users, Award, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Comprehensive curriculum from Nursery to 10th standard following state board guidelines with modern teaching methods.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Experienced Teachers',
      description: 'Qualified and caring educators dedicated to nurturing each child\'s unique potential and learning style.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Consistent outstanding results with 100% pass rate and numerous academic achievements by our students.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Focus on character building, moral values, and overall personality development alongside academic growth.',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Choose Sunshine High School?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a nurturing environment where young minds flourish, 
            preparing students for a bright future with strong foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Join Our Family?
          </h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
            Give your child the best start in life with quality education and caring guidance.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
          >
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;