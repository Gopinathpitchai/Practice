import React from 'react';

function Tips({ data }) {
  const { carbonFootprint, waterUsage, wasteGeneration } = data;

  const generateTips = () => {
    const tips = [];
    
    if (carbonFootprint > 500) {
      tips.push("Try reducing your carbon footprint by carpooling or using public transport.");
    } else {
      tips.push("Great job on maintaining a low carbon footprint!");
    }

    if (waterUsage > 1000) {
      tips.push("Consider using water-saving devices and being mindful of water usage.");
    } else {
      tips.push("Good job on keeping your water usage in check!");
    }

    if (wasteGeneration > 10) {
      tips.push("Reduce waste by recycling and composting more.");
    } else {
      tips.push("You're doing great at minimizing waste generation!");
    }

    return tips;
  };

  return (
    <div className="mt-4">
      <h3>Your Environmental Impact Summary</h3>
      <p>Carbon Footprint: {carbonFootprint} kg CO2</p>
      <p>Water Usage: {waterUsage} liters</p>
      <p>Waste Generation: {wasteGeneration} kg</p>

      <h4>Tips to Reduce Your Impact:</h4>
      <ul>
        {generateTips().map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tips;
