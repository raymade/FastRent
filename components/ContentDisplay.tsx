
import React from 'react';
import type { SectionData } from '../data/content';

interface ContentDisplayProps {
  section: SectionData;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ section }) => {
  return (
    <article id={section.id} className="animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          <span className="text-brand-blue">{section.number}.</span> {section.title}
        </h2>
        {section.description && <p className="mt-2 text-lg text-brand-gray">{section.description}</p>}
      </header>
      <div className="prose prose-lg max-w-none prose-a:text-brand-blue prose-strong:text-brand-dark prose-headings:text-brand-dark">
        {section.content}
      </div>
    </article>
  );
};
