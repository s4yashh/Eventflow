# Contributing to EventFlow

Thank you for your interest in contributing to EventFlow! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

Be respectful and inclusive. All contributors are expected to follow good programming practices and maintain a positive community environment.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title describing the problem
   - Detailed description of what happened
   - Steps to reproduce (for bugs)
   - Expected vs. actual behavior
   - Screenshots (if applicable)

### Development Setup

1. **Fork the repository**

   ```bash
   git clone https://github.com/s4yashh/Eventflow.git
   cd EventFlow
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**

   - Keep commits small and focused
   - Write clear commit messages
   - Add comments for complex logic

5. **Test your changes**

   ```bash
   npm run dev
   ```

6. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Project Structure

```
EventFlow/
├── components/     # Reusable Vue components
├── pages/         # Application pages and routes
├── data/          # Mock data and static content
├── assets/        # Stylesheets and images
├── app.vue        # Root component
└── README.md      # Documentation
```

## Component Guidelines

When creating new components:

1. **Use descriptive names** - Component names should clearly indicate their purpose
2. **Props documentation** - Document all props with type and default values
3. **Scoped styles** - Use `<style scoped>` to avoid style conflicts
4. **Comments** - Add comments explaining the component's purpose

Example:

```vue
<template>
  <div class="component-name">
    <!-- Component content -->
  </div>
</template>

<script>
/**
 * ComponentName
 *
 * Brief description of what this component does
 */
export default {
  name: "ComponentName",
  props: {
    // Prop documentation
    title: {
      type: String,
      required: true,
      description: "The component title",
    },
  },
  // ... rest of component
};
</script>

<style scoped>
/* Component specific styles */
</style>
```

## Coding Standards

- **Vue 3 Composition API preferred** - Use `<script setup>` when possible
- **TypeScript** - Use TypeScript for better type safety
- **Formatting** - Follow Vue style guide conventions
- **Comments** - Comment complex logic and non-obvious implementations
- **Naming** - Use camelCase for variables/methods, PascalCase for components

## Git Commit Messages

Write clear, descriptive commit messages:

```
feat: Add search functionality to events page
fix: Correct date formatting in event cards
docs: Update README with setup instructions
style: Format code to match project standards
refactor: Extract filter logic to composable
test: Add unit tests for EventCard component
```

## Pull Request Process

1. **Before submitting:**

   - Ensure code follows project standards
   - Test the changes thoroughly
   - Update documentation if needed
   - Rebase on latest main branch

2. **PR description should include:**

   - What changes were made
   - Why the changes were made
   - Any breaking changes
   - Related issue numbers

3. **Review process:**
   - At least one approval required
   - Address feedback and suggestions
   - Keep discussion professional and constructive

## Feature Ideas for Contributors

Looking for something to contribute? Consider these enhancements:

- [ ] Add more event categories
- [ ] Implement event filtering by date range
- [ ] Add favorites/bookmarking feature
- [ ] Create event creation form
- [ ] Add unit and integration tests
- [ ] Implement user authentication
- [ ] Add dark mode theme
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add internationalization (i18n)
- [ ] Integrate real API backend

## Questions or Need Help?

- Open an issue for discussion
- Check existing documentation
- Review similar components for patterns

## Recognition

Contributors will be recognized in:

- The project README
- Commit history
- GitHub contributors page

---

Happy contributing! 🚀
