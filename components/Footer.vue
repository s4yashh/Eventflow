<!-- Footer Component - Site footer with links -->
<template>
  <footer class="footer">
    <div class="container">
      <!-- Footer content sections -->
      <div class="footer-content">
        <!-- About section -->
        <div class="footer-section">
          <h4>About EventFlow</h4>
          <p style="font-size: 13px; color: #bbb">
            Discover and explore amazing events near you.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><a href="#events">Browse Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: info@eventflow.com</li>
            <li>Phone: (555) 123-4567</li>
          </ul>
        </div>
      </div>

      <!-- Footer bottom -->
      <div class="footer-bottom">
        <p>
          &copy; 2025 EventFlow. All rights reserved. | Built with Vue.js & Nuxt
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
// Footer component displayed at the bottom of every page
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Scoped styles for Footer component */
</style>
