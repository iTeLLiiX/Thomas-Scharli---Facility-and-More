import React, { useState } from 'react';
import { X, Settings, BarChart3, Users, Image, FileText, Shield, LogOut } from 'lucide-react';
import ImageManager from './ImageManager';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Falsche Anmeldedaten!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
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
          {!isLoggedIn ? (
            /* Login Form */
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Admin Login</h3>
                  <p className="text-gray-600">Melden Sie sich an, um das Admin Panel zu verwalten</p>
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
                      placeholder="admin"
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
                      placeholder="admin123"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Anmelden
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* Admin Dashboard */
            <>
              {/* Sidebar */}
              <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span>Dashboard</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('images')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'images' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Image className="h-5 w-5" />
                    <span>Bilder</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('content')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'content' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Inhalt</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('users')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'users' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Users className="h-5 w-5" />
                    <span>Benutzer</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Einstellungen</span>
                  </button>
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Abmelden</span>
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                {/* Dashboard */}
                {activeTab === 'dashboard' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-blue-600 font-medium">Gesamtprojekte</p>
                            <p className="text-3xl font-bold text-blue-900">24</p>
                          </div>
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-green-600 font-medium">Aktive Benutzer</p>
                            <p className="text-3xl font-bold text-green-900">156</p>
                          </div>
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <Users className="h-6 w-6 text-green-600" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-6 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-purple-600 font-medium">Bilder</p>
                            <p className="text-3xl font-bold text-purple-900">89</p>
                          </div>
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Image className="h-6 w-6 text-purple-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Letzte Aktivitäten</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">Neues Bild hochgeladen</span>
                          <span className="text-gray-400 text-sm">vor 2 Stunden</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600">Inhalt aktualisiert</span>
                          <span className="text-gray-400 text-sm">vor 4 Stunden</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-600">Neuer Benutzer registriert</span>
                          <span className="text-gray-400 text-sm">vor 1 Tag</span>
                        </div>
                      </div>
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
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Inhaltsverwaltung</h3>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <p className="text-gray-600">Inhaltsverwaltung wird bald verfügbar sein...</p>
                    </div>
                  </div>
                )}

                {/* Users Management */}
                {activeTab === 'users' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Benutzerverwaltung</h3>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <p className="text-gray-600">Benutzerverwaltung wird bald verfügbar sein...</p>
                    </div>
                  </div>
                )}

                {/* Settings */}
                {activeTab === 'settings' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Einstellungen</h3>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <p className="text-gray-600">Einstellungen werden bald verfügbar sein...</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

<<<<<<< HEAD

=======
>>>>>>> e5299f6b66d7c20a71a7838b373248c537535e11
