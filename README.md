# EventFlow - Event Discovery Web Application

A modern, beginner-friendly event listing web application built with **Vue.js 3** and **Nuxt 3**. Discover and explore amazing events with an elegant, responsive user interface.

## 🌟 Features

### Core Functionality

- **Event Listing**: Browse all events in a beautiful card-based grid layout
- **Dynamic Routing**:
  - `/` - Home page with all events
  - `/events` - Dedicated events listing page with advanced filtering
  - `/events/[id]` - Detailed event page with full information
- **Search Functionality**: Real-time search to filter events by name, description, location, and category
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices

### Technical Features

- **Server-Side Rendering (SSR)**: Built-in SEO optimization with Nuxt's SSR capability
- **Reusable Vue Components**: Modular component architecture with Header, Footer, and EventCard components
- **Mock Data**: JSON-based event data (no backend required)
- **Clean Code**: Well-commented code explaining key concepts for beginners
- **Modern Styling**: Custom CSS with CSS variables for easy theming

## 📋 Project Structure

```
EventFlow/
├── components/
│   ├── Header.vue          # Navigation header component
│   ├── Footer.vue          # Footer component with links
│   └── EventCard.vue       # Reusable event card component
├── pages/
│   ├── index.vue           # Home page with event listing
│   └── events/
│       ├── index.vue       # Events page with advanced search
│       └── [id].vue        # Event detail page (dynamic route)
├── data/
│   └── events.json         # Mock event data
├── assets/
│   └── css/
│       └── global.css      # Global styles and utilities
├── app.vue                 # Main app layout (entry point)
├── nuxt.config.ts          # Nuxt configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project directory)

   ```bash
   cd EventFlow
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000` (default Nuxt port)
   - The app will automatically reload on file changes

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start

# Generate static site (if needed)
npm run generate
```

## 🎨 Key Components Explained

### Header Component (`components/Header.vue`)

- Navigation bar with links to Home and Events pages
- EventFlow branding/logo
- Sticky positioning for easy navigation

```vue
<Header />
<!-- Used in app.vue -->
```

### Footer Component (`components/Footer.vue`)

- About section
- Quick links
- Contact information
- Copyright notice

### EventCard Component (`components/EventCard.vue`)

- Displays individual event information in card format
- Shows title, description, date, time, and location
- Links to detailed event page
- Accepts event object as prop

```vue
<EventCard :event="event" />
<!-- Pass event data as prop -->
```

## 📄 Pages Explained

### Home Page (`pages/index.vue`)

- Main landing page displaying all events
- Search bar to filter events by name, description, location, or category
- Real-time filtering with computed properties
- Beautiful card grid layout
- Empty state when no results match search

**Key Features:**

- `searchQuery` - Data property for search input
- `filteredEvents` - Computed property that filters events in real-time
- Case-insensitive search across multiple event fields

### Events Page (`pages/events/index.vue`)

- Dedicated events listing page
- Advanced search and filtering
- Sort functionality (by date, title, location)
- Same event grid as home page with additional controls

### Event Detail Page (`pages/events/[id].vue`)

- Dynamic route based on event ID
- Displays complete event information:
  - Event title and description
  - Date, time, and location
  - Category and other details
  - "Register Now" call-to-action
  - Share buttons for social media
- Navigation to previous/next events
- Breadcrumb navigation for context
- Handles event not found state gracefully

## 📊 Sample Event Data

Events are stored in `data/events.json` with the following structure:

```json
{
  "id": 1,
  "title": "Vue.js Workshop",
  "description": "Learn Vue.js fundamentals and best practices...",
  "date": "2025-02-15",
  "time": "10:00 AM",
  "location": "San Francisco, CA",
  "category": "Technology",
  "image": "https://images.unsplash.com/photo-..."
}
```

### Fields:

- **id**: Unique identifier for the event
- **title**: Event name
- **description**: Full event description
- **date**: Event date (YYYY-MM-DD format)
- **time**: Event start time
- **location**: Event location/venue
- **category**: Event category (Technology, Design, etc.)
- **image**: URL to event image

## 🎯 Search and Filter Features

The application includes real-time search across multiple fields:

- **By Title**: Search for event names
- **By Description**: Find events by content keywords
- **By Location**: Filter by city or venue
- **By Category**: Search by event type

