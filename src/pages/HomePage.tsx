
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-20 md:pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Build Your <span className="orange-gradient-text">Online Presence</span> With Growliora
                </h1>
                <p className="text-xl text-growliora-gray mb-8">
                  Modern website creation, social media management, and accounting services tailored for local businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/services">
                    <Button className="bg-orange-gradient hover:opacity-90 text-white text-lg px-8 py-6 btn-glow">
                      Explore Services
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-growliora-coral text-growliora-coral hover:bg-growliora-coral hover:text-white text-lg px-8 py-6">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <div className="md:w-1/2">
              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="bg-orange-gradient p-1 rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                      alt="Digital Services" 
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-black p-4 rounded-lg border border-growliora-gray/20">
                    <p className="text-sm font-medium">Trusted by local businesses</p>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="Comprehensive digital solutions designed to help your local business grow online"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Creation",
                description: "Custom, responsive websites built to represent your brand and convert visitors.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                )
              },
              {
                title: "Social Media Management",
                description: "Strategic content creation and management for your social media presence.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                )
              },
              {
                title: "Accounting with TallyPrime",
                description: "Professional accounting services using TallyPrime for small businesses.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 100} className="bg-zinc-900/50 border border-growliora-gray/10 rounded-lg p-6 hover:border-growliora-coral/30 transition-all duration-300">
                <div className="text-growliora-coral mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-growliora-gray mb-4">{service.description}</p>
                <Link to="/services" className="text-growliora-coral hover:text-growliora-orange-end flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Growliora?" 
            subtitle="We combine technical expertise with local business understanding"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-center">
            <AnimatedSection delay={100}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Local Business Solutions" 
                className="rounded-lg shadow-xl border border-growliora-gray/20"
              />
            </AnimatedSection>
            
            <div className="space-y-6">
              {[
                {
                  title: "Local Business Focus",
                  description: "We understand the unique needs and challenges of local businesses in the digital landscape."
                },
                {
                  title: "All-in-One Solution",
                  description: "From web presence to social media to accounting, get all your digital needs met in one place."
                },
                {
                  title: "Personalized Approach",
                  description: "Custom strategies tailored to your specific business goals and target audience."
                },
                {
                  title: "Transparent Pricing",
                  description: "Clear, upfront pricing with no hidden fees or surprise costs down the road."
                }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 100 + 200} className="flex">
                  <div className="mr-4 bg-orange-gradient p-1 rounded-full h-fit">
                    <div className="bg-black rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-growliora-coral">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-growliora-gray">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
              
              <AnimatedSection delay={600} className="mt-8">
                <Link to="/services">
                  <Button className="bg-growliora-coral hover:bg-growliora-coral/90 text-white btn-glow">
                    View Our Services
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-growliora-orange-start to-growliora-orange-end">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to grow your business online?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to create a powerful online presence for your local business.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-growliora-orange-start hover:bg-white/90 text-lg px-8 py-6 btn-glow">
                Get Started Today
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
