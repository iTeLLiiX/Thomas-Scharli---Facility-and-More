// Image imports with fallbacks
// This file handles image imports and provides fallback URLs when local images are not available

// Import images directly for Vite
import heroTruck from '../assets/images/hero-truck.jpg';
import aboutThomas from '../assets/images/about-thomas.jpg';
import portfolio1 from '../assets/images/portfolio-1.jpg';
import portfolio2 from '../assets/images/portfolio-2.jpg';
import portfolio3 from '../assets/images/portfolio-3.jpg';
import portfolio4 from '../assets/images/portfolio-4.jpg';
import warehouse from '../assets/images/warehouse.jpg';
import logo from '../assets/images/logo.png';

export const images = {
  // Hero section
  hero: {
    truck: heroTruck,
    fallback: heroTruck
  },
  
  // About section
  about: {
    thomas: aboutThomas,
    fallback: aboutThomas
  },
  
  // Portfolio section
  portfolio: {
    project1: portfolio1,
    project2: portfolio2,
    project3: portfolio3,
    project4: portfolio4,
    fallbacks: [portfolio1, portfolio2, portfolio3, portfolio4]
  },
  
  // Services section
  services: {
    warehouse: warehouse,
    fallback: warehouse
  },
  
  // Logo
  logo: {
    main: logo,
    fallback: logo
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
