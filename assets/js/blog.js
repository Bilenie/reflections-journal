document.addEventListener('DOMContentLoaded', function() {
  const postsList = document.getElementById('posts-list');

  function renderPosts(){
    postsList.innerHTML = '';

   

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach((post, index) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
      titleElement.setAttribute('style','text-decoration: grey underline');

      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
      contentElement.setAttribute('style','font-style:italic;font-weight:bold; padding-left:10px');

      const authorElement = document.createElement('h3');
      authorElement.textContent = `Posted by: ${post.username}`;
      // authorElement.setAttribute('style','margin:10px; padding:10px');

      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(authorElement);

      postsList.appendChild(postElement);
    });
  }

  renderPosts();
});
