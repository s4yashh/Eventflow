<!-- pages/events/[id].vue - Dynamic event detail page -->
<template>
  <div v-if="event" class="event-detail">
    <!-- Event header image -->
    <div class="event-header-image">
      <img :src="event.image" :alt="event.title" />
    </div>

    <!-- Event content -->
    <section class="event-content">
      <div class="container">
        <!-- Breadcrumb navigation -->
        <nav class="breadcrumb">
          <NuxtLink to="/" class="breadcrumb__link">Home</NuxtLink>
          <span class="breadcrumb__separator">/</span>
          <NuxtLink to="/events" class="breadcrumb__link">Events</NuxtLink>
          <span class="breadcrumb__separator">/</span>
          <span class="breadcrumb__current">{{ event.title }}</span>
        </nav>

        <!-- Main event details -->
        <div class="event-main">
          <!-- Left column: Event information -->
          <article class="event-info">
            <!-- Category badge -->
            <span class="event-category">{{ event.category }}</span>

            <!-- Event title -->
            <h1 class="event-title">{{ event.title }}</h1>

            <!-- Quick info grid -->
            <div class="event-quick-info">
              <div class="quick-info-item">
                <span class="quick-info-icon">📅</span>
                <div>
                  <p class="quick-info-label">Date</p>
                  <p class="quick-info-value">{{ formatDate(event.date) }}</p>
                </div>
              </div>

              <div class="quick-info-item">
                <span class="quick-info-icon">🕐</span>
                <div>
                  <p class="quick-info-label">Time</p>
                  <p class="quick-info-value">{{ event.time }}</p>
                </div>
              </div>

              <div class="quick-info-item">
                <span class="quick-info-icon">📍</span>
                <div>
                  <p class="quick-info-label">Location</p>
                  <p class="quick-info-value">{{ event.location }}</p>
                </div>
              </div>
            </div>

            <!-- Full description -->
            <section class="event-description">
              <h2>About This Event</h2>
              <p>{{ event.description }}</p>
            </section>

            <!-- Event details section -->
            <section class="event-details">
              <h2>Event Details</h2>
              <div class="details-grid">
                <div class="detail-item">
                  <h4>Category</h4>
                  <p>{{ event.category }}</p>
                </div>
                <div class="detail-item">
                  <h4>Location</h4>
                  <p>{{ event.location }}</p>
                </div>
                <div class="detail-item">
                  <h4>Date</h4>
                  <p>{{ formatDate(event.date) }}</p>
                </div>
                <div class="detail-item">
                  <h4>Start Time</h4>
                  <p>{{ event.time }}</p>
                </div>
              </div>
            </section>
          </article>

          <!-- Right column: Sidebar -->
          <aside class="event-sidebar">
            <!-- Registration card -->
            <div class="registration-card">
              <h3 class="registration-card__title">Ready to attend?</h3>
              <p class="registration-card__text">
                Register now to secure your spot at this amazing event.
              </p>
              <button class="registration-btn">Register Now</button>
              <p class="registration-card__footer">
                Early bird pricing available
              </p>
            </div>

            <!-- Share section -->
            <div class="share-section">
              <h4>Share Event</h4>
              <div class="share-buttons">
                <a href="#" class="share-btn" title="Share on Twitter">𝕏</a>
                <a href="#" class="share-btn" title="Share on Facebook">f</a>
                <a href="#" class="share-btn" title="Share on LinkedIn">in</a>
              </div>
            </div>
          </aside>
        </div>

        <!-- Navigation buttons -->
        <!-- Related Events Section -->
        <section v-if="relatedEvents.length > 0" class="related-events">
          <h2 class="related-events__title">More {{ event.category }} Events</h2>
          <div class="related-events__grid">
            <EventCard
              v-for="relEvent in relatedEvents.slice(0, 3)"
              :key="relEvent.id"
              :event="relEvent"
            />
          </div>
        </section>

        <div class="event-navigation">
          <NuxtLink to="/events" class="nav-btn nav-btn--secondary">
            ← Back to Events
          </NuxtLink>
          <div class="nav-arrows">
            <button
              v-if="previousEvent"
              @click="goToPreviousEvent"
              class="nav-btn nav-btn--arrow"
              title="Previous event"
            >
              ← Previous
            </button>
            <button
              v-if="nextEvent"
              @click="goToNextEvent"
              class="nav-btn nav-btn--arrow"
              title="Next event"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Error state - event not found -->
  <div v-else class="event-not-found">
    <div class="container">
      <div class="not-found-content">
        <p class="not-found-icon">🔍</p>
        <h1 class="not-found-title">Event Not Found</h1>
        <p class="not-found-text">
          Sorry, the event you're looking for doesn't exist.
        </p>
        <NuxtLink to="/events" class="not-found-btn">
          Browse All Events
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "~/components/EventCard.vue";
import eventsData from "~/data/events.json";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      eventId: null,
      allEvents: eventsData
    };
  },
  computed: {
    // Find the event from the data
    event() {
      return this.allEvents.find((e) => e.id === this.eventId) || null;
    },
    // Find previous and next events for navigation
    previousEvent() {
      const currentIndex = this.allEvents.findIndex((e) => e.id === this.eventId);
      return currentIndex > 0 ? this.allEvents[currentIndex - 1] : null;
    },
    nextEvent() {
      const currentIndex = this.allEvents.findIndex((e) => e.id === this.eventId);
      return currentIndex < this.allEvents.length - 1
        ? this.allEvents[currentIndex + 1]
        : null;
    },
    // Find related events by category
    relatedEvents() {
      if (!this.event) return [];
      return this.allEvents.filter(
        (e) => e.category === this.event.category && e.id !== this.event.id
      );
    }
  },
  mounted() {
    this.eventId = parseInt(this.$route.params.id);
  },
  methods: {
    // Format date utility function
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    // Navigation functions
    goToPreviousEvent() {
      if (this.previousEvent) {
        this.$router.push(`/events/${this.previousEvent.id}`);
      }
    },
    goToNextEvent() {
      if (this.nextEvent) {
        this.$router.push(`/events/${this.nextEvent.id}`);
      }
    }
  },
  head() {
    return {
      title: this.event
        ? `${this.event.title} - EventFlow`
        : "Event Not Found - EventFlow",
      meta: [
        {
          name: "description",
          content: this.event
            ? `${this.event.description.substring(0, 160)}...`
            : "Event details page",
        },
      ],
    };
  }
}
</script>

