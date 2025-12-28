<!-- 
  Footer Component - Site footer with links and information
  
  This component provides:
  - About EventFlow section
  - Quick navigation links
  - Contact information
  - Copyright notice
  - Responsive layout for all screen sizes
-->
<template>
  <footer class="footer">
    <div class="container">
      <!-- Footer content sections -->
      <div class="footer-content">
        <!-- 
          About Section
          Describes what EventFlow is and its purpose
        -->
        <div class="footer-section">
          <h4 class="footer-section-title">About EventFlow</h4>
          <p class="footer-section-description">
            EventFlow is your go-to platform for discovering and exploring
            amazing events happening near you. Stay updated with the latest
            workshops, conferences, and community meetups.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" title="Twitter">Twitter</a>
            <a href="#" class="social-link" title="LinkedIn">LinkedIn</a>
            <a href="#" class="social-link" title="GitHub">GitHub</a>
          </div>
        </div>

        <!-- 
          Quick Links Section
          Navigation links for easy access to main pages
        -->
        <div class="footer-section">
          <h4 class="footer-section-title">Quick Links</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/events">Browse Events</NuxtLink></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <!-- 
          Contact Section
          Contact information for user inquiries
        -->
        <div class="footer-section">
          <h4 class="footer-section-title">Get In Touch</h4>
          <ul class="contact-info">
            <li>
              <span class="contact-icon">📧</span>
              <a href="mailto:info@eventflow.com">info@eventflow.com</a>
            </li>
            <li>
              <span class="contact-icon">📱</span>
              <span>(555) 123-4567</span>
            </li>
            <li>
              <span class="contact-icon">📍</span>
              <span>San Francisco, CA</span>
            </li>
          </ul>
        </div>

        <!-- 
          Resources Section
          Links to helpful resources and documentation
        -->
        <div class="footer-section">
          <h4 class="footer-section-title">Resources</h4>
          <ul class="footer-links">
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer bottom with copyright -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">&copy; 2025 EventFlow. All rights reserved.</p>
          <p class="built-with">
            Built with <span class="heart">❤️</span> using Vue.js & Nuxt
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/**
 * Footer Component
 *
 * Provides the site footer with:
 * - About information
 * - Quick navigation links
 * - Contact details
 * - Copyright notice
 *
 * This is a stateless (presentational) component displayed at the bottom of every page.
 */
</script>

<style scoped>
/* Footer container and layout */
.footer {
  background-color: #1f2937;
  color: #d1d5db;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  border-top: 1px solid #374151;
}

/* Main footer content grid */
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Individual footer section */
.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #f3f4f6;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.footer-section-description {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #d1d5db;
}

/* Links in footer */
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.footer-links a:hover {
  color: #f3f4f6;
  text-decoration: underline;
}

/* Contact information */
.contact-info {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #d1d5db;
}

.contact-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.contact-info a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #f3f4f6;
}

/* Social links */
.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: #d1d5db;
  border-radius: 0.375rem;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #6366f1;
  color: #fff;
}

/* Footer bottom section */
.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 1.5rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright,
.built-with {
  font-size: 0.85rem;
  color: #9ca3af;
  margin: 0;
}

.heart {
  display: inline-block;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Responsive design for tablets */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .footer-section-title {
    font-size: 0.95rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}

/* Responsive design for mobile */
@media (max-width: 480px) {
  .footer {
    padding: 2rem 0 1rem;
    margin-top: 2rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-section {
    align-items: center;
    text-align: center;
  }

  .footer-links,
  .contact-info,
  .social-links {
    justify-content: center;
  }

  .contact-info li {
    justify-content: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 0.5rem;
  }

  .copyright,
  .built-with {
    text-align: center;
  }
}
</style>

<style scoped>
/* Scoped styles for Footer component */
</style>
