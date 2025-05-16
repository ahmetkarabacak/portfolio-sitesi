'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// Leaflet bileşenlerini client tarafında dinamik olarak yükleme
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface ContactMapProps {
  center: [number, number];
  zoom?: number;
}

const ContactMap = ({ center, zoom = 13 }: ContactMapProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mapIcon, setMapIcon] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Client tarafında ikon oluşturma
    const loadIcon = async () => {
      try {
        const L = await import('leaflet');
        // Leaflet varsayılan ikon sorununu çözme
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
        
        setMapIcon(new L.Icon.Default());
      } catch (error) {
        console.error('Leaflet icon loading error:', error);
      }
    };
    
    loadIcon();
  }, []);

  if (!isMounted) {
    return (
      <div className="relative h-64 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
        <div className="flex h-full items-center justify-center text-gray-500 dark:text-gray-400">
          <span>Harita Yükleniyor...</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="h-64 w-full overflow-hidden rounded-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {typeof window !== 'undefined' && (
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {mapIcon && (
            <Marker position={center} icon={mapIcon}>
              <Popup>
                Ahmet Karabacak <br /> İstanbul, Türkiye
              </Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </motion.div>
  );
};

export default ContactMap; 