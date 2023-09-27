<template>
    <div>
      <h1>{{ topic.title }}</h1>
      <p>{{ topic.content }}</p>
      <!-- Display comments here -->
      <div v-for="comment in topic.comments" :key="comment.id" class="forum-comment">
        <p>{{ comment.text }}</p>
      </div>
      <!-- Add a form for users to post comments (simplified) -->
      <form @submit.prevent="postComment">
        <textarea v-model="newComment" rows="4" cols="50" placeholder="Add your comment"></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const { topic } = defineProps(['topic']);
  const newComment = ref('');
  const postId = ref(1); // Used to simulate unique comment IDs
  
  function postComment() {
    topic.comments.push({ id: postId.value++, text: newComment.value });
    newComment.value = '';
  }
  </script>
  
  <style scoped>
  .forum-comment {
    margin: 10px 0;
  }
  </style>
  