<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="header">
    <h1>1.3P</h1>
  </div>
  <div class="nav-container">
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="dropdown-btn">Menu</label>
    <div class="links-container">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/about">About</RouterLink>
      <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
      <!-- New forum link -->
      <RouterLink class="nav-link" to="/forum">Forum</RouterLink>
    </div>
  </div>
  <div class="page-container">
    <div class="content-wrapper">
      <!-- Your main content goes here -->
      <RouterView />
    </div>
    <footer class="amazing-footer">
      <!-- Your footer content as provided -->
      <FooterComponent/>
    </footer>
  </div>
</template>

<style scoped>
/* Add this to your styles */

.header {
  text-align: center;
  background-color: #2c3e50;
  padding: 10px 0;
}

.header h1 {
  color: #ecf0f1;
  font-size: 1.5em;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* This ensures the container takes at least the full height of the viewport */
}

.content-wrapper {
  flex: 1; /* This makes the content take up all available space, pushing the footer to the bottom */
}

.nav-container {
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
  padding: 10px 0;
  position: relative;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: #ecf0f1;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1.1em;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: #34495e;
  color: #bdc3c7;
}

.router-link-active {
  color: #e74c3c;
  background-color: #c0392b;
  border-radius: 4px;
}

/* Mobile styles */
.menu-toggle {
  display: none; /* hide the checkbox */
}

.dropdown-btn {
  display: none;
  background-color: #34495e;
  color: #ecf0f1;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.links-container {
  display: flex;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .dropdown-btn {
    display: block;
  }

  .links-container {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: gray;
  }

  .menu-toggle:checked + .dropdown-btn + .links-container {
    display: flex;
  }
}
</style>
