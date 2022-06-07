<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <p>{{ doc.description }}</p>
    </ContentDoc>
  </main>
</template>
