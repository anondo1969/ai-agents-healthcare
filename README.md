# 🧬 The AI agent landscape in life sciences (2024–2025)

An interactive visualization showcasing the explosion of AI agents in life sciences from October 2024 to July 2025. Built for the SciLifeLab Data Centre webinar on "[Current state of AI agents in life sciences.](https://www.scilifelab.se/event/webinar-ai-agents-in-life-sciences/)"

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Interactive Timeline**: Visual chronological display of 10 major AI agents released between Oct 2024 - Jul 2025
- **Category Filtering**: Click on categories to highlight agents by type (General-purpose, Omics Analysis, Therapeutics, Gene Analysis, Clinical, Knowledge Integration)
- **Detailed Agent Cards**: For each agent, view:
  - Key features (5 highlights)
  - Publication with download link
  - Live demo links
  - GitHub repository
  - Installation commands
- **Demo Previews**: Embedded GIFs, videos, or screenshots for each agent
- **Architecture Diagrams**: Zoomable (25%-200%) and draggable diagrams with mouse controls
- **Fully Responsive**: Works on desktop and tablet screens

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anondo1969/ai-agents-life-sciences.git
cd ai-agents-life-sciences

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
src/
├── AgentLandscape.jsx      # Main component
├── assets/
│   ├── diagrams/           # Architecture diagrams (PNG)
│   │   ├── autoba.png
│   │   ├── biomni.png
│   │   ├── biochatter.png
│   │   └── ... (10 total)
│   └── videos/             # Demo clips (GIF/MP4/PNG)
│       ├── autoba.png
│       ├── biomni.mp4
│       ├── biochatter.gif
│       └── ... (10 total)
├── App.js
└── index.css
```

## 🤖 Featured Agents

| Agent | Category | Institution | Publication |
|-------|----------|-------------|-------------|
| **AutoBA** | Omics Analysis | KAUST | Advanced Science (Oct 2024) |
| **MDAgents** | Clinical | MIT Media Lab | NeurIPS 2024 (Oral) |
| **BioChatter** | General-purpose | EMBL-EBI / Heidelberg | Nature Biotechnology (Jan 2025) |
| **ESCARGOT** | Knowledge Integration | Cedars-Sinai | Bioinformatics (Feb 2025) |
| **TxAgent** | Therapeutics | Harvard / Zitnik Lab | arXiv (Mar 2025) |
| **BioDiscoveryAgent** | Gene Analysis | Stanford | ICLR 2025 |
| **SpatialAgent** | Omics Analysis | Genentech / Stanford | bioRxiv (Apr 2025) |
| **CellAgent** | Omics Analysis | Northwestern Polytechnical | arXiv (2024) |
| **Biomni** | General-purpose | Stanford | bioRxiv (Jun 2025) |
| **GeneAgent** | Gene Analysis | NIH / NCBI | Nature Methods (Jul 2025) |

## 🎨 Customization

### Adding/Modifying Agents

Edit the `agents` array in `AgentLandscape.jsx`:
```javascript
{
  id: 11,
  name: 'NewAgent',
  slug: 'newagent',           // Used for asset file names
  category: 'General-purpose', // Must match a category
  institution: 'Your Institution',
  date: '2025-08-15',         // Publication date (YYYY-MM-DD format)
  color: '#10B981',           // Hex color
  row: 'top',                 // 'top' or 'bottom' - which side of timeline
  level: 1,                   // 1, 2, or 3 - distance from timeline (1=closest)
  offsetX: 0,                 // Optional: horizontal pixel offset for fine-tuning position
  features: [
    'Feature 1',
    'Feature 2',
    // ... up to 8 features
  ],
  publication: 'Journal (Month Year)',
  publicationLink: 'https://doi.org/...',
  demo: 'https://demo.url.com',
  github: 'github.com/org/repo',
  pip: 'pip install newagent'
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
- If adding new agents, update the `startDate` and `endDate` in the component if they fall outside the current range (Jul 13, 2024 – Jul 28, 2025)

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

## 🌐 Deployment

### GitHub Pages

```bash
# Build and deploy
npm run deploy
```

Site is available at: `https://anondo1969.github.io/ai-agents-life-sciences`

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

## 🛠️ Built With

- [React 18](https://reactjs.org/) - UI Framework
- [Tailwind CSS 3](https://tailwindcss.com/) - Styling
- [Create React App](https://create-react-app.dev/) - Build tooling

## 👥 Author

- **Mahbub Ul Alam** - SciLifeLab Data Centre (mahbub.ul.alam@scilifelab.se)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- SciLifeLab Data Centre for supporting this work
- All the research teams behind the featured AI agents
- The open-source community for the amazing tools

---

<p align="center">
  Made with ❤️ for the Life Sciences AI Community
</p>