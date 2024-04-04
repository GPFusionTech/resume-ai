import React, { useState } from 'react';
import AddProfileLink from './AddProfileLink';

export default function AddResumeForm() {
    const [profileLinks, setProfileLinks] = useState([{profileLink: ""}]);
    const [inputs, setInputs] = useState({
        name: "",
        prenom: "",
        adresse: "",
        email: "",
        telephone: "",
        metier: "",
        niveau: "",
        profileLinks: [] // Pour stocker les liens de profil dynamiquement ajoutés
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
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

    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.profileLinks = profileLinks;
        console.log(JSON.stringify(inputs));
       
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
                            id="nom"
                            placeholder="Entrez votre nom"
                            onChange={handleChange}
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