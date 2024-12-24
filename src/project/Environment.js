import React, { useState, useEffect } from 'react';
import { Chart } from 'react-chartjs-2';

function Environment() {
  const [data, setData] = useState({
    carbonFootprint: [],
    waterUsage: [],
    wasteGeneration: [],
  });

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const calculateTotalImpact = () => {
    
    const totalCarbon = data.carbonFootprint.reduce((sum, value) => sum + value, 0);
    const totalWater = data.waterUsage.reduce((sum, value) => sum + value, 0);
    const totalWaste = data.wasteGeneration.reduce((sum, value) => sum + value, 0);

    return { totalCarbon, totalWater, totalWaste };
  };

  
  return (
    <div>
      <h1>Environmental Impact Tracker</h1>
      <div>
        <h2>Carbon Footprint</h2>
        <Chart
          type="line"
          data={{
            labels: data.carbonFootprint.map((value, index) => index + 1),
            datasets: [
              {
                label: 'Carbon Footprint',
                data: data.carbonFootprint,
                borderColor: 'blue',
                fill: false,
              },
            ],
          }}
          options={{
            
          }}
        />
      </div>
      

      <h2>Total Impact</h2>
      <p>Carbon Footprint: {calculateTotalImpact().totalCarbon}</p>
      <p>Water Usage: {calculateTotalImpact().totalWater}</p>
      <p>Waste Generation: {calculateTotalImpact().totalWaste}</p>

      
    </div>
  );
}

export default Environment;