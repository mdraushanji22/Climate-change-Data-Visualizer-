import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Dashboard = () => {
  // Sample data for temperature increase
  const tempData = {
    labels: ['1880', '1900', '1920', '1940', '1960', '1980', '2000', '2020'],
    datasets: [
      {
        label: 'Global Temperature Anomaly (°C)',
        data: [-0.2, -0.1, 0.0, 0.1, 0.0, 0.2, 0.5, 1.0],
        backgroundColor: 'rgba(220, 38, 38, 0.7)',
        borderColor: 'rgba(220, 38, 38, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Sample data for CO2 emissions
  const co2Data = {
    labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
    datasets: [
      {
        label: 'Global CO2 Emissions (Gt)',
        data: [22.3, 23.1, 24.5, 28.1, 32.1, 35.2, 36.8],
        fill: false,
        borderColor: 'rgba(30, 64, 175, 1)',
        backgroundColor: 'rgba(30, 64, 175, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
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
        text: 'Climate Data Visualization',
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

  return (
    <div className="container">
      <div className="text-center mb-xxl">
        <h2 className="text-h1 text-primary mb-md">Climate Change Dashboard</h2>
        <p className="text-body text-muted max-w-3xl mx-auto">
          Explore interactive visualizations of global climate data including temperature changes, 
          CO2 emissions, and other environmental indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xxl">
        <div className="card animate-fadeIn">
          <h3 className="text-h3 text-primary mb-md">Global Temperature Anomaly</h3>
          <p className="text-body text-muted mb-lg">
            The graph shows the deviation from the 20th century average temperature.
          </p>
          <div className="h-80">
            <Bar data={tempData} options={chartOptions} />
          </div>
        </div>

        <div className="card animate-fadeIn" style={{animationDelay: '0.1s'}}>
          <h3 className="text-h3 text-primary mb-md">Global CO2 Emissions</h3>
          <p className="text-body text-muted mb-lg">
            Annual carbon dioxide emissions from fossil fuels and industry (Gigatonnes).
          </p>
          <div className="h-80">
            <Line data={co2Data} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="card mb-xxl">
        <h3 className="text-h3 text-primary mb-lg">Key Climate Indicators</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="card border-left">
            <h4 className="text-h4 text-primary mb-sm">Temperature Rise</h4>
            <p className="text-display text-accent">+1.1°C</p>
            <p className="text-body text-muted">since pre-industrial times</p>
          </div>
          <div className="card border-left">
            <h4 className="text-h4 text-primary mb-sm">CO2 Concentration</h4>
            <p className="text-display text-primary">421 ppm</p>
            <p className="text-body text-muted">parts per million in 2022</p>
          </div>
          <div className="card border-left">
            <h4 className="text-h4 text-primary mb-sm">Sea Level Rise</h4>
            <p className="text-display text-secondary">21 cm</p>
            <p className="text-body text-muted">since 1880</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;