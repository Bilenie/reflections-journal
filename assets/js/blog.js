
  const postsList = document.getElementById('posts-list');
// This line selects an element with the id posts-list from the HTML document and assigns it to the variable postsList
  function renderPosts(){
  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
// This declares a function renderPosts() which is responsible for rendering posts. It retrieves posts data from the browser's localStorage using the key 'posts'. 
// If no posts are found (localStorage.getItem('posts') returns null), it assigns an empty array [] to posts.

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
      // This iterates through each post in the posts array retrieved from localStorage. For each post, it creates a new div element (postElement) and adds a class post to it.
      

      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(authorElement);

      postsList.appendChild(postElement);
      // Appends the titleElement, contentElement, and authorElement as child elements to postElement (div that represents a post
    });
  }

  renderPosts();

