import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Ecole() {
  const [educations, setEducations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Nombre d'éducations par page
  const totalPageCount = Math.ceil(educations.length / pageSize);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    axios
      .delete(`https://nosqltest.onrender.com/educations/${id}`)
      .then((res) =>
        setEducations((prevEducations) =>
          prevEducations.filter((education) => education._id !== id)
        )
      )
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get('https://nosqltest.onrender.com/educations')
      .then((res) => {
        setEducations(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [error, setEducations]);

  const visibleEducations = educations.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  
  return (
    <div className="container-fluid" style={{ marginTop: "20px" }}>
      <div className="row">
        <h1 className="text-center" id="titre">Bienvenue sur notre application sur la performance éducative</h1>
        <div className="col-12 text-center" style={{ margin: "20px" }}>
          <button className="btn btn-primary" style={{ margin: "5px" }}><a className="navbar-brand" href="/addEducation">Ajouter une education</a></button>
          <button className="btn btn-primary"><a className="navbar-brand" href="/searchEducation">Rechercher par critère</a></button>
          <button className="btn btn-primary"><a className="navbar-brand" href="/countByGender">Nombre d'education par genre</a></button>
          <button className="btn btn-primary"><a className="navbar-brand" href="bestScore">Liste des meilleures educations</a></button>
        </div>

        <div className="col-12">
          <h3 className="text-center">Liste des performances  </h3>
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleEducations.map((education) => (
                    <tr key={education._id}>
                      <td>{education.gender}</td>
                      <td>{education['race/ethnicity']}</td>
                      <td>{education['parental level of education']}</td>
                      <td>{education.lunch}</td>
                      <td>{education['test preparation course']}</td>
                      <td>{education['math score']}</td>
                      <td>{education['reading score']}</td>
                      <td>{education['writing score']}</td>
                      <td>
                        <button
                          onClick={() => (window.location.href = `/editEducation/${education._id}`)}
                          className="btn btn-warning btn-xs"
                          style={{ margin: "2px" }}
                        >
                          Modifier
                        </button>
                        <button
                          className="btn btn-danger"
                          style={{ margin: "2px" }}
                          onClick={() => handleDelete(education._id)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="col-12 text-center" style={{ margin: "20px" }}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-primary"
          >
            Page précédente
          </button>
          <span style={{ margin: "0 10px" }}>{`Page ${currentPage} sur ${totalPageCount}`}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPageCount}
            className="btn btn-primary"
          >
            Page suivante
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ecole;
