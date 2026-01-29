import React, { useState } from 'react';

// Import diagrams
import diagramAutoba from './assets/diagrams/autoba.png';
import diagramMdagents from './assets/diagrams/mdagents.png';
import diagramBiochatter from './assets/diagrams/biochatter.png';
import diagramEscargot from './assets/diagrams/escargot.png';
import diagramTxagent from './assets/diagrams/txagent.png';
import diagramBiodiscoveryagent from './assets/diagrams/biodiscoveryagent.png';
import diagramSpatialagent from './assets/diagrams/spatialagent.png';
import diagramCellagent from './assets/diagrams/cellagent.png';
import diagramBiomni from './assets/diagrams/biomni.png';
import diagramGeneagent from './assets/diagrams/geneagent.png';

// Import videos/gifs/images - change extension based on your file
// Supported types: 'gif', 'mp4', 'png'
import videoAutoba from './assets/videos/autoba.png';
import videoMdagents from './assets/videos/mdagents.gif';
import videoBiochatter from './assets/videos/biochatter.gif';
import videoEscargot from './assets/videos/escargot.png';
import videoTxagent from './assets/videos/txagent.gif';
import videoBiodiscoveryagent from './assets/videos/biodiscoveryagent.png';
import videoSpatialagent from './assets/videos/spatialagent.png';
import videoCellagent from './assets/videos/cellagent.mp4';
import videoBiomni from './assets/videos/biomni.mp4';
import videoGeneagent from './assets/videos/geneagent.png';

const diagrams = {
  autoba: diagramAutoba,
  mdagents: diagramMdagents,
  biochatter: diagramBiochatter,
  escargot: diagramEscargot,
  txagent: diagramTxagent,
  biodiscoveryagent: diagramBiodiscoveryagent,
  spatialagent: diagramSpatialagent,
  cellagent: diagramCellagent,
  biomni: diagramBiomni,
  geneagent: diagramGeneagent,
};

// type: 'gif', 'mp4', or 'png'
const videos = {
  autoba: { src: videoAutoba, type: 'png' },
  mdagents: { src: videoMdagents, type: 'gif' },
  biochatter: { src: videoBiochatter, type: 'gif' },
  escargot: { src: videoEscargot, type: 'png' },
  txagent: { src: videoTxagent, type: 'gif' },
  biodiscoveryagent: { src: videoBiodiscoveryagent, type: 'png' },
  spatialagent: { src: videoSpatialagent, type: 'png' },
  cellagent: { src: videoCellagent, type: 'mp4' },
  biomni: { src: videoBiomni, type: 'mp4' },
  geneagent: { src: videoGeneagent, type: 'png' },
};

