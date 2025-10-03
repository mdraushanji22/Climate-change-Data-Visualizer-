import React, { useState } from 'react';
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
import './Temperature.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Temperature = () => {
  const [timeRange, setTimeRange] = useState('decade');

  // Sample data for temperature anomalies by decade
  const decadeData = {
    labels: ['1880s', '1890s', '1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    datasets: [
      {
        label: 'Global Temperature Anomaly (°C)',
        data: [-0.2, -0.2, -0.2, -0.3, -0.2, -0.1, 0.0, 0.0, -0.1, 0.0, 0.2, 0.3, 0.5, 0.8, 1.0],
        fill: false,
        borderColor: 'rgba(220, 38, 38, 1)',
        backgroundColor: 'rgba(220, 38, 38, 0.2)',
        tension: 0.1,
      },
    ],
  };

  // Sample data for yearly temperature anomalies (recent)
  const yearlyData = {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Global Temperature Anomaly (°C)',
        data: [0.72, 0.65, 0.74, 0.75, 0.78, 0.95, 1.02, 1.03, 1.01, 1.03, 1.05, 0.99, 0.94],
        fill: false,
        borderColor: 'rgba(220, 38, 38, 1)',
        backgroundColor: 'rgba(220, 38, 38, 0.2)',
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
        text: 'Global Temperature Anomalies',
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
          text: 'Temperature Anomaly (°C)',
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <div className="temperature-container">
      <div className="component-header">
        <h2>Global Temperature Changes</h2>
        <p>Explore how global temperatures have changed over time compared to the 20th century average.</p>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h3>Temperature Anomaly Over Time</h3>
          <div className="time-range-buttons">
            <button 
              onClick={() => setTimeRange('decade')}
              className={`modern-button ${timeRange === 'decade' ? 'active' : ''}`}
            >
              By Decade
            </button>
            <button 
              onClick={() => setTimeRange('year')}
              className={`modern-button ${timeRange === 'year' ? 'active' : ''}`}
            >
              By Year
            </button>
          </div>
        </div>
        
        <div className="chart-wrapper">
          <Line 
            data={timeRange === 'decade' ? decadeData : yearlyData} 
            options={chartOptions} 
          />
        </div>
      </div>

      <div className="feature-grid cols-2">
        <div className="info-card">
          <h3>Understanding Temperature Anomalies</h3>
          <p>
            A temperature anomaly is the difference from a reference value or long-term average. 
            A positive anomaly indicates that the observed temperature was warmer than the reference 
            value, while a negative anomaly indicates that the observed temperature was cooler.
          </p>
          <div className="fact-box">
            <h4>Key Facts:</h4>
            <ul>
              <li>Reference period: 1951-1980 or 1901-2000 (varies by dataset)</li>
              <li>Most recent decade (2013-2022) was 1.14°C warmer than 1850-1900</li>
              <li>Each of the last four decades has been warmer than any decade before 1980</li>
            </ul>
          </div>
        </div>

        <div className="info-card">
          <h3>Regional Variations</h3>
          <p>
            Temperature changes are not uniform across the globe. Some regions warm faster than others.
          </p>
          <div className="progress-section">
            <div className="progress-item">
              <div className="progress-label">
                <span>Arctic</span>
                <span>+3.0°C</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar arctic" style={{width: '100%'}}></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>Northern Hemisphere</span>
                <span>+1.3°C</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar northern" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>Southern Hemisphere</span>
                <span>+0.9°C</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar southern" style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;