# <img src="public/images/img_readme/logo-orange.png" alt="Logo du projet Crazee Burger" width="50" height="auto"> Crazee Burger – Application de commande en temps réel

## 🚀 Aperçu du projet

**Crazee Burger** est une application web moderne développée en **React**, permettant aux utilisateurs de :

- consulter la carte des produits,

- créer une commande,

- gérer un panier en **temps réel**,

- utiliser un **panel administrateur** pour ajouter / modifier les produits (CRUD),

- profiter d’une interface fluide, accessible et _responsive (à venir)_.

Ce projet met en avant des **bonnes pratiques front-end**, une architecture claire, une UI cohérente, et un code maintenable.

## 🎓 Contexte

**Ce projet s’inscrit dans une démarche d’autoformation rigoureuse visant :**

- à acquérir les réflexes d’un développeur React opérationnel,

- à maîtriser les outils utilisés en entreprise,

- et à monter en compétence sur les techniques de développement modernes.

Il représente un exemple concret de ma manière de coder, structurer, documenter et organiser un projet, comme je le fais en contexte professionnel.

## 🔹 Crédits et disclaimer

Ce projet est issu de la formation **“React en entreprise”** de **ViDev**.  
Tous les éléments de design, images, noms et maquettes ne m’appartiennent pas et sont la propriété du formateur.  
Cette version sur **GitHub est uniquement à titre démonstratif / visuel (lecture seule)**, pour présenter mon organisation de travail et ma pratique de React. **Le dépôt GitLab privé contient la version complète.**  
Pour découvrir la formation originale : [ViDev - React en entreprise](https://www.videv.fr/react-en-entreprise)
.

## 📷 Aperçu / Démo en ligne

[![Demo Crazee Burger](https://img.shields.io/badge/Demo_Live-Crazee_Burger-blue?style=for-the-badge&logo=vercel&logoColor=white)](https://crazee-burger-karvaneg-karvanegs-projects.vercel.app/)

<a href="https://www.awesomescreenshot.com/video/46581878?key=0ba76e16f39f321da539cc8478af56e7"><img src="public/images/img_readme/Crazee-Burger-Karvaneg-ScreenVideo.png" alt="Voir la démo" width="51%"/></a> <img src="public/images/img_readme/Crazee-Burger-Karvaneg-HomePage.png" alt="Page d'accueil du projet Crazee Burger" width="48%"><br /><br />
<img src="public/images/img_readme/Crazee-Burger-Karvaneg-Menu&PanierEmpty.png" alt="Page d'accueil du projet Crazee Burger" width="49%"> <img src="public/images/img_readme/Crazee-Burger-Karvaneg-Menu&PanierFull.png" alt="Page d'accueil du projet Crazee Burger" width="49%">

## ⏳ Progression du projet

**Progression globale : 75%**

🟧🟧🟧🟧🟧🟧🟧⬛⬛⬛

**Légende / Détails des features :**  
🟧 = fonctionnalités terminées ![F01–F12 terminées](https://img.shields.io/badge/F01--F12-✅-grey?style=flat-square&logo=github&logoColor=white)  
⬛ = fonctionnalités restantes ![F13–F15 / B01 restantes](https://img.shields.io/badge/F13--F15%20%2F%20B01-🔜-grey?style=flat-square&logo=github&logoColor=white)

## 🛠️ Technologies utilisées

![React](https://img.shields.io/badge/React-19-grey?style=flat-square&logo=react&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-grey?style=flat-square&logo=styled-components&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-grey?style=flat-square&logo=yarn&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-grey?style=flat-square&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-grey?style=flat-square&logo=firebase&logoColor=white)

### Front-end

- ⚛️ React **19**

- 🧭 React Router

- ⚡ Contexte global & hooks personnalisés

- 🎨 **Styled-components**

- 🧩 clsx (gestion des classes)

- 🔄 State Management Local (custom hooks)

- 📦 Vite

- 📦 Yarn

### Back-end / Services

🔥 **Firebase** (_en cours_ — persistance des données côté client)

### DevOps

- 🐳 Docker

- 🧪 GitLab CI (tests + sécurité)

- 🔐 Secret Detection / SAST

- 🔄 Mirroring automatique GitLab → GitHub via SSH (**lecture seule**)

- ▲ Déploiement Vercel

## ⭐ Fonctionnalités déjà développées

### 👤 Authentification

- Page de login

- Interface minimaliste & responsive

- Gestion simple des utilisateurs (mock pour l’instant)

### 🧾 Page de commande

- Affichage dynamique du menu

- Ajout / modification / suppression d’items dans le panier

- Mise à jour en temps réel des quantités & du total

### 🛠️ Panneau Admin

- Ouverture / fermeture du panel

- Formulaire complet de gestion d’un produit

- Modification en **temps réel** sur la fiche produit

- Suppression d’un item avec gestion propre du focus

### 🧩 Composants avancés

- Composant `<Card />` totalement réutilisable

- Gestion des hover, sélection et états actifs

- Hook `useBasketSum` pour calcul dynamique sécurisé

- Toast de notification pour bascule admin

- Scrollbars custom visibles uniquement au survol

## 🧠 Architecture & principes

- **Découpage par features** : F01 → F15

- **Hooks personnalisés** : useMenu, useBasketSum, useAdminPanel…

- **Theming avancé** via styled-components (typographies, couleurs, spacing)

- Code entièrement **typé** (React + JSDoc, _migration TS prévue_)

- Gestion accessible des inputs (ARIA-friendly)

## 📌 Fonctionnalités restantes à implémenter

### 🔥 F13 – Persistance des données (Firebase)

Sauvegarder le menu et les commandes en base temps réel.

### ✨ F14 – Animations sexy !

Utilisation des **keyframes** de styled-components pour :

- transitions du panel admin,

- animations des cards,

- micro-interactions du panier.

### 📢 F15 – Disponibilité & publicité

- Gestion d’un état “disponible / indisponible”

- Ajout d’une zone publicité (bannière dynamique)

### 🐛 B01 – Premier bug à traiter

**LOGIN → La création d’un nouvel utilisateur mène à une page de chargement infinie.**

## 🔒 À propos de ce miroir GitHub

Ce dépôt GitHub est un **miroir en lecture** seule du vrai projet hébergé sur GitLab.

- ❌ Issues : désactivées

- ❌ PR : refusées

- ✔️ Consultation du code : **OK**

- ✔️ Portfolio / vitrine professionnelle : **OK**

## 👩‍💻 Auteur

**Karvaneg** — Développeuse Web Fullstack (React, Twig, Symfony, NodeJS, Express, Docker…)

[![LinkedIn](https://img.shields.io/badge/LINKEDIN-KARVANEG-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marielecarvennec/)
