# The AI agent landscape in healthcare and biomedical research (2025–2026)

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

**Publicly available**: Open [https://anondo1969.github.io/ai-agents-healthcare/](https://anondo1969.github.io/ai-agents-healthcare/) to view it in your browser.

An interactive visualization tool highlighting the rapid growth of AI agents in healthcare and biomedical research from January 2025 to March 2026.

🙏🙏🙏 **Our heartfelt appreciation goes to the research teams behind each featured AI agent.** 🙏🙏🙏

Built for the [CBB Bioinformatics Seminar](https://news.ki.se/calendar/cbb-bioinformatics-seminar-ai-agents-for-biomedical-research-from-analysis-to-clinical-decision-support) at Karolinska Institutet on "AI Agents for Biomedical Research: From Analysis to Clinical Decision Support" (May 7, 2026 at 12:00–13:00, Lecture hall Petrén, Nobels väg 12B, Solna).

![Presentation Slides](https://raw.githubusercontent.com/anondo1969/ai-agents-healthcare/refs/heads/main/src/assets/slides_preview.png)

### [Click this link to download the slides](https://github.com/anondo1969/ai-agents-healthcare/blob/main/src/assets/seminar_slides_ai_agents_healthcare_Mahbub_Ul_Alam_07_05_2026.pdf)

### Preview Screenshot — Open [https://anondo1969.github.io/ai-agents-healthcare/](https://anondo1969.github.io/ai-agents-healthcare/) to view it in your browser!

![Preview Screenshot](https://raw.githubusercontent.com/anondo1969/ai-agents-healthcare/refs/heads/main/src/assets/tool_screenshot.png)

## Features

- **Interactive Timeline**: Visual chronological display of 15 healthcare and biomedical research AI agents released between January 2025 – April 2026
- **Category Filtering**: Click on categories to highlight agents by type (Clinical Decision Support, Therapeutics & Trials, Medical Imaging, Knowledge Integration, Gene & Omics Analysis, Research Workflows, General-purpose, and Mental Health)
- **Detailed Agent Cards**: For each agent, view key features (eight highlights with adjustable font), publication with download link, live demo links, code repository, and installation commands
- **Demo Previews**: Embedded GIFs, videos, or screenshots for each agent
- **Architecture Diagrams**: Zoomable (25%–200%) and draggable diagrams with mouse controls
- **Fully Responsive**: Works on desktop and tablet screens

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Local Installation

```bash
# Clone the repository
git clone https://github.com/anondo1969/ai-agents-healthcare.git
cd ai-agents-healthcare

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── AgentLandscape.jsx      # Main component
├── assets/
│   ├── diagrams/           # Architecture diagrams (PNG)
│   │   ├── agentslr.png
│   │   ├── medea.png
│   │   ├── geneagent.png
│   │   └── ... (15 total)
│   └── videos/             # Demo clips (GIF/MP4/PNG)
│       ├── agentslr.png
│       ├── txagent.gif
│       ├── biochatter.gif
│       └── ... (15 total)
├── App.js
└── index.css
```

## Featured Agents, Listed Chronologically

| Agent | Category | Institution | Publication |
|-------|----------|-------------|-------------|
| **MDAgents** | Clinical Decision Support | MIT Media Lab | December 2024 (NeurIPS Oral) |
| **BioChatter** | Knowledge Integration | EMBL-EBI / Heidelberg | 22 January 2025 (Nature Biotechnology) |
| **ESCARGOT** | Knowledge Integration | Cedars-Sinai | 22 January 2025 (Bioinformatics) |
| **PathFinder** | Medical Imaging | U Washington / Stanford | 13 February 2025 (ICCV 2025) |
| **MedRAX** | Medical Imaging | U Toronto / Vector Institute | 25 February 2025 (ICML 2025) |
| **TxAgent** | Therapeutics & Trials | Harvard / Zitnik Lab | 14 March 2025 (arXiv) |
| **Biomni** | General-purpose | Stanford | 02 June 2025 (bioRxiv) |
| **GeneAgent** | Gene & Omics Analysis | NIH / NCBI | 28 July 2025 (Nature Methods) |
| **MedAgentBench** | Clinical Decision Support | Stanford (Andrew Ng Lab) | August 14 2025 (NEJM AI) |
| **AI Psychotherapy** | Mental Health | MITHAT / Multi-institutional | 23 August 2025 (CIKM 2025) |
| **OpenLens AI** | Research Workflows | Multi-institutional | 18 September 2025 (arXiv) |
| **Medea** | Gene & Omics Analysis | Harvard / Zitnik Lab | 16 January 2026 (bioRxiv) |
| **AgentSLR** | Research Workflows | U Oxford / Imperial College London | 20 March 2026 (arXiv) |
| **TrialMatchAI** | Therapeutics & Trials | Oslo University Hospital / CBIB | 25 March 2026 (Nature Communications) |
| **AgentClinic** | Clinical Decision Support | Stanford / Multi-inst. | 27 April 2026 (npj digital medicine) |


## Finding the Right Agent for the Job

| If you need to... | Consider... |
|--------------------|-------------|
| Systematic literature reviews | AgentSLR |
| Analyze RNA-seq / scRNA-seq data | Medea, Biomni |
| Understand gene functions & pathways | GeneAgent |
| Check drug interactions & polypharmacy | TxAgent |
| Query biomedical knowledge graphs | BioChatter, ESCARGOT |
| Clinical decision support | MDAgents |
| Analyze chest X-rays | MedRAX |
| Histopathology diagnosis | PathFinder |
| EHR reasoning & clinical tasks | MedAgentBench |
| Match patients to clinical trials | TrialMatchAI |
| End-to-end research automation | OpenLens AI |
| Mental health / psychotherapy | AI Psychotherapy |
| Evaluate clinical AI agents | AgentClinic |
| General biomedical research | Biomni, BioChatter |

## Getting Started: Web-Based Tools (No Code Required)

| Agent | Web Demo |
|-------|----------|
| BioChatter | [chat.biocypher.org](https://chat.biocypher.org) |
| GeneAgent | [NCBI Demo](https://www.ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/GeneAgent/) |
| OpenLens AI | [openlens.icu](http://openlens.icu) |
| Biomni | [Web demo](https://github.com/snap-stanford/biomni) + [SciLifeLab Serve](https://serve.scilifelab.se) |

## Customization

### Adding/Modifying Agents

Edit the `agents` array in `AgentLandscape.jsx`:
```javascript
{
  id: 16,
  name: 'NewAgent',
  slug: 'newagent',           // Used for asset file names
  category: 'Clinical Decision Support', // Must match a category
  institution: 'Your Institution',
  date: '2026-04-15',         // Publication date (YYYY-MM-DD)
  color: '#8B5CF6',           // Hex color (match category)
  row: 'top',                 // 'top' or 'bottom' — which side of timeline
  level: 1,                   // 1, 2, or 3 — distance from timeline (1=closest)
  offsetX: 0,                 // Optional: horizontal pixel offset
  features: [
    'Feature 1',
    'Feature 2',
    // ... up to 8 features
  ],
  publication: 'Journal (Month Year)',
  publicationLink: '<provide-the-download-link>',
  demo: '<provide-live-demo-link-if-any-otherwise-NA-or-Local>',
  github: '<provide-any-code-repo-link>',
  pip: '<provide-installation-command>'
}
```

### Timeline Layout Properties

The timeline positions agents based on their exact publication date. To prevent overlapping labels, use these properties:

| Property | Values | Description |
|----------|--------|-------------|
| `row` | `'top'` or `'bottom'` | Places agent above or below the timeline |
| `level` | `1`, `2`, or `3` | Distance from timeline (1=closest, 3=furthest). Top row supports 3 levels, bottom row supports 2 levels |
| `offsetX` | Number (pixels) | Fine-tune horizontal position. Use negative values to shift left, positive to shift right |

**Tips for avoiding overlaps:**
- Alternate `row` values for agents with close publication dates
- Use different `level` values when agents on the same row are close together
- Apply small `offsetX` adjustments (-20 to +20 pixels) for fine-tuning when labels still overlap
- If adding new agents, update the `startDate` and `endDate` in the component if they fall outside the current range (Jan 1, 2025 – Mar 30, 2026)

### Adding Media Assets

1. Add diagram: `src/assets/diagrams/newagent.png`
2. Add video/gif: `src/assets/videos/newagent.gif` (or `.mp4` or `.png`)
3. Update imports in `AgentLandscape.jsx`:
```javascript
import diagramNewagent from './assets/diagrams/newagent.png';
import videoNewagent from './assets/videos/newagent.gif';

// Add to diagrams object
const diagrams = {
  // ...existing
  newagent: diagramNewagent,
};

// Add to videos object
const videos = {
  // ...existing
  newagent: { src: videoNewagent, type: 'gif' }, // 'gif', 'mp4', or 'png'
};
```

### Category Colors

| Category | Color | Hex |
|----------|-------|-----|
| Clinical Decision Support | Purple | `#8B5CF6` |
| Therapeutics & Trials | Red | `#EF4444` |
| Medical Imaging | Blue | `#3B82F6` |
| Knowledge Integration | Orange | `#F59E0B` |
| Gene & Omics Analysis | Pink | `#EC4899` |
| Research Workflows | Teal | `#14B8A6` |
| General-purpose | Green | `#10B981` |
| Mental Health | Cyan | `#06B6D4` |

## Deployment

### GitHub Pages

```bash
# Build and deploy
npm run deploy
```

Site is available at: `https://anondo1969.github.io/ai-agents-healthcare`

### Other Platforms

```bash
# Build for production
npm run build

# The 'build' folder can be deployed to:
# - Netlify
# - Vercel
# - AWS S3
# - Any static hosting
```

## Related Resources

- **Previous work**: [AI Agent Landscape in Life Sciences (2024–2025)](https://github.com/anondo1969/ai-agents-life-sciences) — the companion visualization covering 10 agents across broader life science domains
- **SciLifeLab Webinar**: [Current State of AI Agents in Life Sciences](https://www.youtube.com/watch?v=aOtLszUsMjw) (February 5, 2026)
- **SciLifeLab Workshop**: [Developing AI Agents in Life Sciences](https://github.com/ScilifelabDataCentre/scilifelab-ai-agent-mcp-workshop-2026-03-05) (March 5, 2026)

## Built With

- [React 18](https://reactjs.org/) — UI Framework
- [Tailwind CSS 3](https://tailwindcss.com/) — Styling
- [Create React App](https://create-react-app.dev/) — Build tooling

## Author

**[Mahbub Ul Alam](https://www.linkedin.com/in/anondo/)** — SciLifeLab Data Centre (mahbub.ul.alam@scilifelab.se)

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- All the research teams behind the featured AI agents
- Karolinska Institutet CBB for hosting the seminar
- SciLifeLab Data Centre for supporting this work
- The open-source community for the amazing tools

---

<p align="center">
  Made with ❤️ for the Healthcare AI Community
</p>
