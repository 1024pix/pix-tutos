<template>
  <div>
    <PixTypography tag="h1" class="header__title"
      >Tutoriels Réseau Canopé-Pix</PixTypography
    >

    <PixTypography tag="p" class="header__description">
      Améliorez vos connaissances sur les thèmes abordés dans Pix+Édu à l'aide
      de tutoriels vidéo produits par le Réseau Canopé, en partenariat avec Pix.
    </PixTypography>

    <section>
      <article v-for="(areaTutos, area) of tutosGroupedByArea" :key="area">
        <PixTypography tag="h2" class="area__title">
          <span class="area__number">{{ area }}</span>
          <span v-if="areas[area]" class="area__name">{{ areas[area] }}</span>
        </PixTypography>

        <ul>
          <li v-for="tuto in areaTutos" :key="tuto.slug">
            <nuxt-link :to="{ name: 'edu-slug', params: { slug: tuto.slug } }">
              <PixTypography tag="h3" class="tuto-block">
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
  async asyncData({ $content }) {
    const tutos = await $content('edu').sortBy('area').fetch();

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
  head() {
    return {
      title: 'Accueil',
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
    margin-bottom: 12px;
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
  &__name {
    font-weight: 500;
  }
}

.tuto-block {
  border-radius: 10px;
  padding: 16px 24px;
  background: $pix-neutral-0;
  box-shadow: $box-shadow-xs;
  margin-bottom: 8px;

  &:hover {
    color: $blue-hover;
  }
}
</style>
