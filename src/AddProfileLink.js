import React from 'react';

export default function AddProfileLink({profileLinks, onChange}) {
    //const [profileLinks, setProfileLinks]= useState([{profileLink: ""}]);
    
    const addLink = () => {
        //setProfileLinks([...profileLinks, {profileLink: ""}]);
        onChange([...profileLinks, { profileLink: ""}]);
    };

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...profileLinks];
        onChangeValue[index][name] = value;
        //setProfileLinks(onChangeValue);
        onChange(onChangeValue);
      };
    
    const removeLink = (index) => {
        const newArray = [...profileLinks];
        newArray.splice(index, 1);
        onChange(newArray);
        //setProfileLinks(newArray);
        //setProfileLinks(profileLinks.filter((_, i) => i!== index));
    };

   return (
        <div className="input-group">
            {profileLinks.map((item, index) => (
                <div className="input-group" key={index}>
                    <input
                        name="profileLink"
                        type="text"
                        className="form-control"
                        placeholder="liens vers vos profils réseaux https://"
                        value={item.profileLink}
                        onChange={(event) => handleChange(event, index)}
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
            {/*<div className="body"> {JSON.stringify(profileLinks)} </div>*/}
        </div>
        
    );

}