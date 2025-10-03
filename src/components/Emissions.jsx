import React, { useState, useEffect } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import './Emissions.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Emissions = () => {
  const [nasaData, setNasaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample data for emissions by sector (static data for now)
  const sectorData = {
    labels: ['Electricity & Heat', 'Industry', 'Transportation', 'Other Energy', 'Agriculture', 'Land Use Change & Forestry'],
    datasets: [
      {
        label: 'CO2 Emissions (Gt)',
        data: [15.2, 9.1, 8.7, 5.3, 5.1, 2.8],
        backgroundColor: [
          'rgba(30, 64, 175, 0.7)',
          'rgba(28, 100, 200, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(96, 165, 250, 0.7)',
          'rgba(147, 197, 253, 0.7)',
          'rgba(191, 219, 254, 0.7)',
        ],
        borderColor: [
          'rgba(30, 64, 175, 1)',
          'rgba(28, 100, 200, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(96, 165, 250, 1)',
          'rgba(147, 197, 253, 1)',
          'rgba(191, 219, 254, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Sample data for emissions by region (static data for now)
  const regionData = {
    labels: ['Asia', 'North America', 'Europe', 'Africa', 'South America', 'Oceania'],
    datasets: [
      {
        label: 'CO2 Emissions (Gt)',
        data: [17.5, 16.8, 11.2, 4.2, 3.1, 1.8],
        backgroundColor: [
          'rgba(220, 38, 38, 0.7)',
          'rgba(248, 113, 113, 0.7)',
          'rgba(251, 146, 60, 0.7)',
          'rgba(251, 191, 36, 0.7)',
          'rgba(132, 204, 22, 0.7)',
          'rgba(34, 197, 94, 0.7)',
        ],
        borderColor: [
          'rgba(220, 38, 38, 1)',
          'rgba(248, 113, 113, 1)',
          'rgba(251, 146, 60, 1)',
          'rgba(251, 191, 36, 1)',
          'rgba(132, 204, 22, 1)',
          'rgba(34, 197, 94, 1)',
        ],
        borderWidth: 1,
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
        text: 'Carbon Emissions by Sector',
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
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 12
          },
          padding: 15
        }
      },
      title: {
        display: true,
        text: 'Emissions Distribution by Region',
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
  };

  // Fetch data from NASA API
  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        setLoading(true);
        // Example NASA POWER API endpoint for temperature data
        // Note: You would need to replace this with actual coordinates and parameters you need
        const response = await fetch(
          'https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,RH2M,PRECTOTCORR&community=RE&longitude=-77&latitude=33&start=20220101&end=20221231&format=JSON'
        );
        
        if (!response.ok) {
          throw new Error(`NASA API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        setNasaData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNasaData();
  }, []);

  return (
    <div className="container">
      <div className="section-header">
        <h2>Carbon Emissions Analysis</h2>
        <p>Explore global carbon dioxide emissions by sector and region to understand the sources of greenhouse gases.</p>
      </div>

      <div className="data-grid cols-2">
        <div className="chart-card">
          <h3>Emissions by Sector</h3>
          <p>Distribution of global CO2 emissions across different economic sectors.</p>
          <div className="chart-container">
            <Bar data={sectorData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-card">
          <h3>Emissions by Region</h3>
          <p>Global CO2 emissions distributed by geographic regions.</p>
          <div className="chart-container">
            <Pie data={regionData} options={pieOptions} />
          </div>
        </div>
      </div>

      <div className="nasa-data-section">
        <h3>NASA Climate Data</h3>
        {loading && <div className="loading-state">Loading NASA climate data...</div>}
        {error && <div className="error-state">Error loading NASA data: {error}</div>}
        {nasaData && (
          <div>
            <p className="mb-lg">
              Live climate data from NASA POWER API:
            </p>
            <div className="data-grid cols-2">
              <div className="chart-card">
                <h4>Temperature Data</h4>
                <p>Sample data point: {nasaData?.properties?.parameter?.T2M ? Object.values(nasaData.properties.parameter.T2M)[0] : 'N/A'} °K</p>
              </div>
              <div className="chart-card">
                <h4>Humidity Data</h4>
                <p>Sample data point: {nasaData?.properties?.parameter?.RH2M ? Object.values(nasaData.properties.parameter.RH2M)[0] : 'N/A'} %</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="stats-grid cols-3">
          <div className="stat-card">
            <h4>Global Emissions</h4>
            <div className="stat-value">36.8 Gt</div>
            <div className="stat-description">CO2 emissions in 2020</div>
          </div>
          <div className="stat-card">
            <h4>Per Capita</h4>
            <div className="stat-value">4.8 tons</div>
            <div className="stat-description">Average CO2 per person</div>
          </div>
          <div className="stat-card">
            <h4>Cumulative</h4>
            <div className="stat-value">1.7 Tt</div>
            <div className="stat-description">Total since 1850</div>
          </div>
        </div>
        
        <div className="info-card">
          <h4>Understanding the Data:</h4>
          <ul>
            <li>1 Gt = 1 billion metric tons</li>
            <li>Data includes fossil fuel combustion and industrial processes</li>
            <li>Land use change accounts for about 10% of global emissions</li>
            <li>Asia is the largest emitter due to its large population and industrialization</li>
            <li>NASA POWER API provides live climate data from satellite observations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Emissions;