<template>
    <footer class="amazing-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>About Me</h4>
          <p>I am a passionate developer and designer dedicated to creating the best web experiences.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <p><i class="fas fa-map-marker-alt"></i> 221 Burwood Hwy</p>
          <p><i class="fas fa-phone"></i> +1 234 567 890</p>
          <p><i class="fas fa-envelope"></i> s223376145@deakin.edu.au</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; SIT120 Class. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  // You can add any reactive properties or methods if needed.
  </script>
  
  <style scoped>
  .amazing-footer {
    background-color: skyblue;
    color: #ecf0f1;
    padding: 40px 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-section {
    flex: 1;
    margin-right: 20px;
  }
  
  .footer-section:last-child {
    margin-right: 0;
  }
  
  .footer-section h4 {
    border-bottom: 2px solid #e74c3c;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .footer-section p, .footer-section li {
    margin-bottom: 10px;
  }
  
  .footer-section a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-section a:hover {
    color: #e74c3c;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 40px;
    border-top: 1px solid #1284f6;
    padding-top: 20px;
  }
  
  /* If you're using Font Awesome for icons */
  .fas {
    margin-right: 10px;
  }
  </style>
  