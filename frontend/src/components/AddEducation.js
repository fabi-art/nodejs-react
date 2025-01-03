import React, { useState } from 'react';

function AddEducation({ handleAdd }) {
  const [educationData, setEducationData] = useState({
    gender: '',
    'race/ethnicity': '',
    'parental level of education': '',
    lunch: '',
    'test preparation course': '',
    'math score': 0,
    'reading score': 0,
    'writing score': 0,
  });

  const placeholderGender = 'Genre';
  const placeholderRaceEthnicity = 'Origine ethnique';
  const placeholderParentalLevel = 'Niveau éducation parentale';
  const placeholderLunch = 'Déjeuner';
  const placeholderTestPreparationCourse = 'Cours de préparation au test';
  const placeholderMathScore = 'Score en mathématiques';
  const placeholderReadingScore = 'Score en lecture';
  const placeholderWritingScore = 'Score en écriture';

  const handleChangeGender = (event) => {
    setEducationData((prevData) => ({
      ...prevData,
      gender: event.target.value,
    }));
  };

  const handleChangeRaceEthnicity = (event) => {
    setEducationData((prevData) => ({
      ...prevData,
      'race/ethnicity': event.target.value,
    }));
  };

  const handleChangeParentalLevel = (event) => {
    setEducationData((prevData) => ({
      ...prevData,
      'parental level of education': event.target.value,
    }));
  };

  const handleChangeLunch = (event) => {
    setEducationData((prevData) => ({
      ...prevData,
      lunch: event.target.value,
    }));
  };

  const handleChangeTestPreparationCourse = (event) => {
    setEducationData((prevData) => ({
      ...prevData,
      'test preparation course': event.target.value,
    }));
  };

  const handleChangeMathScore = (event) => {
    setEducationData((prevData) => ({
      ...prevData,
      'math score': parseInt(event.target.value, 10) || 0,
    }));
  };

  const handleChangeReadingScore = (event) => {
    setEducationData((prevData) => ({
      ...prevData,
      'reading score': parseInt(event.target.value, 10) || 0,
    }));
  };

  const handleChangeWritingScore = (event) => {
    setEducationData((prevData) => ({
      ...prevData,
      'writing score': parseInt(event.target.value, 10) || 0,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(

    educationData.gender,
    educationData['race/ethnicity'],
    educationData['parental level of education'],
    educationData.lunch,
    educationData['test preparation course'],
    educationData['math score'],
    educationData['reading score'],
    educationData['writing score']);
    setEducationData({
      gender: '',
      'race/ethnicity': '',
      'parental level of education': '',
      lunch: '',
      'test preparation course': '',
      'math score': 0,
      'reading score': 0,
      'writing score': 0,
    });
  };

  return (
    <div className="container-fluid my_media_query">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="text-center" id="titre">
            Ajout d'une éducation
          </h3>
          <div className="form-group row">
            <div className="col-12" style={{ margin: '10px' }}>
              <input
                name="gender"
                className="form-control"
                placeholder={placeholderGender}
                value={educationData.gender}
                type="text"
                onChange={handleChangeGender}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12" style={{ margin: '10px' }}>
              <input
                name="raceEthnicity"
                type="text"
                className="form-control"
                placeholder={placeholderRaceEthnicity}
                value={educationData['race/ethnicity']}
                onChange={handleChangeRaceEthnicity}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12" style={{ margin: '10px' }}>
              <input
                name="parentalLevelOfEducation"
                className="form-control"
                type="text"
                placeholder={placeholderParentalLevel}
                value={educationData['parental level of education']}
                onChange={handleChangeParentalLevel}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12" style={{ margin: '10px' }}>
              <input
                name="lunch"
                className="form-control"
                type="text"
                placeholder={placeholderLunch}
                value={educationData.lunch}
                onChange={handleChangeLunch}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12" style={{ margin: '10px' }}>
              <input
                name="testPreparationCourse"
                className="form-control"
                type="text"
                placeholder={placeholderTestPreparationCourse}
                value={educationData['test preparation course']}
                onChange={handleChangeTestPreparationCourse}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12" style={{ margin: '10px' }}>
              <input
                name="mathScore"
                type="number"
                className="form-control"
                placeholder={placeholderMathScore}
                value={educationData['math score']}
                onChange={handleChangeMathScore}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12" style={{ margin: '10px' }}>
              <input
                name="readingScore"
                type="number"
                className="form-control"
                placeholder={placeholderReadingScore}
                value={educationData['reading score']}
                onChange={handleChangeReadingScore}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12" style={{ margin: '10px' }}>
              <input
                name="writingScore"
                type="number"
                className="form-control"
                placeholder={placeholderWritingScore}
                value={educationData['writing score']}
                onChange={handleChangeWritingScore}
              />
            </div>
          </div>
          <input
            type="submit"
            value="Ajouter"
            className="btn btn-primary d-block mx-auto text-center"
          />
        </div>
      </form>
    </div>
  );
}

export default AddEducation;
