// Image imports with fallbacks
// This file handles image imports and provides fallback URLs when local images are not available

export const images = {
  // Hero section
  hero: {
    truck: '/src/assets/images/hero-truck.jpg',
    fallback: '/src/assets/images/hero-truck.jpg'
  },
  
  // About section
  about: {
    thomas: '/src/assets/images/about-thomas.jpg',
    fallback: '/src/assets/images/about-thomas.jpg'
  },
  
  // Portfolio section
  portfolio: {
    project1: '/src/assets/images/portfolio-1.jpg',
    project2: '/src/assets/images/portfolio-2.jpg',
    project3: '/src/assets/images/portfolio-3.jpg',
    project4: '/src/assets/images/portfolio-4.jpg',
    fallbacks: [
      '/src/assets/images/portfolio-1.jpg',
      '/src/assets/images/portfolio-2.jpg',
      '/src/assets/images/portfolio-3.jpg',
      '/src/assets/images/portfolio-4.jpg'
    ]
  },
  
  // Services section
  services: {
    warehouse: '/src/assets/images/warehouse.jpg',
    fallback: '/src/assets/images/warehouse.jpg'
  },
  
  // Logo
  logo: {
    main: '/src/assets/images/logo.png',
    fallback: '/src/assets/images/logo.png'
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
