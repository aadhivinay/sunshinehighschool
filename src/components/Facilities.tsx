import React from 'react';
import { Bus, Computer, TreePine } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Bus,
      title: 'Transport Facility',
      description: 'Safe and reliable school bus service covering various routes in Chandur and surrounding areas.',
      image: '/transport.jpg' 
    },
    {
      icon: Computer,
      title: 'Computer Lab',
      description: 'Updated computer facilities with internet access for digital literacy and technology education.',
      image: '/computerlab.jpeg' 
    },
    {
      icon: TreePine,
      title: 'Spacious Playground',
      description: 'Large outdoor area for sports, games, and physical activities to promote healthy development.',
      image: '/playground.jpeg' 
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="facilities" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Facilities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Modern infrastructure and well-equipped facilities designed to enhance 
            learning and support the overall development of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <facility.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-orange-600 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {facility.description}
                </p>
                
                <button className="mt-3 md:mt-4 text-orange-600 hover:text-orange-800 font-semibold text-sm transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Visit Our Campus
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Experience our facilities firsthand and see how we create an environment 
              that nurtures learning and growth for every child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                Schedule Visit
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm md:text-base">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;