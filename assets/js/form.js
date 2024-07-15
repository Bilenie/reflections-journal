
  const blogForm = document.getElementById('blog-form');
  const usernameInput = document.getElementById('username');
  const blogTitleInput = document.getElementById('blog-title');
  const blogContentInput = document.getElementById('blog-content');
  const formMessage = document.getElementById('form-message');

  // Retrieve references to form elements and other necessary DOM elements

  const handleFormSubmit = function(event) {
    // Add an event listener for the form submission event

    event.preventDefault(); // Prevent the default form submission behavior

    const username = usernameInput.value.trim();
    const blogTitle = blogTitleInput.value.trim();
    const blogContent = blogContentInput.value.trim();

    // Retrieve the values from form inputs and trim any extra whitespace

    if (!(username && blogTitle && blogContent)) {
      // Check if any of the required fields are empty

      formMessage.classList.remove('hidden');
      // Display a message if any field is empty
      return;
    }
// Create an object containing the blog post data
    const post = {
      username: username,
      title: blogTitle,
      content: blogContent
    };

    // Store post in localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    // Retrieve existing posts from localStorage & initialize an empty array
    posts.push(post);
    // Add the new post object to the array
    localStorage.setItem('posts', JSON.stringify(posts));
    // Store the updated posts array back into localStorage

    // Redirect to posts page
    window.location.href = './blog.html';
    // Redirect the user to another page after successfully storing the blog post
  };
blogForm.addEventListener('submit',handleFormSubmit);