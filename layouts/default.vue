<template>
  <div
    id="app"
    class="app-viewport"
  >
    <PixHeader :hide-actions="false" />
    <main
      role="main"
      class="main-container"
    >
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  @extend %pix-body-l;

  min-height: 100vh;
  background-color: var(--pix-neutral-20);
}

.main-container {
  padding: 4rem 1rem;
  max-width: 980px;
  margin: 0 auto;
}
</style>
