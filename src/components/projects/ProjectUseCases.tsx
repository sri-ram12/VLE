import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PROJECT_USE_CASES } from '../../data/useCases';

interface ProjectUseCasesProps {
  onSelectProject: (categoryName: string) => void;
  onOpenEnquiry: (projectName: string) => void;
}

export const ProjectUseCases: React.FC<ProjectUseCasesProps> = ({
  onSelectProject,
  onOpenEnquiry
}) => {
  const [activeTab, setActiveTab] = useState(PROJECT_USE_CASES[0].id);

  const currentProject = PROJECT_USE_CASES.find(p => p.id === activeTab) || PROJECT_USE_CASES[0];

  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Ambient background lights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider inline-block mb-3 shadow-2xs">
            Real-World Project Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Engineered for Every Construction Stage
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            From laying foundation conduits and pipe networks to final decorative switchboards and luxury bathroom fittings.
          </p>
        </div>

        {/* Project Type Nav Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PROJECT_USE_CASES.map((project) => {
            const isActive = project.id === activeTab;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-lime-600 text-white shadow-lg shadow-lime-600/25 border border-lime-500'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {project.title}
              </button>
            );
          })}
        </div>

        {/* Active Project Highlight Showcase */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Showcase */}
            <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-lime-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                {currentProject.tag}
              </div>
            </div>

            {/* Description & Recommended Products */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-lime-700 uppercase tracking-wider block mb-1">
                  Use Case Application
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                  {currentProject.title}
                </h3>
                <h4 className="text-sm font-semibold text-slate-700 mt-1">
                  {currentProject.subtitle}
                </h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                  {currentProject.description}
                </p>
              </div>

              {/* Recommended Catalog Items */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-lime-600" />
                  <span>Key Recommended Products in Stock:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProject.recommendedProducts.map((prod, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs"
                    >
                      <Check className="w-3.5 h-3.5 text-lime-600 shrink-0" />
                      <span>{prod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenEnquiry(currentProject.title)}
                  className="px-6 py-3 rounded-xl bg-lime-600 hover:bg-lime-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-lime-600/20 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Inquire for this Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectProject('all')}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                >
                  Browse Related Catalog
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
