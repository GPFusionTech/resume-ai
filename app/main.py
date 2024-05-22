from fastapi import FastAPI
from openai import OpenAI
# import json
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
# import os

load_dotenv()

app = FastAPI()

# Définir votre clé d'API OpenAI
client = OpenAI(
  api_key=""
)

AssistantId="asst_Ynxvhgag8hPwO3xYIbdg5B9t"

# Define allowed origins
origins = [
    "http://localhost",
    "http://localhost:3000",  # Add the specific port if you're using it
]

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
# allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


# Fonction pour générer le CV en utilisant l'API ChatGPT
def generate_cv_fr(cv_data):
    name = cv_data["fullname"]
    experience = cv_data["experience"]
    education = cv_data["education"]
    skills = cv_data["skills"]
  
    prompt = f"Mon nom est {name}. J'ai {experience} d'experience en {skills}. Je suis diplomé en {education}. Peux-tu générer un CV."

    template = {
       "Profil": {
        "Titre": "DevOps - Junior",
        "Informations_personnelles": {
            "Nom_complet": "Jean Dupont",
            "Adresse_postale": "123 Rue de la République, 75001 Paris",
            "Numéro_de_téléphone": "+33 6 12 34 56 78",
            "Adresse_email": "jeandupont@example.com",
            "Réseaux_sociaux": {
                "LinkedIn": "https://www.linkedin.com/in/jeandupont",
                "GitHub": "https://github.com/jeandupont",
                "X": "https://twitter.com/jeandupont",
            },
        },
        "Objectif_professionnel": "Passionné par les technologies DevOps, je recherche une opportunité professionnelle qui me permettra de mettre en pratique mes compétences et d'acquérir de nouvelles connaissances dans un environnement dynamique.",
      },
      "Experience_professionnelle": [
        {
            "Entreprise": "WebTech Inc.",
            "Poste": "Développeur Junior",
            "Dates": "2020-10-01 - Présent",
            "Description": "Collaboration à la mise en place de l'automatisation des déploiements, gestion des containers Docker, résolution des incidents liés à l'infrastructure.",
        },
        {
            "Entreprise": "Tech Solutions Ltd.",
            "Poste": "Stagiaire DevOps",
            "Dates": "2020-07-01 - 2020-09-01",
            "Description": "Assistance à la mise en place de pipelines CI/CD, gestion des configurations avec Ansible, surveillance et maintenance des infrastructures cloud.",
        }
      ],
      "Competences": {
        "Techniques": {
            "Déploiement": ["Docker", "Kubernetes"],
            "Automatisation": ["Ansible", "Jenkins"],
            "Gestion_de_version": ["Git"],
        },
        "Communication": ["Esprit d'équipe", "Communication claire et efficace"],
        "Langues_étrangères": [{"Langue": "Anglais", "Niveau": "Intermédiaire"}],
      },
      "Formation": [
          {
          "Diplôme": "Baccalauréat en Informatique",
          "Établissement": "Université de Paris",
          "Dates": "2017-09-01 - 2020-06-01",
          "Spécialisation": "Systèmes et Réseaux",
          }
      ],
      "Outils": ["Docker", "Kubernetes", "Ansible", "Git", "Jenkins"],
      "Certifications": ["Certification Docker Associate"],
      "Projets_personnels": ["Auteur du blog les passionné https://", ""],
      "Loisirs_et_autres": [
      "Participation à des meetups DevOps",
      "Lecture d'articles techniques",
      "Pratique de la course à pied",
      ],
    }

    response = client.chat.completions.create(
                model="gpt-3.5-turbo-0125",
                messages=[
                          {"role": "system", "content": "Tu es un expert en rédaction de curriculum vitae (CV)."},
                          {"role": "system", "content": "Utilise l'exemple ci dessous pour proposer un CV."},
                          {"role": "system", "content": f"{template}"},
                          {"role": "system", "content": "Tu pourras ajouter les compétences nécessaires en fonction du  niveau qui te sera indiqué au niveau du titre du profil (exemple : Auditeur - Expert)."},
                          {"role": "system", "content": "Tu peux ajouter autant d'expériences nécessaires en fonction du niveau."},
                          {"role": "system", "content": "Tu proposes les compétences et outils qui sont les plus demandés sur le marché."},
                          {"role": "system", "content": "Tu proposes plusieurs expériences dans de grandes entreprises."},
                          {"role": "system", "content": "Tu proposes les formations et certifications nécessaires pour le niveau."},
                          {"role": "system", "content": "La reponse est au format JSON."},
                          {"role": "system", "content": "tu n'ajoutes aucun commentaire supplémentaire."},
                          {"role": "user", "content": prompt}
                ]) 
    cv_text = response.choices[0].message.content
    return cv_text


# Fonction pour vérifier si l'assistant ChatGPT existe.
def verif_chat_assistant():
    assistants = client.beta.assistants.list()
    return any(assistant.id == AssistantId for assistant in assistants)

# Fonction pour créer un assistant ChatGPT
def create_chat_assistant():
  # test de l'exixtance de l'assistant.
  if verif_chat_assistant():
    assistant = client.beta.assistants.retrieve(AssistantId)
  else:
    assistant = client.beta.assistants.create(
        name= "Expert CV",
        instructions= "Tu es un expert en rédaction de CV de haute qualité.",
        model="gpt-3.5-turbo-0125"
    )
  return assistant


# Fonction pour générer un nouveau CV amélioré
def generate_new_cv(gen_cv, assistant):
    thread = client.beta.threads.create()
    message = client.beta.threads.messages.create(
      thread_id = thread.id,
      role = "user",
      content = f"{gen_cv}"        
    )

    run = client.beta.threads.runs.create_and_poll(
      thread_id = thread.id,
      assistant_id = assistant.id,
      instructions = "Pourrais-tu améliorer le CV en respectant le format initial et fournir les élements manquants et rendre le résultat au format JSON sans ajouter de commentaires. "
    )


    if run.status == 'completed': 
      messages = client.beta.threads.messages.list(
      thread_id = thread.id,
      run_id = run.id
    )
      for msg in reversed(messages.data):
        res = msg.content[0].text.value
    return res


@app.post("/generate_cv_json/")
async def generate_cv_json(cv_data: dict):
    gen_cv = generate_cv_fr(cv_data)
    assistant = create_chat_assistant()
    cv_generated = generate_new_cv(gen_cv, assistant)
    return cv_generated