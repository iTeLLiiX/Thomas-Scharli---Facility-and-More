import React, { useState, useEffect } from 'react';
import { 
  X, Settings, BarChart3, Users, Image, FileText, Shield, LogOut, 
  Plus, Edit, Trash2, Eye, Search, Filter, Download, Upload,
  Home, Truck, Phone, Mail, MapPin, Clock, Save, AlertCircle,
  CheckCircle, Info, ChevronDown, ChevronRight, Grid, List
} from 'lucide-react';
import ImageManager from './ImageManager';
import ContentManager from './ContentManager';
import UserManager from './UserManager';
import SettingsManager from './SettingsManager';
import Dashboard from './Dashboard';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'editor' | 'viewer';
  lastLogin: Date;
  isActive: boolean;
}

interface ContentItem {
  id: string;
  type: 'hero' | 'service' | 'about' | 'testimonial' | 'contact';
  title: string;
  content: string;
  image?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [notifications, setNotifications] = useState<Array<{
    id: string;
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    timestamp: Date;
  }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Authentication
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (username === 'admin' && password === 'admin123') {
        const user: AdminUser = {
          id: '1',
          username: 'admin',
          role: 'admin',
          lastLogin: new Date(),
          isActive: true
        };
        setCurrentUser(user);
        setIsLoggedIn(true);
        addNotification('success', 'Erfolgreich angemeldet!');
      } else {
        addNotification('error', 'Falsche Anmeldedaten!');
      }
    } catch (error) {
      addNotification('error', 'Anmeldung fehlgeschlagen!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUsername('');
    setPassword('');
    addNotification('info', 'Erfolgreich abgemeldet!');
  };

  // Notification system
  const addNotification = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
    const notification = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date()
    };
    setNotifications(prev => [...prev, notification]);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 5000);
  };

  // Navigation items
  const navigationItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: BarChart3,
      description: 'Übersicht und Statistiken'
    },
    {
      id: 'content',
      name: 'Inhaltsverwaltung',
      icon: FileText,
      description: 'Texte und Inhalte bearbeiten'
    },
    {
      id: 'images',
      name: 'Bildverwaltung',
      icon: Image,
      description: 'Bilder hochladen und verwalten'
    },
    {
      id: 'users',
      name: 'Benutzerverwaltung',
      icon: Users,
      description: 'Benutzer und Berechtigungen'
    },
    {
      id: 'settings',
      name: 'Einstellungen',
      icon: Settings,
      description: 'Website-Einstellungen'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
              {currentUser && (
                <p className="text-sm text-gray-600">
                  Angemeldet als {currentUser.username} ({currentUser.role})
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title={sidebarCollapsed ? 'Sidebar erweitern' : 'Sidebar einklappen'}
            >
              {sidebarCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Notifications */}
        {notifications.length > 0 && (
          <div className="absolute top-20 right-4 z-10 space-y-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center space-x-3 p-4 rounded-lg shadow-lg max-w-sm ${
                  notification.type === 'success' ? 'bg-green-50 border border-green-200' :
                  notification.type === 'error' ? 'bg-red-50 border border-red-200' :
                  notification.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                  'bg-blue-50 border border-blue-200'
                }`}
              >
                {notification.type === 'success' && <CheckCircle className="h-5 w-5 text-green-600" />}
                {notification.type === 'error' && <AlertCircle className="h-5 w-5 text-red-600" />}
                {notification.type === 'warning' && <AlertCircle className="h-5 w-5 text-yellow-600" />}
                {notification.type === 'info' && <Info className="h-5 w-5 text-blue-600" />}
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    notification.type === 'success' ? 'text-green-800' :
                    notification.type === 'error' ? 'text-red-800' :
                    notification.type === 'warning' ? 'text-yellow-800' :
                    'text-blue-800'
                  }`}>
                    {notification.message}
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {!isLoggedIn ? (
            /* Login Form */
            <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="admin"
                      required
                      disabled={isLoading}
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="admin123"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Anmeldung...</span>
                      </>
                    ) : (
                      <span>Anmelden</span>
                    )}
                  </button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Demo-Zugangsdaten:</h4>
                  <p className="text-sm text-blue-700">
                    <strong>Benutzername:</strong> admin<br />
                    <strong>Passwort:</strong> admin123
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Admin Dashboard */
            <>
              {/* Sidebar */}
              <div className={`bg-gray-50 border-r border-gray-200 transition-all duration-300 ${
                sidebarCollapsed ? 'w-16' : 'w-64'
              }`}>
                <div className="p-4">
                  <nav className="space-y-2">
                    {navigationItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === item.id 
                            ? 'bg-blue-600 text-white shadow-lg' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        title={sidebarCollapsed ? item.description : undefined}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {!sidebarCollapsed && (
                          <>
                            <span className="font-medium">{item.name}</span>
                            <div className="flex-1"></div>
                          </>
                        )}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title={sidebarCollapsed ? 'Abmelden' : undefined}
                    >
                      <LogOut className="h-5 w-5 flex-shrink-0" />
                      {!sidebarCollapsed && <span>Abmelden</span>}
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 p-6 overflow-y-auto">
                  {activeTab === 'dashboard' && (
                    <Dashboard 
                      currentUser={currentUser}
                      addNotification={addNotification}
                    />
                  )}
                  
                  {activeTab === 'content' && (
                    <ContentManager 
                      addNotification={addNotification}
                    />
                  )}
                  
                  {activeTab === 'images' && (
                    <ImageManager />
                  )}
                  
                  {activeTab === 'users' && (
                    <UserManager 
                      addNotification={addNotification}
                    />
                  )}
                  
                  {activeTab === 'settings' && (
                    <SettingsManager 
                      addNotification={addNotification}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
