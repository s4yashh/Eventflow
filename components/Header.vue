<!-- 
  Header Component - Navigation and branding
  
  This component provides the main navigation bar for the EventFlow application.
  It's displayed at the top of every page and includes:
  - EventFlow logo/brand (clickable link to home)
  - Navigation menu with links to different pages
  - Responsive design (adapts to mobile/tablet screens)
-->
<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- 
          Logo/Brand - Main site identity
          Links to home page (/) when clicked
        -->
        <div class="logo">
          <NuxtLink to="/" class="logo-link">
            <span class="logo-icon">🎯</span>
            <span class="logo-text">EventFlow</span>
          </NuxtLink>
        </div>

        <!-- 
          Navigation Links - Main site navigation menu
          Contains links to:
          - Home: Homepage with event listing
          - Events: Dedicated events page with advanced search
          - Contact: Contact section (future feature)
        -->
        <nav class="nav">
          <ul class="nav-links">
            <li>
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events" class="nav-link">Events</NuxtLink>
            </li>
            <li>
              <a href="#contact" class="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
/**
 * Header Component
 *
 * Provides the main navigation header for the EventFlow application.
 * - Displays the EventFlow brand/logo
 * - Navigation menu with page links
 * - Automatically responsive on mobile devices
 *
 * This is a stateless (presentational) component with no props or data.
 */
</script>

<style scoped>
/* Header styles with proper spacing and layout */
.header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e5e7eb;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

/* Logo/Brand styling */
.logo {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6366f1;
  font-weight: 700;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.logo-link:hover {
  color: #8b5cf6;
  transform: translateY(-2px);
}

.logo-icon {
  font-size: 1.75rem;
}

.logo-text {
  letter-spacing: -0.5px;
}

/* Navigation menu */
.nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: #374151;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
}

.nav-link:hover {
  color: #6366f1;
}

/* Underline animation on hover (optional enhancement) */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #6366f1;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Responsive design for tablets */
@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
    font-size: 0.9rem;
  }

  .logo-link {
    font-size: 1.25rem;
  }
}

/* Responsive design for mobile */
@media (max-width: 480px) {
  .header {
    padding: 0.75rem 0;
  }

  .header-content {
    gap: 0.5rem;
  }

  .logo-link {
    font-size: 1.1rem;
  }

  .logo-text {
    display: none;
  }

  .nav-links {
    gap: 0.75rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }
}
</style>
