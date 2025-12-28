<!-- EventCard Component - Reusable event card for listings -->
<template>
  <div class="event-card">
    <div class="event-card-body">
      <!-- Event category badge -->
      <div class="event-card-badge">{{ event.category }}</div>

      <!-- Event title -->
      <h3 class="event-card-title">{{ event.title }}</h3>

      <!-- Event description (truncated to 2 lines) -->
      <p class="event-card-description">{{ event.description }}</p>

      <!-- Event metadata (date, time, location) -->
      <div class="event-card-meta">
        <span><strong>📅 Date:</strong> {{ formatDate(event.date) }}</span>
        <span><strong>🕐 Time:</strong> {{ event.time }}</span>
        <span><strong>📍 Location:</strong> {{ event.location }}</span>
        <span><strong>👥 Attendees:</strong> {{ event.attendees }}</span>
      </div>

      <!-- Link to view full event details -->
      <nuxt-link :to="`/events/${event.id}`" class="event-card-link">
        View Details →
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// EventCard component for displaying individual events
// Props: event object containing event data
export default {
  name: "EventCard",
  props: {
    // Event object with id, title, description, date, time, location, category, attendees
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // Format date to readable format (e.g., "Jan 15, 2025")
    formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
/* Scoped styles for EventCard component */
</style>
