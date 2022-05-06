## Description

Cette API est créée dans le cadre d'un test technique pour Klaxoon.
Cette API est une API basique fournissant des liens pour des medias.

## gitLab

git repository : `https://github.com/gary003/api_bookmark.git`

## Univers technique

- Persistance BDD avec mysql sur cleverCloud (connection via typeORM).
  un cloud est en place et en statut UP (aucune configuration demandée pour la BDD)
- API backend écrite en nodejs, express, typescript, typeORM.
- Documentation API avec OpenAPI/swagger.
- Tests avec mocha, supertest et chai.

## Dépendances

Etre sur un serveur avec ces librairies d'installées :

- NPM
- nodeJS
- git

## Installation de l'API

Il faut tout d'abord cloner le repository :
`git clone https://github.com/gary003/api_bookmark.git`

Entrer dans le dossier créer :
`cd api_bookmark`

Ensuite installer les dépendances :
`npm install`

Copier le fichier .env à la racine du projet (fournit séparemment).

L'installation est terminée et voir les sections tests ou quick start.

## Tests

Lancer dans un terminal la commande :
`npm test`

## Quick Start

Lancer le serveur :
`npm start`
Le serveur devrait avoir démarré et être en écoute sur le port 8080.

# Documentation API

Documentation Swagger/OpenAPI visible (après avoir démarrer le serveur) sur :
dans un navigateur tester l'URL : `http://localhost:8080/apiDoc`

La liste des routes et modeles devrait être visible.

## Team

Développeur :
Gary Johnson <gary.johnson.freelance@gmail.com>

## License

[MIT](LICENSE)
