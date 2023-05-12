<template>
  <div>
    <PixTypography tag="h1" scale="title-large" class="header__title"
      >Tutoriels Réseau Canopé-Pix</PixTypography
    >

    <PixTypography tag="p" scale="body-large" class="header__description">
      Améliorez vos compétences sur les thèmes abordés dans Pix+Édu à l'aide de
      tutoriels vidéo produits par le Réseau Canopé, en partenariat avec Pix.
    </PixTypography>

    <section>
      <article v-for="(areaTutos, area) of tutosGroupedByArea" :key="area">
        <PixTypography tag="h2" scale="title-small" class="area__title">
          <span class="area__number">{{ area }}</span>
          <span v-if="areas[area]" class="area__name">{{ areas[area] }}</span>
        </PixTypography>

        <ul class="tutorial-list">
          <li
            v-for="tuto in areaTutos"
            :key="tuto._id"
            class="tutorial-list__item"
          >
            <nuxt-link :to="tuto._path">
              <PixTypography
                tag="h3"
                scale="title-extra-small"
                class="tuto-block"
              >
                {{ tuto.title }}
              </PixTypography>
            </nuxt-link>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
import PixTypography from '../../components/PixTypography.vue';
import getAreas from '../../services/get-areas';

export default {
  components: { PixTypography },
  layout: 'edu',
  async setup() {
    useHead({ title: 'Accueil' });

    const tutos = await queryContent('edu').sort('area').find();

    const tutosGroupedByArea = tutos.reduce((acc, tuto) => {
      if (!acc[tuto.area]) {
        acc[tuto.area] = [];
      }
      acc[tuto.area].push(tuto);
      return acc;
    }, {});

    return {
      areas: getAreas(),
      tutosGroupedByArea,
    };
  },
};
</script>

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
