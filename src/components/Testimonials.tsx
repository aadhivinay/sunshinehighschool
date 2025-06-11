import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mrs. Lakshmi Devi',
      role: 'Parent of 8th Grade Student',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Sunshine High School has been wonderful for my daughter. The teachers are caring and the education quality is excellent. My child has grown both academically and personally.',
      rating: 5
    },
    {
      name: 'Mr. Venkat Rao',
      role: 'Parent of 5th Grade Student',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The school provides a safe and nurturing environment. My son loves going to school every day. The teachers give individual attention to each child which I really appreciate.',
      rating: 4
    },
    {
      name: 'Ananya Reddy',
      role: '10th Grade Student',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'I love my school! The teachers explain everything clearly and help us with our studies. The sports activities and cultural programs make school life very enjoyable.',
      rating: 5
    },
    {
      name: 'Mrs. Padma Kumari',
      role: 'Parent of Nursery Student',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The nursery section is amazing. My little one has learned so much in such a short time. The teachers are patient and loving, making the transition from home to school very smooth.',
      rating: 4
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            What Our Family Says
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Hear from our students and parents about their experiences 
            and how Sunshine High School has made a positive impact in their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <Quote className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 mr-3" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 opacity-90">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4 border-2 border-white/30"
                />
                <div>
                  <h4 className="font-semibold text-base md:text-lg">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm opacity-70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Share Your Sunshine Story
            </h3>
            <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
              We'd love to hear about your experience at Sunshine High School. 
              Your story could inspire other families in our community.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Share Your Story
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;