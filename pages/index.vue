<!-- Home Page - List all events with search functionality -->
<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Discover Amazing Events</h1>
        <p class="hero-subtitle">
          Find and attend the best tech and design events in your area
        </p>
      </div>
    </section>

    <!-- Search bar for filtering events by name -->
    <div class="search-section">
      <div class="search-container">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="🔍 Search events by name, location, or category..."
          class="search-input"
        />
      </div>
      <p class="search-hint">{{ filteredEvents.length }} events available</p>
    </div>

    <!-- Events grid - displays all filtered events -->
    <div class="events-section">
      <div v-if="filteredEvents.length > 0" class="events-grid">
        <!-- EventCard component for each event -->
        <EventCard
          v-for="event in filteredEvents"
          :key="event.id"
          :event="event"
        />
      </div>

      <!-- Empty state when no events match search -->
      <div v-else class="empty-state">
        <div class="empty-state-icon">🎯</div>
        <h2 class="empty-state-title">No events found</h2>
        <p class="empty-state-text">
          Try adjusting your search terms. We'll help you find the perfect event!
        </p>
        <button @click="searchQuery = ''" class="empty-state-button">
          Clear Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Import EventCard component
import EventCard from "@/components/EventCard.vue";

// Import mock event data
import eventsData from "@/data/events.json";

// Home page - displays list of all events with search functionality
export default {
  name: "Index",
  components: {
    EventCard,
  },
  data() {
    return {
      // Search query for filtering events
      searchQuery: "",
      // All events loaded from mock data
      events: eventsData,
    };
  },
  computed: {
    // Computed property to filter events based on search query
    // Filters by event title, description, location, and category
    filteredEvents() {
      // If no search query, return all events
      if (!this.searchQuery.trim()) {
        return this.events;
      }

      // Convert search query to lowercase for case-insensitive search
      const query = this.searchQuery.toLowerCase();

      // Filter events by multiple fields
      return this.events.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query)
      );
    },
  },
  head() {
    // Set page title and meta description for SEO
    return {
      title: "EventFlow - Discover Events",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Discover and explore upcoming events. Search events by name, category, location, and more.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Home page specific styles */
.home-page {
  animation: fadeIn 0.3s ease-in;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 24px;
  text-align: center;
  margin-bottom: 40px;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 18px;
  opacity: 0.95;
  line-height: 1.6;
}

/* Search Section */
.search-section {
  padding: 0 24px 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.search-container {
  margin-bottom: 12px;
}

.search-input {
  width: 100%;
  padding: 16px 20px;
  font-size: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  outline: none;
  transition: all 0.3s ease;
  background: white;
  color: #1f2937;
}

.search-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-hint {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Events Section */
.events-section {
  flex: 1;
  padding: 0 24px 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 24px;
}

.empty-state-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.empty-state-title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
}

.empty-state-text {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 24px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.empty-state-button {
  padding: 12px 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.empty-state-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 60px 20px;
    margin-bottom: 30px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .search-section {
    padding: 0 20px 30px;
  }

  .events-section {
    padding: 0 20px 30px;
  }

  .events-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 16px;
    margin-bottom: 20px;
  }

  .hero-title {
    font-size: 28px;
    margin-bottom: 12px;
  }

  .hero-subtitle {
    font-size: 14px;
  }

  .search-section {
    padding: 0 16px 20px;
  }

  .search-input {
    padding: 12px 16px;
    font-size: 14px;
  }

  .events-section {
    padding: 0 16px 20px;
  }

  .events-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .empty-state {
    padding: 40px 16px;
  }

  .empty-state-title {
    font-size: 24px;
  }
}
</style>
