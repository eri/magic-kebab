<p align="center"><img src="https://magic-kebab.netlify.app/logo.svg" width="250"></p>

<h4 align="center">Site SPA sous React de commande en ligne de Kebab personnalisable</h4>
<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</p>

## Démo
* Netlify : [cliquez ici](https://magic-kebab.netlify.app/)

## Fonctionnalités
* Animation de chargement lors de l'ouverture
* Interface interactive et dynamique pour la selection des ingredients
* Système (partiel) de panier, visualisation des articles
* Page de récapitulation de commande
* Limitation des ingredients par étape de commande

## Démarrage

### Etape 0 - Cloner le projet
Copiez (clonez) le projet localement sur votre machine.
```
git clone https://github.com/eri/magic-kebab.git
cd magic-kebab
```
### Etape 1 - Installer les dépendances
Avant de démarrer le projet, installez les dépendances du projet en éxecutant la commande `npm install` ou `yarn install`

### Etape 2 - Démarrez le projet en version de développement
> La version de développement est utilisée en phase de développement pour exécuter le site sur un serveur géré par React en local.
> * Utilisez `npm start` ou `yarn start` pour démarrer la version de développement
> * Le projet sera accessible à l'adresse [http://localhost:3000](http://localhost:3000). Les modifications seront affichés en direct.

### Etape 3 - Construisez une version pour la mise en production
> Construire (build) une version pour la mise en production permet de capturer le projet à un instant T pour la rendre publique. Il est fortement déconseillé d'utiliser en production une version de développement pour des raisons de sécurité et de performances.
> * `npm run build` ou `yarn build` pour lancer la construction
> * Le projet construit sera mis à disposition dans le dossier `/build`

### Etape 4 - Déploiement en quelques clics sur Netlify
> Prochainement

## Divers
* [License](https://github.com/eri/magic-kebab/blob/main/LICENSE)
* [Contributing](https://github.com/eri/magic-kebab/blob/main/CONTRIBUTING.md)

#### À faire
* [ ] Corriger le bug visuel (carte en plus) de l'étape de récapitulation
* [ ] Terminer le système de panier : modifier, supprimer une commande
* [ ] Ajouter un support pour les versions mobiles et tablettes
* [ ] Ajouter un support de mode sombre avec un bouton d'activation/désactivation
* [ ] Support pour d'autres langues (English)
* [ ] Rédiger le README en anglais
* [ ] Séparer les étapes de commande en sous-composants sans routeur
* [ ] Convertir les fichiers `.jsx` (javascript) en `.tsx` (typescript)
