import React, { useState } from 'react';

// Import diagrams
import diagramMdagents from './assets/diagrams/mdagents.png';
import diagramAgentclinic from './assets/diagrams/agentclinic.png';
import diagramAipsychotherapy from './assets/diagrams/aipsychotherapy.png';
import diagramBiochatter from './assets/diagrams/biochatter.png';
import diagramEscargot from './assets/diagrams/escargot.png';
import diagramPathfinder from './assets/diagrams/pathfinder.png';
import diagramMedrax from './assets/diagrams/medrax.png';
import diagramTxagent from './assets/diagrams/txagent.png';
import diagramTrialmatchai from './assets/diagrams/trialmatchai.png';
import diagramBiomni from './assets/diagrams/biomni.png';
import diagramGeneagent from './assets/diagrams/geneagent.png';
import diagramMedagentbench from './assets/diagrams/medagentbench.png';
import diagramOpenlensai from './assets/diagrams/openlensai.png';
import diagramMedea from './assets/diagrams/medea.png';
import diagramAgentslr from './assets/diagrams/agentslr.png';

// Import videos/gifs/images - change extension based on your file
// Supported types: 'gif', 'mp4', 'png'
import videoMdagents from './assets/videos/mdagents.gif';
import videoAgentclinic from './assets/videos/agentclinic.png';
import videoAipsychotherapy from './assets/videos/aipsychotherapy.png';
import videoBiochatter from './assets/videos/biochatter.gif';
import videoEscargot from './assets/videos/escargot.png';
import videoPathfinder from './assets/videos/pathfinder.mp4';
import videoMedrax from './assets/videos/medrax.gif';
import videoTxagent from './assets/videos/txagent.gif';
import videoTrialmatchai from './assets/videos/trialmatchai.png';
import videoBiomni from './assets/videos/biomni.mp4';
import videoGeneagent from './assets/videos/geneagent.png';
import videoMedagentbench from './assets/videos/medagentbench.png';
import videoOpenlensai from './assets/videos/openlensai.png';
import videoMedea from './assets/videos/medea.png';
import videoAgentslr from './assets/videos/agentslr.png';

const diagrams = {
  mdagents: diagramMdagents,
  agentclinic: diagramAgentclinic,
  aipsychotherapy: diagramAipsychotherapy,
  biochatter: diagramBiochatter,
  escargot: diagramEscargot,
  pathfinder: diagramPathfinder,
  medrax: diagramMedrax,
  txagent: diagramTxagent,
  trialmatchai: diagramTrialmatchai,
  biomni: diagramBiomni,
  geneagent: diagramGeneagent,
  medagentbench: diagramMedagentbench,
  openlensai: diagramOpenlensai,
  medea: diagramMedea,
  agentslr: diagramAgentslr,
};

// type: 'gif', 'mp4', or 'png'
const videos = {
  mdagents: { src: videoMdagents, type: 'gif' },
  agentclinic: { src: videoAgentclinic, type: 'png' },
  aipsychotherapy: { src: videoAipsychotherapy, type: 'png' },
  biochatter: { src: videoBiochatter, type: 'gif' },
  escargot: { src: videoEscargot, type: 'png' },
  pathfinder: { src: videoPathfinder, type: 'mp4' },
  medrax: { src: videoMedrax, type: 'png' },
  txagent: { src: videoTxagent, type: 'gif' },
  trialmatchai: { src: videoTrialmatchai, type: 'png' },
  biomni: { src: videoBiomni, type: 'mp4' },
  geneagent: { src: videoGeneagent, type: 'png' },
  medagentbench: { src: videoMedagentbench, type: 'png' },
  openlensai: { src: videoOpenlensai, type: 'png' },
  medea: { src: videoMedea, type: 'png' },
  agentslr: { src: videoAgentslr, type: 'png' },
};

const agents = [
  {
    id: 1, name: 'MDAgents', slug: 'mdagents', category: 'Clinical Decision Support',
    institution: 'MIT Media Lab', date: '2025-01-01', color: '#8B5CF6',
    row: 'top', level: 1, offsetX: -50,
    features: [
      'Adaptive multi-agent collaboration for medical decision-making',
      'Auto-recruits specialist agents based on case complexity',
      'Solo (PCC), group (MDT), or board (ICT) consultation modes',
      'Best performance in 7/10 medical benchmarks',
      'Up to 11.8% improvement over prior multi-agent methods',
      'Multi-modal: text, images, physiological signals',
      'NeurIPS 2024 Oral presentation',
      'Emulates real-world clinical team dynamics',
    ],
    publication: 'NeurIPS 2024 (Oral)',
    publicationLink: 'https://arxiv.org/abs/2404.15155',
    demo: 'mdagents2024.github.io/demo.html',
    github: 'github.com/mitmedialab/MDAgents',
    pip: 'git clone https://github.com/mitmedialab/MDAgents.git',
  },
  {
    id: 2, name: 'AgentClinic', slug: 'agentclinic', category: 'Clinical Decision Support',
    institution: 'Stanford / Multi-institutional', date: '2026-04-27', color: '#8B5CF6',
    row: 'bottom', level: 4, offsetX: -35,
    features: [
      'Multimodal benchmark simulating clinical encounters',
      'Doctor agent interviews patient agent, orders tests, diagnoses',
      'Uses real clinical data from MIMIC dataset',
      'Evaluates clinical reasoning in realistic scenarios',
      'Measures both accuracy and communication quality',
      'Supports multiple LLM backends',
      'Reference benchmark for clinical agent evaluation',
      'Multi-institutional collaborative development',
    ],
    publication: 'npj digital medicine',
    publicationLink: 'https://www.nature.com/articles/s41746-026-02674-7',
    demo: 'https://agentclinic.github.io/',
    github: 'github.com/samuelschmidgall/AgentClinic',
    pip: 'git clone https://github.com/samuelschmidgall/AgentClinic.git',
  },
  {
    id: 3, name: 'AI Psychotherapy', slug: 'aipsychotherapy', category: 'Mental Health',
    institution: 'MITHAT / Multi-institutional', date: '2025-08-23', color: '#06B6D4',
    row: 'bottom', level: 2, offsetX: 100,
    features: [
      'Multi-agent LLM workflow for counseling and mental disorder diagnosis',
      'Simulates therapist-client dialogues with specific client profiles',
      'Transparent step-by-step disorder predictions with explainability',
      'Evaluates conversational realism, diagnostic accuracy, and explainability',
      'Compares leading LLMs across three critical clinical dimensions',
      'Adherence to ethical and legal standards for mental health AI',
      'Datasets and full implementation open-sourced',
      'CIKM 2025 accepted paper (Seoul, November 2025)'
    ],
    publication: 'CIKM 2025 (Seoul, November 2025)',
    publicationLink: 'https://arxiv.org/abs/2508.11398',
    demo: 'NA',
    github: 'github.com/mithatco/mental_health_multiagent',
    pip: 'git clone https://github.com/mithatco/mental_health_multiagent.git',
  },
  {
    id: 4, name: 'BioChatter', slug: 'biochatter', category: 'Knowledge Integration',
    institution: 'EMBL-EBI / Heidelberg', date: '2025-01-22', color: '#F59E0B',
    row: 'bottom', level: 1, offsetX: 0,
    features: [
      'Framework for LLM interactions with biomedical knowledge graphs',
      'Built on BioCypher knowledge graph platform',
      'Benchmark-first development for trustworthiness',
      'Supports RAG over custom knowledge graphs',
      'Official Docker Compose for GDPR-compliant local deployment',
      'Neo4j + API + frontend full stack',
      'Published in Nature Biotechnology',
      'Active open-source community',
    ],
    publication: 'Nature Biotechnology, January 22, 2025',
    publicationLink: 'https://doi.org/10.1038/s41587-024-02534-3',
    demo: 'chat.biocypher.org',
    github: 'github.com/biocypher/biochatter',
    pip: 'pip install biochatter',
  },
  {
    id: 5, name: 'ESCARGOT', slug: 'escargot', category: 'Knowledge Integration',
    institution: 'Cedars-Sinai', date: '2025-01-22', color: '#F59E0B',
    row: 'top', level: 3, offsetX: 35,
    features: [
      'LLM + knowledge graph reasoning with self-verification',
      'Graph-of-thought approach for scientific reasoning',
      'Enhanced Scientific Comprehension via Augmented Reasoning',
      'Integrates structured biomedical knowledge graphs',
      'Reduces hallucinations through graph-grounded verification',
      'Supports complex relational queries across domains',
      'Published in Bioinformatics (Oxford)',
      'Open-source with extensible architecture',
    ],
    publication: 'Bioinformatics, January 22, 2025',
    publicationLink: 'https://academic.oup.com/bioinformatics/article/41/2/btaf048/7971037',
    demo: 'NA',
    github: 'github.com/EpistasisLab/escargot',
    pip: 'pip install escargot',
  },
  {
    id: 6, name: 'PathFinder', slug: 'pathfinder', category: 'Medical Imaging',
    institution: 'University of Washington / Stanford', date: '2025-02-13', color: '#3B82F6',
    row: 'bottom', level: 2, offsetX: 35,
    features: [
      '4 collaborating AI agents: Triage, Navigation, Description, Diagnosis',
      'Emulates expert pathologist decision-making on WSIs',
      'Outperforms state-of-the-art by 8% in melanoma diagnosis',
      'First AI system to surpass average pathologist accuracy (+9%)',
      'Inherent explainability via natural language patch descriptions',
      'Multi-scale, iterative diagnostic procedure',
      'Description quality comparable to GPT-4o',
      'ICCV 2025 accepted paper',
    ],
    publication: 'ICCV 2025',
    publicationLink: 'https://arxiv.org/abs/2502.08916',
    demo: 'pathfinder-dx.github.io',
    github: 'pathfinder-dx.github.io',
    pip: 'Code and models coming soon (check project page)',
  },
  {
    id: 7, name: 'MedRAX', slug: 'medrax', category: 'Medical Imaging',
    institution: 'University of Toronto / Vector Institute', date: '2025-02-25', color: '#3B82F6',
    row: 'top', level: 1, offsetX: 30,
    features: [
      'ReAct agent orchestrating 8 specialized radiology tools',
      'DenseNet-121, CheXagent, LLaVA-Med, MedSAM, Maira-2, etc.',
      'Detects 18 chest X-ray pathologies',
      'Organ segmentation with visual overlays',
      'Automated radiology report generation',
      'Supports OpenAI-compatible API backends (Qwen3-VL, etc.)',
      'Gradio web interface for interactive use',
      'ICML 2025 accepted paper',
    ],
    publication: 'ICML 2025',
    publicationLink: 'https://arxiv.org/abs/2502.02673',
    demo: 'https://bowang-lab.github.io/MedRAX/',
    github: 'github.com/bowang-lab/MedRAX',
    pip: 'git clone https://github.com/bowang-lab/MedRAX.git && pip install -e .',
  },
  {
    id: 8, name: 'TxAgent', slug: 'txagent', category: 'Therapeutics & Trials',
    institution: 'Harvard / Zitnik Lab', date: '2025-03-14', color: '#EF4444',
    row: 'top', level: 2, offsetX: 100,
    features: [
      '211 tools for therapeutic reasoning',
      'Queries FDA Drug API, OpenTargets, Monarch Initiative',
      'Fine-tuned Llama-3.1-8B (TxAgent-T1)',
      'Multi-step reasoning for polypharmacy & contraindications',
      'Patient-specific dosing recommendations with sources',
      'Validated on NeurIPS CURE-Bench',
      'Gradio web UI for interactive demos',
      'MIT open-source license',
    ],
    publication: 'arXiv, March 14, 2025',
    publicationLink: 'https://arxiv.org/abs/2503.10970',
    demo: 'zitniklab.hms.harvard.edu/TxAgent/',
    github: 'github.com/mims-harvard/TxAgent',
    pip: 'pip install txagent',
  },
  {
    id: 9, name: 'TrialMatchAI', slug: 'trialmatchai', category: 'Therapeutics & Trials',
    institution: 'Oslo University Hospital / CBIB', date: '2026-03-25', color: '#EF4444',
    row: 'top', level: 2,
    features: [
      'End-to-end AI-powered clinical trial recommendation system',
      'Hybrid retrieval: BM25 + vector search with reranking',
      'Criterion-level eligibility assessment with Chain-of-Thought',
      '92% of oncology patients matched to relevant trials (top 20)',
      '>90% accuracy in criterion-level eligibility classification',
      'Phenopackets-standardized data support',
      'Secure local deployment, no proprietary LLM dependency',
      'Published in Nature Communications (2026)',
    ],
    publication: 'Nature Communications, 2026',
    publicationLink: 'https://www.nature.com/articles/s41467-026-70509-w',
    demo: 'NA',
    github: 'github.com/cbib/TrialMatchAI',
    pip: 'git clone https://github.com/cbib/TrialMatchAI.git && pip install -e .',
  },
  {
    id: 10, name: 'Biomni', slug: 'biomni', category: 'General-purpose',
    institution: 'Stanford', date: '2025-06-02', color: '#10B981',
    row: 'bottom', level: 1,
    features: [
      'General-purpose agent across 2,000+ biomedical tasks',
      'Code generation, execution, and tool-augmented reasoning',
      'Covers genomics, proteomics, imaging, clinical data',
      'Unified framework adaptable to any biomedical workflow',
      'Hosted on SciLifeLab Serve platform',
      'Web demo available for immediate use',
      'Vision of a "Swiss army knife" biomedical agent',
      'Active Stanford SNAP group development',
    ],
    publication: 'bioRxiv, June 02, 2025',
    publicationLink: 'https://www.biorxiv.org/content/10.1101/2025.05.30.656746v1.full.pdf',
    demo: 'https://biomni.serve.scilifelab.se/',
    github: 'github.com/snap-stanford/biomni',
    pip: 'git clone https://github.com/snap-stanford/Biomni.git',
  },
  {
    id: 11, name: 'GeneAgent', slug: 'geneagent', category: 'Gene & Omics Analysis',
    institution: 'NIH / NCBI', date: '2025-07-28', color: '#EC4899',
    row: 'top', level: 1,
    features: [
      'Self-verification language agent for gene set analysis',
      'Autonomously queries NCBI Gene, PubMed, ClinVar databases',
      'Generates interpretable biological process names for gene sets',
      'Reduces hallucinations via fact-checking against domain databases',
      'Evaluated on 1,106 gene sets (GO, NeST, MSigDB)',
      'Significantly outperforms GPT-4 in accuracy',
      'Published in Nature Methods (July 2025)',
      'Built by the team that runs NCBI databases',
    ],
    publication: 'Nature Methods, July 28, 2025',
    publicationLink: 'https://www.nature.com/articles/s41592-025-02748-6',
    demo: 'ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/GeneAgent/geneagent.html',
    github: 'github.com/ncbi-nlp/GeneAgent',
    pip: 'git clone https://github.com/ncbi-nlp/GeneAgent.git',
  },
  {
    id: 12, name: 'MedAgentBench', slug: 'medagentbench', category: 'Clinical Decision Support',
    institution: 'Stanford (Andrew Ng Lab)', date: '2025-08-14', color: '#8B5CF6',
    row: 'bottom', level: 1, offsetX: 10,
    features: [
      'Virtual EHR environment built on FHIR standard',
      'Benchmarks agents on realistic clinical tasks',
      'Medication ordering, lab interpretation, care coordination',
      'Uses synthetic patient records for safe evaluation',
      'Tests multi-step clinical reasoning and tool use',
      'Published in NEJM AI',
      'Defines what "EHR agent" tasks look like concretely',
      'Relevant for registry-based research workflows',
    ],
    publication: 'NEJM AI (August 2025)',
    publicationLink: 'https://ai.nejm.org/doi/full/10.1056/AIdbp2500144',
    demo: 'NA',
    github: 'github.com/stanfordmlgroup/MedAgentBench',
    pip: 'git clone https://github.com/stanfordmlgroup/MedAgentBench.git',
  },
  {
    id: 13, name: 'OpenLens AI', slug: 'openlensai', category: 'Research Workflows',
    institution: 'Multi-institutional', date: '2025-09-18', color: '#14B8A6',
    row: 'top', level: 2, offsetX: 60,
    features: [
      'Fully autonomous research agent for health informatics',
      '5 modules: supervisor, literature, data, coder, LaTeX writer',
      'Vision-language feedback for medical visualization',
      'Generates publication-ready LaTeX manuscripts',
      'Automated literature review and data analysis',
      'Quality control mechanisms for reproducibility',
      'Streamlit-based interactive UI',
      'Web app available at openlens.icu',
    ],
    publication: 'arXiv (September 2025)',
    publicationLink: 'https://arxiv.org/abs/2509.14778',
    demo: 'https://openlens.icu',
    github: 'github.com/jarrycyx/openlens-ai',
    pip: 'git clone https://github.com/jarrycyx/openlens-ai.git && pip install -e .',
  },
  {
    id: 14, name: 'Medea', slug: 'medea', category: 'Gene & Omics Analysis',
    institution: 'Harvard / Zitnik Lab', date: '2026-01-16', color: '#EC4899',
    row: 'bottom', level: 1, offsetX: -40,
    features: [
      '4 modules: research planning, code execution, literature, consensus',
      '20 specialized tools for multi-omics analysis',
      'Single-cell RNA-seq, bulk transcriptomics, cancer vulnerability',
      'Up to 46% improvement over base LLMs in target identification',
      'Built on AgentLite framework',
      'Shares ToolUniverse ecosystem with TxAgent',
      'Transparent reasoning with executable audit trail',
      'Apache-2.0 open-source license',
    ],
    publication: 'bioRxiv (January 2026)',
    publicationLink: 'https://www.biorxiv.org/content/10.64898/2026.01.16.696667v1',
    demo: 'https://medea.openscientist.ai/',
    github: 'github.com/mims-harvard/Medea',
    pip: 'git clone https://github.com/mims-harvard/Medea.git && pip install -e .',
  },
  {
    id: 15, name: 'AgentSLR', slug: 'agentslr', category: 'Research Workflows',
    institution: 'University of Oxford / Imperial College London', date: '2026-03-20', color: '#14B8A6',
    row: 'bottom', level: 1, offsetX: -40,
    features: [
      'Automates complete systematic literature review workflow',
      'Article retrieval, screening, data extraction, report synthesis',
      '58× speedup: 7 weeks → 20 hours',
      'Validated on 9 WHO-designated priority pathogens',
      'Compared 5 frontier LLMs (GPT-4o, Claude, Gemini, etc.)',
      'Human-in-the-loop validation with identified failure modes',
      'Open-source agentic pipeline',
      'Epidemiology-focused but generalizable to other domains',
    ],
    publication: 'arXiv (March 2026)',
    publicationLink: 'https://arxiv.org/abs/2603.22327',
    demo: 'https://oxrml.com/agent-slr/',
    github: 'github.com/OxRML/AgentSLR',
    pip: 'git clone https://github.com/OxRML/AgentSLR.git && pip install -r requirements.txt',
  },
];

