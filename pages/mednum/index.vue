<script setup>
definePageMeta({ layout: 'mednum' })
useHead({ title: 'Accueil' })

const tutos = await queryContent('mednum').sort({ title: 1 }).find()
</script>

<template>
  <div>
    <h1 class="header__title">
      Tutoriels produits par la MedNum pour Pix
    </h1>

    <p class="pix-body-l header__description">Améliorez vos compétences sur la messagerie électronique, l'identité numérique, la datavisualisation et l'impact environnement du numérique grâce à ces tutoriels vidéos ou infographies, produits par la MedNum pour Pix dans le cadre d'un projet Proof of Concept (POC).</p>

    <section>
      <ul class="tutorial-list">
        <li
          v-for="tuto in tutos"
          :key="tuto._id"
          class="tutorial-list__item"
        >
          <nuxt-link :to="tuto._path">
            <h3 class="pix-title-xs tuto-block">
              {{ tuto.title }}
            </h3>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $black-90;
}

ul {
  list-style: none;
  padding-left: 0;
}

.header {
  &__title {
    margin-bottom: 8px;
  }
  &__description {
    margin-bottom: 56px;
    color: $pix-neutral-50;
    font-weight: 500;
  }
}

.area {
  &__title {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 32px;
    margin-bottom: 20px;
  }
  &__number {
    color: $pix-neutral-50;
  }
}

.tutorial-list {
  margin-bottom: 40px;

  &__item:not(:last-child) {
    margin-bottom: 12px;
  }
}

.tuto-block {
  border-radius: 10px;
  padding: 16px 24px;
  background: $pix-neutral-0;
  box-shadow: $box-shadow-xs;

  &:hover {
    color: $blue-hover;
  }
}
</style>
