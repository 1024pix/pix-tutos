<template>
  <div>
    <section class="header__partners">
      <img
        src="~/assets/images/partners.png"
        alt="Financé par le Gouvernement de la République française, liberté égalité fraternité, le plan France Relance et l'Union européenne (NextGenerationEU)"
      >
    </section>

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

<script>
import getAreas from '../../services/get-areas';

export default {
  layout: 'edu',
  async setup() {
    useHead({ title: 'Accueil' });

    const tutos = await queryContent('edu').sort({ area: 1, title: 1 }).find();

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
  &__partners {
    margin-bottom: 48px;
    padding: 32px 0;
    border-top: 1px solid $pix-neutral-20;
    border-bottom: 1px solid $pix-neutral-20;

    img {
      display: block;
      width: 450px;
      max-width: 100%;
      margin: 0 auto;
    }
  }

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
