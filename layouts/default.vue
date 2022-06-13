<template>
  <div id="app" class="app-viewport">
    <header class="main-header">
      <img src="~/assets/images/marianne-logo.svg" class="main-header__logo" alt="République française" />
      <img src="~/assets/images/pix-logo.svg" class="main-header__logo" alt="Pix" />
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
  padding: 1rem 5rem;
}

.main-header__logo {
  height: 60px;
  margin-right: 1.5rem;
}

.main-container {
  padding: 4rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