const categories = [
  { name: 'Clinical Decision Support', color: '#8B5CF6', icon: '🏥' },
  { name: 'Therapeutics & Trials',     color: '#EF4444', icon: '💊' },
  { name: 'Medical Imaging',           color: '#3B82F6', icon: '🩻' },
  { name: 'Knowledge Integration',     color: '#F59E0B', icon: '🕸️' },
  { name: 'Gene & Omics Analysis',     color: '#EC4899', icon: '🧬' },
  { name: 'Research Workflows',        color: '#14B8A6', icon: '📚' },
  { name: 'General-purpose',           color: '#10B981', icon: '🔬' },
  { name: 'Mental Health',             color: '#06B6D4', icon: '🧠' },
];

export default function AgentLandscape() {
  const [selectedAgent, setSelectedAgent] = useState(agents.find(a => a.slug === 'biochatter'));
  const [selectedCategory, setSelectedCategory] = useState('Clinical Decision Support');
  const [diagramScale, setDiagramScale] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollStart, setScrollStart] = useState({ x: 0, y: 0 });
  const [featuresExpanded, setFeaturesExpanded] = useState(false);
  const [featureFontSize, setFeatureFontSize] = useState(20);

  // Timeline date calculations
  const startDate = new Date('2024-12-01');
  const endDate = new Date('2026-04-30');
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

  const getPosition = (dateStr) => {
    const date = new Date(dateStr);
    const days = (date - startDate) / (1000 * 60 * 60 * 24);
    return 2 + (days / totalDays) * 96;
  };

  const getTopOffset = (level) => {
    if (level === 1) return 150;
    if (level === 2) return 95;
    if (level === 3) return 45;
    return 0; // level 4
  };

  const getTopLineHeight = (level) => {
    if (level === 1) return 20;
    if (level === 2) return 75;
    if (level === 3) return 125;
    return 170; // level 4
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
          <h1 className="text-2xl font-bold">The AI agent landscape in healthcare and biomedical research (2025–2026)</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Categories: 2 rows × 4 columns */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(0, 4).map(cat => (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat.name 
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800 scale-105' 
                    : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: selectedCategory === cat.name ? cat.color : 'rgb(51 65 85)',
                  opacity: selectedCategory && selectedCategory !== cat.name ? 0.5 : 1
                }}
              >
                <span className="text-lg">{cat.icon}</span>
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: selectedCategory === cat.name ? 'white' : cat.color}}></div>
                <span className="text-sm text-slate-100">{cat.name}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(4).map(cat => (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat.name 
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800 scale-105' 
                    : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: selectedCategory === cat.name ? cat.color : 'rgb(51 65 85)',
                  opacity: selectedCategory && selectedCategory !== cat.name ? 0.5 : 1
                }}
              >
                <span className="text-lg">{cat.icon}</span>
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: selectedCategory === cat.name ? 'white' : cat.color}}></div>
                <span className="text-sm text-slate-100">{cat.name}</span>
              </button>
            ))}
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-600 hover:bg-slate-500 text-sm text-slate-200"
              >
                ✕ Clear filter
              </button>
            )}
          </div>
        </div>

        <div className="bg-slate-700 rounded-2xl p-8 mb-6 overflow-x-auto">
          <div className="relative" style={{height: '420px', minWidth: '1000px'}}>
            
            {/* Top row agents - four levels */}
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
            <div className="absolute left-0 right-0" style={{top: '215px'}}>
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
                  top: '240px',
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
                    {selectedAgent.demo === 'NA' || selectedAgent.demo === 'NA (Soon)' || selectedAgent.demo === 'Local Gradio UI (GPU required)' ? (
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
            {' '}· <a href="mailto:mahbub.ul.alam@scilifelab.se" className="text-emerald-400 hover:underline">mahbub.ul.alam@scilifelab.se</a>
          </p>
        </div>
      </div>
    </div>
  );
}