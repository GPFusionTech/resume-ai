import React, { useState } from 'react';
/*import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';*/
import AddResumeForm from './ResumeForm'
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


const changeFormResults = (formResulJSON) =>{
    if (formResulJSON !== ""){
        formResulJSON = JSON.parse(formResulJSON);
        console.log(formResulJSON);
    }else{
        formResulJSON = {
            Profil: {
                Titre: "",
                Informations_personnelles: {
                    Nom: "",
                    Prenom: "",
                    Adresse_email: "",
                    Numéro_de_téléphone: "",
                    Date_naissance: "",
                    Sexe: ""
                },
                Objectif_professionnel: ""
                //Competences: "",
                //Compétences_techniques: "",
                //Compétences_langues: "",
            },
            Experience_professionnelle: [
                {
                    Poste: "",
                    Entreprise: "",
                    Dates: "",
                    Description: ""
                },
            ],
            Formation: [
                {
                    Diplôme: "",
                    Établissement: "",
                    Dates: "",
                    Sécialisation: ""
                },
            ],
            Comptétences:{
                Langues_étrangères:[],
                soft_skills:[],
                Techniques:[]
            }
        };
    };
    return formResulJSON;
}
function App() {
    const [formResults, setFormResults] = useState('');

    const handleFormResults = (updateFormResult) =>{
        setFormResults(updateFormResult);
    }

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 sidebar">
                <div className="sidebar-content">
                    <h2>Formulaire</h2>
                    <AddResumeForm formResults={formResults} setFormResults={handleFormResults}/>
                </div>
                <div className="sidebar-footer">
                    <button className="btn btn-secondary" disabled>Télécharger en .docx</button>
                </div>
            </div>
            <div className="col-md-9 content">
                <h2>Résultat</h2>
                <div id="result">
                { changeFormResults(formResults).Profil.Titre !== "" && (
                    <div className="cv-container">
                        <div className="left-column">
                            <img className="portait" src="" alt="Photo" />
                            <div className="section">
                            <p>
                                <i className="icon fab fa-linkedin text-darkblue"></i> 
                            </p>
                            </div>
                            <div className="section">
                            <h2>À PROPOS</h2>
                            <p>
                            { changeFormResults(formResults).Profil.Objectif_professionnel}
                            </p>
                            
                            </div>
                            <div className="section">
                            <h2>COMPÉTENCES</h2>
                            <ul className="skills">

                            </ul>
                            </div>
                            <div className="section">
                            <h2>Langues</h2>
                            <p>
                                Français, langue maternelle
                                <br />
                                
                            </p>
                            </div>
                            <div className="section">
                            <h2>Centres d'intérêt</h2>
                            <p>
                                
                            </p>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="header">
                            <h1>{ changeFormResults(formResults).Profil.Informations_personnelles.Nom_complet}</h1>
                            <p>{ changeFormResults(formResults).Profil.Titre }</p>
                            <ul className="infos">
                                <li><i className="icon fas fa-at text-blue"></i> <a href="mailto:">{ changeFormResults(formResults).Profil.Informations_personnelles.Adresse_email}</a></li>
                                <li><i className="icon fas fa-phone text-blue"></i> </li>
                                <li><i className="icon fas fa-map-marker-alt text-blue"></i> { changeFormResults(formResults).Profil.Informations_personnelles.Adresse_postale}</li>
                            </ul>
                            </div>
                            <div className="content">
                            <div className="section">
                                <h2>Expériences <br /><span className="text-blue">professionelles</span></h2>
                               { changeFormResults(formResults).Experience_professionnelle.map((experience, index) => (
                                <div className="experience" key={index}>
                                    <p>
                                        <strong>{experience.Entreprise} {experience.Dates}</strong>
                                        <br />
                                        {experience.Poste}
                                    </p>
                                    <ul className="experience-list">
                                        <li>{experience.Description}</li>
                                    </ul>
                                </div>
                               ))}
                                
                            </div>
                            <div className="section">
                                <h2>Formation</h2>
                                { changeFormResults(formResults).Formation.map((formation, index) => (
                                    <div className="formation" key={index}>
                                        <p>
                                            <strong>{formation.Diplôme} {formation.Dates}</strong>
                                            <br />
                                            {formation.Établissement}
                                        </p>
                                        <p>
                                            <em>{formation.Spécialisation}</em>
                                        </p>
                                    </div>
                               ))}
                            </div>
                            </div>
                        </div>
                    </div>
                )}
                </div> 
            </div>
        </div>
    </div>

  );
}

export default App;
