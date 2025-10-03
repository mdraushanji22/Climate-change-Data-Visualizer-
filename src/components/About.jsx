import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="component-header">
        <h2>About Climate Change Data Visualizer</h2>
        <p>Understanding climate change through interactive data visualizations</p>
      </div>

      <div className="mission-card">
        <h3>Our Mission</h3>
        <p>
          The Climate Change Data Visualizer aims to make climate science accessible to everyone by presenting 
          complex environmental data in an intuitive and engaging way. We believe that informed citizens are 
          better equipped to make decisions that benefit our planet's future.
        </p>
        <p>
          Our visualizations are based on data from reputable scientific organizations including NASA, NOAA, 
          and the Intergovernmental Panel on Climate Change (IPCC).
        </p>
      </div>

      <div className="info-grid">
        <div className="sources-card">
          <h3>Data Sources</h3>
          <ul className="sources-list">
            <li>
              <div className="source-indicator">
                <div className="indicator-dot blue"></div>
              </div>
              <div className="source-content">
                <span>NASA Goddard Institute for Space Studies:</span> Global temperature anomalies
              </div>
            </li>
            <li>
              <div className="source-indicator">
                <div className="indicator-dot green"></div>
              </div>
              <div className="source-content">
                <span>NOAA Global Monitoring Laboratory:</span> Atmospheric CO2 concentrations
              </div>
            </li>
            <li>
              <div className="source-indicator">
                <div className="indicator-dot yellow"></div>
              </div>
              <div className="source-content">
                <span>CSIRO:</span> Global sea level reconstruction
              </div>
            </li>
            <li>
              <div className="source-indicator">
                <div className="indicator-dot red"></div>
              </div>
              <div className="source-content">
                <span>Global Carbon Project:</span> Carbon emissions data
              </div>
            </li>
          </ul>
        </div>

        <div className="usage-card">
          <h3>How to Use This Tool</h3>
          <ol className="usage-list">
            <li>
              Navigate through different sections using the header menu to explore various climate indicators
            </li>
            <li>
              Interact with charts by hovering over data points to see specific values
            </li>
            <li>
              Use the toggle buttons to switch between different time periods or data views
            </li>
            <li>
              Compare regional variations in the maps and charts to understand global patterns
            </li>
            <li>
              Check the "Key Facts" sections for important takeaways from each dataset
            </li>
          </ol>
        </div>
      </div>

      <div className="science-card">
        <h3>Climate Change: The Science</h3>
        <p>
          Climate change refers to long-term changes in temperatures and weather patterns. While climate variations 
          can occur naturally, scientific evidence shows that human activities have been the main driver of climate 
          change since the 1800s, primarily due to burning fossil fuels like coal, oil, and gas.
        </p>
        <div className="science-grid">
          <div className="science-item">
            <h4>Greenhouse Effect</h4>
            <p>Greenhouse gases trap heat in the atmosphere, causing global warming.</p>
          </div>
          <div className="science-item">
            <h4>Feedback Loops</h4>
            <p>Melting ice reduces Earth's reflectivity, causing more heat absorption.</p>
          </div>
          <div className="science-item">
            <h4>Irreversibility</h4>
            <p>Some changes, like sea level rise, will continue for centuries even if emissions stop.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;