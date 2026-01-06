"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialUsers = exports.initialSkills = exports.initialProjects = exports.initialProfiles = exports.initialExperiences = exports.initialEducations = void 0;
exports.initialEducations = [
    {
        degree: "Master en Développement Web",
        institution: "Université Technologique",
        period: "2014 - 2016",
        place: "2014 - 2016",
        description: "Formation avancée en développement web et conception d'applications. Spécialisation en technologies frontend et expérience utilisateur.",
    },
    {
        degree: "Licence en Informatique",
        institution: "Université des Sciences",
        period: "2011 - 2014",
        place: "2014 - 2016",
        description: "Fondamentaux de l'informatique, algorithmes et structures de données. Introduction au développement web et à la programmation orientée objet.",
    },
    {
        degree: "Certification UX Design",
        institution: "Google",
        period: "2019",
        place: "2014 - 2016",
        description: "Certification professionnelle en conception d'expérience utilisateur. Méthodologies de recherche utilisateur et principes de design d'interface.",
    },
    {
        degree: "Formation Three.js",
        institution: "Plateforme en ligne",
        period: "2021",
        place: "2014 - 2016",
        description: "Apprentissage approfondi de la création d'expériences 3D interactives pour le web avec Three.js et WebGL.",
    }
];
exports.initialExperiences = [
    {
        title: "Développeur Frontend Senior",
        company: "Entreprise XYZ",
        period: "2020 - Présent",
        place: "2020 - Présent",
        description: "Développement d'applications web modernes avec React et Next.js. Implémentation de designs responsifs et d'animations avancées.",
    },
    {
        title: "Développeur Web",
        company: "Agence ABC",
        period: "2018 - 2020",
        place: "2020 - Présent",
        description: "Création de sites web et d'applications pour divers clients. Utilisation de technologies frontend et backend.",
    },
    {
        title: "Designer UI/UX",
        company: "Studio Design",
        period: "2016 - 2018",
        place: "2020 - Présent",
        description: "Conception d'interfaces utilisateur et d'expériences utilisateur pour applications web et mobiles.",
    },
];
exports.initialProfiles = [
    {
        username: "Bagus",
        lastname: "BAGA",
        firstname: "Assami",
        // jobs: ["Mon premier site"],
        designation: ["Ingénieur Full Stack", "Ingénieur IA"],
        description: "Je crée des expériences web innovantes et futuristes qui combinent design intuitif et technologies de pointe.",
        email: "bagaassami0009@gmail.com",
        phone: "+33 07 53 49 67 71",
        address: "Thiais, France",
        resume: [
            "Je suis un développeur web passionné par la création d'expériences numériques innovantes et intuitives. Avec plus de 5 ans d'expérience dans le domaine, je combine expertise technique et sensibilité design pour réaliser des projets web qui se démarquent.",
            "Ma spécialité est le développement frontend avec React et Next.js, mais je maîtrise également les technologies backend et le design UI/UX. J'aime particulièrement explorer les nouvelles technologies comme WebGL et Three.js pour créer des expériences web immersives.",
            "En dehors du code, je m'intéresse à l'art numérique, à la réalité virtuelle et à l'intelligence artificielle. Ces passions nourrissent ma créativité et m'aident à concevoir des solutions web toujours plus innovantes."
        ],
        github: "https://github.com/sami09-cyber/sami09-cyber",
        linkedIn: "www.linkedin.com/in/assami-baga",
        twitter: "https://x.com/physic_math"
    }
];
exports.initialProjects = [
    {
        title: "Application E-commerce",
        description: "Une application e-commerce moderne avec panier d'achat et paiement intégré.",
        image: "/placeholder.svg?height=600&width=800",
        tools: ["React", "Next.js", "Stripe", "Tailwind CSS"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "web",
        details: "Cette application e-commerce offre une expérience d'achat fluide avec une interface utilisateur intuitive. Elle intègre un système de panier, des paiements sécurisés via Stripe, et une gestion des produits dynamique. Le frontend est développé avec React et Next.js, tandis que le backend utilise Node.js et MongoDB pour stocker les données des produits et des utilisateurs.",
    },
    {
        title: "Portfolio 3D",
        description: "Un portfolio interactif avec des éléments 3D et des animations avancées.",
        image: "/placeholder.svg?height=600&width=800",
        tags: ["Three.js", "React", "GSAP", "WebGL"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "3d",
        details: "Ce portfolio 3D repousse les limites de l'expérience web traditionnelle en intégrant des éléments 3D interactifs et des animations fluides. Développé avec Three.js et React, il offre une navigation immersive à travers différentes sections. Les transitions sont gérées avec GSAP pour une expérience utilisateur optimale. Le projet utilise également des shaders personnalisés pour créer des effets visuels uniques.",
    },
    {
        title: "Dashboard Analytics",
        description: "Un tableau de bord d'analyse de données avec visualisations interactives.",
        image: "/placeholder.svg?height=600&width=800",
        tags: ["React", "D3.js", "TypeScript", "Firebase"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "web",
        details: "Ce tableau de bord d'analyse offre des visualisations de données complexes rendues accessibles grâce à une interface utilisateur intuitive. Développé avec React et TypeScript, il utilise D3.js pour créer des graphiques interactifs et informatifs. Les données sont stockées et synchronisées en temps réel via Firebase, permettant aux utilisateurs de collaborer et de partager des insights. Le projet inclut également des fonctionnalités d'exportation de rapports et d'alertes personnalisables.",
    },
    {
        title: "Application Mobile Fitness",
        description: "Une application mobile de fitness avec suivi d'activité et plans d'entraînement.",
        image: "/placeholder.svg?height=600&width=800",
        tags: ["React Native", "Redux", "Node.js", "MongoDB"],
        category: "mobile",
        details: "Cette application mobile de fitness aide les utilisateurs à suivre leurs activités physiques et à respecter leurs plans d'entraînement. Développée avec React Native pour une expérience native sur iOS et Android, elle utilise Redux pour la gestion d'état et Node.js avec MongoDB pour le backend. L'application offre des fonctionnalités comme le suivi des calories, des exercices personnalisés, et des statistiques détaillées sur les progrès de l'utilisateur.",
    },
    {
        id: 5,
        title: "Jeu Web Interactif",
        description: "Un jeu web interactif avec des graphismes 2D et une physique réaliste.",
        image: "/placeholder.svg?height=600&width=800",
        tags: ["JavaScript", "Canvas API", "Matter.js", "Howler.js"],
        demoUrl: "https://example.com",
        category: "game",
        details: "Ce jeu web interactif combine des graphismes 2D attrayants avec une physique réaliste pour offrir une expérience de jeu immersive directement dans le navigateur. Développé avec JavaScript vanilla et l'API Canvas pour le rendu, il utilise Matter.js pour la simulation physique et Howler.js pour les effets sonores. Le jeu propose plusieurs niveaux avec une difficulté progressive et un système de score pour encourager la rejouabilité.",
    },
    {
        title: "Expérience VR Architecturale",
        description: "Une expérience VR permettant d'explorer des modèles architecturaux en 3D.",
        image: "/placeholder.svg?height=600&width=800",
        tags: ["WebXR", "Three.js", "React", "Blender"],
        demoUrl: "https://example.com",
        category: "3d",
        details: "Cette expérience VR architecturale permet aux utilisateurs d'explorer des bâtiments et des espaces en réalité virtuelle directement depuis leur navigateur. Développée avec WebXR et Three.js, elle offre une immersion complète dans des modèles 3D créés avec Blender. L'interface utilisateur, construite avec React, permet de naviguer facilement entre différents modèles et de personnaliser l'expérience. Le projet inclut également des fonctionnalités comme la mesure des distances et l'annotation des espaces.",
    }
];
exports.initialSkills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "Tailwind", level: 100 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "Three.js", level: 70 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 80 },
    { name: "PHP", level: 80 },
    { name: "Laravel", level: 80 },
    { name: "Java", level: 80 },
    { name: "Spring Boot", level: 80 },
    { name: "SQL", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Python", level: 75 },
    { name: "Flask", level: 75 },
    { name: "Docker", level: 70 }
];
exports.initialUsers = [
    {
        username: "Bagus",
        password: "Mon premier site",
        lastname: "BAGA",
        firstname: "Assami",
        email: "bagaassami0009@gmail.com",
        role: "Admin"
    }
];
