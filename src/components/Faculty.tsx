import React from 'react';
import { Star, Award, BookOpen, Users } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Mr. Kodi Venkanna',
      position: 'Correspondent',
      qualification: 'M.Ed, B.Ed',
      experience: '22 years',
      image: '/venkanna2.jpg',
      specialties: ['School Administration']
    },
    {
      name: 'Mrs. Kodi Sushma',
      position: 'Director & Science Teacher',
      qualification: 'M.Sc, B.Ed',
      experience: '12 years',
      image: '/sushma.jpg',
      specialties: ['Science Teaching']
    },
    {
      name: 'Mr. Addagatla Prem sagar',
      position: 'Principal & English Teacher',
      qualification: 'M.A English, B.Ed',
      experience: '19 years',
      image: '/ravikanth.jpg',
      specialties: ['English Literature', 'Creative Writing']
    },
    {
      name: 'Mr. B. Ravikanth',
      position: 'Social Studies',
      qualification: 'M.A in History, B.Ed',
      experience: '19 years',
      image: '/ravikanth.jpg',
      specialties: ['Social Studies Teaching', 'Physical Training']
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '25+',
      label: 'Qualified Teachers',
      description: 'Experienced educators'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Qualified Faculty',
      description: 'B.Ed and above degrees'
    },
    {
      icon: BookOpen,
      number: '20:1',
      label: 'Student-Teacher Ratio',
      description: 'Personal attention guaranteed'
    },
    {
      icon: Star,
      number: '4.8/5',
      label: 'Parent Rating',
      description: 'Excellent teaching quality'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faculty" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Dedicated Faculty
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced and caring teachers are committed to nurturing each child's 
            potential and providing quality education with personal attention.
          </p>
        </div>

        {/* Faculty Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">{stat.number}</div>
              <div className="text-sm md:text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-xs md:text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Featured Faculty */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Meet Our Teachers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {facultyMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 max-w-sm mx-auto w-full"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-64">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 sm:p-5 lg:p-6">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-orange-600 font-semibold mb-1 sm:mb-2 text-sm sm:text-base leading-tight">
                    {member.position}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                    {member.qualification}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    {member.experience} experience
                  </p>
                  
                  <div className="space-y-1 sm:space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-gray-600 leading-tight">
                          {specialty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            Join Our Teaching Family
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            We're always looking for passionate educators who share our commitment to 
            nurturing young minds and building a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
            >
              Career Opportunities
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm md:text-base">
              Teacher Development
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;