<script setup>
import getAreas from '../../services/get-areas'

definePageMeta({ layout: 'edu' })
useHead({ title: 'Accueil' })

const areas = getAreas()
const tutos = await queryContent('edu').sort({ title: 1, area: 1 }).find()

const tutosGroupedByArea = tutos.reduce((acc, tuto) => {
  if (!acc[tuto.area])
    acc[tuto.area] = []

  acc[tuto.area].push(tuto)
  return acc
}, {})
</script>

<template>
  <div>
    <h1 class="header__title">
      Tutoriels Réseau Canopé-Pix
    </h1>

    <p class="pix-body-l header__description">
      Améliorez vos compétences sur les thèmes abordés dans Pix+Édu à l'aide de
      tutoriels vidéo produits par le Réseau Canopé, en partenariat avec Pix.
    </p>

    <section>
      <article
        v-for="(areaTutos, area) of tutosGroupedByArea"
        :key="area"
      >
        <h2 class="pix-title-s area__title">
          <span class="area__number">{{ area }}</span>
          <span
            v-if="areas[area]"
            class="area__name"
          >{{ areas[area] }}</span>
        </h2>

        <ul class="tutorial-list">
          <li
            v-for="tuto in areaTutos"
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
      </article>
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
    margin-bottom: 8px;
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
    gap: 4px;
    margin-top: 32px;
    margin-bottom: 20px;
  }
  &__number {
    color: var(--pix-neutral-500);
  }
}

.tutorial-list {
  margin-bottom: 40px;

  &__item:not(:last-child) {
    margin-bottom: 12px;
  }
}

.tuto-block {
  @extend %pix-shadow-xs;

  border-radius: 10px;
  padding: 16px 24px;
  background: var(--pix-neutral-0);

  &:hover {
    color: var(--pix-tertiary-500);
  }
}
</style>
