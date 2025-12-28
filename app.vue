<!-- app.vue - Main application layout (Twig-style template) -->
<template>
  <div class="app">
    <!-- Header component at the top of every page -->
    <Header />

    <!-- Main content area - dynamically rendered pages -->
    <main class="app__main">
      <NuxtPage />
    </main>

    <!-- Footer component at the bottom of every page -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Import layout components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
/* Global styles and CSS variables */
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --bg-light: #f3f4f6;
  --border-light: #e5e7eb;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#__nuxt,
.app {
  height: 100%;
  width: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: #f9fafb;
}

/* App layout structure */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app__main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Global link styling */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--secondary-color);
}

/* Responsive container utility */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}
</style>
