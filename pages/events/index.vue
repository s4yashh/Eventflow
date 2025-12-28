<!-- pages/events/index.vue - Events listing page -->
<template>
  <div class="events-page">
    <!-- Page header -->
    <section class="page-header">
      <div class="page-header__content">
        <h1 class="page-header__title">Browse All Events</h1>
        <p class="page-header__subtitle">
          Explore all available events and find something that interests you
        </p>
      </div>
    </section>

    <!-- Events listing section -->
    <section class="events-listing">
      <div class="container">
        <!-- Search and filter bar -->
        <div class="listing-controls">
          <div class="search-bar">
            <input
              v-model="searchQuery"
              type="text"
              class="search-bar__input"
              placeholder="Search events..."
            />
            <span class="search-bar__icon">🔍</span>
          </div>

          <!-- Sort options -->
          <select v-model="sortBy" class="sort-select">
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
            <option value="location">Sort by Location</option>
          </select>
        </div>

        <!-- Events list -->
        <div v-if="filteredEvents.length > 0" class="events-list">
          <EventCard
            v-for="event in filteredEvents"
            :key="event.id"
            :event="event"
          />
        </div>

        <!-- Empty state -->
        <div v-else class="empty-state">
          <p class="empty-state__icon">📭</p>
          <h2 class="empty-state__title">No events match your search</h2>
          <p class="empty-state__text">
            Try different search terms or visit the homepage
          </p>
          <NuxtLink to="/" class="empty-state__link"> ← Back to Home </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import EventCard from "~/components/EventCard.vue";
import eventsData from "~/data/events.json";

// Define event interface
interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
}

// Reactive data
const searchQuery = ref("");
const sortBy = ref("date");
const events = ref<Event[]>(eventsData);

// Filter and sort events
const filteredEvents = computed(() => {
  let filtered = events.value.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  // Sort events
  if (sortBy.value === "date") {
    filtered.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  } else if (sortBy.value === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy.value === "location") {
    filtered.sort((a, b) => a.location.localeCompare(b.location));
  }

  return filtered;
});

// Set page title for SEO
useHead({
  title: "Browse Events - EventFlow",
  meta: [
    {
      name: "description",
      content: "Browse all upcoming events and workshops",
    },
  ],
});
</script>

<style scoped>
.events-page {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Page header */
.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 24px;
  text-align: center;
}

.page-header__content {
  max-width: 800px;
  margin: 0 auto;
}

.page-header__title {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
}

.page-header__subtitle {
  font-size: 18px;
  opacity: 0.9;
  line-height: 1.6;
}

/* Events listing section */
.events-listing {
  flex: 1;
  padding: 60px 24px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Listing controls */
.listing-controls {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  align-items: center;
  flex-wrap: wrap;
}

.search-bar {
  flex: 1;
  min-width: 250px;
  position: relative;
}

.search-bar__input {
  width: 100%;
  padding: 12px 16px 12px 40px;
  font-size: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;
}

.search-bar__input:focus {
  border-color: #667eea;
}

.search-bar__icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
}

.sort-select {
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.sort-select:focus {
  outline: none;
  border-color: #667eea;
}

/* Events list grid */
.events-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 60px 24px;
}

.empty-state__icon {
  font-size: 64px;
  display: block;
  margin-bottom: 16px;
}

.empty-state__title {
  font-size: 24px;
  color: #1f2937;
  margin-bottom: 12px;
}

.empty-state__text {
  color: #6b7280;
  margin-bottom: 24px;
  font-size: 16px;
}

.empty-state__link {
  display: inline-block;
  padding: 12px 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.empty-state__link:hover {
  transform: scale(1.05);
}

/* Responsive design */
@media (max-width: 768px) {
  .page-header {
    padding: 40px 16px;
  }

  .page-header__title {
    font-size: 28px;
  }

  .page-header__subtitle {
    font-size: 16px;
  }

  .events-listing {
    padding: 40px 16px;
  }

  .listing-controls {
    flex-direction: column;
  }

  .search-bar {
    min-width: 100%;
  }

  .sort-select {
    width: 100%;
  }

  .events-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
