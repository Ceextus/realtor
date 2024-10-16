"use client"
import Image from 'next/image';
import React from 'react';

const properties = [
  {
    id: 1,
    name: 'Modern Red Villa',
    price: '$500,000',
    description: 'A beautiful red villa with modern design and spacious rooms.',
    image: '/bg4.jpg',
  },
  {
    id: 2,
    name: 'Cozy White House',
    price: '$300,000',
    description: 'A cozy house in a quiet neighborhood, perfect for families.',
    image: '/bg3.jpg',
  },
  {
    id: 3,
    name: 'Luxury Apartment',
    price: '$750,000',
    description: 'A luxury apartment in the heart of the city with stunning views.',
    image: '/bg4.jpg',
  },
  {
    id: 4,
    name: 'Suburban Dream Home',
    price: '$450,000',
    description: 'A spacious suburban home with a large backyard and modern amenities.',
    image: '/bg3.jpg',
  },
  {
    id: 4,
    name: 'Suburban Dream Home',
    price: '$450,000',
    description: 'A spacious suburban home with a large backyard and modern amenities.',
    image: '/bg3.jpg',
  },
  {
    id: 4,
    name: 'Suburban Dream Home',
    price: '$450,000',
    description: 'A spacious suburban home with a large backyard and modern amenities.',
    image: '/bg4.jpg',
  },
  // Add more properties as needed
];

const Properties = () => {
  const handleEmail = (property) => {
    const subject = `Inquiry about ${property.name}`;
    const body = `Hello, I am interested in the property "${property.name}" listed at ${property.price}. Could you please provide more details?`;

    // Use mailto link to open email client with predefined subject and body
    const mailtoLink = `mailto:sixtusjoseph3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white shadow-lg rounded-lg p-4">
              <Image
                src={property.image}
                alt={property.name}
                height={200}
                width={300}
                className="rounded-lg"
                layout="responsive"
              />
              <h3 className="text-xl font-bold mt-4">{property.name}</h3>
              <p className="text-red-500 text-lg font-semibold">{property.price}</p>
              <p className="text-gray-700 mb-4">{property.description}</p>
              <button
                onClick={() => handleEmail(property)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
