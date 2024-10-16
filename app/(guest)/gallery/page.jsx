"use client"
import Image from 'next/image';
import { useState } from 'react';

const photos = [
  '/bg1.jpg', 
  '/bg2.jpg', 
  '/bg4.jpg', 
  '/bg3.jpg', 
  '/bg1.jpg', 
  '/bg4.jpg',
  '/bg6.jpg', 

];

export default function PhotoGallery() {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const toggleFullScreen = (imageSrc) => {
    setFullScreenImage(fullScreenImage ? null : imageSrc);
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">Photo Gallery</h2>

        {/* Fullscreen Image */}
        {fullScreenImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => toggleFullScreen(null)}
          >
            <Image
              src={fullScreenImage}
              alt="Full Screen"
              width={1000}
              height={600}
              className="cursor-pointer"
            />
          </div>
        )}

        {/* Photo Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${fullScreenImage ? 'hidden' : ''}`}>
          {photos.map((photo, index) => (
            <div key={index} className="cursor-pointer" onClick={() => toggleFullScreen(photo)}>
              <Image
                src={photo}
                alt={`Photo ${index + 1}`}
                width={400}
                height={300}
                className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
