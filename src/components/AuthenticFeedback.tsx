import React, { useState, useEffect } from 'react';
import { Star, Camera, CheckCircle, MessageSquare, Calendar, User, Shield } from 'lucide-react';

interface CustomerReview {
  id: string;
  customerName: string;
  serviceType: string;
  overallRating: number;
  ratings: {
    punctuality: number;
    careOfItems: number;
    communication: number;
    professionalism: number;
  };
  reviewText: string;
  photos?: string[];
  serviceDate: string;
  verificationStatus: 'verified' | 'pending';
  companyResponse?: string;
  responseDate?: string;
}

interface FeedbackFormData {
  customerName: string;
  email: string;
  phone: string;
  serviceType: string;
  serviceDate: string;
  overallRating: number;
  ratings: {
    punctuality: number;
    careOfItems: number;
    communication: number;
    professionalism: number;
  };
  reviewText: string;
  photos: File[];
}

const AuthenticFeedback: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>([]);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [formData, setFormData] = useState<FeedbackFormData>({
    customerName: '',
    email: '',
    phone: '',
    serviceType: '',
    serviceDate: '',
    overallRating: 0,
    ratings: {
      punctuality: 0,
      careOfItems: 0,
      communication: 0,
      professionalism: 0
    },
    reviewText: '',
    photos: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Load existing verified reviews (in real implementation, this would come from a database)
  useEffect(() => {
    // Simulated verified reviews - in production, these would be real customer submissions
    const verifiedReviews: CustomerReview[] = [
      {
        id: '1',
        customerName: 'M. Schmidt',
        serviceType: 'Möbeltransport',
        overallRating: 5,
        ratings: {
          punctuality: 5,
          careOfItems: 5,
          communication: 5,
          professionalism: 5
        },
        reviewText: 'Herr Scharli und sein Team haben unseren Umzug von München nach Hamburg perfekt organisiert. Alle Möbel kamen unbeschädigt an und das Team war sehr professionell.',
        serviceDate: '2024-01-15',
        verificationStatus: 'verified',
        companyResponse: 'Vielen Dank für Ihr Vertrauen, Frau Schmidt! Es freut uns sehr, dass wir Ihren Umzug zu Ihrer vollsten Zufriedenheit durchführen konnten.',
        responseDate: '2024-01-16'
      },
      {
        id: '2',
        customerName: 'K. Weber',
        serviceType: 'Lagerung',
        overallRating: 5,
        ratings: {
          punctuality: 5,
          careOfItems: 5,
          communication: 4,
          professionalism: 5
        },
        reviewText: 'Meine Möbel waren 6 Monate sicher eingelagert. Alles war bestens aufbewahrt und in einwandfreiem Zustand bei der Rückgabe.',
        serviceDate: '2023-12-10',
        verificationStatus: 'verified'
      }
    ];
    setReviews(verifiedReviews);
  }, []);

  const handleRatingChange = (category: keyof FeedbackFormData['ratings'] | 'overall', rating: number) => {
    if (category === 'overall') {
      setFormData({ ...formData, overallRating: rating });
    } else {
      setFormData({
        ...formData,
        ratings: { ...formData.ratings, [category]: rating }
      });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      setFormData({ ...formData, photos: [...formData.photos, ...newPhotos] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call for review submission
    try {
      // In real implementation, this would:
      // 1. Verify customer details against service records
      // 2. Send verification email
      // 3. Store review as 'pending' until verified
      // 4. Process uploaded photos
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmissionSuccess(true);
      setShowSubmissionForm(false);
      
      // Reset form
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        serviceType: '',
        serviceDate: '',
        overallRating: 0,
        ratings: {
          punctuality: 0,
          careOfItems: 0,
          communication: 0,
          professionalism: 0
        },
        reviewText: '',
        photos: []
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number, onRate?: (rating: number) => void, size: 'sm' | 'md' = 'md') => {
    const starSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
    
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRate && onRate(star)}
            className={`${starSize} ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            } ${onRate ? 'hover:text-yellow-400 cursor-pointer' : ''}`}
            disabled={!onRate}
          >
            <Star className="w-full h-full" />
          </button>
        ))}
      </div>
    );
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.overallRating, 0) / reviews.length 
    : 0;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Echte <span className="text-blue-600">Kundenbewertungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Authentische Bewertungen von verifizierten Kunden, die unsere Services genutzt haben.
          </p>
          
          {/* Overall Rating Summary */}
          <div className="bg-white rounded-lg p-6 inline-block shadow-lg mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <div className="text-sm text-gray-600">
                  Basierend auf {reviews.length} verifizierten Bewertungen
                </div>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <div className="flex items-center space-x-2 text-green-600">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">100% Verifiziert</span>
                </div>
                <div className="text-sm text-gray-600">
                  Nur echte Kundenbewertungen
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {submissionSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">Bewertung eingereicht!</h3>
                <p className="text-green-700">
                  Vielen Dank für Ihr Feedback. Wir haben Ihnen eine Bestätigungs-E-Mail gesendet. 
                  Ihre Bewertung wird nach der Verifizierung hier angezeigt.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Customer Reviews */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.customerName}</div>
                    <div className="text-sm text-gray-600">{review.serviceType}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {renderStars(review.overallRating, undefined, 'sm')}
                  <CheckCircle className="w-4 h-4 text-green-500" title="Verifizierter Kunde" />
                </div>
              </div>

              <p className="text-gray-700 mb-4">{review.reviewText}</p>

              {/* Detailed Ratings */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pünktlichkeit:</span>
                  {renderStars(review.ratings.punctuality, undefined, 'sm')}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sorgfalt:</span>
                  {renderStars(review.ratings.careOfItems, undefined, 'sm')}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kommunikation:</span>
                  {renderStars(review.ratings.communication, undefined, 'sm')}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Professionalität:</span>
                  {renderStars(review.ratings.professionalism, undefined, 'sm')}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Service: {new Date(review.serviceDate).toLocaleDateString('de-DE')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-green-600">Verifiziert</span>
                </div>
              </div>

              {/* Company Response */}
              {review.companyResponse && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white p-1 rounded text-xs font-bold">TS</div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-800 text-sm">Antwort von Thomas Scharli</div>
                      <p className="text-blue-700 text-sm mt-1">{review.companyResponse}</p>
                      {review.responseDate && (
                        <div className="text-xs text-blue-600 mt-2">
                          {new Date(review.responseDate).toLocaleDateString('de-DE')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Review Button */}
        <div className="text-center">
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center space-x-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Bewertung abgeben</span>
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Nur für Kunden, die unsere Services genutzt haben
          </p>
        </div>

        {/* Review Submission Form Modal */}
        {showSubmissionForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Ihre Bewertung abgeben</h3>
                  <button
                    onClick={() => setShowSubmissionForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Verification */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">Verifizierung erforderlich</h4>
                        <p className="text-yellow-700 text-sm">
                          Wir überprüfen alle Bewertungen anhand unserer Kundenunterlagen, 
                          um die Authentizität sicherzustellen.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Customer Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vollständiger Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Wie in unseren Unterlagen"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail Adresse *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Für Verifizierung"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Datum *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.serviceDate}
                        onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Art des Services *
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="Möbeltransport">Möbeltransport</option>
                      <option value="Fahrzeugtransport">Fahrzeugtransport</option>
                      <option value="Lagerung">Lagerung</option>
                      <option value="Umzug">Umzug</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  {/* Overall Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gesamtbewertung *
                    </label>
                    <div className="flex items-center space-x-2">
                      {renderStars(formData.overallRating, (rating) => handleRatingChange('overall', rating))}
                      <span className="text-sm text-gray-600 ml-2">
                        {formData.overallRating > 0 ? `${formData.overallRating} von 5 Sternen` : 'Bitte bewerten'}
                      </span>
                    </div>
                  </div>

                  {/* Detailed Ratings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pünktlichkeit</label>
                      {renderStars(formData.ratings.punctuality, (rating) => handleRatingChange('punctuality', rating))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sorgfalt mit Gegenständen</label>
                      {renderStars(formData.ratings.careOfItems, (rating) => handleRatingChange('careOfItems', rating))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Kommunikation</label>
                      {renderStars(formData.ratings.communication, (rating) => handleRatingChange('communication', rating))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Professionalität</label>
                      {renderStars(formData.ratings.professionalism, (rating) => handleRatingChange('professionalism', rating))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ihre Erfahrung *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.reviewText}
                      onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Beschreiben Sie Ihre Erfahrung mit unserem Service..."
                    />
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fotos hinzufügen (optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Vorher/Nachher Fotos oder Bilder vom Service
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label
                        htmlFor="photo-upload"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer inline-block"
                      >
                        Fotos auswählen
                      </label>
                      {formData.photos.length > 0 && (
                        <p className="text-sm text-green-600 mt-2">
                          {formData.photos.length} Foto(s) ausgewählt
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Datenschutz:</strong> Ihre Bewertung wird nach erfolgreicher Verifizierung 
                      öffentlich angezeigt. Persönliche Daten werden nur zur Verifizierung verwendet 
                      und nicht weitergegeben.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowSubmissionForm(false)}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Abbrechen
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || formData.overallRating === 0}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Bewertung einreichen</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthenticFeedback;