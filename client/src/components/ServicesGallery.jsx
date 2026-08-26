import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ImageIcon, X } from 'lucide-react';

const CATEGORIES = [
  'Stone Engraving & Photos',
  'Digital Printing',
  'Laser Cutting',
  'Stickering & Vinyl'
];

const ServicesGallery = () => {
  const [services, setServices] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Error fetching services:', error);
          // Load fallback data if table doesn't exist yet
          loadFallbackData();
          return;
        }

        // Group by category
        const grouped = data.reduce((acc, service) => {
          if (!acc[service.category]) acc[service.category] = [];
          acc[service.category].push(service);
          return acc;
        }, {});
        
        setServices(grouped);
      } catch (err) {
        console.error('Exception fetching services:', err);
        loadFallbackData();
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const loadFallbackData = () => {
    // This provides a visual if the DB isn't seeded yet
    setServices({
      'Stone Engraving & Photos': [
        { id: 1, title: 'Stone Engraving', price_description: '₹400/sq ft', image_url: '/products/stone-engraving.png' },
        { id: 2, title: 'Single Photo up to shoulder', price_description: '₹1,500', image_url: '/products/single-photo.png' },
        { id: 3, title: 'Full Photo', price_description: '₹3,000', image_url: '/products/full-photo.png' }
      ],
      'Digital Printing': [
        { id: 4, title: 'PVC (13x19)', price_description: '₹35 with cutting', image_url: '/products/pvc.png' },
        { id: 5, title: 'Non-PVC (13x19)', price_description: '₹25 with cutting', image_url: '/products/non-pvc.png' },
        { id: 15, title: 'Board (13x19)', price_description: '₹20 with cutting', image_url: '/products/board.png' },
        { id: 16, title: 'Art Paper (13x19)', price_description: '₹15 with cutting', image_url: '/products/art-paper.png' },
        { id: 17, title: 'Colour Xerox (A4 Size)', price_description: '₹6', image_url: '/products/colour-xerox-a4.png' },
        { id: 18, title: 'Colour Xerox (A3 Size)', price_description: '₹15', image_url: '/products/colour-xerox-a3.png' },
        { id: 19, title: 'Black and White Xerox (A4 Size)', price_description: '90 Paisa', image_url: '/products/black-and-white-xerox-a4.png' },
        { id: 20, title: 'Blue Print', price_description: '₹1', image_url: '/products/blue-print.png' },
      ],
      'Laser Cutting': [
        { id: 6, title: 'Wooden MDF', price_description: 'Price based on sqft and design', image_url: '/products/wooden-mdf.png' },
        { id: 7, title: 'Acrylic', price_description: 'Price based on sqft and design', image_url: '/products/acrylic.png' },
        { id: 12, title: 'Foam', price_description: 'Price based on sqft and design', image_url: '/products/foam.png' },
        { id: 13, title: 'PVC Sheet / Drum Sheet', price_description: 'Price based on sqft and design', image_url: '/products/pvc-sheet.png' }
      ],
      'Stickering & Vinyl': [
        { id: 8, title: 'Radium Sticker', price_description: '₹80/sq ft', image_url: '/products/radium-sticker.png' },
        { id: 9, title: 'Signboards', price_description: '₹180/sq ft', image_url: '/products/signboards.jpeg' },
        { id: 10, title: 'Vinyl Printing', price_description: '₹65/sq ft (with design and pasting)', image_url: '/products/vinyl-printing.png' },
        { id: 11, title: 'Black Film / Sun-Controlled Film', price_description: '₹75/sq ft', image_url: '/products/black-film.png' },
      ]
    });
  };

  if (loading) {
    return (
      <div className="py-32 text-center">
        <div className="animate-pulse flex flex-col items-center justify-center space-y-4">
          <div className="text-2xl font-black text-white tracking-widest uppercase">Loading Services...</div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-transparent" id="services">
      <div className="max-w-7xl mx-auto space-y-24">
        {CATEGORIES.map(category => (
          <div key={category} className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">{category}</h2>
              <div className="mt-4 h-1 w-24 bg-brand-500 mx-auto rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
            </div>
            
            {services[category]?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services[category].map(service => (
                  <div key={service.id} className="group bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-[0_10px_40px_rgba(20,184,166,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-white/10 flex flex-col">
                    <div className="relative aspect-video bg-black/40 flex items-center justify-center border-b border-white/10 overflow-hidden">
                      {service.image_url ? (
                        <img 
                          src={service.image_url} 
                          alt={service.title} 
                          onClick={() => setSelectedImage(service.image_url)}
                          className="w-full h-full object-contain cursor-pointer group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <span className="text-sm font-medium text-white/40">Image will be added soon</span>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <h3 className="text-xl font-extrabold text-white mb-2">{service.title}</h3>
                      <div className="mt-4 inline-flex items-center text-brand-300 font-semibold bg-brand-500/20 border border-brand-500/30 px-3 py-1.5 rounded-lg w-fit">
                        {service.price_description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-400 italic py-12 bg-white/5 rounded-2xl border border-white/10 border-dashed backdrop-blur-sm">
                More items coming soon to this category.
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ServicesGallery;