### Implementation Details:

```javascript
// Filtering logic in pages/index.vue
filteredEvents() {
  if (!this.searchQuery.trim()) {
    return this.events;
  }

  const query = this.searchQuery.toLowerCase();
  return this.events.filter(event =>
    event.title.toLowerCase().includes(query) ||
    event.description.toLowerCase().includes(query) ||
    event.location.toLowerCase().includes(query) ||
    event.category.toLowerCase().includes(query)
  );
}
```

## 🎨 Styling System

### CSS Variables (Global Theme)

The application uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #6366f1; /* Main brand color */
  --secondary-color: #8b5cf6; /* Secondary/hover color */
  --dark-color: #1f2937; /* Text color */
  --light-color: #f9fafb; /* Background color */
  --border-color: #e5e7eb; /* Border color */
}
```

### Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop**: Full features and layout
- **Tablet** (≤768px): Optimized grid and navigation
- **Mobile** (≤480px): Single column layout, touch-friendly interface

## 🔧 Configuration Files

### `nuxt.config.ts`

- Nuxt 3 configuration with SSR enabled
- CSS imports for global styles
- Head configuration with meta tags for SEO
- Route caching rules for performance

### `tsconfig.json`

- TypeScript configuration for the project
- Path aliases (~/_, @/_) for imports
- DOM and Node.js lib support

### `package.json`

- Dependencies: nuxt, vue
- Scripts for development, building, and production

## 🌐 SEO Optimization

The application is built with SEO in mind:

- **Server-Side Rendering (SSR)**: All pages are pre-rendered on the server
- **Meta Tags**: Customized title and description for each page
- **Semantic HTML**: Proper heading structure and semantic elements
- **Open Graph Tags**: Ready for social media sharing (can be extended)

## 📱 Responsive Design Features

- **Mobile-First Approach**: Designed for small screens first
- **Flexible Grid**: Cards adapt to screen size
- **Touch-Friendly**: Larger touch targets on mobile
- **Optimized Images**: Fast loading on all devices
- **Readable Typography**: Proper font sizes for all devices

## 🚦 Getting Help

### Development Tips:

1. **Component Reusability**: Create more reusable components by extracting common patterns
2. **State Management**: Consider using Pinia for complex state management
3. **API Integration**: Replace mock data with real API calls by modifying data imports
4. **Testing**: Add Vue Test Utils and Jest for unit testing
5. **Routing**: Extend with nested routes and layouts as needed

### Common Tasks:

**Add a New Page:**

1. Create a new `.vue` file in the `pages/` directory
2. Nuxt automatically creates routes based on file structure

**Add a New Component:**

1. Create a `.vue` file in `components/` directory
2. Auto-import feature means no need to explicitly import

**Modify Styles:**

1. Edit `assets/css/global.css` for global styles
2. Use `<style scoped>` in components for component-specific styles

## 📝 Learning Resources

- [Vue.js Documentation](https://vuejs.org/)
- [Nuxt Documentation](https://nuxt.com/)
- [Vue.js 3 Composition API](https://vue3js.cn/docs/en/api/composition-api.html)

## 🎓 Beginner-Friendly Code Examples

### Using Props in Components:

```vue
<EventCard :event="eventData" />

// In EventCard.vue: export default { props: { event: { type: Object, required:
true } } }
```

### Computed Properties for Filtering:

```javascript
computed: {
  filteredEvents() {
    // Returns a new array based on search query
    return this.events.filter(/* filtering logic */);
  }
}
```

### Dynamic Routes:

```vue
<NuxtLink :to="`/events/${event.id}`">View Details</NuxtLink>
```

## 💡 Future Enhancement Ideas

1. **Backend Integration**: Connect to a real API instead of mock JSON
2. **User Authentication**: Add login/signup functionality
3. **Event Bookmarking**: Let users save favorite events
4. **Advanced Filters**: Filter by date range, price, etc.
5. **Reviews & Ratings**: Allow users to review and rate events
6. **Email Notifications**: Send event reminders to users
7. **Dark Mode**: Implement theme switcher
8. **Accessibility**: Enhance keyboard navigation and screen reader support

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

**Built with ❤️ using Vue.js and Nuxt**

Happy coding! 🚀
