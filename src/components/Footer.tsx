import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Don't Get Left Behind Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Don't get
              <span className="text-blue-400 block">left behind</span>
            </h2>
            <div className="hidden lg:block">
              <h4 className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are a tight-knit team with <span className="text-blue-400">20+ years</span> of experience{' '}
                <span className="text-blue-400">helping</span> early-stage startups showcase how good their products{' '}
                <span className="text-blue-400">really are.</span>
              </h4>
            </div>
          </div>

          {/* Circular Contact Link */}
          <div className="text-center mb-16">
            <a 
              href="#contact" 
              className="inline-block relative group"
            >
              <div className="w-64 h-64 mx-auto relative">
                <svg className="w-full h-full transform rotate-0 group-hover:rotate-180 transition-transform duration-1000" viewBox="0 0 100 100">
                  <defs>
                    <path id="circle" d="M 50,50 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
                  </defs>
                  <text className="text-sm font-medium">
                    <textPath href="#circle" className="text-blue-400">
                      Contact ✦ let's talk ✦ contact ✦
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Let's do <span className="text-blue-400">great things<br /></span> with tech together
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today to explore the possibilities of our dynamic co-working space. 
                Your ideal workspace is just a message or call away with us.
              </p>
            </div>

            {/* Services */}
            <div className="hidden lg:block">
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Web development</li>
                <li>Webdesign</li>
                <li>Brand strategy</li>
                <li>SoMe Paid Ads</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="hidden lg:block">
              <h3 className="text-xl font-semibold mb-6">Projects</h3>
              <ul className="space-y-3 text-gray-300">
                <li>EverDrive™</li>
                <li>NomaFood™</li>
                <li>GoMore™</li>
                <li>NovaDrive™</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2 lg:col-start-3">
              <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Join over 3,400 other marketers and become a better web designer every week.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your@email.com"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <span>Sign Up</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:block lg:col-span-2 lg:col-start-1 lg:row-start-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>( +123 ) 456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>Northbound@mail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>440 Copenhagen Street, Any State</span>
                </div>
              </div>
            </div>

            {/* Contact Info - Mobile */}
            <div className="lg:hidden space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>Northbound@mail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>440 Copenhagen Street, Any State</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="py-8 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Thomas Scharli. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GSAP Animation Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
              gsap.registerPlugin(ScrollTrigger);
              
              // Animate h4 text
              const h4Elements = document.querySelectorAll('h4');
              h4Elements.forEach(h4 => {
                const text = h4.textContent;
                h4.innerHTML = '';
                text.split('').forEach(char => {
                  const span = document.createElement('span');
                  span.style.display = 'inline-block';
                  span.style.opacity = '0';
                  span.style.filter = 'blur(8px)';
                  span.style.transform = 'translateX(-100px)';
                  span.textContent = char === ' ' ? '\\u00A0' : char;
                  h4.appendChild(span);
                });

                gsap.fromTo(h4.querySelectorAll('span'), {
                  x: '-100%',
                  filter: 'blur(8px)',
                  opacity: 0,
                }, {
                  x: '0%',
                  filter: 'blur(0)',
                  opacity: 1,
                  duration: 1.5,
                  ease: "power4.out",
                  stagger: 0.05,
                  scrollTrigger: {
                    trigger: h4,
                    start: "top 90%",
                    end: "top 30%",
                    toggleActions: "restart none none reset",
                    scrub: 1
                  },
                });
              });
            }
          });
        `
      }} />
    </footer>
  );
};

export default Footer;