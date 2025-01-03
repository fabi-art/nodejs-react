import './App.css';
import Ecole from './components/Ecole';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import AddEducation from './components/AddEducation';
import axios from 'axios';
import { useState } from 'react';
import SearchEducation from './components/SearchEducation';
import EditEducation from './components/EditEducation';
import CountByGender from './components/CountByGender';
import BestScore from './components/BestScore';



function App() {
  
  const [educations, setEducations] = useState([]);
  const handleAdd = (gender, raceEthnicity, parentalLevelOfEducation, lunch, testPreparationCourse, mathScore, readingScore, writingScore) => {
    console.log("Adding education data:", { gender, raceEthnicity, parentalLevelOfEducation, lunch, testPreparationCourse, mathScore, readingScore, writingScore });
    axios
      .post('https://nosqltest1.onrender.com/educations/', {
        gender,
        'race/ethnicity': raceEthnicity,
        'parental level of education': parentalLevelOfEducation,
        lunch,
        'test preparation course': testPreparationCourse,
        'math score': mathScore,
        'reading score': readingScore,
        'writing score': writingScore,
      })
      .then((res) => {
        setEducations([...educations, res.data]);
      })
      .catch((error) => {
        console.error('Error adding education:', error);
      });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Ecole educations={educations} />} />

        <Route path="/about" element={<About />} />

        <Route path="/editEducation/:id" element={<EditEducation />} />


        <Route path="/addEducation" element={<AddEducation handleAdd={handleAdd} />} />

        <Route path="/searchEducation" element={<SearchEducation />} />
     
        <Route path="/countByGender" element={<CountByGender />} />
        
        <Route path="/bestScore" element={<BestScore />} /> 

      </Routes>
    </Router>
  );
}

export default App;
