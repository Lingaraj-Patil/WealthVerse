import React from 'react';
import { Menu, X, BookOpen, Trophy, DollarSign } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">WealthVerse</span>
          </div>
          
          <div className="items-center hidden space-x-8 md:flex">
            <NavLink icon={<BookOpen className="w-4 h-4" />} text="Learn" />
            <NavLink icon={<Trophy className="w-4 h-4" />} text="Challenges" />
            <button className="px-6 py-2 text-white transition-colors rounded-full bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 p-4 bg-white border-b border-gray-100 md:hidden top-full">
            <div className="flex flex-col space-y-4">
              <NavLink icon={<BookOpen className="w-4 h-4" />} text="Learn" />
              <NavLink icon={<Trophy className="w-4 h-4" />} text="Challenges" />
              <button className="px-6 py-2 text-white transition-colors rounded-full bg-emerald-600 hover:bg-emerald-700">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-emerald-600">
      {icon}
      <span>{text}</span>
    </a>
  );
}