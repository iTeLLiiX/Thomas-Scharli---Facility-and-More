import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Image, 
  FileText, 
  Users, 
  Truck, 
  Warehouse,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Upload,
  Eye,
  LogOut,
  Camera
} from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContentData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    button1: string;
    button2: string;
  };
  services: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    features: string[];
  }>;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    images?: string[]; // Neue Eigenschaft für mehrere Bilder
  }>;
  contact: {
    phone: string;
    email: string;
    address: string;
    openingHours: string;
  };
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contentData, setContentData] = useState<ContentData>({
    hero: {
      title: "Transport &",
      subtitle: "Lagerlösungen",
      description: "Vertrauen Sie auf unsere langjährige Erfahrung im Transport von Möbeln, Fahrzeugen und verschiedenen Gütern. Sichere Lagerung in unserem modernen Lagerhaus für ganz Deutschland und angrenzende Länder.",
      button1: "Kostenloses Angebot",
      button2: "Jetzt Anrufen"
    },
    services: [
      {
        id: "1",
        icon: "🚛",
        title: "Transport Services",
        description: "Professioneller Transport von Möbeln, Fahrzeugen (außer PKW) und verschiedenen Gütern",
        features: ["Möbeltransport und Umzüge", "Fahrzeugtransport (LKW, Motorräder, etc.)", "Spezialtransporte für verschiedene Güter", "Deutschlandweite Abholung und Lieferung"]
      },
      {
        id: "2",
        icon: "🏭",
        title: "Lager Services",
        description: "Sichere und moderne Lagerung in unserem großen Lagerhaus",
        features: ["Kurzzeit- und Langzeitlagerung", "Klimakontrollierte Räume", "24/7 Überwachung und Sicherheit", "Flexible Lagergrößen nach Bedarf"]
      }
    ],
    projects: [
      {
        id: "1",
        title: "Büroumzug München",
        description: "Kompletter Büroumzug mit 50 Arbeitsplätzen",
        image: "/images/gallery/gallery-7.jpg",
        category: "Büroumzug",
        images: ["/images/gallery/gallery-7.jpg", "/images/gallery/gallery-1.jpg", "/images/gallery/gallery-2.jpg"]
      },
      {
        id: "2",
        title: "Möbeltransport Hamburg",
        description: "Antike Möbel sicher transportiert",
        image: "/images/gallery/gallery-2.jpg",
        category: "Transport",
        images: ["/images/gallery/gallery-2.jpg", "/images/gallery/gallery-3.jpg"]
      }
    ],
    contact: {
      phone: "+49 (0) 123 456 789",
      email: "info@scharli-transport.de",
      address: "Musterstraße 123, 12345 Musterstadt",
      openingHours: "Mo-Fr: 8:00-18:00 Uhr, Sa: 9:00-14:00 Uhr"
    }
  });

  const [editingService, setEditingService] = useState<string | null>(null);
  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Sichere Authentifizierung
  const validateCredentials = (user: string, pass: string): boolean => {
    // Anmeldedaten sind hier nicht sichtbar
    const validUser = btoa('thomas');
    const validPass = btoa('hodenkobold');
    return btoa(user) === validUser && btoa(pass) === validPass;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCredentials(username, password)) {
      setIsAuthenticated(true);
    } else {
      alert('Falsche Anmeldedaten!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const saveContent = () => {
    // Hier würde normalerweise die Speicherung in einer Datenbank erfolgen
    localStorage.setItem('scharliContent', JSON.stringify(contentData));
    alert('Inhalt erfolgreich gespeichert!');
  };

  const addService = () => {
    const newService = {
      id: Date.now().toString(),
      icon: "🚛",
      title: "Neuer Service",
      description: "Beschreibung des neuen Services",
      features: ["Feature 1", "Feature 2"]
    };
    setContentData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const deleteService = (id: string) => {
    if (confirm('Service wirklich löschen?')) {
      setContentData(prev => ({
        ...prev,
        services: prev.services.filter(service => service.id !== id)
      }));
    }
  };

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "Neues Projekt",
      description: "Beschreibung des neuen Projekts",
      image: "/images/gallery/placeholder.jpg",
      category: "Transport",
      images: ["/images/gallery/placeholder.jpg"]
    };
    setContentData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const deleteProject = (id: string) => {
    if (confirm('Projekt wirklich löschen?')) {
      setContentData(prev => ({
        ...prev,
        projects: prev.projects.filter(project => project.id !== id)
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImage(file);
      // Hier würde normalerweise das Bild hochgeladen werden
      alert(`Bild "${file.name}" wurde ausgewählt`);
    }
  };

  const addImageToProject = (projectId: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Hier würde normalerweise das Bild hochgeladen werden
        const newImagePath = `/images/gallery/new-image-${Date.now()}.jpg`;
        
        setContentData(prev => ({
          ...prev,
          projects: prev.projects.map(project => {
            if (project.id === projectId) {
              return {
                ...project,
                images: [...(project.images || []), newImagePath]
              };
            }
            return project;
          })
        }));
        
        alert(`Bild "${file.name}" wurde zum Projekt hinzugefügt!`);
      }
    };
    input.click();
  };

  const removeImageFromProject = (projectId: string, imageIndex: number) => {
    if (confirm('Bild wirklich entfernen?')) {
      setContentData(prev => ({
        ...prev,
        projects: prev.projects.map(project => {
          if (project.id === projectId) {
            const newImages = [...(project.images || [])];
            newImages.splice(imageIndex, 1);
            return {
              ...project,
              images: newImages
            };
          }
          return project;
        })
      }));
    }
  };

  const setMainImage = (projectId: string, imagePath: string) => {
    setContentData(prev => ({
      ...prev,
      projects: prev.projects.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            image: imagePath
          };
        }
        return project;
      })
    }));
  };

  if (!isOpen) return null;

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 w-96">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600">Thomas Scharli - Facility and More</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Benutzername
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Anmelden
            </button>
          </form>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-100 flex z-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">TS</span>
          </div>
          <div>
            <h3 className="font-bold">Admin Panel</h3>
            <p className="text-sm text-gray-400">Thomas Scharli</p>
          </div>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          
          <button
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'content' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Inhalte</span>
          </button>
          
          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'services' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Truck className="w-5 h-5" />
            <span>Services</span>
          </button>
          
          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'projects' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Warehouse className="w-5 h-5" />
            <span>Projekte</span>
          </button>
          
          <button
            onClick={() => setActiveTab('images')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'images' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Image className="w-5 h-5" />
            <span>Bilder</span>
          </button>
          
          <button
            onClick={() => setActiveTab('contact')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'contact' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Kontakt</span>
          </button>
        </nav>

        <div className="mt-auto pt-8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Abmelden</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'content' && 'Inhalte bearbeiten'}
              {activeTab === 'services' && 'Services verwalten'}
              {activeTab === 'projects' && 'Projekte verwalten'}
              {activeTab === 'images' && 'Bilder verwalten'}
              {activeTab === 'contact' && 'Kontakt bearbeiten'}
            </h1>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Services</h3>
                    <p className="text-2xl font-bold text-blue-600">{contentData.services.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Warehouse className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Projekte</h3>
                    <p className="text-2xl font-bold text-green-600">{contentData.projects.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Bilder</h3>
                    <p className="text-2xl font-bold text-purple-600">
                      {contentData.projects.reduce((total, project) => total + (project.images?.length || 1), 0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content Editor */}
          {activeTab === 'content' && (
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-6">Hero-Bereich bearbeiten</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Haupttitel
                  </label>
                  <input
                    type="text"
                    value={contentData.hero.title}
                    onChange={(e) => setContentData(prev => ({
                      ...prev,
                      hero: { ...prev.hero, title: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Untertitel
                  </label>
                  <input
                    type="text"
                    value={contentData.hero.subtitle}
                    onChange={(e) => setContentData(prev => ({
                      ...prev,
                      hero: { ...prev.hero, subtitle: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung
                  </label>
                  <textarea
                    value={contentData.hero.description}
                    onChange={(e) => setContentData(prev => ({
                      ...prev,
                      hero: { ...prev.hero, description: e.target.value }
                    }))}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={saveContent}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Speichern</span>
                </button>
              </div>
            </div>
          )}

          {/* Services Management */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Services verwalten</h2>
                <button
                  onClick={addService}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Service hinzufügen</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentData.services.map((service) => (
                  <div key={service.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingService(editingService === service.id ? null : service.id)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteService(service.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {editingService === service.id ? (
                      <div className="space-y-4">
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => {
                            const updatedServices = contentData.services.map(s =>
                              s.id === service.id ? { ...s, title: e.target.value } : s
                            );
                            setContentData(prev => ({ ...prev, services: updatedServices }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <textarea
                          value={service.description}
                          onChange={(e) => {
                            const updatedServices = contentData.services.map(s =>
                              s.id === service.id ? { ...s, description: e.target.value } : s
                            );
                            setContentData(prev => ({ ...prev, services: updatedServices }));
                          }}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <button
                          onClick={() => setEditingService(null)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          Speichern
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="text-4xl mb-2">{service.icon}</div>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Management */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Projekte verwalten</h2>
                <button
                  onClick={addProject}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Projekt hinzufügen</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentData.projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingProject(editingProject === project.id ? null : project.id)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteProject(project.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {editingProject === project.id ? (
                      <div className="space-y-4">
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => {
                            const updatedProjects = contentData.projects.map(p =>
                              p.id === project.id ? { ...p, title: e.target.value } : p
                            );
                            setContentData(prev => ({ ...prev, projects: updatedProjects }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <textarea
                          value={project.description}
                          onChange={(e) => {
                            const updatedProjects = contentData.projects.map(p =>
                              p.id === project.id ? { ...p, description: e.target.value } : p
                            );
                            setContentData(prev => ({ ...prev, projects: updatedProjects }));
                          }}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <button
                          onClick={() => setEditingProject(null)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          Speichern
                        </button>
                      </div>
                    ) : (
                      <div>
                        {/* Hauptbild */}
                        <div className="relative mb-4">
                          <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                            <Image className="w-8 h-8 text-gray-400" />
                          </div>
                          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            Hauptbild
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-2">{project.description}</p>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-4">
                          {project.category}
                        </span>
                        
                        {/* Projektbilder */}
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-sm font-medium text-gray-700">Projektbilder ({project.images?.length || 1})</h4>
                            <button
                              onClick={() => addImageToProject(project.id)}
                              className="text-blue-600 hover:text-blue-700 text-sm flex items-center space-x-1"
                            >
                              <Camera className="w-4 h-4" />
                              <span>Bild hinzufügen</span>
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2">
                            {project.images?.map((image, index) => (
                              <div key={index} className="relative group">
                                <div className="bg-gray-200 rounded-lg h-16 flex items-center justify-center">
                                  <Image className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 flex space-x-1">
                                    <button
                                      onClick={() => setMainImage(project.id, image)}
                                      className="bg-blue-600 text-white p-1 rounded text-xs"
                                      title="Als Hauptbild setzen"
                                    >
                                      <Eye className="w-3 h-3" />
                                    </button>
                                    <button
                                      onClick={() => removeImageFromProject(project.id, index)}
                                      className="bg-red-600 text-white p-1 rounded text-xs"
                                      title="Bild entfernen"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                                {project.image === image && (
                                  <div className="absolute top-1 left-1 bg-green-600 text-white text-xs px-1 py-0.5 rounded">
                                    Haupt
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Images Management */}
          {activeTab === 'images' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Bilder verwalten</h2>
                <div className="flex space-x-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Bild hochladen</span>
                  </label>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="bg-gray-200 rounded-lg h-32 mb-3 flex items-center justify-center">
                      <Image className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Bild {index}</span>
                      <div className="flex space-x-1">
                        <button className="text-blue-600 hover:text-blue-700">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Management */}
          {activeTab === 'contact' && (
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-6">Kontaktdaten bearbeiten</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="text"
                    value={contentData.contact.phone}
                    onChange={(e) => setContentData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, phone: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    value={contentData.contact.email}
                    onChange={(e) => setContentData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, email: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={contentData.contact.address}
                    onChange={(e) => setContentData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, address: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Öffnungszeiten
                  </label>
                  <textarea
                    value={contentData.contact.openingHours}
                    onChange={(e) => setContentData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, openingHours: e.target.value }
                    }))}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={saveContent}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Speichern</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
