<!-- 
  EventCard Component - Reusable event card for listings
  
  This is a reusable component that displays individual event information
  in a beautiful card format. It's used on:
  - Home page (pages/index.vue)
  - Events listing page (pages/events/index.vue)
  
  Props:
  - event: Object containing event data with fields:
    * id: number - unique event identifier
    * title: string - event name
    * description: string - event description
    * date: string - event date (YYYY-MM-DD format)
    * time: string - event start time
    * location: string - event location/venue
    * category: string - event category/type
    * image: string - URL to event image (optional)
-->
<template>
  <div class="event-card">
    <!-- Card body with padding -->
    <div class="event-card-body">
      <!-- 
        Category Badge
        Displays the event category (e.g., "Technology", "Design")
        with a distinctive background color
      -->
      <div class="event-card-badge">
        {{ event.category }}
      </div>

      <!-- 
        Event Title
        Main heading of the event card
      -->
      <h3 class="event-card-title">{{ event.title }}</h3>

      <!-- 
        Event Description
        Shortened preview of the full description
        CSS truncates it to 2 lines with ellipsis
      -->
      <p class="event-card-description">{{ event.description }}</p>

      <!-- 
        Event Metadata
        Quick reference information about the event:
        - Date: When the event is happening
        - Time: What time the event starts
        - Location: Where the event is located
      -->
      <div class="event-card-meta">
        <span class="meta-item">
          <span class="meta-icon">📅</span>
          <span class="meta-text">{{ formatDate(event.date) }}</span>
        </span>
        <span class="meta-item">
          <span class="meta-icon">🕐</span>
          <span class="meta-text">{{ event.time }}</span>
        </span>
        <span class="meta-item">
          <span class="meta-icon">📍</span>
          <span class="meta-text">{{ event.location }}</span>
        </span>
      </div>

      <!-- 
        View Details Link
        Dynamic link to the event detail page
        Uses the event ID to create the URL: /events/[id]
      -->
      <NuxtLink :to="`/events/${event.id}`" class="event-card-link">
        View Details
        <span class="link-arrow">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ["event"],
  methods: {
    /**
     * Format Date Utility Function
     * Converts date string (YYYY-MM-DD) to readable format
     * Example: "2025-02-15" → "Feb 15, 2025"
     *
     * @param dateString - Date in YYYY-MM-DD format
     * @returns Formatted date string
     */
    formatDate(dateString) {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style scoped>
/*
  EventCard Component Styles
  All styles are scoped to this component only
*/

/* Main card container */
.event-card {
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
}

/* Hover effect - lift the card with enhanced shadow */
.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(102, 126, 234, 0.1);
  border-color: #e5e7eb;
}

/* Card body padding */
.event-card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Category badge styling */
.event-card-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.12) 0%, rgba(118, 75, 162, 0.08) 100%);
  color: #6366f1;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 0.75rem;
  width: fit-content;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.2s ease;
}

/* Event title */
.event-card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

/* Event description - truncated to 2 lines */
.event-card-description {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Metadata section */
.event-card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex: 1;
}

/* Individual metadata item */
.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #6b7280;
}

.meta-icon {
  font-size: 1rem;
}

.meta-text {
  flex: 1;
}

/* View Details link */
.event-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 0;
  width: fit-content;
  position: relative;
}

.event-card-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.event-card-link:hover {
  color: #764ba2;
  gap: 0.75rem;
}

.event-card-link:hover::after {
  width: 100%;
}

.link-arrow {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.event-card-link:hover .link-arrow {
  transform: translateX(4px);
}
}

/* Responsive design for tablets */
@media (max-width: 768px) {
  .event-card-body {
    padding: 1.25rem;
  }

  .event-card-title {
    font-size: 1rem;
  }
}

/* Responsive design for mobile */
@media (max-width: 480px) {
  .event-card {
    border-radius: 0.5rem;
  }

  .event-card-body {
    padding: 1rem;
  }

  .event-card-title {
    font-size: 0.95rem;
  }

  .event-card-description {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }

  .event-card-meta {
    gap: 0.4rem;
    margin-bottom: 0.75rem;
  }

  .meta-item {
    font-size: 0.8rem;
  }
}
</style>
