import React from 'react';
import './styles.css'; // Assurez-vous d'avoir un fichier styles.css contenant le CSS fourni dans le code HTML initial

function CV(props) {
  const { data } = props;

  return (
    <div className="cv-container">
      <div className="left-column">
        <img className="portait" src={data.Profil.Informations_personnelles.Photo} alt="Photo" />
        <div className="section">
          <p>
            <i className="icon fab fa-linkedin text-darkblue"></i> {data.Profil.Informations_personnelles.Réseaux_sociaux.LinkedIn}
          </p>
        </div>
        <div className="section">
          <h2>À PROPOS</h2>
          <p>
            Le <strong>{data.Profil.Titre}</strong> est une de mes passions : j’aime intégrer ou imaginer des interfaces modernes, les rendre responsive et les dynamiser avec des animations élégantes. Mes deux technos de coeur sont <strong>{data.Competences.Techniques.Déploiement[0]}</strong> et <strong>{data.Competences.Techniques.Déploiement[1]}</strong>, que j’utilise depuis plus de 6 ans. Je suis aussi Fullstack : PHP, MySQL, Doctrine… 
          </p>
          <p>
            De nature débrouillard et indépendant dans mon travail, j’aime apprendre de nouvelles technologies, passer du temps à résoudre des problèmes et réaliser du code de qualité. Mes valeurs de travail : clean code, flexibilité, performance et sérieux.
          </p>
        </div>
        <div className="section">
          <h2>COMPÉTENCES</h2>
          <ul className="skills">
            {data.Competences.Techniques.Déploiement.map(skill => (
              <li key={skill}><i className="icon fas fa-check-circle text-darkblue"></i> <strong>{skill}</strong></li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h2>Langues</h2>
          <p>
            Français, langue maternelle
            <br />
            {data.Competences.Langues_étrangères.map(language => (
              <React.Fragment key={language.Langue}>
                {language.Langue}, {language.Niveau}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="section">
          <h2>Centres d'intérêt</h2>
          <p>
            {data.Loisirs_et_autres.map(interest => (
              <React.Fragment key={interest}>
                {interest}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="right-column">
        <div className="header">
          <h1>{data.Profil.Informations_personnelles.Nom_complet}</h1>
          <p>Freelance Front-end Developer</p>
          <ul className="infos">
            <li><i className="icon fas fa-at text-blue"></i> <a href={`mailto:${data.Profil.Informations_personnelles.Adresse_email}`}>{data.Profil.Informations_personnelles.Adresse_email}</a></li>
            <li><i className="icon fas fa-phone text-blue"></i> {data.Profil.Informations_personnelles.Numéro_de_téléphone}</li>
            <li><i className="icon fas fa-map-marker-alt text-blue"></i> {data.Profil.Informations_personnelles.Adresse_postale}</li>
          </ul>
        </div>
        <div className="content">
          <div className="section">
            <h2>Expériences <br /><span className="text-blue">professionelles</span></h2>
            {data.Experience_professionnelle.map(experience => (
              <div key={experience.Entreprise}>
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
            {data.Formation.map(formation => (
              <div key={formation.Diplôme}>
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
  );
}

export default CV;
