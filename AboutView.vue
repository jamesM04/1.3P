<template>
  <section class="about-me-page">
    <div class="profile-image">
      <!-- <img src="../assets/images/diego-ph-fIq0tET6llw-unsplash.jpg" alt="Your Name" class="hover-effect"> -->
    </div>
    <div class="about-content">
      <h1>About Me</h1>
      <p>
        Hello, my name is James! I am an enthusiastic web developer with an extensive background in crafting dynamic and responsive websites. My expertise lies within Vue.js, where I have created a wide range of different Vue oriented projects, such as a Workout Tracker, a To-Do app, and this portfolio to name a few!
      </p>
      <p>
        I earned my degree in Information Technology from the University of Deakin, and have collaborated with diverse clients and companies to deliver high quality web solutions since then!
      </p>
      <p>
        During my free time, I enjoy going to the gym, meeting up with friends, researching the latest technologies, and researching exercise science.
      </p>
      <button class="download-btn">Download My Resume</button>
      <p>
        Thank you for explorting my portfolio. If you'd like to collaborate or just chat, don't hesitate to <a href="mailto:your-email@example.com">reach out</a>!
      </p>
    </div>
  </section>
</template>

<script setup>
// You can add any reactive properties or methods if needed.
</script>

<style scoped>
.about-me-page {
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
  /* max-width: 1200px;  */
  margin: 0 auto; 
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-image {
  flex: 1;
  padding-right: 50px;
}

.profile-image img.hover-effect {
  max-width: 100%;
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.profile-image img.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.about-content {
  flex: 2;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.about-content h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.about-content p {
  margin-bottom: 20px;
  line-height: 1.6;
}

.about-content a {
  color: #e74c3c;
  text-decoration: none;
  transition: color 0.3s;
}

.about-content a:hover {
  color: #c0392b;
}

.download-btn {
  display: inline-block;
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: #c0392b;
}
</style>