const agents = [
  { 
    id: 1, name: 'AutoBA', slug: 'autoba', category: 'Omics Analysis', 
    institution: 'KAUST', date: '2024-10', monthIndex: 0, color: '#3B82F6',
    features: [
      'Fully automated multi-omic analyses from YAML input',
      'Supports genomics, transcriptomics, proteomics, metabolomics',
      'Planning → Code Generation → Execution pipeline',
      'GUI available for non-coders',
      'Local LLM support via Ollama'
    ],
    publication: 'Advanced Science (October 2024)',
    publicationLink: 'https://doi.org/10.1002/advs.202407094',
    demo: 'Local GUI application',
    github: 'github.com/JoshuaChou2018/AutoBA',
    pip: 'git clone https://github.com/JoshuaChou2018/AutoBA.git'
  },
  { 
    id: 2, name: 'MDAgents', slug: 'mdagents', category: 'Clinical', 
    institution: 'MIT Media Lab', date: '2024-11', monthIndex: 1, color: '#8B5CF6',
    features: [
      'Adaptive multi-agent collaboration for clinical decisions',
      'Simulates multidisciplinary medical team consultations',
      'Complexity assessment routes queries appropriately',
      'Best performance in 7/10 medical benchmarks',
      '11.8% improvement with moderator + external knowledge'
    ],
    publication: 'NeurIPS 2024 (Oral)',
    publicationLink: 'https://arxiv.org/pdf/2404.15155',
    demo: 'mdagents2024.github.io/demo.html',
    github: 'github.com/mitmedialab/MDAgents',
    pip: 'git clone https://github.com/mitmedialab/MDAgents.git'
  },
  { 
    id: 3, name: 'BioChatter', slug: 'biochatter', category: 'General-purpose', 
    institution: 'EMBL-EBI / Heidelberg', date: '2025-01', monthIndex: 3, color: '#10B981',
    features: [
      'Modular conversational AI framework for biomedical research',
      'Privacy-preserving with local LLM support',
      'Native integration with BioCypher knowledge graphs',
      'RAG, fact-checking, and model chaining capabilities',
      'Supports multiple LLM backends (OpenAI, local models)'
    ],
    publication: 'Nature Biotechnology (January 2025)',
    publicationLink: 'https://doi.org/10.1038/s41587-024-02534-3',
    demo: 'light.biochatter.org',
    github: 'github.com/biocypher/biochatter',
    pip: 'pip install biochatter'
  },
  { 
    id: 4, name: 'ESCARGOT', slug: 'escargot', category: 'Knowledge Integration', 
    institution: 'Cedars-Sinai', date: '2025-02', monthIndex: 4, color: '#F59E0B',
    features: [
      'Dynamic Graph of Thoughts reasoning',
      'Integration with biomedical knowledge graphs',
      'Cypher queries for structured knowledge retrieval',
      'Self-debugging capabilities',
      'Easy installation via pip'
    ],
    publication: 'Bioinformatics (February 2025)',
    publicationLink: 'https://academic.oup.com/bioinformatics/article/41/2/btaf031/7972741',
    demo: 'NA',
    github: 'github.com/EpistasisLab/escargot',
    pip: 'pip install escargot'
  },
  { 
    id: 5, name: 'TxAgent', slug: 'txagent', category: 'Therapeutics', 
    institution: 'Harvard / Zitnik Lab', date: '2025-03', monthIndex: 5, color: '#EF4444',
    features: [
      '211 biomedical tools from ToolUniverse (all FDA drugs since 1939)',
      'Multi-step reasoning for drug interactions & contraindications',
      '92.1% accuracy in drug reasoning (25.8% above GPT-4o)',
      'Personalized treatment recommendations',
      'Handles complex therapeutic queries with verification'
    ],
    publication: 'arXiv (March 2025)',
    publicationLink: 'https://arxiv.org/abs/2503.10970',
    demo: 'zitniklab.hms.harvard.edu/TxAgent/',
    github: 'github.com/mims-harvard/TxAgent',
    pip: 'pip install txagent'
  },
  { 
    id: 6, name: 'BioDiscoveryAgent', slug: 'biodiscoveryagent', category: 'Gene Analysis', 
    institution: 'Stanford', date: '2025-03', monthIndex: 5, color: '#EC4899',
    features: [
      'Closed-loop experimental design for CRISPR studies',
      '21% improvement in predicting genetic perturbations',
      '170% improvement for 2-gene combinations vs random',
      'Integrates literature search, code execution, AI critique',
      'First agent for autonomous hypothesis-driven design'
    ],
    publication: 'ICLR 2025',
    publicationLink: 'https://arxiv.org/abs/2405.17631',
    demo: 'NA',
    github: 'github.com/snap-stanford/BioDiscoveryAgent',
    pip: 'git clone https://github.com/snap-stanford/BioDiscoveryAgent.git'
  },
  { 
    id: 7, name: 'SpatialAgent', slug: 'spatialagent', category: 'Omics Analysis', 
    institution: 'Genentech / Stanford', date: '2025-04', monthIndex: 6, color: '#3B82F6',
    features: [
      'Full spatial biology research pipeline',
      'Experimental design → Data analysis → Hypothesis generation',
      'Validated on 2M+ cells (human brain, heart, mouse colon)',
      'Dynamic tool execution with adaptive reasoning',
      'Autonomous OR co-pilot modes'
    ],
    publication: 'bioRxiv (April 2025)',
    publicationLink: 'https://www.biorxiv.org/content/10.1101/2025.04.03.646459v1.full.pdf',
    demo: 'NA (Soon)',
    github: 'github.com/Genentech/SpatialAgent',
    pip: 'git clone https://github.com/Genentech/SpatialAgent.git'
  },
  { 
    id: 8, name: 'CellAgent', slug: 'cellagent', category: 'Omics Analysis', 
    institution: 'Northwestern Polytechnical', date: '2025-05', monthIndex: 7, color: '#3B82F6',
    features: [
      'Natural language-driven single-cell RNA-seq analysis',
      'Hierarchical multi-agent: Planner → Executor → Evaluator',
      'sc-Omni toolkit with 60+ curated analysis tools',
      '~60% efficiency improvement over human experts',
      'Self-iterative optimization mechanism'
    ],
    publication: 'arXiv (2024)',
    publicationLink: 'https://arxiv.org/abs/2407.09811',
    demo: 'http://cell.agent4science.cn/start/',
    github: 'NA',
    pip: 'NA'
  },
  { 
    id: 9, name: 'Biomni', slug: 'biomni', category: 'General-purpose', 
    institution: 'Stanford', date: '2025-06', monthIndex: 8, color: '#10B981',
    features: [
      'Spans 25 biomedical subfields as a "Virtual AI Biologist"',
      'Integrates 105 software tools + 150 biological tools + 59 databases',
      'Performs gene prioritization, drug repurposing, rare disease diagnosis',
      'Generates wet-lab validated experimental protocols',
      'Action discovery from 2,500 recent bioRxiv papers'
    ],
    publication: 'bioRxiv (June 2025)',
    publicationLink: 'https://www.biorxiv.org/content/10.1101/2025.05.30.656746v1.full.pdf',
    demo: 'https://app.biomni.stanford.edu/',
    github: 'github.com/snap-stanford/biomni',
    pip: 'git clone https://github.com/snap-stanford/Biomni.git'
  },
  { 
    id: 10, name: 'GeneAgent', slug: 'geneagent', category: 'Gene Analysis', 
    institution: 'NIH / NCBI', date: '2025-07', monthIndex: 9, color: '#EC4899',
    features: [
      'Gene-set functional analysis with self-verification',
      'Autonomous interaction with NCBI, UniProt, and other databases',
      'Self-verification mechanism to reduce hallucinations',
      'Validated on 1,106 gene sets with expert review',
      'Live web demo available from NCBI'
    ],
    publication: 'Nature Methods (July 2025)',
    publicationLink: 'https://www.nature.com/articles/s41592-025-02748-6',
    demo: 'ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/GeneAgent/geneagent.html',
    github: 'github.com/ncbi-nlp/GeneAgent',
    pip: 'git clone https://github.com/ncbi-nlp/GeneAgent.git'
  },
];

