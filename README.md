# Jeu Awele (Awalé)

Le projet implémente une version orientée objet du jeu de société traditionnel **Awélé**. Ce jeu, également connu sous le nom d'**Awalé**, se joue avec un plateau de 12 cases, et chaque joueur doit récolter ou semer des graines en fonction de certaines règles. L'objectif de ce projet est de créer une simulation du jeu avec une approche orientée objet en TypeScript.

## Description

Le jeu Awélé consiste en un plateau de 12 cases, disposées en 2 rangées de 6 cases. Chaque case contient un nombre de graines. Le but du jeu est de récolter des graines en semant ou en récoltant des graines dans un sens ou un autre.

### Fonctionnalités du projet

- Plateau de jeu : 12 cases (A, B, C, D, E, F, G, H, I, J, K, L) contenant un nombre de graines.
- Semer les graines d'une case dans les cases suivantes.
- Récolter les graines d'une case et des cases précédentes.
- Gestion du score d'un joueur, avec des vérifications pour éviter les scores négatifs.
- Méthodes d'affichage du plateau et de vérification si le plateau est vide.

## Prérequis

- [Node.js](https://nodejs.org/) (version 20 ou plus récente)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

1. Clone le dépôt sur ton ordinateur :
    ```bash
    git clone https://github.com/ton-utilisateur/awele.git
    ```

2. Ouvre le dossier du projet dans ton éditeur de code préféré.

3. Assure-toi d’avoir Node.js et TypeScript installés sur ta machine :
    - Pour installer Node.js : [Télécharger Node.js](https://nodejs.org/)
    - Pour installer TypeScript globalement via npm :
      ```bash
      npm install -g typescript
      ```

4. Si tu n'as pas encore installé les dépendances, tu peux utiliser :
    ```bash
    npm install
    ```

5. Pour lancer l'application, tu peux utiliser la commande suivante après avoir compilé le projet TypeScript :
    ```bash
    npx tsc
    node dist/Awele.js
    ```

Le projet est maintenant prêt à être utilisé ou modifié dans ton environnement local.
