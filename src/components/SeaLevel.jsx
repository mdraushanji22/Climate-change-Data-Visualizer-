import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  LineElement,
  PointElement,
  Title, 
  Tooltip, 
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './SeaLevel.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const SeaLevel = () => {
  // Sample data for sea level rise
  const seaLevelData = {
    labels: ['1880', '1900', '1920', '1940', '1960', '1980', '2000', '2020'],
    datasets: [
      {
        label: 'Global Mean Sea Level (mm)',
        data: [0, 15, 20, 30, 45, 60, 85, 110],
        fill: false,
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12
          },
          padding: 20
        }
      },
      title: {
        display: true,
        text: 'Global Mean Sea Level Rise',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Sea Level (mm above 1880 level)',
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <div className="sea-level-container">
      <div className="component-header">
        <h2>Sea Level Rise</h2>
        <p>Explore the rise in global sea levels and its impacts on coastal communities worldwide.</p>
      </div>

      <div className="chart-card">
        <h3>Historical Sea Level Changes</h3>
        <p>Global mean sea level has risen by approximately 21-24 cm since 1880, with accelerating trends in recent decades.</p>
        <div className="chart-wrapper">
          <Line data={seaLevelData} options={chartOptions} />
        </div>
      </div>

      <div className="factors-grid">
        <div className="factors-card">
          <h3>Contributing Factors</h3>
          <div className="factor-item">
            <div className="factor-indicator">
              <div className="factor-indicator-dot blue"></div>
            </div>
            <div className="factor-content">
              <h4>Thermal Expansion</h4>
              <p>As ocean water warms, it expands, contributing about 40% to sea level rise.</p>
            </div>
          </div>
          <div className="factor-item">
            <div className="factor-indicator">
              <div className="factor-indicator-dot green"></div>
            </div>
            <div className="factor-content">
              <h4>Melting Ice Sheets</h4>
              <p>Greenland and Antarctic ice sheets are losing mass, contributing about 30% to sea level rise.</p>
            </div>
          </div>
          <div className="factor-item">
            <div className="factor-indicator">
              <div className="factor-indicator-dot yellow"></div>
            </div>
            <div className="factor-content">
              <h4>Glacier Melt</h4>
              <p>Mountain glaciers and ice caps contribute about 20% to sea level rise.</p>
            </div>
          </div>
          <div className="factor-item">
            <div className="factor-indicator">
              <div className="factor-indicator-dot red"></div>
            </div>
            <div className="factor-content">
              <h4>Land Water Storage</h4>
              <p>Changes in water storage on land (groundwater extraction, reservoirs) contribute about 10%.</p>
            </div>
          </div>
        </div>

        <div className="impacts-card">
          <h3>Regional Impacts</h3>
          <p>Sea level rise affects different regions at varying rates due to local factors.</p>
          <div className="progress-section">
            <div className="progress-item">
              <div className="progress-label">
                <span>Western Pacific</span>
                <span>+120 mm</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar green" style={{width: '100%'}}></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>Indian Ocean</span>
                <span>+95 mm</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar blue" style={{width: '80%'}}></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>Eastern Pacific</span>
                <span>+70 mm</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar yellow" style={{width: '60%'}}></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>North Atlantic</span>
                <span>+55 mm</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar red" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="projection-box">
            <h4>Projected Rise:</h4>
            <p>Global sea levels are projected to rise by 0.43-2.57 meters by 2100, depending on emission scenarios.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeaLevel;