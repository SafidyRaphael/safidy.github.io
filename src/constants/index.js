import images_1 from "../assets/projects/images_1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import images from "../assets/projects/images.jpeg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Je suis un développeur full stack passionné et doué pour créer des applications Web robustes et évolutives. Avec 3 ans d'etudes pratiques, j'ai perfectionné mes compétences dans les technologies front-end comme React.Js , ainsi que dans les technologies back-end comme Python et Node.js, MySQL, PostgreSQL et MongoDB. Pour la mise ne place d'une application mobile avec flutter.`;

export const ABOUT_TEXT = `Licence d’ Ingénieur en Physique Signaux et Systèmes avec une solide formation académique, spécialisé dans l'électronique et doté de compétences en développement web ainsi que le monde du réseaux. Passionné par l'application des principes physiques à la conception de systèmes innovants. Cherche activement un poste de développeur Web et Application mobile et desktop, pour mettre en pratique mes connaissances théoriques et contribuer au développement de solutions technologiques avancées.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: " Developpeur MERN ",
    company: "Univ Antananarivo",
    description: ` Développement et de maintenance d'applications Web utilisant la technologie MERN . Implémentation d'API RESTful et intégration des bases de données MongoDB. Collaborer avec les parties prenantes pour définir les exigences et les délais du projet.`,
    technologies: ["Mongodb", "Express", "React.js", "Nodejs"],
  },
  {
    year: "Jan 2020 - Dec 2023",
    role: " Obtention de Diplome ",
    company: "Univ Antananarivo",
    description: ` Formation approfondie en ingénierie physique, axée sur les signaux et systèmes, avec un accent sur l'adaptation aux technologies informatiques, électroniques et de réseaux. Ce cursus m'a permis d'acquérir des compétences solides dans l'analyse de systèmes, la modélisation de signaux, et leur application dans des projets de développement, notamment en informatique et en électronique.`,
    technologies: ["bacc + 3"],
  },
  {
    year: "Juin 2023 - Sept 2023",
    role: " Stagiaure INSTAT ",
    company: "INSTAT Anosy Madagascar",
    description: ` Mise en place d'un portaile captife pour la securisation du reseaux LAN de l'INSTAT ainsi pour la partage de connextion avec securiter et l'authentification pour chaque utilisateurs. Connaissance des protocoles Internet sur le TCP/IP qui est le plus grand réseau du monde entier. Configuration routeur et switch et borne wifi, maintenance informatique.`,
    technologies: ["PfSense", "Debian"],
  },
  {
    year: "Sept 2022 - 2024",
    role: "Formation Python",
    company: "Univ Antananarivo",
    description: `Programmation avec la langage Python et Framework Django et Flask du coté Back-End. Desktop et interface graphique avec kivy et tkinter. Développement d'une application de gestion de bibliothèque avec une interface utilisateur utilisant Tkinter. Réalisation d'une application de gestion des tâches avec Flask et Kivy, offrant une interface graphique simple et intuitive.`,
    technologies: ["Python", "Django", "Flask", "Kivy"],
  },
  {
    year: "Sept 2023 - 2024",
    role: "Formation Flutter",
    company: "Univ Antananarivo",
    description: `Développement d'une application de gestion de tâches permettant aux utilisateurs de créer, modifier et supprimer des tâches, avec synchronisation en temps réel via Firebase et Mongodb. Création d'une application de catalogue de produits, incluant des fonctionnalités de recherche et des filtres, pour faciliter la navigation parmi différents articles.`,
    technologies: ["Flutter", "Express", "Mongodb", "Nodejs"],
  },
  {
    year: "Sept 2023 - Nov 2023",
    role: "Formation Electronique",
    company: "Univ Antananarivo",
    description: `Électronique et robotique : Conception de circuits électroniques, utilisation de divers capteurs (ultrasons, infrarouges, température, etc.), et réalisation de systèmes robotiques interactifs. Développement sur Raspberry Pi : Utilisation de Raspberry Pi pour des applications plus avancées incluant l'automatisation, la collecte de données via des capteurs, et l'interface avec des systèmes Python pour des projets IoT (Internet des Objets).`,
    technologies: ["Arduino", "Rasp", "ESP32", "ESP8266"],
  },
];

export const PROJECTS = [
  {
    title: "Gestionnaire de Presence ",
    image: images,
    description:
      "Développement d'un système de gestion de présence en utilisant Odoo comme plateforme backend et un ESP32-CAM pour capturer les informations via le scan de QR Code. Ce projet vise à automatiser le processus de suivi des présences de manière efficace et rapide.",
    technologies: ["Python", "Odoo", "ESP32Cam", "Arduino"],
  },
  {
    title: "Site Web pour les etudiants ",
    image: project2,
    description:
      "Développement d'une plateforme en ligne d'éducation qui permet aux utilisateurs de suivre des cours sur différents sujets. Ce projet a été réalisé en suivant des tutoriels disponibles sur des sites d'apprentissage en ligne, et il a permis de mettre en pratique des compétences en React pour construire une interface web moderne et dynamique.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: images_1,
    description:
      "Développement d'un portfolio en ligne pour présenter mes compétences, mes projets et mon parcours professionnel. J'ai conçu une interface utilisateur moderne et responsive, permettant une navigation fluide entre les différentes sections.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Systeme d'automatisation de bulletin de naissance",
    image: project4,
    description:
      "Développement d'un système d'automatisation pour la génération de bulletins de naissance, permettant aux utilisateurs de remplir un formulaire en ligne et de générer automatiquement un bulletin de naissance au format PDF. Le projet est basé sur Python et le framework Flask pour le backend, avec une interface utilisateur simple pour collecter les informations nécessaires.",
    technologies: ["Python", "Flask", "Mongodb", "ESP32Cam", "Html"],
  },
];

export const CONTACT = {
  address: "Tananarivo, Rue Ivato , Ambohitrimanjaka ",
  phoneNo: "+261 34 54 982 97 ",
  email: "fanatenanasafidy@gmail.com",
  github: "SafidyRaphael"
};
