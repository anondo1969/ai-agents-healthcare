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
    id: 1, name: 'CellAgent', slug: 'cellagent', category: 'Omics Analysis', 
    institution: 'Northwestern Polytechnical', date: '2024-07-13', color: '#3B82F6',
    row: 'bottom', level: 1,
    features: [
  'Automates complete single-cell RNA-seq analysis pipeline from preprocessing to biological discovery',
  'Handles batch correction, cell type annotation, and trajectory inference',
  'Works across diverse human tissue types (blood, heart, lung, pancreas, etc.)',
  'Uses collaborative AI agents (Planner, Executor, Evaluator) working together on different analysis aspects',
  'Accepts natural language task descriptions enabling zero-code operation',
  'Automatically selects optimal tools and parameters for specific datasets',
  'Includes self-evaluation and iterative optimization for high-quality outputs',
  'Eliminates manual trial-and-error method selection'
],
    publication: 'arXiv, July 13, 2024',
    publicationLink: 'https://arxiv.org/abs/2407.09811',
    demo: 'http://cell.agent4science.cn/start/',
    github: 'NA',
    pip: 'NA'
  },
  { 
    id: 2, name: 'AutoBA', slug: 'autoba', category: 'Omics Analysis', 
    institution: 'KAUST', date: '2024-10-03', color: '#3B82F6',
    row: 'top', level: 2,
    features: [
  'Runs comprehensive multi-omic analyses without coding or manual pipeline configuration',
  'Requires only three inputs: data location, description, and research objective',
  'Intelligently selects appropriate bioinformatics tools based on experiment type (RNA-seq, ChIP-seq, single-cell)',
  'Automatically designs custom analysis plans tailored to your specific dataset characteristics',
  'Offers local deployment options to keep sensitive research data secure on your own infrastructure',
  'Includes automatic code repair mechanism that detects and fixes errors during execution',
  'Provides detailed, readable step-by-step plans before execution begins',
  'Flexible beyond fixed pipelines, helping incorporate new bioinformatics tools'
],
    publication: 'Advanced Science, October 03, 2024',
    publicationLink: 'https://doi.org/10.1002/advs.202407094',
    demo: 'Local GUI application',
    github: 'github.com/JoshuaChou2018/AutoBA',
    pip: 'git clone https://github.com/JoshuaChou2018/AutoBA.git'
  },
  { 
    id: 3, name: 'MDAgents', slug: 'mdagents', category: 'Clinical', 
    institution: 'MIT Media Lab', date: '2024-10-30', color: '#8B5CF6',
    row: 'bottom', level: 1,
    features:[
  'Automatically assesses medical case complexity and assigns appropriate AI collaboration level',
  'Handles multi-modal medical data (text, pathology images, X-rays, videos)',
  'Mirrors real clinical workflows with specialist recruitment based on case requirements',
  'Enables multi-turn discussions and consensus-building among AI specialists',
  'Uses moderator agent to triage queries and resolve specialist disagreements',
  'Balances accuracy with computational efficiency (peak accuracy with just 3 agents)',
  'Recruits domain-specific specialists (neurologists, radiologists, oncologists) as needed',
  'Follows clear stepwise workflow: complexity check → recruit experts → synthesize → decide'
],
    publication: 'NeurIPS, October 30, 2024',
    publicationLink: 'https://arxiv.org/pdf/2404.15155',
    demo: 'mdagents2024.github.io/demo.html',
    github: 'github.com/mitmedialab/MDAgents',
    pip: 'git clone https://github.com/mitmedialab/MDAgents.git'
  },
  { 
    id: 4, name: 'BioChatter', slug: 'biochatter', category: 'General-purpose', 
    institution: 'EMBL-EBI / Heidelberg', date: '2025-01-22', color: '#10B981',
    row: 'top', level: 3,
    features: [
  'Integrates AI with structured knowledge graphs and biomedical databases for evidence-grounded answers',
  'Customizable to specific research domains through simple configuration files without deep programming skills',
  'Connects to live web APIs for querying external tools and services',
  'Fully open-source platform ensuring transparency and reproducibility in research',
  'Flexible deployment from cloud-based to fully local setups for data security',
  'Automates repetitive tasks like literature extraction, database queries, and data harmonization',
  'Modular design usable across many biomedical research scenarios',
  'Allows switching between different AI model providers without code changes'
],
    publication: 'Nature Biotechnology, January 22, 2025',
    publicationLink: 'https://doi.org/10.1038/s41587-024-02534-3',
    demo: 'light.biochatter.org',
    github: 'github.com/biocypher/biochatter',
    pip: 'pip install biochatter'
  },
  { 
    id: 5, name: 'ESCARGOT', slug: 'escargot', category: 'Knowledge Integration', 
    institution: 'Cedars-Sinai', date: '2025-01-22', color: '#F59E0B',
    row: 'bottom', level: 1,
    features: [
  'Grounds AI answers in biomedical knowledge graphs to reduce hallucinations',
  'Adaptable to various research domains (Alzheimer\'s, drug discovery, etc.)',
  'Queries structured knowledge graphs containing gene-disease-drug relationships in real time',
  'Shows transparent step-by-step reasoning that researchers can verify',
  'Handles complex multi-step research questions through dynamic reasoning',
  'Converts strategies into executable Python code for inspection',
  'Automatically debugs and repairs code when execution fails',
  'Available as open-source installable package'
],
    publication: 'Bioinformatics, January 22, 2025',
    publicationLink: 'https://academic.oup.com/bioinformatics/article/41/2/btaf031/7972741',
    demo: 'NA',
    github: 'github.com/EpistasisLab/escargot',
    pip: 'pip install escargot'
  },
  { 
    id: 6, name: 'BioDiscoveryAgent', slug: 'biodiscoveryagent', category: 'Gene Analysis', 
    institution: 'Stanford', date: '2025-03-09', color: '#EC4899',
    row: 'top', level: 2, offsetX: -20,
    features: [
  'Helps design and prioritize CRISPR genetic perturbation experiments to achieve target phenotypes',
  'Includes built-in "critic" to check and challenge predictions',
  'Provides transparent explanations for recommendations, citing relevant literature and pathways',
  'Uses built-in biological knowledge to guide experiments from the first round without requiring training data',
  'Searches scientific literature and biological databases to find genes sharing properties with successful hits',
  'Learns and adapts strategy based on experimental results across rounds',
  'Designs experiments testing gene combinations, addressing vast combinatorial search spaces',
  'Requires no machine learning expertise or model training'
],
    publication: 'ICLR, March 09, 2025',
    publicationLink: 'https://arxiv.org/abs/2405.17631',
    demo: 'NA',
    github: 'github.com/snap-stanford/BioDiscoveryAgent',
    pip: 'git clone https://github.com/snap-stanford/BioDiscoveryAgent.git'
  },
  { 
    id: 7, name: 'TxAgent', slug: 'txagent', category: 'Therapeutics', 
    institution: 'Harvard / Zitnik Lab', date: '2025-03-14', color: '#EF4444',
    row: 'bottom', level: 1,
    features: [
  'Provides personalized treatment recommendations considering patient-specific factors (age, comorbidities, medications)',
  'Accesses real-time FDA-approved drug information including newly approved drugs',
  'Analyzes drugs at molecular, pharmacokinetic, and clinical levels',
  'Evaluates drug-drug interactions, contraindications, and safety profiles',
  'Generates transparent step-by-step reasoning traces for verification',
  'Integrates 211 specialized biomedical tools for comprehensive analysis',
  'Handles complex clinical scenarios (pediatric, geriatric, pregnant patients)',
  'Pulls evidence from multiple biomedical sources with iterative refinement'
],
    publication: 'arXiv, March 14, 2025',
    publicationLink: 'https://arxiv.org/abs/2503.10970',
    demo: 'zitniklab.hms.harvard.edu/TxAgent/',
    github: 'github.com/mims-harvard/TxAgent',
    pip: 'pip install txagent'
  },
  { 
    id: 8, name: 'SpatialAgent', slug: 'spatialagent', category: 'Omics Analysis', 
    institution: 'Genentech / Stanford', date: '2025-04-06', color: '#3B82F6',
    row: 'top', level: 3,
    features: [
  'Covers full spatial biology workflow from experimental design to hypothesis generation',
  'Works with multiple data types (gene expression, tissue images, cell interactions)',
  'Automates cell/tissue segmentation, clustering, and annotation',
  'Connects to external databases (PanglaoDB, CellMarker2) to enhance analysis',
  'Accessible without programming expertise through automatic tool selection',
  'Offers fully autonomous or interactive co-pilot modes',
  'Maps cell-cell communication networks through ligand-receptor interactions',
  'Generates novel biological hypotheses with comprehensive scientific reports'
],
    publication: 'bioRxiv, April 06, 2025',
    publicationLink: 'https://www.biorxiv.org/content/10.1101/2025.04.03.646459v1.full.pdf',
    demo: 'NA (Soon)',
    github: 'github.com/Genentech/SpatialAgent',
    pip: 'git clone https://github.com/Genentech/SpatialAgent.git'
  },
  { 
    id: 9, name: 'Biomni', slug: 'biomni', category: 'General-purpose', 
    institution: 'Stanford', date: '2025-06-02', color: '#10B981',
    row: 'bottom', level: 1,
    features: [
  'General-purpose virtual scientist handling diverse biomedical tasks from literature search to data processing',
  'Integrates 150+ tools, 105 software packages, and 59 databases into a unified environment',
  'Achieves expert-level accuracy on wet-lab protocol design (validated in molecular cloning experiments)',
  'Automatically selects and applies appropriate tools for each research question',
  'Breaks down complex questions into logical multi-step workflows with flexible code execution',
  'Generates human-readable reports explaining findings',
  'Analyzes messy multi-modal datasets (wearables, single-cell sequencing) to generate testable hypotheses',
  'Allows scientists to focus on discovery rather than technical implementation'
],
    publication: 'bioRxiv, June 02, 2025',
    publicationLink: 'https://www.biorxiv.org/content/10.1101/2025.05.30.656746v1.full.pdf',
    demo: 'https://app.biomni.stanford.edu/',
    github: 'github.com/snap-stanford/biomni',
    pip: 'git clone https://github.com/snap-stanford/Biomni.git'
  },
  { 
    id: 10, name: 'GeneAgent', slug: 'geneagent', category: 'Gene Analysis', 
    institution: 'NIH / NCBI', date: '2025-07-28', color: '#EC4899',
    row: 'top', level: 2,
    features: [
  'Interprets gene sets by generating readable descriptions of shared biological functions',
  'Works across multiple species (human, mouse)',
  'Standardizes gene nomenclature to avoid synonym confusion',
  'Self-verifies answers by querying 18 expert-curated databases (Gene Ontology, KEGG, Reactome, PubMed...)',
  'Provides verification reports showing database support for each claim',
  'Discovers novel biological insights more detailed than standard AI approaches',
  'Iteratively refines conclusions based on real database evidence',
  'Identifies functions for gene sets poorly described in existing databases'
],
    publication: 'Nature Methods, July 28, 2025',
    publicationLink: 'https://www.nature.com/articles/s41592-025-02748-6',
    demo: 'ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/GeneAgent/geneagent.html',
    github: 'github.com/ncbi-nlp/GeneAgent',
    pip: 'git clone https://github.com/ncbi-nlp/GeneAgent.git'
  },
];

