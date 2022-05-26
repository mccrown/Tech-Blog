
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-url"]').value;
  

  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);