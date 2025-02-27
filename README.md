# Mon Vieux Grimoire - Back-End

## Description du projet

Mon Vieux Grimoire est un site de notation de livres développé pour une chaîne de librairies située à Lille. Ce projet consiste à développer l'API back-end qui permet la gestion des livres, des notations et des utilisateurs.

## Technologies utilisées
- **Node.js** avec **Express** pour la gestion du serveur
- **MongoDB** avec **Mongoose** pour la base de données
- **JWT (JSON Web Token)** pour l'authentification des utilisateurs
- **Multer** pour la gestion du téléchargement des images
- **Sharp** pour l'optimisation des images conformément aux bonnes pratiques du Green Code

## Fonctionnalités
- **Gestion des utilisateurs** : Inscription, connexion et authentification sécurisée
- **Gestion des livres** : Ajout, modification, suppression et affichage des livres
- **Notation des livres** : Attribution de notes aux livres par les utilisateurs et calcul automatique de la note moyenne
- **Optimisation des images** : Compression et redimensionnement des images envoyées par les utilisateurs
- **Respect des bonnes pratiques de sécurité** : Protection des données, validation des entrées et mise en place des permissions

## Architecture du projet
Le projet suit une architecture **MVC (Modèle - Vue - Contrôleur)** afin de structurer efficacement le code :
- **Modèles** : Gestion des schémas de données avec Mongoose
- **Contrôleurs** : Traitement des requêtes et logique métier
- **Routes** : Gestion des endpoints de l'API
- **Middleware** : Authentification, validation et traitement des fichiers

## Installation et exécution

### Prérequis
- Node.js
- MongoDB

### Installation
1. Cloner le référentiel :
   ```sh
   git clone https://github.com/nom_utilisateur/mon-vieux-grimoire.git
   ```
2. Se rendre dans le dossier du projet :
   ```sh
   cd mon-vieux-grimoire
   ```
3. Installer les dépendances :
   ```sh
   npm install
   ```

### Configuration
1. Créer un fichier `.env` à la racine du projet et y ajouter les variables suivantes :
   ```env
   MONGODB_URI=mongodb+srv://<utilisateur>:<motdepasse>@cluster.mongodb.net/mon-vieux-grimoire
   JWT_SECRET=your_secret_key
   PORT=3000
   ```

### Démarrage du serveur
```sh
npm start
```

## API Endpoints
| Méthode | Route               | Description |
|----------|--------------------|-------------|
| **POST** | `/api/auth/signup` | Inscription d'un utilisateur |
| **POST** | `/api/auth/login`  | Connexion d'un utilisateur |
| **GET**  | `/api/books`       | Récupération de tous les livres |
| **POST** | `/api/books`       | Ajout d'un nouveau livre |
| **GET**  | `/api/books/:id`   | Récupération d'un livre par ID |
| **PUT**  | `/api/books/:id`   | Mise à jour d'un livre |
| **DELETE** | `/api/books/:id` | Suppression d'un livre |
| **POST** | `/api/books/:id/rating` | Ajout d'une note |

## Bonnes pratiques et optimisations
- Utilisation de **Sharp** pour réduire la taille des images envoyées
- Validation des entrées utilisateur avec **Joi**
- Respect des principes du **Green Code** pour réduire l'empreinte écologique
- Mise en place d'une **authentification JWT sécurisée**

## Objectifs pédagogiques
- Implémenter un modèle logique de données conforme aux normes
- Mettre en place des opérations CRUD de manière sécurisée
- Stocker et protéger les données utilisateur

## Conclusion
Ce projet constitue une expérience enrichissante pour le développement back-end, avec une mise en application des meilleures pratiques en matière de sécurité, d'optimisation et de structuration d'API RESTful.

---

Développé par **Dardenne Valentin** dans le cadre d'une formation / soutenance. 

