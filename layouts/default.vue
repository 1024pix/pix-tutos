<template>
  <div id="app" class="app-viewport">
    <header class="main-header">
      <div class="main-header__container">
        <img
          src="~/assets/images/marianne-logo.svg"
          class="main-header__logo"
          alt=""
        />
        <a
          class="main-header__link"
          href="https://pix.fr"
          title="Site officiel Pix.fr"
        >
          <img
            src="~/assets/images/pix-logo.svg"
            class="main-header__logo"
            alt="Pix"
          />
        </a>
      </div>
    </header>
    <main role="main" class="main-container">
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: $open-sans;
  background-color: $background-light;
}

.main-header {
  background-color: white;
  box-shadow: $box-shadow-xs;
}

.main-header__container {
  display: flex;
  align-items: center;
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

.main-header__logo {
  display: block;
  height: 60px;
}

.main-header__link {
  margin-left: 1.5rem;
}

.main-container {
  padding: 4rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
