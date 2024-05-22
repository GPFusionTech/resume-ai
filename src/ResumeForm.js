import React, { useState } from 'react';
import axios from 'axios';
import AddProfileLink from './AddProfileLink';

export default function AddResumeForm({formResults, setFormResults}) {
    const [profileLinks, setProfileLinks] = useState([{profileLink: ""}]);
    const [inputs, setInputs] = useState({
        name: "",
        prenom: "",
        adresse: "",
        email: "",
        telephone: "",
        education:"",
        metier: "",
        niveau: "",
        profileLinks: [] // Pour stocker les liens de profil dynamiquement ajoutés
    });

   const [formData, setFormData] = useState({
        fullname: "", 
        experience: "",  
        education: "", 
        skills: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        /*setInputs(Inputs => ({
            ...Inputs,
            [name]: value
        }));*/
        setInputs({
            ...inputs,
            [name]: value
        });

        //console.log(inputs.name);
    }

    const handleProfileLinksChange = (updatedProfileLinks) => {
        setProfileLinks(updatedProfileLinks);

    };

   /* const handleLinkChange = (index, value) => {
        const updatedLinks = [...inputs.profileLink];
        updatedLinks[index] = value;
        setInputs(prevInputs => ({
            ...prevInputs,
            profileLink: updatedLinks
        }));
    };*/

   
// fonction pour appeler l'API pour le CV
    const request = async() => {
        const options ={
            method: 'POST',
            url: 'http://127.0.0.1:8000/generate_cv_json',
            data: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try{
            const response = await axios.request(options);
            // const response = await axios.post("http://127.0.0.1:8000/generate_cv_json", formData);
           // console.log(response.data);

            const transJSON = (newData) => {
                try{
                    JSON.parse(newData);
                    setFormResults(newData);

                }catch(error){

                    console.error('La valeur n\'est pas au format JSON valide.');

                }
            }

            transJSON(response.data);

           //setFormResults(response.data);
           // setFormResults(response.data);
           

        }catch(error){
            console.error('Error:', error);
        }

    };

 
// Envoi des données
    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.profileLinks = profileLinks;
        
        setFormData({
            ...formData, 
            fullname: inputs.name + ' ' + inputs.prenom, 
            experience: inputs.niveau,  
            education: inputs.education, 
            skills: inputs.metier
        });

        //console.log(formData.fullname);

        //const formDataJSON = JSON.stringify(formData);

        //console.log(formDataJSON);
        
        request();
       
    };
    
    return (
            <form on onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Informations personnelles :</label>
                    <div classNameName="form-group mb-3">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Entrez votre nom"
                            value = { inputs.name }
                            onChange={ handleChange }
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="prenom"
                            className="form-control"
                            id="prenom"
                            placeholder="Prénoms"
                            onChange={handleChange}
                            required 
                        />
                    </div> 
                    <div className="form-group mb-3">
                        <label>Adresse:</label>  
                        <input 
                            type="text"
                            name="adresse"
                            className="form-control"
                            id="adresse"
                            placeholder="Entrez votre adresse"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row mb-3">
                        <div className="form-group col-md-7">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Entrez votre email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                id="telephone"
                                name='telephone'
                                placeholder="telephone"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div id="profile-link" className="form-group mb-3">
                        <AddProfileLink 
                            profileLinks={profileLinks}
                            onChange={handleProfileLinksChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="metier">Dernier Diplôme :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="education"
                        name="education"
                        placeholder="Entrez votre métier"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label for="metier">Métier :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="metier"
                        name="metier"
                        placeholder="Entrez votre métier"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Niveau :</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="niveau"
                            value="junior"
                            id="juniorRadio"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" for="juniorRadio">
                            Junior
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="niveau"
                            value="intermediaire"
                            id="intermediaireRadio"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" for="intermediaireRadio">
                            Intermédiaire
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="niveau"
                            value="senior"
                            id="seniorRadio"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" for="seniorRadio">
                            Senior
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="niveau"
                            value="expert"
                            id="expertRadio"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" for="expertRadio">
                            Expert
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Generer le CV</button>
            </form>
        );
    
}