<!-- 
  FeaturedEvents Component - Showcase featured events
  
  This component displays a curated selection of featured events
  with special styling and emphasis. It's used on the home page
  to highlight the most important or popular events.
-->
<template>
  <section class="featured-section">
    <div class="featured-header">
      <h2 class="featured-title">⭐ Featured Events</h2>
      <p class="featured-subtitle">
        Curated selection of popular events you shouldn't miss
      </p>
    </div>

    <div v-if="displayedEvents.length > 0" class="featured-grid">
      <div
        v-for="event in displayedEvents"
        :key="event.id"
        class="featured-card"
        :style="{ borderLeftColor: getCategoryColor(event.category) }"
      >
        <div class="featured-card-header">
          <span
            class="featured-badge"
            :style="{ backgroundColor: getCategoryBg(event.category) }"
          >
            {{ event.category }}
          </span>
          <span class="featured-star">⭐</span>
        </div>

        <h3 class="featured-card-title">{{ event.title }}</h3>

        <div class="featured-card-meta">
          <div class="meta-row">
            <span class="meta-icon">📅</span>
            <span>{{ formatDate(event.date) }}</span>
          </div>
          <div class="meta-row">
            <span class="meta-icon">📍</span>
            <span>{{ event.location }}</span>
          </div>
        </div>

        <NuxtLink :to="`/events/${event.id}`" class="featured-cta">
          Learn More
          <span class="arrow">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  computed: {
    displayedEvents() {
      // Show only the first 3 events as featured
      return this.events.slice(0, 3);
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },
    getCategoryColor(category) {
      return "#000";
    },
    getCategoryBg(category) {
      return "#f5f5f5";
    },
  },
};
</script>

<style scoped>
/* Featured Events Section */
.featured-section {
  padding: 60px 24px;
  background: #f5f5f5;
  margin: 0 auto;
  max-width: 1200px;
  border-radius: 16px;
  margin: 40px 24px;
  border: 2px solid #000;
}

.featured-header {
  text-align: center;
  margin-bottom: 48px;
}

.featured-title {
  font-size: 32px;
  font-weight: 800;
  color: #000;
  margin-bottom: 12px;
}

.featured-subtitle {
  font-size: 16px;
  color: #555;
}
featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
}

/* Featured Card */
.featured-card {
  background: white;
  border-radius: 12px;
  padding: 28px;
  border-left: 5px solid #000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.featured-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.featured-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
}

.featured-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.featured-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #000;
  background-color: #f0f0f0;
  border: 1px solid #000;
}

.featured-star {
  font-size: 24px;
  animation: pulse 2s infinite;
}

.featured-card-title {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
  line-height: 1.4;
  position: relative;
  z-index: 1;
  /* Meta Information */
  .featured-card-meta {
    flex: 1;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #555;
  }
  font-size: 14px;
  color: #6b7280;
}

.meta-icon {
  font-size: 16px;
  /* Call to Action */
  .featured-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: #000;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    width: fit-content;
    position: relative;
    z-index: 1;
    border: 1px solid #000;
  }

  .featured-cta:hover {
    transform: translateX(4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    background: #333;
  }
  transform: translateX(4px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.arrow {
  transition: transform 0.3s ease;
}

.featured-cta:hover .arrow {
  transform: translateX(4px);
}

/* Animations */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .featured-section {
    padding: 40px 20px;
    margin: 30px 16px;
  }

  .featured-title {
    font-size: 24px;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .featured-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .featured-section {
    padding: 30px 16px;
    margin: 20px 8px;
  }

  .featured-title {
    font-size: 20px;
  }

  .featured-card {
    padding: 20px;
  }

  .featured-card-title {
    font-size: 16px;
  }

  .featured-cta {
    width: 100%;
    justify-content: center;
  }
}
</style>
