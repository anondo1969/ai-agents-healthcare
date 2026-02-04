# The AI agent landscape in life sciences (2024–2025)

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

**Publicly avaliable**: Open [https://anondo1969.github.io/ai-agents-life-sciences/](https://anondo1969.github.io/ai-agents-life-sciences/) to view it in your browser.

An interactive visualization tool highlighting the rapid growth of AI agents in life sciences from July 2024 to July 2025.

🙏🙏🙏 **Our heartfelt appreciation goes to the research teams behind each featured AI agent.** 🙏🙏🙏

Built for the SciLifeLab Data Centre webinar on "[Current state of AI agents in life sciences.](https://www.scilifelab.se/event/webinar-ai-agents-in-life-sciences/)" (February 5, 2026 at 10:00-11:00 Stockholm time, online).

### Preview Screenshot,  Open [https://anondo1969.github.io/ai-agents-life-sciences/](https://anondo1969.github.io/ai-agents-life-sciences/) to view it in your browser!

![Preview Screenshot](https://raw.githubusercontent.com/anondo1969/ai-agents-life-sciences/refs/heads/main/src/assets/tool_screenshot.png)

## Features

- **Interactive Timeline**: Visual chronological display of 10 major AI agents released between July 2024 - July 2025
- **Category Filtering**: Click on categories to highlight agents by type (General-purpose, Omics Analysis, Therapeutics, Gene Analysis, Clinical, Knowledge Integration)
- **Detailed Agent Cards**: For each agent, view:
  - Key features: eight highlights with adjustable font
  - Publication with download link
  - Live demo links
  - Code repository
  - Installation commands
- **Demo Previews**: Embedded GIFs, videos, or screenshots for each agent
- **Architecture Diagrams**: Zoomable (25%-200%) and draggable diagrams with mouse controls
- **Fully Responsive**: Works on desktop and tablet screens

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Local Installation

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

## Project Structure

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

## Featured Agents, Listed Chronologically

| Agent | Category | Institution | Publication |
|-------|----------|-------------|-------------|
| **CellAgent** | Omics Analysis | Northwestern Polytechnical | 13 July, 2024 (arXiv) |
| **AutoBA** | Omics Analysis | KAUST | 03 October, 2024 (Advanced Science) |
| **MDAgents** | Clinical | MIT Media Lab | 30 October, 2024 (NeurIPS) |
| **BioChatter** | General-purpose | EMBL-EBI / Heidelberg | 22 January, 2025 (Nature Biotechnology) |
| **ESCARGOT** | Knowledge Integration | Cedars-Sinai | 22 January, 2025 (Bioinformatics) |
| **BioDiscoveryAgent** | Gene Analysis | Stanford | 09 March, 2025 (ICLR) |
| **TxAgent** | Therapeutics | Harvard / Zitnik Lab | 14 March, 2025 (arXiv) |
| **SpatialAgent** | Omics Analysis | Genentech / Stanford | 06 April, 2025 (bioRxiv) |
| **Biomni** | General-purpose | Stanford | 02 June, 2025 (bioRxiv) |
| **GeneAgent** | Gene Analysis | NIH / NCBI | 28 July, 2025 (Nature Methods) |

## Customization

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
  publicationLink: '<provide-the-download-link>',
  demo: '<provide-live-demo-link-if-any-otherwise-NA-or-Local GUI application>',
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

## Deployment

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

## Built With

- [React 18](https://reactjs.org/) - UI Framework
- [Tailwind CSS 3](https://tailwindcss.com/) - Styling
- [Create React App](https://create-react-app.dev/) - Build tooling

## Author

**[Mahbub Ul Alam](https://www.linkedin.com/in/anondo/)** - SciLifeLab Data Centre (mahbub.ul.alam@scilifelab.se)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- All the research teams behind the featured AI agents
- SciLifeLab Data Centre for supporting this work
- The open-source community for the amazing tools

---

<p align="center">
  Made with ❤️ for the Life Sciences AI Community
</p>
