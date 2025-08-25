import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We build Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser Team arbeitet gemeinsam an innovativen Lösungen für Ihre Transportbedürfnisse
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img 
                src="/images/team-1.jpg" 
                alt="Team Member 1"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Team+Member+1';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Max Mustermann</h3>
              <p className="text-gray-600">Geschäftsführer</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img 
                src="/images/team-2.jpg" 
                alt="Team Member 2"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Team+Member+2';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Anna Schmidt</h3>
              <p className="text-gray-600">Logistik Manager</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img 
                src="/images/team-3.jpg" 
                alt="Team Member 3"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Team+Member+3';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tom Weber</h3>
              <p className="text-gray-600">Fahrer & Dispatcher</p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img 
                src="/images/team-4.jpg" 
                alt="Team Member 4"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Team+Member+4';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lisa Müller</h3>
              <p className="text-gray-600">Kundenbetreuung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
