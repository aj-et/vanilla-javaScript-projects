const postsContainer = document.getElementById('posts-container'),
      loading = document.querySelector('.loader'),
      filter = document.getElementById('filter');

let limit = 3,
    page = 1;

async
