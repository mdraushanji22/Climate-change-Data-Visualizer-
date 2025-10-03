# Climate Change Data Visualizer

A modern web application built with React, Vite, and custom CSS to visualize climate change data including global temperature changes, carbon emissions, and sea level rise.

## Features

- Interactive dashboards for climate data visualization
- Temperature anomaly tracking over time
- Carbon emissions analysis by sector and region
- Sea level rise monitoring
- Responsive design for all devices
- Built with modern web technologies

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Chart.js** - JavaScript charting library
- **react-chartjs-2** - React wrapper for Chart.js
- **React Router** - Declarative routing for React
- **Leaflet** - Open-source JavaScript library for mobile-friendly interactive maps
- **react-leaflet** - React components for Leaflet maps
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful hand-crafted SVG icons

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd climate-change-visualizer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

To create a production build:

```bash
npm run build
```

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Dashboard.jsx
│   ├── Temperature.jsx
│   ├── Emissions.jsx
│   ├── SeaLevel.jsx
│   ├── About.jsx
│   └── (associated CSS files)
├── App.jsx
├── main.jsx
└── index.css
```

## Available Routes

- `/` - Dashboard (default view)
- `/dashboard` - Dashboard with overview of all metrics
- `/temperature` - Global temperature anomaly data visualization
- `/emissions` - Carbon emissions data visualization
- `/sea-level` - Sea level rise data visualization
- `/about` - Information about the project and data sources

## Data Sources

- NASA Goddard Institute for Space Studies (Global temperature anomalies)
- NOAA Global Monitoring Laboratory (Atmospheric CO2 concentrations)
- CSIRO (Global sea level reconstruction)
- Global Carbon Project (Carbon emissions data)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Climate data provided by reputable scientific organizations
- Built with open-source technologies