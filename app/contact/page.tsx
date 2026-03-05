'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, contactNumber }),
    });
    if (response.ok) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setContactNumber('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 py-12 fade-in">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="glass-effect p-10 rounded-2xl w-full max-w-md backdrop-blur-xl border-2 border-white/30 shadow-2xl">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">✉️ Contact Us</h1>
          {submitted && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-300 to-emerald-400 text-white rounded-xl border-2 border-green-200 shadow-lg">
              ✅ Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 font-bold text-lg" htmlFor="name">👤 Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-pink-300"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 font-bold text-lg" htmlFor="email">📧 Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-pink-300"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="mb-8">
              <label className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 font-bold text-lg" htmlFor="contactNumber">📱 Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-filter-sm transition-all duration-300 hover:border-pink-300"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn-gradient text-white font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg text-lg"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}