const months = ['Oct 24', 'Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25', 'Apr 25', 'May 25', 'Jun 25', 'Jul 25'];

const categories = [
  { name: 'General-purpose', color: '#10B981', icon: '🧬' },
  { name: 'Omics Analysis', color: '#3B82F6', icon: '📊' },
  { name: 'Therapeutics', color: '#EF4444', icon: '💊' },
  { name: 'Gene Analysis', color: '#EC4899', icon: '🔬' },
  { name: 'Clinical', color: '#8B5CF6', icon: '🏥' },
  { name: 'Knowledge Integration', color: '#F59E0B', icon: '🕸️' },
];

export default function AgentLandscape() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [diagramScale, setDiagramScale] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollStart, setScrollStart] = useState({ x: 0, y: 0 });

  const getCategoryIcon = (cat) => categories.find(c => c.name === cat)?.icon || '🔬';

  const handleCategoryClick = (catName) => {
    setSelectedCategory(selectedCategory === catName ? null : catName);
  };

  const isAgentHighlighted = (agent) => {
    if (!selectedCategory) return true;
    return agent.category === selectedCategory;
  };

  const handleMouseDown = (e) => {
    const container = e.currentTarget;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setScrollStart({ x: container.scrollLeft, y: container.scrollTop });
    container.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const container = e.currentTarget;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    container.scrollLeft = scrollStart.x - dx;
    container.scrollTop = scrollStart.y - dy;
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
  };

  const handleMouseLeave = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
  };

  const topRow = agents.filter((_, i) => i % 2 === 0);
  const bottomRow = agents.filter((_, i) => i % 2 === 1);

  return (
    <div className="bg-slate-800 min-h-screen text-white" style={{fontFamily: 'Segoe UI, Arial, sans-serif'}}>
      <div className="bg-slate-900 p-4 border-b border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold">The AI agent landscape in life sciences (2024–2025)</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                selectedCategory === cat.name 
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800 scale-105' 
                  : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: selectedCategory === cat.name ? cat.color : 'rgb(51 65 85)',
                opacity: selectedCategory && selectedCategory !== cat.name ? 0.5 : 1
              }}
            >
              <span>{cat.icon}</span>
              <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: selectedCategory === cat.name ? 'white' : cat.color}}></div>
              <span className="text-xs text-slate-100">{cat.name}</span>
            </button>
          ))}
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-600 hover:bg-slate-500 text-xs text-slate-200"
            >
              ✕ Clear filter
            </button>
          )}
        </div>

        <div className="bg-slate-700 rounded-2xl p-6 mb-6">
          <div className="relative">
            <div className="flex justify-between mb-4 px-4" style={{minHeight: '50px'}}>
              {months.map((month, i) => {
                const agent = topRow.find(a => a.monthIndex === i);
                const highlighted = agent ? isAgentHighlighted(agent) : false;
                return (
                  <div key={`top-${i}`} className="flex-1 flex flex-col items-center">
                    {agent && (
                      <>
                        <button
                          onClick={() => setSelectedAgent(agent)}
                          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                            selectedAgent.id === agent.id ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-700' : ''
                          } ${highlighted ? 'hover:scale-105' : ''}`}
                          style={{
                            backgroundColor: agent.color,
                            opacity: highlighted ? 1 : 0.25,
                            transform: highlighted && selectedCategory ? 'scale(1.1)' : 'scale(1)',
                            boxShadow: highlighted && selectedCategory ? `0 0 20px ${agent.color}` : 'none'
                          }}
                        >
                          {agent.name}
                        </button>
                        <div 
                          className="w-0.5 h-4 mt-1 transition-opacity" 
                          style={{backgroundColor: agent.color, opacity: highlighted ? 1 : 0.25}}
                        ></div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="relative h-8 flex items-center px-4">
              <div className="absolute left-4 right-4 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-pink-500 rounded-full"></div>
              {months.map((_, i) => (
                <div key={i} className="flex-1 flex justify-center">
                  <div className="w-3 h-3 bg-slate-500 rounded-full z-10 border-2 border-slate-700"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-between px-4 mt-2 mb-4">
              {months.map((month, i) => (
                <div key={i} className="flex-1 text-center text-xs text-slate-400">{month}</div>
              ))}
            </div>

            <div className="flex justify-between px-4" style={{minHeight: '50px'}}>
              {months.map((month, i) => {
                const agent = bottomRow.find(a => a.monthIndex === i);
                const highlighted = agent ? isAgentHighlighted(agent) : false;
                return (
                  <div key={`bottom-${i}`} className="flex-1 flex flex-col items-center">
                    {agent && (
                      <>
                        <div 
                          className="w-0.5 h-4 mb-1 transition-opacity" 
                          style={{backgroundColor: agent.color, opacity: highlighted ? 1 : 0.25}}
                        ></div>
                        <button
                          onClick={() => setSelectedAgent(agent)}
                          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                            selectedAgent.id === agent.id ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-700' : ''
                          } ${highlighted ? 'hover:scale-105' : ''}`}
                          style={{
                            backgroundColor: agent.color,
                            opacity: highlighted ? 1 : 0.25,
                            transform: highlighted && selectedCategory ? 'scale(1.1)' : 'scale(1)',
                            boxShadow: highlighted && selectedCategory ? `0 0 20px ${agent.color}` : 'none'
                          }}
                        >
                          {agent.name}
                        </button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-slate-700 rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-slate-600 flex items-center gap-4" style={{backgroundColor: `${selectedAgent.color}22`}}>
            <div className="text-4xl">{getCategoryIcon(selectedAgent.category)}</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold" style={{color: selectedAgent.color}}>{selectedAgent.name}</h2>
              <p className="text-slate-300 text-sm">{selectedAgent.institution}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: selectedAgent.color}}>
              {selectedAgent.category}
            </span>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="p-5 border-r border-slate-600">
              <h3 className="text-sm font-bold mb-3 text-slate-400 uppercase tracking-wide">Key Features</h3>
              <ul className="space-y-2 mb-5">
                {selectedAgent.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{backgroundColor: selectedAgent.color}}>
                      {i + 1}
                    </span>
                    <span className="text-slate-200 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-base">📄</span>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500">Publication:</span>
                    <a 
                      href={selectedAgent.publicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-lime-400 ml-2 hover:underline"
                    >
                      Download
                    </a>
                    <span className="text-sm text-slate-400 mx-1">•</span>
                    <span className="text-sm text-slate-200">{selectedAgent.publication}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">🌐</span>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500">Demo:</span>
                    {selectedAgent.demo === 'NA' || selectedAgent.demo === 'NA (Soon)' || selectedAgent.demo === 'Local GUI application' ? (
                      <span className="text-sm text-slate-200 ml-2">{selectedAgent.demo}</span>
                    ) : (
                      <a 
                        href={selectedAgent.demo.startsWith('http') ? selectedAgent.demo : `https://${selectedAgent.demo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-lime-400 ml-2 hover:underline"
                      >
                        {selectedAgent.demo}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">💻</span>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500">Code:</span>
                    {selectedAgent.github === 'NA' ? (
                      <span className="text-sm text-slate-200 ml-2">{selectedAgent.github}</span>
                    ) : (
                      <a 
                        href={`https://${selectedAgent.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-lime-400 ml-2 hover:underline"
                      >
                        {selectedAgent.github}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">📦</span>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500">Install:</span>
                    <code className="text-sm text-lime-400 ml-2 bg-slate-900 px-2 py-0.5 rounded">{selectedAgent.pip}</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-sm font-bold mb-3 text-slate-400 uppercase tracking-wide">Preview</h3>
              <div className="bg-slate-900 rounded-xl aspect-video overflow-hidden">
                {videos[selectedAgent.slug].type === 'mp4' ? (
                  <video 
                    key={selectedAgent.slug}
                    src={videos[selectedAgent.slug].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img 
                    src={videos[selectedAgent.slug].src} 
                    alt={`${selectedAgent.name} demo`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-slate-600">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide">Architecture Diagram</h3>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500">Scale:</span>
                <input
                  type="range"
                  min="25"
                  max="200"
                  value={diagramScale}
                  onChange={(e) => setDiagramScale(Number(e.target.value))}
                  className="w-24 h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-slate-400 w-10">{diagramScale}%</span>
                <button 
                  onClick={() => setDiagramScale(100)}
                  className="text-xs px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded"
                >
                  Reset
                </button>
              </div>
            </div>
            <div 
              className="bg-slate-900 rounded-xl p-4 overflow-auto select-none"
              style={{maxHeight: '500px', cursor: 'grab'}}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{
                minWidth: diagramScale > 100 ? `${diagramScale}%` : '100%',
                minHeight: diagramScale > 100 ? `${diagramScale * 3}px` : 'auto',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: diagramScale > 100 ? '20px' : '0'
              }}>
                <img 
                  src={diagrams[selectedAgent.slug]} 
                  alt={`${selectedAgent.name} architecture`}
                  style={{
                    transform: `scale(${diagramScale / 100})`, 
                    transformOrigin: 'top left', 
                    transition: 'transform 0.2s'
                  }}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
