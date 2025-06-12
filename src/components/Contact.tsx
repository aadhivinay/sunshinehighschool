import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['9440831185', 'For Admissions & Inquiries'],
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sunshinehighschool@gmail.com', 'admissions@sunshinehighschool.edu'],
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Chandur, Nalgonda', 'Telangana - 508255'],
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'School Hours',
      details: ['Mon - Sat: 9:00 AM - 4:00 PM'],
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join our school family? Have questions about admissions or our programs? 
            We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Contact Information</h3>
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className={`${info.color} bg-gray-100 p-2 md:p-3 rounded-lg flex-shrink-0`}>
                    <info.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm md:text-base">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/*Map placeholder */}
             <div className="bg-gray-200 rounded-2xl h-48 md:h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mx-auto mb-3 md:mb-4" />
                <p className="text-gray-500 text-sm md:text-base"><a href="https://maps.app.goo.gl/4GVRdCbtPEUbDg3bA?g_st=aw">Click here to see School Location</a></p>
                <p className="text-xs md:text-sm text-gray-400">Chandur, Nalgonda, Telangana</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm md:text-base"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm md:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm md:text-base"
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="nursery">Nursery Admission</option>
                  <option value="primary">Primary School (1st-5th)</option>
                  <option value="middle">Middle School (6th-8th)</option>
                  <option value="high">High School (9th-10th)</option>
                  <option value="facilities">School Facilities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none text-sm md:text-base"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12 md:mt-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Join Sunshine High School?
          </h3>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Give your child the best education in a caring environment. 
            Our admissions team is ready to guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Apply for Admission
            </button>
            <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
              Schedule Visit
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;