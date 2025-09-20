
import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { SECTIONS, SectionData } from './data/content';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);

  const currentSection: SectionData | undefined = useMemo(() => 
    SECTIONS.find(section => section.id === activeSection),
    [activeSection]
  );

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar 
        sections={SECTIONS} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main className="flex-1 p-4 sm:p-6 md:p-10 ml-0 sm:ml-64">
        <div className="w-full max-w-4xl mx-auto">
          {currentSection ? (
            <ContentDisplay section={currentSection} />
          ) : (
            <div className="text-center text-gray-500 mt-20">
              <h2 className="text-2xl font-bold">Select a section</h2>
              <p>Choose a topic from the sidebar to view the details.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
