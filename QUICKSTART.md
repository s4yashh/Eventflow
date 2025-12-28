# 🚀 EventFlow - Quick Start Guide

Welcome to EventFlow! This guide will get you up and running in minutes.

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies

```bash
cd EventFlow
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Visit `http://localhost:3000`

**That's it! 🎉 Your EventFlow app is running!**

## 🗺️ Navigation

Once the app is running, you'll see:

### Home Page (`/`)

- **View**: Grid of all available events
- **Search**: Type to filter events by name, location, or category
- **Action**: Click any event card to see details

### Events Page (`/events`)

- **View**: Dedicated events listing page
- **Features**: Search + Sort by date/title/location
- **Action**: Browse and filter with more control

### Event Details (`/events/1`, `/events/2`, etc.)

- **View**: Complete event information
- **Features**: Previous/Next navigation, Register button, Share options
- **Action**: Register for event (feature-ready)

## 📁 Project Structure at a Glance

```
EventFlow/
├── 📄 app.vue                    # Main app layout
├── 📄 nuxt.config.ts            # Nuxt settings
├── 📁 components/               # Reusable parts
│   ├── Header.vue
│   ├── Footer.vue
│   └── EventCard.vue
├── 📁 pages/                    # Website pages
│   ├── index.vue                # Home page
│   └── events/
│       ├── index.vue            # Events list
│       └── [id].vue             # Event detail
├── 📁 data/
│   └── events.json              # Sample events
├── 📁 assets/
│   └── css/global.css           # Styling
├── 📄 package.json              # Dependencies
└── 📄 README.md                 # Full documentation
```

## 🔍 Key Features Overview

| Feature           | Location        | How to Use                 |
| ----------------- | --------------- | -------------------------- |
| **Search Events** | Home or /events | Type in search box         |
| **View Details**  | Event card      | Click "View Details"       |
| **Sort Events**   | /events page    | Select from sort dropdown  |
| **Navigate**      | Event detail    | Use Previous/Next buttons  |
| **Share Event**   | Event detail    | Click social share buttons |

## 💻 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static files
npm run generate

# Start production server
npm start
```

## 🎨 Customization Tips

### Change App Name

Edit `app.vue` → Logo text
Edit `nuxt.config.ts` → App title

### Add New Events

Edit `data/events.json` and add new event object:

```json
{
  "id": 9,
  "title": "New Event",
  "description": "Event description",
  "date": "2025-05-01",
  "time": "2:00 PM",
  "location": "City, State",
  "category": "Technology"
}
```

### Change Colors

Edit `assets/css/global.css` - Update CSS variables:

```css
:root {
  --primary-color: #6366f1; /* Change this */
  --secondary-color: #8b5cf6; /* And this */
}
```

## 🐛 Troubleshooting

### Port 3000 Already in Use?

```bash
# Use different port
npm run dev -- --port 3001
```

### Build Fails?

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Search Not Working?

- Make sure `data/events.json` exists
- Check browser console for errors (F12)
- Verify event data format matches required structure

## 📚 Learn More

| Want to...              | Read...                              |
| ----------------------- | ------------------------------------ |
| Understand all features | [FEATURES.md](./FEATURES.md)         |
| Deploy to internet      | [DEPLOYMENT.md](./DEPLOYMENT.md)     |
| Contribute code         | [CONTRIBUTING.md](./CONTRIBUTING.md) |
| Full setup & API info   | [README.md](./README.md)             |

## 🎓 Vue.js & Nuxt Basics

### What's Vue.js?

- JavaScript framework for building interactive UIs
- Component-based (reusable pieces)
- Reactive (updates automatically)

### What's Nuxt?

- Framework built on top of Vue.js
- Handles routing automatically
- Enables Server-Side Rendering (better SEO)
- File-based routing (files = routes)

### Key Concepts in EventFlow

**Components** (reusable pieces):

- `Header.vue` - Navigation bar
- `Footer.vue` - Footer info
- `EventCard.vue` - Event display card

**Pages** (website routes):

- `index.vue` → `/` (home)
- `events/index.vue` → `/events` (list)
- `events/[id].vue` → `/events/1` (detail)

**Data** (events information):

- Stored in `data/events.json`
- Imported into pages
- Displayed in components

## 🚀 Next Steps

1. **Explore the Code**

   - Read through `components/` to understand structure
   - Check `pages/` to see how pages work
   - Review `data/events.json` for data format

2. **Try Customizing**

   - Change colors in CSS
   - Add new events to JSON
   - Modify component text

3. **Experiment**

   - Try adding new pages in `pages/`
   - Create new components
   - Modify styling

4. **Deploy**
   - When ready, follow [DEPLOYMENT.md](./DEPLOYMENT.md)
   - Choose hosting platform
   - Go live!

## 💡 Quick Code Examples

### Add a New Event

```javascript
// In data/events.json
{
  "id": 99,
  "title": "My Event",
  "description": "Great event for learning",
  "date": "2025-12-31",
  "time": "6:00 PM",
  "location": "New York, NY",
  "category": "Networking"
}
// It appears automatically on the site!
```

### Use Search in Vue

```vue
<input v-model="searchQuery" placeholder="Search...">
<!-- v-model = two-way data binding -->
<!-- searchQuery updates as you type -->
```

### Create Links

```vue
<NuxtLink to="/events/1">View Event</NuxtLink>
<!-- NuxtLink = fast internal navigation -->
<!-- Regular <a> tags work too -->
```

## 🎯 Common Questions

**Q: How do I change the logo?**
A: Edit `components/Header.vue` - change "EventFlow" text and emoji

**Q: Where are the events stored?**
A: In `data/events.json` - it's a JSON file with event data

**Q: How do I add a new page?**
A: Create a new file in `pages/` folder. Nuxt automatically creates routes!

**Q: Can I use this as a real event site?**
A: Yes! Currently uses mock data. To use real data, connect an API in `pages/` files.

**Q: How do I deploy it?**
A: See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions for various platforms.

## 🆘 Need Help?

1. **Check documentation**

   - README.md - Full overview
   - FEATURES.md - Feature details
   - DEPLOYMENT.md - Hosting guides

2. **Read the code comments**

   - Components have detailed comments
   - Pages explain their functionality
   - Configuration files are documented

3. **Common issues**
   - Restart dev server if changes don't appear
   - Clear browser cache if styling looks wrong
   - Check browser console (F12) for error messages

## 🎉 You're Ready!

Congratulations! You now have a fully functional event discovery platform.

**What to do next:**

- Run `npm run dev` and explore the app
- Read through the code to understand it
- Customize it for your needs
- Deploy it to the world!

---

**Happy building! 🚀**

For detailed information on any topic, check the other documentation files in the project root.
