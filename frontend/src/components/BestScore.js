import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function BestScore() {
  const [educations, setEducations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ error,setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://nosqltest1.onrender.com/bestScore')  // Adjust the route to match the server
      .then((res) => {
        setEducations(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [error]);  // The dependency array is empty because we don't have dependencies

  return (
    <div className="container-fluid" style={{ marginTop: '20px' }}>
      <div className="row">
        <h1 className="text-center" id="titre">
          Bienvenue sur notre application des performances des éducations
        </h1>

        <div className="col-12">
          <h3 className="text-center">Liste des meilleures performances</h3>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <table className="col-12 table">
                <thead>
                  <tr>
                    <th>Genre</th>
                    <th>Origine ethnique</th>
                    <th>Niveau éducation parentale</th>
                    <th>Déjeuner</th>
                    <th>Cours de préparation aux tests</th>
                    <th>Score en mathématiques</th>
                    <th>Score en lecture</th>
                    <th>Score en écriture</th>
                  </tr>
                </thead>
                <tbody>
                  {educations.map((education) => (
                    <tr key={education._id}>
                      <td>{education.gender}</td>
                      <td>{education['race/ethnicity']}</td>
                      <td>{education['parental level of education']}</td>
                      <td>{education.lunch}</td>
                      <td>{education['test preparation course']}</td>
                      <td>{education['math score']}</td>
                      <td>{education['reading score']}</td>
                      <td>{education['writing score']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BestScore;
