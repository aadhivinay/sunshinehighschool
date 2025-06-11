import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Annual Day Celebration',
      time: '03:00 PM - 11:00 PM',
      location: 'School Ground',
      attendees: '500+ Expected',
      image: '/annual.jpg' ,
      category: 'Cultural',
      color: 'bg-purple-500',
      description: 'A grand celebration showcasing student talents, cultural performances, and academic achievements.'
    },
    {
      title: 'Science Exhibition',
      time: '9:00 AM - 4:00 PM',
      location: 'Science Lab',
      attendees: '200+ Students',
      image: '/science.jpg' ,
      category: 'Academic',
      color: 'bg-blue-500',
      description: 'Students present innovative science projects and experiments to demonstrate their learning.'
    },
    {
      title: 'Sports Day',
      time: '09:00 AM - 5:00 PM',
      location: 'School Playground',
      attendees: '500+ Participants',
      image: '/sports2.jpeg' ,
      category: 'Sports',
      color: 'bg-green-500',
      description: 'Annual sports competition featuring various athletic events and team sports for all age groups.'
    },
    {
      title: 'Parent-Teacher Meeting',
      time: '10:00 AM - 1:00 PM',
      location: 'Classrooms',
      attendees: 'All Parents',
      image: '/parent.jpeg' ,
      category: 'Academic',
      color: 'bg-orange-500',
      description: 'Regular interaction between parents and teachers to discuss student progress and development.'
    },
    {
      title: 'Cultural Festival',
      time: '9:00 AM - 4:00 PM',
      location: 'School Campus',
      attendees: '400+ Participants',
      image:'/culturefest.jpg' ,
      category: 'Cultural',
      color: 'bg-pink-500',
      description: 'Celebration of diverse cultures with traditional performances, food, and art exhibitions.'
    },
    {
      title: 'Independence Day',
      time: '8:00 AM - 11:00 AM',
      location: 'School Ground',
      attendees: 'Entire School',
      image: '/independence2.jpeg' ,
      category: 'National',
      color: 'bg-indigo-500',
      description: 'Patriotic celebration with flag hoisting, cultural programs, and speeches on national pride.'
    }
  ];

  return (
    <section id="events" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            School Events
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our vibrant school community through exciting events, 
            celebrations, and educational activities throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${event.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {event.category}
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-orange-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-red-500 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-purple-500 flex-shrink-0" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <button className="mt-4 md:mt-6 w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-colors duration-300 text-sm md:text-base">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;