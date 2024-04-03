import React from 'react';
import { useState } from "react";

export default function AddProfileLink(){
    const [profileLinks, setProfileLinks]= useState([{profileLink: ""}]);
    
    const addLink = () => {
        setProfileLinks([...profileLinks, {profileLink: ""}]);
    };
    
    const removeLink = (index) => {
        setProfileLinks(profileLinks.filter((_, i) => i!== index));
    };

   return (
        <div className="input-group">
            {profileLinks.map((item, index) => (
                <div className="input-group" key={index}>
                    <input
                        name="profileLink"
                        type="text"
                        className="form-control"
                        value={item.profileLink}
                        placeholder="liens vers vos profils réseaux https://"
                        autocomplete="off"
                    />
                    <div class="input-group-append">
                        {profileLinks.length > 1 && (
                            <button className="btn btn-outline-secondary del-link" type="button" onClick={() => removeLink(index)}>-</button>
                        )}
                        {profileLinks.length - 1 === index && profileLinks.length < 5 && (
                                <button className="btn btn-outline-secondary add-link" type="button" onClick={() => addLink()}>+</button>
                        )}  
                    </div>
                </div>
            ))}
        </div>
    );

}