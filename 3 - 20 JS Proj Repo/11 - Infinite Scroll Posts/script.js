const postsContainer = document.getElementById('posts-container'),
      loading = document.querySelector('.loader'),
      filter = document.getElementById('filter');

let limit = 3,
    page = 1;

    // Fetch posts from API
async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    const data = await res.json();

    return data;
}

// Show post and DOM
async function showPosts() {
    const posts = await getPosts();

    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
        <div class='number'>${post.id}</div>
        <div class='post-info'>
            <h2 class='post-title'>${post.title}</h2>
            <p class='post-body'>${post.body}</p>
        </div>
        `;
        postsContainer.appendChild(postEl);
    });
}

// Show Initial Posts
showPosts();