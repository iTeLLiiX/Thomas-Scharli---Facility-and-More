import React, { useState } from 'react';
import { Settings, Image, Users, BarChart3, Shield, LogOut, Menu, X, FolderOpen, Edit, Plus, Trash2, Save, Globe, Phone, Mail } from 'lucide-react';
import ImageManager from './ImageManager';
import ProjectEditor from './ProjectEditor';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  status: 'active' | 'completed' | 'draft';
  createdAt: Date;
  location?: string;
  client?: string;
  budget?: string;
  duration?: string;
  team?: string[];
  tags?: string[];
  notes?: string;
}

interface WebsiteContent {
  heroTitle: string;
  heroSubtitle: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  aboutText: string;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isProjectEditorOpen, setIsProjectEditorOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Privatumzug Villa Müller',
      description: 'Kompletter Privatumzug einer 4-Zimmer-Villa mit wertvollen Antiquitäten',
      category: 'Privatumzug',
      imageUrl: '/images/private-move-1.jpg',
      status: 'completed',
      createdAt: new Date('2024-01-15'),
      client: 'Familie Müller',
      location: 'München',
      budget: '8.500€',
      duration: '3 Tage',
      team: ['Thomas Scharli', 'Max Mustermann'],
      tags: ['Privatumzug', 'Antiquitäten', 'Villa'],
      notes: 'Besondere Vorsicht bei antiken Möbeln. Klimatisierter Transport erforderlich.'
    },
    {
      id: '2',
      title: 'Büroumzug TechStart GmbH',
      description: 'IT-Umzug mit Server-Equipment und sensiblen Daten',
      category: 'Büroumzug',
      imageUrl: '/images/office-move-1.jpg',
      status: 'active',
      createdAt: new Date('2024-01-20'),
      client: 'TechStart GmbH',
      location: 'Berlin',
      budget: '12.000€',
      duration: '2 Tage',
      team: ['Thomas Scharli', 'Anna Schmidt', 'IT-Spezialist'],
      tags: ['Büroumzug', 'IT-Equipment', 'Server'],
      notes: '24/7 Überwachung der Server während des Transports. Backup vor Umzug erstellt.'
    }
  ]);
  const [websiteContent, setWebsiteContent] = useState<WebsiteContent>({
    heroTitle: 'We build websites that work',
    heroSubtitle: 'Modern, fast, and beautiful websites that convert visitors into customers.',
    contactEmail: 'hello@webseite-scharli.de',
    contactPhone: '+49 170 123 456 78',
    companyName: 'Scharli',
    aboutText: 'Professional web development and design services. We create modern, fast, and beautiful websites that drive results for your business.'
  });

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'projects', label: 'Projekte', icon: FolderOpen },
    { id: 'images', label: 'Bildverwaltung', icon: Image },
    { id: 'content', label: 'Website-Inhalt', icon: Edit },
    { id: 'users', label: 'Benutzer', icon: Users },
    { id: 'settings', label: 'Einstellungen', icon: Settings },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Neue Zugangsdaten: Thomas / hodenkobold
    if (username === 'thomas' && password === 'hodenkobold') {
      setIsAuthenticated(true);
    } else {
      alert('Ungültige Anmeldedaten');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const addProject = () => {
    setEditingProject(null);
    setIsProjectEditorOpen(true);
  };

  const editProject = (project: Project) => {
    setEditingProject(project);
    setIsProjectEditorOpen(true);
  };

  const saveProject = (project: Project) => {
    if (editingProject) {
      // Update existing project
      setProjects(prev => prev.map(p => p.id === project.id ? project : p));
    } else {
      // Add new project
      setProjects(prev => [...prev, project]);
    }
    setIsProjectEditorOpen(false);
    setEditingProject(null);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, ...updates } : project
    ));
  };

  const deleteProject = (id: string) => {
    if (window.confirm('Sind Sie sicher, dass Sie dieses Projekt löschen möchten?')) {
      setProjects(prev => prev.filter(project => project.id !== id));
    }
  };

  const updateWebsiteContent = (updates: Partial<WebsiteContent>) => {
    setWebsiteContent(prev => ({ ...prev, ...updates }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[95vh] mx-4 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Admin-Panel - Thomas Scharli</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex overflow-hidden">
            {!isAuthenticated ? (
              /* Login Form */
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                  <div className="text-center mb-8">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">Admin-Login</h3>
                    <p className="text-gray-600 mt-2">Melden Sie sich an, um das Admin-Panel zu verwalten</p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Benutzername
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="thomas"
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Anmelden
                    </button>
                  </form>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Zugangsdaten:</strong><br />
                      Benutzername: thomas<br />
                      Passwort: hodenkobold
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Admin Dashboard */
              <>
                {/* Sidebar */}
                <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-blue-100 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">T</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Thomas Scharli</p>
                        <p className="text-xs text-gray-600">Administrator</p>
                      </div>
                    </div>
                  </div>

                  <nav className="space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                            activeTab === tab.id
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{tab.label}</span>
                        </button>
                      );
                    })}
                  </nav>

                  <div className="mt-auto pt-6">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <LogOut className="h-5 w-5" />
                      <span className="font-medium">Abmelden</span>
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto p-6">
                  {/* Dashboard */}
                  {activeTab === 'dashboard' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h3>
                        <p className="text-gray-600">
                          Willkommen im Admin-Panel, Thomas! Hier können Sie alle Aspekte der Website verwalten.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FolderOpen className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Projekte gesamt</p>
                              <p className="text-2xl font-bold text-gray-800">{projects.length}</p>
                            </div>
                          </div>
                          <div className="text-sm text-green-600">+2 neue diese Woche</div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <Image className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Bilder gesamt</p>
                              <p className="text-2xl font-bold text-gray-800">156</p>
                            </div>
                          </div>
                          <div className="text-sm text-blue-600">3 neue heute</div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Besucher heute</p>
                              <p className="text-2xl font-bold text-gray-800">1,234</p>
                            </div>
                          </div>
                          <div className="text-sm text-green-600">+12% vs. gestern</div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Schnellaktionen</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <button
                            onClick={() => setActiveTab('projects')}
                            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
                          >
                            <Plus className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <span className="text-sm font-medium">Neues Projekt</span>
                          </button>
                          <button
                            onClick={() => setActiveTab('images')}
                            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
                          >
                            <Image className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <span className="text-sm font-medium">Bilder hochladen</span>
                          </button>
                          <button
                            onClick={() => setActiveTab('content')}
                            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
                          >
                            <Edit className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <span className="text-sm font-medium">Inhalt bearbeiten</span>
                          </button>
                          <button
                            onClick={() => setActiveTab('settings')}
                            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
                          >
                            <Settings className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                            <span className="text-sm font-medium">Einstellungen</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Projects Management */}
                  {activeTab === 'projects' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">Projektverwaltung</h3>
                          <p className="text-gray-600">
                            Verwalten Sie alle Projekte und fügen Sie neue hinzu.
                          </p>
                        </div>
                        <button
                          onClick={addProject}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                        >
                          <Plus className="h-4 w-4" />
                          <span>Neues Projekt</span>
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                          <div key={project.id} className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                project.status === 'active' ? 'bg-green-100 text-green-800' :
                                project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {project.status === 'active' ? 'Aktiv' :
                                 project.status === 'completed' ? 'Abgeschlossen' : 'Entwurf'}
                              </span>
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => editProject(project)}
                                  className="text-blue-600 hover:text-blue-800"
                                  title="Bearbeiten"
                                >
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => deleteProject(project.id)}
                                  className="text-red-600 hover:text-red-800"
                                  title="Löschen"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            
                            <h4 className="font-semibold text-gray-800 mb-2">{project.title}</h4>
                            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                            
                            {project.client && (
                              <p className="text-xs text-gray-500 mb-1">
                                <strong>Kunde:</strong> {project.client}
                              </p>
                            )}
                            
                            {project.location && (
                              <p className="text-xs text-gray-500 mb-1">
                                <strong>Standort:</strong> {project.location}
                              </p>
                            )}
                            
                            {project.budget && (
                              <p className="text-xs text-gray-500 mb-1">
                                <strong>Budget:</strong> {project.budget}
                              </p>
                            )}
                            
                            <div className="text-xs text-gray-500">
                              <p>Kategorie: {project.category}</p>
                              <p>Erstellt: {project.createdAt.toLocaleDateString('de-DE')}</p>
                            </div>
                            
                            {project.tags && project.tags.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-1">
                                {project.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                    {tag}
                                  </span>
                                ))}
                                {project.tags.length > 3 && (
                                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                    +{project.tags.length - 3}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Images Management */}
                  {activeTab === 'images' && (
                    <div>
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bildverwaltung</h3>
                        <p className="text-gray-600">
                          Verwalten Sie alle Bilder der Website. Laden Sie neue Bilder hoch, bearbeiten Sie bestehende und organisieren Sie sie in Kategorien.
                        </p>
                      </div>
                      <ImageManager />
                    </div>
                  )}

                  {/* Content Management */}
                  {activeTab === 'content' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Website-Inhalt bearbeiten</h3>
                        <p className="text-gray-600">
                          Bearbeiten Sie Texte, Kontaktdaten und andere Inhalte der Website.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-medium text-gray-800 mb-4">Hero-Bereich</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Haupttitel</label>
                                <input
                                  type="text"
                                  value={websiteContent.heroTitle}
                                  onChange={(e) => updateWebsiteContent({ heroTitle: e.target.value })}
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Untertitel</label>
                                <input
                                  type="text"
                                  value={websiteContent.heroSubtitle}
                                  onChange={(e) => updateWebsiteContent({ heroSubtitle: e.target.value })}
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-medium text-gray-800 mb-4">Kontaktdaten</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                                <div className="flex items-center space-x-2">
                                  <Mail className="h-4 w-4 text-gray-400" />
                                  <input
                                    type="email"
                                    value={websiteContent.contactEmail}
                                    onChange={(e) => updateWebsiteContent({ contactEmail: e.target.value })}
                                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                                <div className="flex items-center space-x-2">
                                  <Phone className="h-4 w-4 text-gray-400" />
                                  <input
                                    type="tel"
                                    value={websiteContent.contactPhone}
                                    onChange={(e) => updateWebsiteContent({ contactPhone: e.target.value })}
                                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-medium text-gray-800 mb-4">Unternehmen</h4>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Firmenname</label>
                                <input
                                  type="text"
                                  value={websiteContent.companyName}
                                  onChange={(e) => updateWebsiteContent({ companyName: e.target.value })}
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Über uns Text</label>
                                <textarea
                                  value={websiteContent.aboutText}
                                  onChange={(e) => updateWebsiteContent({ aboutText: e.target.value })}
                                  rows={4}
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-end space-x-3">
                            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                              Abbrechen
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                              <Save className="h-4 w-4" />
                              <span>Speichern</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Users Management */}
                  {activeTab === 'users' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Benutzerverwaltung</h3>
                        <p className="text-gray-600">
                          Verwalten Sie Benutzerkonten und Berechtigungen.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="text-center py-12">
                          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h4 className="text-lg font-medium text-gray-800 mb-2">Benutzerverwaltung</h4>
                          <p className="text-gray-600">Diese Funktion wird in einer zukünftigen Version verfügbar sein.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Settings */}
                  {activeTab === 'settings' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Website-Einstellungen</h3>
                        <p className="text-gray-600">
                          Konfigurieren Sie allgemeine Website-Einstellungen und -Verhalten.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-medium text-gray-800 mb-4">Allgemeine Einstellungen</h4>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-800">Wartungsmodus</p>
                                  <p className="text-sm text-gray-600">Website für Besucher sperren</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" className="sr-only peer" />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                              </div>

                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-800">Analytics aktivieren</p>
                                  <p className="text-sm text-gray-600">Besucherstatistiken sammeln</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" className="sr-only peer" defaultChecked />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                              </div>

                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-800">Chat-Widget</p>
                                  <p className="text-sm text-gray-600">Live-Chat für Besucher</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" className="sr-only peer" defaultChecked />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-6">
                            <h4 className="text-lg font-medium text-gray-800 mb-4">Kontakt-Informationen</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                                <input
                                  type="tel"
                                  defaultValue="+49 170 123 456 78"
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                                <input
                                  type="email"
                                  defaultValue="info@scharli-transport.de"
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-end space-x-3">
                            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                              Abbrechen
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Speichern
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Project Editor Modal */}
      <ProjectEditor
        project={editingProject}
        isOpen={isProjectEditorOpen}
        onClose={() => {
          setIsProjectEditorOpen(false);
          setEditingProject(null);
        }}
        onSave={saveProject}
      />
    </>
  );
};

export default AdminPanel;

