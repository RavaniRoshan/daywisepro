import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow",
      content: "DayWise has completely transformed my daily planning. The AI suggestions are incredibly accurate, and the timeline view helps me visualize my entire day. I've increased my productivity by 40% since switching from Notion.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    {
      name: "Michael Rodriguez",
      role: "Freelance Designer",
      company: "Independent",
      content: "As a freelancer, I need to juggle multiple projects and deadlines. DayWise's native macOS app is lightning fast, and the cross-platform sync keeps me organized whether I'm on my laptop or phone.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    {
      name: "Emily Johnson",
      role: "Graduate Student",
      company: "Stanford University",
      content: "The analytics dashboard is a game-changer for tracking my study habits. I can see exactly when I'm most productive and plan my schedule accordingly. The AI even suggests optimal break times!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    {
      name: "David Park",
      role: "Software Engineer",
      company: "StartupCorp",
      content: "I've tried every productivity app out there, but DayWise is the first one that actually understands my workflow. The Gemini integration provides insights I never would have thought of myself.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "GrowthLab",
      content: "The team features in DayWise Pro have revolutionized how our remote team coordinates. We can see everyone's schedules and plan collaborative work sessions more effectively.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    {
      name: "James Wilson",
      role: "Consultant",
      company: "Wilson Advisory",
      content: "The offline capabilities of the native Windows app are essential for my travel schedule. I can plan my entire day during flights and everything syncs perfectly when I'm back online.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            User Stories
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Loved by professionals
            <span className="gradient-text block">around the world</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of users who have transformed their daily planning with DayWise's intelligent features.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">25K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">40%</div>
            <div className="text-gray-600">Productivity Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-gray-600">App Store Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 card-hover"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <Quote className="w-8 h-8 text-[#2D5BFF]/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="btn-primary">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;