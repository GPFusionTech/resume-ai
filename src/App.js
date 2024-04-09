import React, { useState } from 'react';
/*import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';*/
import AddResumeForm from './ResumeForm'
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [formResults, setFormResults] = useState('');

    const handleformResults = (updateformrresult) =>{
        setFormResults(updateformrresult);
    }

   


  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 sidebar">
                <div className="sidebar-content">
                    <h2>Formulaire</h2>
                    <AddResumeForm formResults={formResults} setFormResults={handleformResults}/>
                </div>
                <div className="sidebar-footer">
                    <button className="btn btn-secondary" disabled>Télécharger en .docx</button>
                </div>
            </div>
            <div className="col-md-9 content">
                <h2>Résultat</h2>
                <div id="result">
                    <pre>{JSON.stringify(formResults)}</pre>
                </div>
            </div>
        </div>
    </div>

  );
}

export default App;
