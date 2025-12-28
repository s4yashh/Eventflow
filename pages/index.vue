<!-- Home Page - List all events with search functionality -->
<template>
  <div class="home-page">
    <!-- Page title -->
    <h1 style="text-align: center; margin-bottom: 30px; font-size: 32px">
      Discover Events
    </h1>

    <!-- Search bar for filtering events by name -->
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search events by name..."
        class="search-input"
      />
    </div>

    <!-- Events grid - displays all filtered events -->
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
      <h2 class="empty-state-title">No events found</h2>
      <p class="empty-state-text">
        Try adjusting your search terms to find what you're looking for.
      </p>
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
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
