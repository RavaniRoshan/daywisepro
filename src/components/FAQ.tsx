import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes DayWise different from Notion or other planning apps?",
      answer: "DayWise combines the flexibility of Notion with AI-powered intelligence from Google Gemini. Unlike other apps, we offer native Windows and macOS applications for superior performance, offline capabilities, and an interactive timeline view specifically designed for daily planning. Our AI assistant learns your patterns and provides personalized suggestions to optimize your schedule."
    },
    {
      question: "How does the AI assistant work?",
      answer: "Our AI assistant is powered by Google Gemini and analyzes your task patterns, completion times, and productivity trends. It suggests optimal scheduling times, identifies potential conflicts, recommends break periods, and provides daily summaries. The more you use DayWise, the more personalized and accurate the suggestions become."
    },
    {
      question: "Can I use DayWise offline?",
      answer: "Yes! Our native Windows and macOS applications work fully offline. You can create tasks, plan your day, and access all your data without an internet connection. When you're back online, everything syncs seamlessly across all your devices via Firebase."
    },
    {
      question: "How does cross-platform sync work?",
      answer: "DayWise uses Firebase for real-time synchronization across all your devices. Changes made on your Windows desktop instantly appear on your macOS laptop and mobile devices. Your data is encrypted and securely stored in the cloud, ensuring privacy while maintaining seamless access."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we offer mobile apps for both iOS and Android. While our native desktop applications provide the full DayWise experience, our mobile apps are perfect for quick task capture, checking your schedule on the go, and receiving smart notifications."
    },
    {
      question: "What analytics and insights does DayWise provide?",
      answer: "DayWise offers comprehensive analytics including task completion rates, time tracking, productivity patterns, goal progress, and weekly/monthly summaries. Visual charts help you understand when you're most productive, how long tasks actually take, and areas for improvement."
    },
    {
      question: "Can I import my data from Notion or other apps?",
      answer: "Yes, we provide import tools for popular productivity apps including Notion, Todoist, Trello, and others. Our migration wizard helps you transfer your tasks, projects, and notes while maintaining your organizational structure."
    },
    {
      question: "How secure is my data?",
      answer: "Security is our top priority. All data is encrypted in transit and at rest using industry-standard encryption. We use Firebase's secure infrastructure, implement regular security audits, and never share your personal data with third parties. You maintain full ownership and control of your information."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently asked
            <span className="gradient-text block">questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about DayWise. Can't find the answer you're looking for? 
            <a href="#" className="text-[#2D5BFF] hover:text-indigo-700 ml-1">Contact our support team</a>.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#2D5BFF]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of DayWise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Support
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;