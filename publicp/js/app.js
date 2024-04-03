
/*import React, { useState } from "react";*/

/*function AddProfileLink(){
    const [profileLinks, setProfileLinks]= React.useState([{profileLink: ""}]);
    
    const addLink = () => {
        setProfileLinks([...profileLinks, {profileLink: ""}]);
    };
    
    const removeLink = (index) => {
        setProfileLinks(profileLinks.filter((_, i) => i!== index));
    };

   return (
        <div className="input-group">
            <input
                name="profileLink"
                type="text"
                className="form-control"
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
    );

}*/

/*const domNode = document.getElementById("profile-link");

const btn = document.querySelector(".add-link");

btn.addEventListener("click", function(){
    alert("ok");
});

document.getElementById("add-link").onclick = () => addLink();*/




/*$(document).ready(function() {
    // Datepicker initialization
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    });

     // Add links
     $(document).on('click', '.add-link', function() {
        $(this).closest('.experience').remove();
    });


    // Remove experience button click event
    $(document).on('click', '.remove-experience', function() {
        $(this).closest('.experience').remove();
    });

    // Form submission
    $('#mainForm').submit(function(event) {
        event.preventDefault();
        // Your form submission code here
    });
});*/