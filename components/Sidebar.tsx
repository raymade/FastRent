
import React, { useState } from 'react';
import type { SectionData } from '../data/content';

interface SidebarProps {
  sections: SectionData[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const MenuIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  const navContent = (
    <>
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">DirectRent</h1>
        <p className="text-sm text-gray-400">Product Plan</p>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionClick(section.id);
            }}
            className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeSection === section.id
                ? 'bg-brand-blue text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <span className="w-6 text-center mr-3 font-semibold">{section.number}.</span>
            {section.title}
          </a>
        ))}
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="sm:hidden fixed top-4 left-4 z-30 p-2 bg-brand-dark text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Sidebar for Mobile */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-brand-dark text-white flex flex-col z-20 transform transition-transform duration-300 ease-in-out sm:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {navContent}
      </aside>
      
      {/* Sidebar for Desktop */}
      <aside className="hidden sm:flex sm:flex-col sm:w-64 sm:fixed sm:h-full bg-brand-dark text-white">
        {navContent}
      </aside>
    </>
  );
};
