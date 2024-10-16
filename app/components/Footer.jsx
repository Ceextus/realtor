import React from 'react';

const Footer = () => {
  return (
    <main>
        <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">Realor.Co</h3>
          <p className="text-gray-400">
            Bringing you the best homes and properties in your area. Let’s help you find your dream home.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">pages</a></li>
            <li><a href="#" className="hover:text-red-500">Properties</a></li>
            <li><a href="#" className="hover:text-red-500">blog </a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@realtor.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500">Facebook</a>
            <a href="#" className="hover:text-red-500">Twitter</a>
            <a href="#" className="hover:text-red-500">Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Real Estate Co. All rights reserved.</p>
      </div>
    </footer>
    </main>
  );
}

export default Footer;
