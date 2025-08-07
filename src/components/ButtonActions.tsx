import React from 'react';

// Interface für Button-Aktionen
export interface ButtonAction {
  id: string;
  type: 'phone' | 'email' | 'link' | 'form' | 'scroll';
  label: string;
  value: string;
  icon?: string;
  enabled: boolean;
  action: () => void;
}

// Zentrale Button-Aktionen
export const buttonActions: ButtonAction[] = [
  {
    id: 'call-now',
    type: 'phone',
    label: 'Jetzt anrufen',
    value: '+49 170 123 456 78',
    icon: 'phone',
    enabled: true,
    action: () => {
      window.location.href = 'tel:+4917012345678';
    }
  },
  {
    id: 'free-quote',
    type: 'form',
    label: 'Kostenloses Angebot anfordern',
    value: 'quote-form',
    icon: 'quote',
    enabled: true,
    action: () => {
      // Scroll to contact form or open modal
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: show alert
        alert('Kontaktformular wird geöffnet...');
      }
    }
  },
  {
    id: 'start-project',
    type: 'form',
    label: 'Projekt starten',
    value: 'project-form',
    icon: 'rocket',
    enabled: true,
    action: () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Projektanfrage wird geöffnet...');
      }
    }
  },
  {
    id: 'schedule-call',
    type: 'link',
    label: 'Termin vereinbaren',
    value: 'https://calendly.com/thomas-scharli',
    icon: 'calendar',
    enabled: true,
    action: () => {
      window.open('https://calendly.com/thomas-scharli', '_blank');
    }
  },
  {
    id: 'view-work',
    type: 'scroll',
    label: 'Arbeiten ansehen',
    value: 'work-section',
    icon: 'eye',
    enabled: true,
    action: () => {
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  {
    id: 'contact-email',
    type: 'email',
    label: 'E-Mail senden',
    value: 'hello@webseite-scharli.de',
    icon: 'mail',
    enabled: true,
    action: () => {
      window.location.href = 'mailto:hello@webseite-scharli.de';
    }
  }
];

// Hook für Button-Aktionen
export const useButtonActions = () => {
  const [actions, setActions] = React.useState<ButtonAction[]>(buttonActions);

  const updateAction = (id: string, updates: Partial<ButtonAction>) => {
    setActions(prev => prev.map(action => 
      action.id === id ? { ...action, ...updates } : action
    ));
  };

  const toggleAction = (id: string) => {
    setActions(prev => prev.map(action => 
      action.id === id ? { ...action, enabled: !action.enabled } : action
    ));
  };

  const executeAction = (id: string) => {
    const action = actions.find(a => a.id === id);
    if (action && action.enabled) {
      action.action();
    }
  };

  return {
    actions,
    updateAction,
    toggleAction,
    executeAction
  };
};

// Button-Komponente mit Aktion
interface ActionButtonProps {
  action: ButtonAction;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  action, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseClasses = "btn-animated-big px-6 py-3 rounded-full font-semibold transition-colors";
  
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
  };

  const handleClick = () => {
    if (action.enabled) {
      action.action();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!action.enabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        !action.enabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      title={action.enabled ? action.label : 'Button deaktiviert'}
    >
      {action.icon && (
        <span className="mr-2">
          {action.icon === 'phone' && '📞'}
          {action.icon === 'quote' && '💬'}
          {action.icon === 'rocket' && '🚀'}
          {action.icon === 'calendar' && '📅'}
          {action.icon === 'eye' && '👁️'}
          {action.icon === 'mail' && '✉️'}
        </span>
      )}
      {action.label}
    </button>
  );
};

export default ActionButton;
