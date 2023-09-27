<template>
  <div class="forum-container">
    <h1 class="forum-header">Welcome to the Community Forum</h1>

    <!-- List of Forums -->
    <div class="forum-list">
      <div class="forum-item" v-for="forum in forums" :key="forum.id" @click="selectForum(forum)">
        <h2>{{ forum.title }}</h2>
        <p>{{ forum.description }}</p>
      </div>
    </div>

    <!-- Display Selected Forum's Discussions -->
    <div class="discussion-list" v-if="selectedForum">
      <h2>{{ selectedForum.title }} Discussions</h2>
      <div class="discussion" v-for="discussion in selectedForum.discussions" :key="discussion.id">
        <h3>{{ discussion.title }}</h3>
        <p>{{ discussion.description }}</p>
        <p class="author">Posted by: {{ discussion.author }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const forums = ref([
  {
    id: 1,
    title: 'Web Development Tools',
    description: 'Discuss your favorite web development tools here.',
    discussions: [
      {
        id: 1,
        title: 'Best Code Editors',
        description: 'Share your favorite code editors and why you love them.',
        author: 'JohnDoe',
      },
      {
        id: 2,
        title: 'Front-end Frameworks',
        description: 'Which front-end framework do you prefer and why?',
        author: 'JaneSmith',
      },
    ],
  },
  {
    id: 2,
    title: 'JavaScript Frameworks',
    description: 'Discuss various JavaScript frameworks and their use cases.',
    discussions: [
      {
        id: 3,
        title: 'Vue.js vs React',
        description: 'A comparison of Vue.js and React for web development.',
        author: 'WebDevMaster',
      },
      {
        id: 4,
        title: 'Angular Best Practices',
        description: 'Share your best practices for Angular development.',
        author: 'CodeNinja',
      },
    ],
  },
]);

const selectedForum = ref(null);

const selectForum = (forum) => {
  selectedForum.value = forum;
};
</script>

<style scoped>
/* Add your styles here */
</style>
