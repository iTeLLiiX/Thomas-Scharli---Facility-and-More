import React from 'react';
import { Shield, Award, Users, MapPin } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { images } from '../utils/imageImports';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <OptimizedImage 
              src={images.about.thomas}
              fallbackSrc={images.about.fallback}
              alt="Thomas Scharli" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Über Thomas Scharli - 
              <span className="text-blue-600"> Facility and More</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Mit über 15 Jahren Erfahrung in der Transport- und Logistikbranche haben wir uns 
              als verlässlicher Partner für Privatkunden und Unternehmen etabliert. Unser 
              Familienunternehmen steht für Qualität, Zuverlässigkeit und persönlichen Service.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Wir bieten maßgeschneiderte Lösungen für Ihre individuellen Anforderungen - 
              von kleineren Transporten bis hin zu großen Umzügen und langfristiger Lagerung 
              in unserem modernen Lagerhaus.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">Vollversichert</div>
                <div className="text-sm text-gray-600">Umfassender Schutz</div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">Zertifiziert</div>
                <div className="text-sm text-gray-600">Geprüfte Qualität</div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">Persönlich</div>
                <div className="text-sm text-gray-600">Individuelle Beratung</div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">Deutschlandweit</div>
                <div className="text-sm text-gray-600">& Nachbarländer</div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Persönliche Beratung vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;