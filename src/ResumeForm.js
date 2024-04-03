import React from 'react';
import { useState } from "react";
import AddProfileLink from './AddLinkFields';

class ResumeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            niveau: junior
        };

    };

   

    render() {
        return (
            <form on onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Informations personnelles :</label>
                    <div classNameName="form-group mb-3">
                        <input type="text" className="form-control" id="nom" placeholder="Entrez votre nom" required />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="prenom" placeholder="Prénoms" required />
                    </div> 
                    <div className="form-group mb-3">
                        <label>
                        Adresse:
                        <input 
                            type="text"
                            className="form-control"
                            id="adresse"
                            placeholder="Entrez votre adresse"
                            required />
                        </label>    
                    </div>
                    <div className="form-row mb-3">
                        <div className="form-group col-md-7">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Entrez votre email"
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                id="telephone"
                                placeholder="telephone"
                                required
                            />
                        </div>
                    </div>
                    <div id="profile-link" className="form-group mb-3">
                            <AddProfileLink />
                    </div>
                </div>
                <div className="form-group">
                    <label for="metier">Métier :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="metier"
                        placeholder="Entrez votre métier"
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


}