import React, { useState, useRef } from 'react';
import { Upload, Image, Trash2, Edit, Eye, Download, Plus, X } from 'lucide-react';

interface ImageItem {
  id: string;
  name: string;
  url: string;
  category: string;
  alt: string;
  description: string;
  uploadedAt: Date;
  size: number;
}

interface ImageManagerProps {
  onImageSelect?: (image: ImageItem) => void;
  onImageUpdate?: (image: ImageItem) => void;
  onImageDelete?: (imageId: string) => void;
  className?: string;
}

const ImageManager: React.FC<ImageManagerProps> = ({
  onImageSelect,
  onImageUpdate,
  onImageDelete,
  className = ""
}) => {
  const [images, setImages] = useState<ImageItem[]>([
    {
      id: '1',
      name: 'Privatumzug-1.jpg',
      url: '/images/private-move-1.jpg',
      category: 'Privatumzug',
      alt: 'Professioneller Privatumzug',
      description: 'Sorgfältiger Transport von Möbeln',
      uploadedAt: new Date('2024-01-15'),
      size: 2048576
    },
    {
      id: '2',
      name: 'Büroumzug-1.jpg',
      url: '/images/office-move-1.jpg',
      category: 'Büroumzug',
      alt: 'Büroumzug mit IT-Equipment',
      description: 'Sichere IT-Transporte',
      uploadedAt: new Date('2024-01-16'),
      size: 1536000
    }
  ]);

  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['all', 'Privatumzug', 'Büroumzug', 'Fernumzug', 'Express Transport', 'Entrümpelung', 'Lagerung'];

  const filteredImages = images.filter(image => {
    const matchesSearch = image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const newImage: ImageItem = {
        id: Date.now().toString(),
        name: file.name,
        url: e.target?.result as string,
        category: 'Privatumzug',
        alt: file.name.replace(/\.[^/.]+$/, ''),
        description: '',
        uploadedAt: new Date(),
        size: file.size
      };

      setImages(prev => [...prev, newImage]);
      setIsUploadModalOpen(false);
      setUploadProgress(0);
    };

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        reader.readAsDataURL(file);
      }
    }, 100);
  };

  const handleImageEdit = (image: ImageItem) => {
    setSelectedImage(image);
    setIsEditModalOpen(true);
  };

  const handleImageDelete = (imageId: string) => {
    if (window.confirm('Sind Sie sicher, dass Sie dieses Bild löschen möchten?')) {
      setImages(prev => prev.filter(img => img.id !== imageId));
      onImageDelete?.(imageId);
    }
  };

  const handleImagePreview = (image: ImageItem) => {
    setSelectedImage(image);
    setIsPreviewModalOpen(true);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Image className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Bildverwaltung</h3>
        </div>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Bild hochladen</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <input
            type="text"
            placeholder="Bilder durchsuchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Alle Kategorien' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="group relative bg-gray-100 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCAxMDBDNjAgODguOTU0MyA2OC45NTQzIDgwIDgwIDgwQzgxLjA0NTcgODAgODIgODAuOTU0MyA4MiA4MkM4MiA4My4wNDU3IDgxLjA0NTcgODQgODAgODRDNzcuMjM4NiA4NCA3NSA4Ni4yMzg2IDc1IDg5Qzc1IDkxLjc2MTQgNzcuMjM4NiA5NCA4MCA5NEM4Mi43NjE0IDk0IDg1IDkxLjc2MTQgODUgODlDODUgODYuMjM4NiA4Mi43NjE0IDg0IDgwIDg0Qzc4Ljk1NDMgODQgNzggODQuOTU0MyA3OCA4NkM3OCA4Ny4wNDU3IDc4Ljk1NDMgODggODAgODhDODIuNzYxNCA4OCA4NSA5MC4yMzg2IDg1IDkzQzg1IDk1Ljc2MTQgODIuNzYxNCA5OCA4MCA5OEM3Ny4yMzg2IDk4IDc1IDk1Ljc2MTQgNzUgOTNDNzUgOTAuMjM4NiA3Ny4yMzg2IDg4IDgwIDg4Qzc4Ljk1NDMgODggNzggODguOTU0MyA3OCA5MEM3OCA5MS4wNDU3IDc4Ljk1NDMgOTIgODAgOTJDMjIuMzg2IDkyIDYwIDkyIDYwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                }}
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleImagePreview(image)}
                    className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    title="Vorschau"
                  >
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleImageEdit(image)}
                    className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    title="Bearbeiten"
                  >
                    <Edit className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleImageDelete(image.id)}
                    className="p-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                    title="Löschen"
                  >
                    <Trash2 className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Image Info */}
            <div className="p-3">
              <h4 className="font-medium text-gray-800 text-sm truncate">{image.name}</h4>
              <p className="text-xs text-gray-500">{image.category}</p>
              <p className="text-xs text-gray-400">{formatFileSize(image.size)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Bild hochladen</h3>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Ziehen Sie ein Bild hierher oder klicken Sie zum Auswählen</p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Bild auswählen
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
              
              {uploadProgress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Upload läuft...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Bild bearbeiten</h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-32 object-cover rounded-lg"
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={selectedImage.name}
                  onChange={(e) => setSelectedImage(prev => prev ? {...prev, name: e.target.value} : null)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategorie</label>
                <select
                  value={selectedImage.category}
                  onChange={(e) => setSelectedImage(prev => prev ? {...prev, category: e.target.value} : null)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.filter(cat => cat !== 'all').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alt-Text</label>
                <input
                  type="text"
                  value={selectedImage.alt}
                  onChange={(e) => setSelectedImage(prev => prev ? {...prev, alt: e.target.value} : null)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Beschreibung</label>
                <textarea
                  value={selectedImage.description}
                  onChange={(e) => setSelectedImage(prev => prev ? {...prev, description: e.target.value} : null)}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    if (selectedImage) {
                      setImages(prev => prev.map(img => img.id === selectedImage.id ? selectedImage : img));
                      onImageUpdate?.(selectedImage);
                    }
                    setIsEditModalOpen(false);
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Speichern
                </button>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {isPreviewModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">{selectedImage.name}</h3>
              <button
                onClick={() => setIsPreviewModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full max-h-96 object-contain rounded-lg"
              />
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Kategorie:</span>
                  <p className="text-gray-600">{selectedImage.category}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Größe:</span>
                  <p className="text-gray-600">{formatFileSize(selectedImage.size)}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Hochgeladen:</span>
                  <p className="text-gray-600">{selectedImage.uploadedAt.toLocaleDateString('de-DE')}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Alt-Text:</span>
                  <p className="text-gray-600">{selectedImage.alt}</p>
                </div>
              </div>
              
              {selectedImage.description && (
                <div>
                  <span className="font-medium text-gray-700">Beschreibung:</span>
                  <p className="text-gray-600 mt-1">{selectedImage.description}</p>
                </div>
              )}
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    handleImageEdit(selectedImage);
                    setIsPreviewModalOpen(false);
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                  <span>Bearbeiten</span>
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = selectedImage.url;
                    link.download = selectedImage.name;
                    link.click();
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Herunterladen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageManager;
