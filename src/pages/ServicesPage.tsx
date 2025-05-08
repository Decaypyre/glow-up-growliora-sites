
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';

const servicesData = [
  {
    id: 1,
    title: "Basic Website Package",
    price: "₹15,000",
    description: "Perfect for small businesses just starting their online journey.",
    features: [
      "Responsive 5-page website",
      "Domain setup (1 year)",
      "Basic SEO optimization",
      "Contact form",
      "Mobile-friendly design",
      "2 rounds of revisions"
    ],
    popular: false
  },
  {
    id: 2,
    title: "Business Growth Package",
    price: "₹35,000",
    description: "Comprehensive solution for businesses looking to establish a strong online presence.",
    features: [
      "Responsive 10-page website",
      "Domain & hosting setup (1 year)",
      "Advanced SEO optimization",
      "Contact & inquiry forms",
      "Photo gallery integration",
      "Social media links",
      "Google Business profile setup",
      "3 months of maintenance",
      "4 rounds of revisions"
    ],
    popular: true
  },
  {
    id: 3,
    title: "E-Commerce Package",
    price: "₹60,000",
    description: "Complete online store solution with payment processing and inventory management.",
    features: [
      "Full e-commerce functionality",
      "Up to 50 product listings",
      "Secure payment gateway integration",
      "Inventory management system",
      "Customer account creation",
      "Order tracking",
      "Domain & hosting setup (1 year)",
      "Advanced SEO optimization",
      "6 months of maintenance",
      "6 rounds of revisions"
    ],
    popular: false
  },
  {
    id: 4,
    title: "Social Media Management",
    price: "₹10,000/month",
    description: "Strategic content creation and management for your social media platforms.",
    features: [
      "Management of 3 social platforms",
      "12 posts per month",
      "Content calendar planning",
      "Custom graphics creation",
      "Hashtag research & strategy",
      "Engagement monitoring",
      "Monthly performance reports",
      "Community management"
    ],
    popular: false
  },
  {
    id: 5,
    title: "TallyPrime Accounting",
    price: "₹8,000/month",
    description: "Professional accounting services using TallyPrime for small businesses.",
    features: [
      "TallyPrime software setup",
      "Monthly bookkeeping",
      "Expense tracking",
      "Invoice management",
      "Basic financial reports",
      "GST filing preparation",
      "Dedicated accountant",
      "Monthly consultation"
    ],
    popular: false
  },
  {
    id: 6,
    title: "Custom Business Solution",
    price: "Custom Quote",
    description: "Tailored digital solutions to meet your specific business needs.",
    features: [
      "Comprehensive needs assessment",
      "Custom website development",
      "Specialized functionality",
      "Integration with existing systems",
      "Personalized training",
      "Premium support package",
      "Custom reporting",
      "Dedicated project manager"
    ],
    popular: false
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading 
              title="Services & Pricing" 
              subtitle="Explore our comprehensive range of digital services tailored for local businesses"
            />
          </AnimatedSection>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <AnimatedSection 
                key={service.id} 
                delay={index * 100}
                className={`border rounded-xl overflow-hidden ${
                  service.popular 
                    ? 'border-growliora-coral' 
                    : 'border-growliora-gray/20'
                }`}
              >
                {service.popular && (
                  <div className="bg-growliora-coral text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-3xl font-bold orange-gradient-text">{service.price}</span>
                    {service.price.includes('/') && (
                      <span className="text-growliora-gray ml-1">
                        {service.price.includes('month') ? ' per month' : ''}
                      </span>
                    )}
                  </div>
                  <p className="text-growliora-gray mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-growliora-coral mr-2 flex-shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="block">
                    <Button 
                      className={`w-full ${
                        service.popular 
                          ? 'bg-growliora-coral hover:bg-growliora-coral/90' 
                          : 'bg-zinc-800 hover:bg-zinc-700'
                      } text-white btn-glow`}
                    >
                      Hire This Service
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Projects */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-growliora-gray mb-8 max-w-2xl mx-auto">
              We understand that every business is unique. Contact us to discuss your specific needs and get a customized quote.
            </p>
            <Link to="/contact">
              <Button className="bg-orange-gradient hover:opacity-90 text-white btn-glow">
                Request a Custom Quote
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services"
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to build a website?",
                answer: "Typically, our basic websites can be completed in 2-3 weeks, while more complex projects like e-commerce sites may take 4-8 weeks. The timeline depends on the project scope, complexity, and how quickly you provide feedback and content."
              },
              {
                question: "Do you provide website hosting?",
                answer: "Yes, our website packages include the first year of hosting. After the first year, hosting can be renewed at our competitive rates or transferred to your preferred hosting provider if desired."
              },
              {
                question: "Can I update the website myself after it's built?",
                answer: "Absolutely! We build our websites on user-friendly content management systems and provide basic training so you can make simple updates yourself. For more complex changes, our maintenance packages are available."
              },
              {
                question: "How does the social media management process work?",
                answer: "We start with a strategy session to understand your brand voice and goals. Then we create a content calendar, design custom graphics, and schedule regular posts. We monitor engagement, respond to comments (during business hours), and provide monthly performance reports."
              },
              {
                question: "What accounting services do you provide with TallyPrime?",
                answer: "Our TallyPrime services include software setup, monthly bookkeeping, expense tracking, invoice management, basic financial reporting, and GST filing preparation. We can customize our services based on your specific accounting needs."
              }
            ].map((faq, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 100}
                className="mb-6 border border-growliora-gray/20 rounded-lg p-6 hover:border-growliora-gray/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-growliora-gray">{faq.answer}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-growliora-orange-start to-growliora-orange-end">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards improving your business's online presence today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white text-growliora-orange-start hover:bg-white/90 btn-glow">
                  Contact Us
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Client Projects
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
