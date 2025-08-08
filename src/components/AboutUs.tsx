import React from 'react';
import { Shield, Award, Users, MapPin } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚛</div>
                <p className="text-gray-600">Transport Fahrzeug</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Über <span className="text-blue-600">Thomas Scharli - Facility and More</span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 mb-8">
              <p>
                Mit über 15 Jahren Erfahrung in der Transport- und Logistikbranche haben wir uns als verlässlicher Partner für Privatkunden und Unternehmen etabliert. Unser Familienunternehmen steht für Qualität, Zuverlässigkeit und persönlichen Service.
              </p>
              <p>
                Wir bieten maßgeschneiderte Lösungen für Ihre individuellen Anforderungen - von kleineren Transporten bis hin zu großen Umzügen und langfristiger Lagerung in unserem modernen Lagerhaus.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Vollversichert</div>
                  <div className="text-sm text-gray-600">Umfassender Schutz</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Zertifiziert</div>
                  <div className="text-sm text-gray-600">Geprüfte Qualität</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Persönlich</div>
                  <div className="text-sm text-gray-600">Individuelle Beratung</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Deutschlandweit</div>
                  <div className="text-sm text-gray-600">& Nachbarländer</div>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Persönliche Beratung vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