const categories = [
  { name: 'General-purpose', color: '#10B981', icon: '🧬' },
  { name: 'Omics Analysis', color: '#3B82F6', icon: '📊' },
  { name: 'Therapeutics', color: '#EF4444', icon: '💊' },
  { name: 'Gene Analysis', color: '#EC4899', icon: '🔬' },
  { name: 'Clinical', color: '#8B5CF6', icon: '🏥' },
  { name: 'Knowledge Integration', color: '#F59E0B', icon: '🕸️' },
];

export default function AgentLandscape() {
  const [selectedAgent, setSelectedAgent] = useState(agents.find(a => a.slug === 'biochatter'));
  const [selectedCategory, setSelectedCategory] = useState('General-purpose');
  const [diagramScale, setDiagramScale] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollStart, setScrollStart] = useState({ x: 0, y: 0 });
  const [featuresExpanded, setFeaturesExpanded] = useState(false);
  const [featureFontSize, setFeatureFontSize] = useState(20);

  // Timeline date calculations
  const startDate = new Date('2024-07-13');
  const endDate = new Date('2025-07-28');
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

  const getPosition = (dateStr) => {
    const date = new Date(dateStr);
    const days = (date - startDate) / (1000 * 60 * 60 * 24);
    return 2 + (days / totalDays) * 96;
  };

  const getTopOffset = (level) => {
    if (level === 1) return 100;
    if (level === 2) return 50;
    return 0;
  };

  const getTopLineHeight = (level) => {
    if (level === 1) return 20;
    if (level === 2) return 70;
    return 120;
  };

  const getBottomLineHeight = (level) => level === 1 ? 20 : 70;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
  };

  const topAgents = agents.filter(a => a.row === 'top');
  const bottomAgents = agents.filter(a => a.row === 'bottom');

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

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
    setFeaturesExpanded(false);
  };

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

        <div className="bg-slate-700 rounded-2xl p-8 mb-6 overflow-x-auto">
          <div className="relative" style={{height: '320px', minWidth: '900px'}}>
            
            {/* Top row agents - three levels */}
            {topAgents.map(agent => (
              <div 
                key={agent.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `calc(${getPosition(agent.date)}% + ${agent.offsetX || 0}px)`, 
                  transform: 'translateX(-50%)',
                  top: `${getTopOffset(agent.level)}px`,
                  opacity: isAgentHighlighted(agent) ? 1 : 0.25
                }}
              >
                <span className="text-xs text-slate-400 mb-1">{formatDate(agent.date)}</span>
                <button
                  onClick={() => handleAgentSelect(agent)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedAgent.id === agent.id ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-700' : ''
                  } ${isAgentHighlighted(agent) ? 'hover:scale-105' : ''}`}
                  style={{
                    backgroundColor: agent.color,
                    whiteSpace: 'nowrap',
                    transform: isAgentHighlighted(agent) && selectedCategory ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isAgentHighlighted(agent) && selectedCategory ? `0 0 20px ${agent.color}` : 'none'
                  }}
                >
                  {agent.name}
                </button>
                <div 
                  className="w-0.5 mt-1" 
                  style={{backgroundColor: agent.color, height: `${getTopLineHeight(agent.level)}px`}}
                ></div>
              </div>
            ))}

            {/* Timeline bar */}
            <div className="absolute left-0 right-0" style={{top: '160px'}}>
              <div 
                className="absolute"
                style={{left: '2%', transform: 'translateX(-50%)', top: '-4px'}}
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-700"></div>
              </div>
              
              <div className="absolute h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-pink-500 rounded-full" style={{left: '2%', right: '2%'}}></div>
              
              <div 
                className="absolute"
                style={{right: '2%', transform: 'translateX(50%)', top: '-4px'}}
              >
                <div className="w-3 h-3 bg-pink-500 rounded-full border-2 border-slate-700"></div>
              </div>

              {/* Agent date markers on timeline */}
              {agents.map(agent => (
                <div 
                  key={`marker-${agent.id}`}
                  className="absolute"
                  style={{
                    left: `calc(${getPosition(agent.date)}% + ${agent.offsetX || 0}px)`, 
                    transform: 'translateX(-50%)', 
                    top: '-4px',
                    opacity: isAgentHighlighted(agent) ? 1 : 0.25
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full border border-slate-600"
                    style={{backgroundColor: agent.color}}
                  ></div>
                </div>
              ))}
            </div>

            {/* Bottom row agents - two levels */}
            {bottomAgents.map(agent => (
              <div 
                key={agent.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `calc(${getPosition(agent.date)}% + ${agent.offsetX || 0}px)`, 
                  transform: 'translateX(-50%)',
                  top: '185px',
                  opacity: isAgentHighlighted(agent) ? 1 : 0.25
                }}
              >
                <div 
                  className="w-0.5 mb-1" 
                  style={{backgroundColor: agent.color, height: `${getBottomLineHeight(agent.level)}px`}}
                ></div>
                <button
                  onClick={() => handleAgentSelect(agent)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedAgent.id === agent.id ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-700' : ''
                  } ${isAgentHighlighted(agent) ? 'hover:scale-105' : ''}`}
                  style={{
                    backgroundColor: agent.color,
                    whiteSpace: 'nowrap',
                    transform: isAgentHighlighted(agent) && selectedCategory ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isAgentHighlighted(agent) && selectedCategory ? `0 0 20px ${agent.color}` : 'none'
                  }}
                >
                  {agent.name}
                </button>
                <span className="text-xs text-slate-400 mt-1">{formatDate(agent.date)}</span>
              </div>
            ))}
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
              <h3 className="font-bold mb-3 text-slate-400 uppercase tracking-wide flex items-center justify-between" style={{fontSize: `${Math.max(12, featureFontSize * 0.7)}px`}}>
                <span>Key Features</span>
                <div className="flex items-center gap-2 font-normal normal-case">
                  <button onClick={() => setFeatureFontSize(Math.max(12, featureFontSize - 2))} className="px-2 py-0.5 bg-slate-600 hover:bg-slate-500 rounded text-xs">-</button>
                  <span className="text-xs w-10 text-center">{featureFontSize}px</span>
                  <button onClick={() => setFeatureFontSize(Math.min(50, featureFontSize + 2))} className="px-2 py-0.5 bg-slate-600 hover:bg-slate-500 rounded text-xs">+</button>
                </div>
              </h3>
              <ul className="space-y-2 mb-3">
                {(featuresExpanded ? selectedAgent.features : selectedAgent.features.slice(0, 3)).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 rounded-full flex items-center justify-center font-bold" style={{backgroundColor: selectedAgent.color, width: `${featureFontSize * 1.2}px`, height: `${featureFontSize * 1.2}px`, fontSize: `${featureFontSize * 0.9}px`}}>
                      {i + 1}
                    </span>
                    <span className="text-slate-200 leading-relaxed" style={{fontSize: `${featureFontSize}px`}}>{feature}</span>
                  </li>
                ))}
              </ul>
              {selectedAgent.features.length > 3 && (
                <button
                  onClick={() => setFeaturesExpanded(!featuresExpanded)}
                  className="mb-4 px-3 py-1 rounded-lg hover:bg-slate-600 transition-colors"
                  style={{color: selectedAgent.color, fontSize: `${featureFontSize * 0.8}px`}}
                >
                  {featuresExpanded ? '▲ Show less' : `▼ Show ${selectedAgent.features.length - 3} more features`}
                </button>
              )}

              <div className="bg-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <span style={{fontSize: `${featureFontSize}px`}}>📄</span>
                  <div className="flex-1">
                    <span className="text-slate-500" style={{fontSize: `${featureFontSize * 0.9}px`}}>Publication:</span>
                    <a 
                      href={selectedAgent.publicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-400 ml-2 hover:underline"
                      style={{fontSize: `${featureFontSize}px`}}
                    >
                      Download
                    </a>
                    <span className="text-slate-400 mx-1" style={{fontSize: `${featureFontSize}px`}}>•</span>
                    <span className="text-slate-200" style={{fontSize: `${featureFontSize}px`}}>{selectedAgent.publication}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span style={{fontSize: `${featureFontSize}px`}}>🌐</span>
                  <div className="flex-1">
                    <span className="text-slate-500" style={{fontSize: `${featureFontSize * 0.9}px`}}>Demo:</span>
                    {selectedAgent.demo === 'NA' || selectedAgent.demo === 'NA (Soon)' || selectedAgent.demo === 'Local GUI application' ? (
                      <span className="text-slate-200 ml-2" style={{fontSize: `${featureFontSize}px`}}>{selectedAgent.demo}</span>
                    ) : (
                      <a 
                        href={selectedAgent.demo.startsWith('http') ? selectedAgent.demo : `https://${selectedAgent.demo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime-400 ml-2 hover:underline"
                        style={{fontSize: `${featureFontSize}px`}}
                      >
                        {selectedAgent.demo}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span style={{fontSize: `${featureFontSize}px`}}>💻</span>
                  <div className="flex-1">
                    <span className="text-slate-500" style={{fontSize: `${featureFontSize * 0.9}px`}}>Code:</span>
                    {selectedAgent.github === 'NA' ? (
                      <span className="text-slate-200 ml-2" style={{fontSize: `${featureFontSize}px`}}>{selectedAgent.github}</span>
                    ) : (
                      <a 
                        href={`https://${selectedAgent.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime-400 ml-2 hover:underline"
                        style={{fontSize: `${featureFontSize}px`}}
                      >
                        {selectedAgent.github}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span style={{fontSize: `${featureFontSize}px`}}>📦</span>
                  <div className="flex-1">
                    <span className="text-slate-500" style={{fontSize: `${featureFontSize * 0.9}px`}}>Install:</span>
                    <code className="text-lime-400 ml-2 bg-slate-900 px-2 py-0.5 rounded" style={{fontSize: `${featureFontSize * 0.6}px`}}>{selectedAgent.pip}</code>
                  </div>
                </div>
              </div>
              </div>
            <div className="p-5 flex flex-col">
              <h3 className="font-bold mb-3 text-slate-400 uppercase tracking-wide" style={{fontSize: `${Math.max(12, featureFontSize * 0.7)}px`}}>Preview</h3>
              <div className="bg-slate-900 rounded-xl overflow-hidden flex-1 min-h-[300px]">
                {videos[selectedAgent.slug].type === 'mp4' ? (
                  <video 
                    key={selectedAgent.slug}
                    src={videos[selectedAgent.slug].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={videos[selectedAgent.slug].src} 
                    alt={`${selectedAgent.name} demo`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-slate-600">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-400 uppercase tracking-wide" style={{fontSize: `${Math.max(12, featureFontSize * 0.7)}px`}}>Architecture Diagram</h3>
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
        {/* Footer / Contact Section */}
        <div className="mt-8 py-6 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} SciLifeLab Data Centre · MIT License
          </p>
          <p className="mb-2 flex items-center justify-center gap-4 flex-wrap">
            <span>Contact:</span>
            <a href="mailto:datacentre@scilifelab.se" className="text-emerald-400 hover:underline">datacentre@scilifelab.se</a>
            <span className="text-slate-600">•</span>
            <a href="mailto:serve@scilifelab.se" className="text-emerald-400 hover:underline">serve@scilifelab.se</a>
          </p>
          <p>
            Created by Mahbub Ul Alam{' '}·
            <a 
              href="https://www.linkedin.com/in/anondo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block ml-1 text-emerald-400 hover:text-emerald-300 align-middle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {' '}· <a href="mailto:mahbub.ul.alam@scilifelab.uu.se" className="text-emerald-400 hover:underline">mahbub.ul.alam@scilifelab.uu.se</a>
          </p>
        </div>
      </div>
    </div>
  );
}