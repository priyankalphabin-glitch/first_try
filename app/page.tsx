
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 py-20 fade-in">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
          Welcome to Our Website
        </h1>
        <p className="text-2xl text-white mb-12 max-w-2xl mx-auto drop-shadow-md font-light">
          This is a stylish full-stack application built with Next.js. Connect with us today!
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Link href="/contact" className="btn-gradient text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            💬 Contact Us
          </Link>
          <Link href="/dashboard" className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            📊 View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
