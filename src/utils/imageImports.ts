// Image imports with fallbacks
// This file handles image imports and provides fallback URLs when local images are not available

export const images = {
  // Hero section
  hero: {
    truck: '/src/assets/images/hero-truck.jpg',
    fallback: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // About section
  about: {
    thomas: '/src/assets/images/about-thomas.jpg',
    fallback: 'https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Portfolio section
  portfolio: {
    project1: '/src/assets/images/portfolio-1.jpg',
    project2: '/src/assets/images/portfolio-2.jpg',
    project3: '/src/assets/images/portfolio-3.jpg',
    project4: '/src/assets/images/portfolio-4.jpg',
    fallbacks: [
      'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7464722/pexels-photo-7464722.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4481537/pexels-photo-4481537.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  
  // Services section
  services: {
    warehouse: '/src/assets/images/warehouse.jpg',
    fallback: 'https://images.pexels.com/photos/4481537/pexels-photo-4481537.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Logo
  logo: {
    main: '/src/assets/images/logo.png',
    fallback: null // No fallback for logo, will use text instead
  }
};

// Helper function to get image with fallback
export const getImageWithFallback = (localPath: string, fallbackUrl: string): string => {
  try {
    // Try to import the local image
    const imageModule = new URL(localPath, import.meta.url);
    return imageModule.href;
  } catch (error) {
    // Return fallback if local image doesn't exist
    return fallbackUrl;
  }
};

// Helper function to check if image exists
export const imageExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
