import React from 'react';
import { Trophy, Target, Users, Star } from 'lucide-react';

const Sports = () => {
  const sports = [
    {
      name: 'Cricket',
      image: '/cricek.jpeg' ,
      achievements: ['Best Team Spirit Award']
    },
    {
      name: 'Badminton',
      image: '/badminton.jpg' ,
      achievements: ['Individual Excellence']
    },
    {
      name: 'Volleyball',
      image: '/sports.jpg' ,
      achievements: ['Inter-School Champions', 'Team Coordination Award']
    },
    {
      name: 'Kabaddi',
      image: '/kabaddi.jpeg' ,
      achievements: ['State Level Participation', 'Team Excellence']
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Trophies Won',
      count: '25+',
      description: 'Across various sports'
    },
    {
      icon: Target,
      title: 'Sports Activities',
      count: '8',
      description: 'Different sports offered'
    },
    {
      icon: Users,
      title: 'Student Athletes',
      count: '200+',
      description: 'Active participants'
    },
    {
      icon: Star,
      title: 'Years of Sports',
      count: '15',
      description: 'Excellence in athletics'
    }
  ];

  return (
    <section id="sports" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Sports & Physical Education
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Building strong bodies and character through sports. Our physical education 
            program promotes fitness, teamwork, and healthy competition.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <achievement.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">{achievement.count}</div>
              <div className="text-sm md:text-lg font-semibold text-gray-800 mb-1">{achievement.title}</div>
              <div className="text-xs md:text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Sports Programs */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Sports Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {sports.map((sport, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={sport.image} 
                    alt={sport.name}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{sport.name}</h4>
                  <div className="space-y-1 md:space-y-2">
                    {sport.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs md:text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;