
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'Not Selected'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with setTimeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'Not Selected'
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading 
              title="Contact Us" 
              subtitle="Reach out to discuss how we can help grow your business online"
            />
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Email Us",
                description: "Send us an email anytime and we'll respond promptly to your inquiry.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                contact: "growliora@gmail.com",
                link: "mailto:growliora@gmail.com"
              },
              {
                title: "Call Us",
                description: "Speak directly with our team for immediate assistance with your questions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                contact: "+91 8750121295",
                link: "tel:+918750121295"
              },
              {
                title: "WhatsApp",
                description: "Connect with us on WhatsApp for quick responses to your queries.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                  </svg>
                ),
                contact: "WhatsApp Support",
                link: "https://wa.me/918750121295"
              }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 100}
                className="bg-zinc-900/50 border border-growliora-gray/20 rounded-xl p-6 text-center hover:border-growliora-coral/30 transition-all duration-300"
              >
                <div className="bg-black/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-growliora-coral">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-growliora-gray mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  className="inline-block text-growliora-coral hover:text-growliora-orange-end font-medium"
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.contact}
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-zinc-900/50 border border-growliora-gray/20 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Form */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="bg-black border-growliora-gray/30 focus:border-growliora-coral"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="bg-black border-growliora-gray/30 focus:border-growliora-coral"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="bg-black border-growliora-gray/30 focus:border-growliora-coral"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium mb-2">
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-black border border-growliora-gray/30 focus:border-growliora-coral rounded-md px-3 py-2"
                          >
                            <option value="Not Selected">Select a Service</option>
                            <option value="Website Development">Website Development</option>
                            <option value="E-Commerce Website">E-Commerce Website</option>
                            <option value="Social Media Management">Social Media Management</option>
                            <option value="TallyPrime Accounting">TallyPrime Accounting</option>
                            <option value="Custom Package">Custom Package</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project or inquiry..."
                            rows={4}
                            className="bg-black border-growliora-gray/30 focus:border-growliora-coral"
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-orange-gradient hover:opacity-90 text-white btn-glow"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  </div>
                  
                  {/* Info */}
                  <div className="bg-orange-gradient p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-white">Business Hours</h3>
                      
                      <div className="space-y-4 text-white/90">
                        <div className="flex justify-between items-center">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Saturday</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Sunday</span>
                          <span>By Appointment</span>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-white/20">
                        <h4 className="font-semibold mb-4 text-white">Quick Response</h4>
                        <p className="text-white/90 mb-6">
                          Need immediate assistance? We typically respond to all inquiries within 24 hours.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <a 
                        href="https://wa.me/918750121295" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-white text-growliora-orange-start rounded-lg py-3 px-4 font-medium hover:bg-white/90 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
