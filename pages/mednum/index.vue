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

    <p class="pix-body-l header__description">
      Améliorez vos compétences sur la messagerie électronique, l'identité numérique, la datavisualisation et l'impact environnemental du numérique grâce à ces tutoriels vidéos ou infographies, produits par la MedNum pour Pix dans le cadre d'un projet Proof of Concept (POC).
    </p>

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
  color: var(--pix-neutral-900);
}

ul {
  list-style: none;
  padding-left: 0;
}

.header {
  &__title {
    margin-bottom: var(--pix-spacing-2x);
  }
  &__description {
    margin-bottom: 56px;
    color: var(--pix-neutral-500);
    font-weight: 500;
  }
}

.area {
  &__title {
    display: flex;
    flex-direction: column;
    gap: var(--pix-spacing-1x);
    margin-top: var(--pix-spacing-8x);
    margin-bottom: var(--pix-spacing-4x);
  }
  &__number {
    color: var(--pix-neutral-500);
  }
}

.tutorial-list {
  margin-bottom: var(--pix-spacing-10x);

  &__item:not(:last-child) {
    margin-bottom: var(--pix-spacing-3x);
  }
}

.tuto-block {
  @extend %pix-shadow-xs;

  border-radius: 10px;
  padding: var(--pix-spacing-4x) var(--pix-spacing-6x);
  margin: var(--pix-spacing-6x) 0;
  background: var(--pix-neutral-0);

  &:hover {
    color: var(--pix-tertiary-500);
  }
}
</style>
