'use client';

import { useState, useEffect } from 'react';

interface Contact {
  name: string;
  email: string;
  contactNumber: string;
  timestamp: string;
}

export default function Dashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 py-12 fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">📊 Contact Dashboard</h1>
        <p className="text-xl text-white text-center mb-8 drop-shadow-md">Total Submissions: <span className="font-bold text-yellow-300 text-2xl">{contacts.length}</span></p>
        {loading ? (
          <div className="text-center text-white text-xl font-semibold drop-shadow-lg animate-pulse">⏳ Loading contacts...</div>
        ) : contacts.length === 0 ? (
          <div className="text-center text-white text-xl drop-shadow-lg">📭 No contacts submitted yet.</div>
        ) : (
          <div className="glass-effect rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
            <div className="px-8 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 border-b-4 border-white/30">
              <h2 className="text-2xl font-bold text-white">✨ Submitted Contacts ({contacts.length})</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-400 to-cyan-400">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">👤 Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">📧 Email</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">📱 Contact Number</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">⏰ Submitted At</th>
                  </tr>
                </thead>
                <tbody className="bg-white/80 backdrop-blur-sm divide-y-2 divide-blue-200">
                  {contacts.map((contact, index) => (
                    <tr key={index} className="hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-y-110 origin-center">
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{contact.name}</td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-blue-600 font-medium">{contact.email}</td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-cyan-600 font-medium">{contact.contactNumber}</td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700">
                        {new Date(contact.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
