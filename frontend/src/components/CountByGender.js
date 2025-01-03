import React, { useState } from 'react';
import axios from 'axios';

function CountByGender() {
  const [gender, setGender] = useState('');
  const [countByGender, setCountByGender] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://nosqltest1.onrender.com/countByGender', {
        params: {
          gender: gender // Utilisez la valeur actuelle de 'gender'
        }
      });

      const count = response.data || 0;
      setCountByGender(count);
    } catch (error) {
      console.error("Erreur lors de la récupération du nombre d'éducations par genre", error);
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    


 <div className="container mt-3" style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
  <div className="row justify-content-center">
    <div className="col-md-6 text-center">
      <h2 className="mb-4">Sélectionnez le genre</h2>
      <div className="form-group mb-3">
        <select className="form-control" value={gender} onChange={handleGenderChange}>
          <option value="">Sélectionner</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </select>
      </div>
      <div className="form-group mb-3">
      <div className="form-group mb-3">
  <button 
    className="btn btn-primary btn-lg" 
    style={{
      backgroundColor: 'white', 
      color: 'black',
      fontWeight: 'bold', 
      border: '3px solid #007BFF', 
      padding: '8px 16px', // Adjust padding for size
      fontSize: '14px'     // Adjust font size if needed
    }} 
    onClick={handleButtonClick}
  >
    Compter éducations par genre
  </button>
</div>

      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={countByGender !== null ? countByGender : ''}
          readOnly
        />
      </div>
    </div>
  </div>
</div> 

  
  );
}

export default CountByGender;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function CountByGender() {
//   const [gender, setGender] = useState('');
//   const [countByGender, setCountByGender] = useState(null);



// const fetchData = async () => {
//   try {
//     const response = await axios.get('http://localhost:3333/countByGender', {
//       params: {
//         gender: gender // Utilisez la valeur actuelle de 'gender'
//       }
//     });

//     const count = response.data || 0;
//     setCountByGender(count);
//   } catch (error) {
//     console.error("Erreur lors de la récupération du nombre d'éducations par genre", error);
//   }
// };

// const handleGenderChange = (event) => {
//   setGender(event.target.value);
// };

// const handleButtonClick = () => {
//   fetchData();
// };

  

//   return (
//     <div>
//       <select value={gender} onChange={handleGenderChange}>
//         <option value="">Choisir un genre</option>
//         <option value="male">Homme</option>
//         <option value="female">Femme</option>
//       </select>
//       <button onClick={handleButtonClick}>Compter éducations par genre</button>
//       <input type="text" value={countByGender !== null ? countByGender : ''} readOnly />
//     </div>
//   );
// }

// export default CountByGender;
