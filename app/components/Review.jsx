import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactAndReview = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [reviewFormData, setReviewFormData] = useState({
    name: '',
    rating: 0,
    message: '',
    image: null,
  });

  const handleContactChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      const file = e.target.files[0];
      if (file && file.size <= 5 * 1024 * 1024) {
        setReviewFormData({ ...reviewFormData, image: file });
      } else {
        toast.error("Image must be less than 5MB");
      }
    } else {
      setReviewFormData({ ...reviewFormData, [name]: value });
    }
  };

  const handleReviewRating = (rating) => {
    setReviewFormData({ ...reviewFormData, rating });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactFormData);
    setContactFormData({ name: '', email: '', message: '' });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending review:', reviewFormData);
      toast.success("Thanks for your review!");
      setReviewFormData({
        name: '',
        rating: 0,
        message: '',
        image: null,
      });
    } catch (error) {
      toast.error("Failed to submit review");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center bg-gray-100 py-10">
      {/* Contact Us Section */}
      <div className="w-full md:w-1/2 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mb-6 md:mb-0">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500">Contact Us</h2>
        <p className="text-center mb-4 text-gray-600">
          We're here to help! Please fill out the form below to get in touch with us.
        </p>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactFormData.name}
              onChange={handleContactChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactFormData.email}
              onChange={handleContactChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={contactFormData.message}
              onChange={handleContactChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Review Form Section */}
      <div className="w-full md:w-1/2 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-red-500">Write a Review</h2>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={reviewFormData.name}
              onChange={handleReviewChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Rating</label>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleReviewRating(index + 1)}
                  className={`text-lg ${reviewFormData.rating > index ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Message</label>
            <textarea
              name="message"
              value={reviewFormData.message}
              onChange={handleReviewChange}
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Submit Review
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactAndReview;
