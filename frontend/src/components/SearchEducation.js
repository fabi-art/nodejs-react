





import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('https://nosqltest1.onrender.com/educations', {
        params: { searchTerm },
      });

      // Filtrer les résultats en fonction du terme de recherche
      const filteredResults = response.data.filter((education) => {
        // Ajoutez ici les propriétés que vous souhaitez comparer avec le terme de recherche
        
        const firstLetter = education.gender[0].toLowerCase(); // Obtenez la première lettre du genre

        // Vérifiez spécifiquement pour les genres "male" et "female"
        if (searchTerm.toLowerCase() === 'male' && firstLetter === 'm') {
          return true;
        }

        if (searchTerm.toLowerCase() === 'female' && firstLetter === 'f') {
          return true;
        }
        return (
        
          firstLetter === searchTerm.toLowerCase() ||
          education['race/ethnicity'].toLowerCase().includes(searchTerm.toLowerCase()) ||
          education['parental level of education'].toLowerCase().includes(searchTerm.toLowerCase()) ||
          education.lunch.toLowerCase().includes(searchTerm.toLowerCase()) ||
          education['test preparation course'].toLowerCase().includes(searchTerm.toLowerCase()) ||
          education['math score'].toString().includes(searchTerm) ||
          education['reading score'].toString().includes(searchTerm) ||
          education['writing score'].toString().includes(searchTerm)
        );
      });

      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container-fluid row my_media_query">
      <h2 className="text-center my_media_query" id="titre">
        Recherche d'une éducation
      </h2>
      <div className="col-12">
        <input
          name="searchTerm"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Rechercher une éducation"
          className="form-control"
          onKeyUp={handleSearchSubmit}
        />
      </div>
      <div className="col-6 offset-3">
        <div>
          <table className="table table-striped">
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
              {searchResults.map((education) => (
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
      </div>
    </div>
  );
}

export default Search;