<style scoped>
/* Event header image */
.event-header-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.event-header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Event content section */
.event-content {
  padding: 60px 24px;
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Breadcrumb navigation */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  font-size: 14px;
  color: #6b7280;
}

.breadcrumb__link {
  color: #667eea;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb__link:hover {
  color: #764ba2;
}

.breadcrumb__separator {
  color: #d1d5db;
}

.breadcrumb__current {
  color: #1f2937;
  font-weight: 600;
}

/* Main event layout */
.event-main {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 40px;
  margin-bottom: 60px;
}

/* Event info section */
.event-info {
  display: flex;
  flex-direction: column;
}

/* Category badge */
.event-category {
  display: inline-block;
  width: fit-content;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

/* Event title */
.event-title {
  font-size: 42px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 32px;
  line-height: 1.2;
}

/* Quick info grid */
.event-quick-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  padding: 24px;
  background: #f9fafb;
  border-radius: 12px;
  margin-bottom: 40px;
}

.quick-info-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.quick-info-icon {
  font-size: 24px;
}

.quick-info-label {
  margin: 0;
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.quick-info-value {
  margin: 4px 0 0 0;
  font-size: 16px;
  color: #1f2937;
  font-weight: 600;
}

/* Description section */
.event-description {
  margin-bottom: 48px;
}

.event-description h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #1f2937;
}

.event-description p {
  font-size: 16px;
  line-height: 1.8;
  color: #4b5563;
}

/* Details grid */
.event-details {
  margin-bottom: 48px;
}

.event-details h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #1f2937;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.detail-item {
  padding: 20px;
  background: #f9fafb;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.detail-item h4 {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #6b7280;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-item p {
  margin: 0;
  font-size: 16px;
  color: #1f2937;
  font-weight: 600;
}

/* Sidebar */
.event-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Registration card */
.registration-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 28px;
  border-radius: 12px;
  text-align: center;
}

.registration-card__title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.registration-card__text {
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 20px 0;
  opacity: 0.9;
}

.registration-btn {
  width: 100%;
  padding: 12px 24px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.registration-btn:hover {
  transform: scale(1.02);
}

.registration-card__footer {
  font-size: 12px;
  margin: 12px 0 0 0;
  opacity: 0.8;
}

/* Share section */
.share-section {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.share-section h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #1f2937;
}

.share-buttons {
  display: flex;
  gap: 12px;
}

.share-btn {
  flex: 1;
  padding: 12px;
  background: #f3f4f6;
  border-radius: 8px;
  text-decoration: none;
  color: #667eea;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease;
}

.share-btn:hover {
  background: #667eea;
  color: white;
}

/* Related Events Section */
.related-events {
  margin: 60px 0;
  padding: 40px 0;
  border-top: 2px solid #e5e7eb;
}

.related-events__title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 32px;
}

.related-events__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

/* Navigation */
.event-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 2px solid #e5e7eb;
  flex-wrap: wrap;
}

.nav-arrows {
  display: flex;
  gap: 12px;
}

.nav-btn {
  padding: 12px 24px;
  border: 2px solid #667eea;
  border-radius: 8px;
  background: white;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background: #667eea;
  color: white;
}

.nav-btn--secondary {
  border-color: #e5e7eb;
  color: #6b7280;
}

.nav-btn--secondary:hover {
  background: #f3f4f6;
  color: #1f2937;
}

/* Event not found state */
.event-not-found {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
}

.not-found-content {
  text-align: center;
}

.not-found-icon {
  font-size: 80px;
  display: block;
  margin-bottom: 24px;
}

.not-found-title {
  font-size: 32px;
  color: #1f2937;
  margin-bottom: 12px;
}

.not-found-text {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 24px;
}

.not-found-btn {
  display: inline-block;
  padding: 12px 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.not-found-btn:hover {
  transform: scale(1.05);
}

/* Responsive design */
@media (max-width: 768px) {
  .event-header-image {
    height: 250px;
  }

  .event-content {
    padding: 40px 16px;
  }

  .event-main {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .event-title {
    font-size: 28px;
  }

  .event-quick-info {
    grid-template-columns: 1fr;
  }

  .event-description h2,
  .event-details h2 {
    font-size: 20px;
  }

  .nav-arrows {
    width: 100%;
  }

  .nav-btn {
    flex: 1;
  }

  .event-navigation {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 480px) {
  .event-title {
    font-size: 22px;
  }

  .event-quick-info {
    padding: 16px;
    gap: 16px;
  }

  .quick-info-icon {
    font-size: 20px;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }
}
</style>
