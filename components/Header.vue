<!-- Header Component - Navigation and branding -->
<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo/Brand -->
        <div class="logo">
          <nuxt-link to="/">EventFlow</nuxt-link>
        </div>

        <!-- Navigation Links -->
        <nav>
          <ul class="nav-links">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Events</nuxt-link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
// Header component for site navigation
// This component is displayed at the top of every page via the layout
export default {
  name: "Header",
};
</script>

<style scoped>
/* Scoped styles for Header component */
.logo a {
  color: #007bff;
  font-weight: bold;
  font-size: 24px;
}

.logo a:hover {
  color: #0056b3;
}
</style>
