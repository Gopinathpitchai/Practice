import { useState } from "react";


const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [Gmail, setGmail] = useState("");
  const [mobil, setMobil] = useState("");
  const [DOB, setDOB] = useState("");
  const [error, setError] = useState("");

  const clearAll = () => {
    setFirstname('');
    setLastname('');
    setAge('');
    setGmail('');
    setMobil('');
    setDOB('');
    setError('');
  };

  const Submit = (e) => {
    e.preventDefault();
    
    if (!firstname.trim()||!lastname.trim()) {
      return      setError('Please fill in the first name');
    
      
    }
    
    
    if (!age.trim()) {
      return setError('Please fill in the age');
    } 
    if (!Gmail.trim()) {
     return setError('Please fill in the Gmail');
    } 
    if (!mobil.trim()) {
      return setError('Please fill in the mobil');
    } 
    if (!DOB.trim()) {
      return setError('Please fill in the DOB');
    } 
    console.log(firstname, lastname, age, Gmail, mobil, DOB);
  };

  return (
    <form onSubmit={Submit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="First Name"
        />
      </div>
      <div>
      <label>Last Name:</label>
        <input
          type="text"
          name="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Last Name"
        />
      </div>
      <div>
      <label>Age:</label>
        <input
          type="number"
          name="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
      </div>
      <div>
      <label>Gmail:</label>
        <input
          type="text"
          name="Gmail"
          value={Gmail}
          onChange={(e) => setGmail(e.target.value)}
          placeholder="Gmail"
        />
      </div>
      <div>
      <label>Mobil:</label>
        <input
          type="number"
          name="Mobil"
          value={mobil}
          onChange={(e) => setMobil(e.target.value)}
          placeholder="Mobile"
        />
      </div>
      <div>
      <label>DOB:</label>
        <input
          type="number"
          name="DOB"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
          placeholder="Date of Birth"
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Submit</button>
      <button type="button" onClick={clearAll}>Clear</button>
    </form>
  );
};

export default Form;
