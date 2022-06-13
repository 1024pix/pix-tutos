# pix-tutos

> Projet pour générer des pages statiques contenant des tutoriels vidéo.

## Variables d'environnement


## Build Setup

En dev, copier le fichier `sample.env` vers un `.env` et remplacer les valeurs.

## Conventions de nommage

### Fichiers

Les noms de **fichier des composants** (classes dans `/components`) doivent être en _PascalCase_.

Exemples :

- components/AppFooter.vue
- components/slices/FeatureList.vue

Les noms des **autres fichiers** (_.js, _.vue, *.scss, etc.) en *kebab-case\*.

Exemples :

- layout/default.vue

Les **fichiers Sass** (*.scss) doivent être préfixés par un *underscore\* (`_`), **sauf app.scss** (convention Sass).

Exemples :

- assets/scss/components/\_app-header.scss
- assets/scss/globals/\_text.scss

### Composants

Les **noms des composants** doivent être composés d'au moins _2 mots_ afin de pallier à toute éventuelle collision avec une évolution de la spec HTML et diminuer le risque d'une éventuelle collision avec une lib externe.

Exemples :

- components/AppFooter.vue
- components/MediaPlayer.vue

## NGINX

```shell
npm run build:site

PORT=80 erb servers.conf.erb > nginx.conf && docker-compose up
```
