import React, { useState } from 'react';

function CarbonForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    carbonFootprint: '',
    waterUsage: '',
    wasteGeneration: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="carbonFootprint" className="form-label">Carbon Footprint (kg CO2)</label>
        <input
          type="number"
          className="form-control"
          id="carbonFootprint"
          name="carbonFootprint"
          value={formData.carbonFootprint}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="waterUsage" className="form-label">Water Usage (liters)</label>
        <input
          type="number"
          className="form-control"
          id="waterUsage"
          name="waterUsage"
          value={formData.waterUsage}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wasteGeneration" className="form-label">Waste Generation (kg)</label>
        <input
          type="number"
          className="form-control"
          id="wasteGeneration"
          name="wasteGeneration"
          value={formData.wasteGeneration}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CarbonForm;
