import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


  function EditEducation() {
    const { id } = useParams();
    
    const [education, setEducation] = useState({
      gender: '',
      'race/ethnicity': '',
      'parental level of education': '',
      lunch: '',
      'test preparation course': '',
      'math score': '',
      'reading score': '',
      'writing score': '',
    });
  
    useEffect(() => {
      // Récupérer les données de l'éducation par ID et les stocker dans l'état education
      axios.get(`https://nosqltest1.onrender.com/educations/${id}`)
        .then((res) => {
          console.log(res.data);
          setEducation(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

   

    const handleSave = (e) => {
      e.preventDefault();
  
      axios.put(`https://nosqltest1.onrender.com/editEducation/${id}`, education)
        .then((response) => {
          console.log('Education modifiée avec succès', response.data);
          alert('Modification effectuée avec succès'); // Ajouter l'alerte ici
        })
        .catch((error) => {
          console.error('Erreur lors de la modification de l\'éducation', error);
          alert('Erreur lors de la modification de l\'éducation'); // Ajouter l'alerte ici
        });
    };
    


    const handleChange = (e) => {
      const { name, value } = e.target;
      setEducation((prevEducation) => ({
        ...prevEducation,
        [name]: value,
      }));
    };
    
  
  
  return (
    <div className="container mt-5">
      <h1 className="text-center">Modifier l'éducation</h1>
      {/* {successMessage && (
        <div className="col-md-8 offset-md-2 alert alert-primary mt-4">{successMessage}</div>
      )} */}
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="gender">Genre :</label>
              <input
                type="text"
                className="form-control"
                id="gender"
               value={education.gender}
            
                onChange={handleChange}
                name="gender"
               // onChange={(e) => setEducation({ ...education, gender: e.target.value })}
          
              />
            </div>
            <div className="form-group">
              <label htmlFor="race/Ethnicity">Race/Ethnicity :</label>
              <input
                type="text"
                className="form-control"
                id="race/Ethnicity"
              value={education['race/ethnicity']}
        
                onChange={handleChange}
                name="race/ethnicity"
               // onChange={(e) => setEducation({ ...education, 'race/ethnicity': e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="parental level of education">Niveau d'éducation des parents :</label>
              <input
                type="text"
                className="form-control"
                id="parental level of education"
                value={education['parental level of education']}
             
                onChange={handleChange}
                name="parental level of education"
              //  onChange={(e) => setEducation({ ...education, 'parental level of education': e.target.value })}
              />

            </div>
            <div className="form-group">
              <label htmlFor="lunch">Déjeuner :</label>
              <input
                type="text"
                className="form-control"
                id="lunch"
                value={education.lunch}
                onChange={handleChange}
                name="lunch"
               // onChange={(e) => setEducation({ ...education, lunch: e.target.value })}
                />
             </div>
                <div className="form-group">
               <label htmlFor="test preparation course">Cours de préparation aux tests :</label>
              <input
                type="text"
                className="form-control"
                id="test preparation course"
                value={education['test preparation course']}
                onChange={handleChange}
                name="test preparation course"
               // onChange={(e) => setEducation({ ...education, 'test preparation course': e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="math score">Score en mathématiques :</label>
              <div className="form-group">
  
              <input
                type="number"
                className="form-control"
                id="math score"
                value={education['math score']}
                onChange={handleChange}
                name="math score"
                //onChange={(e) => setEducation({ ...education, 'math score': e.target.value })}
              />
            </div>

            </div>
            <div className="form-group">
              <label htmlFor="reading score">Score en lecture :</label>
              <input
                type="number"
                className="form-control"
                id="reading score"
                value={education['reading score']}
                onChange={handleChange}
                name="reading score"
               // onChange={(e) => setEducation({ ...education, 'reading score': e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="writing score">Score en écriture :</label>
              <input
                type="number"
                className="form-control"
                id="writing score"
                value={education['writing score']}
                onChange={handleChange}
                name="writing score"
               // onChange={(e) => setEducation({ ...education, 'writing score': e.target.value })}
              />
            </div>
            <div className="d-flex justify-content-start mt-4">
              <button type="submit" className="btn btn-primary" >
                Enregistrer
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
      }  

export default EditEducation;
