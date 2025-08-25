import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  link: string;
}

const PortfolioGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Fusion®",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "Panzer Collect",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "BikeUP™",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "Basic Apparel",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
      link: "#"
    },
    {
      id: 5,
      title: "Shaping Shoe",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop",
      link: "#"
    },
    {
      id: 6,
      title: "ARkk Project",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      link: "#"
    },
    {
      id: 7,
      title: "Bahne TML",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=600&fit=crop",
      link: "#"
    },
    {
      id: 8,
      title: "Bahne TML",
      image: "https://images.unsplash.com/photo-1556761175-4acf4b6c4e8c?w=400&h=600&fit=crop",
      link: "#"
    },
    {
      id: 9,
      title: "DEA Clothing",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
      link: "#"
    }
  ];

  const handleItemClick = (id: number) => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-blue-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-blue-400 font-medium">Our work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Explore some of<br />
            <span className="text-blue-400">our projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each project in our collection reflects the passion and creativity we bring to every digital endeavor. 
            From sleek web designs to dynamic branding solutions, our portfolio highlights the diversity of our work.
          </p>
        </div>

        {/* Portfolio Gallery */}
        <div className="wrapper">
          <div className="imgs-parent">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`img ${activeItem === item.id ? 'open' : ''}`}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => handleItemClick(item.id)}
              >
                <div className="content">
                  <h3>{item.title}</h3>
                  <a href={item.link} className="btn">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg transform hover:scale-105">
            Work with us
          </button>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40vh;
          margin: 2rem 0;
        }

        .imgs-parent {
          display: flex;
          gap: 0.4rem;
          perspective: 60rem;
        }

        .img {
          width: 8.0rem;
          height: 19rem;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          transition: transform 1.25s cubic-bezier(0.1, 0.7, 0, 1), 
                      filter 3s cubic-bezier(0.1, 0.7, 0, 1), 
                      width 0.3s cubic-bezier(0.1, 0.7, 0, 1);
          position: relative;
          filter: grayscale(0) brightness(0.7);
          will-change: transform, filter;
          border-radius: 8px;
        }

        .content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px;
          color: white;
          text-align: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .content h3 {
          font-size: 15px;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .btn {
          display: inline-block;
          font-family: "Inter", sans-serif;
          padding: 4px 10px;
          background-color: transparent;
          background-image: linear-gradient(140deg, #0071E3 42%, #25409E 100%);
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          border-radius: 15px;
          text-align: center;
          transition: background-color 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
          opacity: 0;
          visibility: hidden;
          margin-bottom: 8px;
        }

        .img:hover .btn,
        .img:hover .content {
          opacity: 1;
          visibility: visible;
        }

        .btn:hover {
          background-color: #005bb5;
        }

        .img:hover {
          transform: translateZ(17.375rem);
          filter: grayscale(0) brightness(0.9);
        }

        .img:hover .content {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .img::before,
        .img::after {
          content: "";
          position: absolute;
          width: 1.25rem;
          height: 100%;
          right: -1.25rem;
        }

        .img::after {
          left: -1.25rem;
        }

        .img:hover + * {
          transform: translateZ(14.77rem) rotateY(35deg);
          filter: grayscale(0.2) brightness(0.9);
          z-index: -1;
        }

        .img:hover + * + * {
          transform: translateZ(9.73rem) rotateY(40deg);
          filter: grayscale(0.4) brightness(0.8);
          z-index: -2;
        }

        .img:hover + * + * + * {
          transform: translateZ(4.17rem) rotateY(35deg);
          filter: grayscale(0.6) brightness(0.7);
          z-index: -3;
        }

        .img:hover + * + * + * + * {
          transform: translateZ(1.1rem) rotateY(25deg);
          filter: grayscale(0.8) brightness(0.6);
          z-index: -4;
        }

        .img:has(+ :hover) {
          transform: translateZ(14.77rem) rotateY(-35deg);
          filter: grayscale(0.2) brightness(0.9);
        }

        .img:has(+ * + :hover) {
          transform: translateZ(9.73rem) rotateY(-40deg);
          filter: grayscale(0.4) brightness(0.8);
        }

        .img:has(+ * + * + :hover) {
          transform: translateZ(4.17rem) rotateY(-35deg);
          filter: grayscale(0.6) brightness(0.7);
        }

        .img:has(+ * + * + * + :hover) {
          transform: translateZ(1.1rem) rotateY(-25deg);
          filter: grayscale(0.8) brightness(0.6);
        }

        .open {
          width: 25vw;
          transform: translateZ(17.375rem);
          filter: inherit;
          z-index: 1;
          margin: 0 0.45vw;
        }

        @media (max-width: 820px) {
          .img {
            width: 8.0rem;
            height: 19rem;
          }

          .img:hover {
            transform: translateZ(17.375rem);
            filter: inherit;
          }

          .open {
            width: 20vw;
            transform: translateZ(7.375rem);
            filter: inherit;
            z-index: 1;
            margin: 0 0.45vw;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioGallery;
