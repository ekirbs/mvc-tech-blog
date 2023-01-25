const deletePostButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".delete-post-btn").addEventListener("click", deletePostButtonHandler);
