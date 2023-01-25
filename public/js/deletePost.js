const deletePostButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    console.log(response);
    if (response.ok) {
      document.location.reload();
      // document.location.replace('/dashboard');
    } else {
      // alert('Failed to delete profile.');
      alert(response.statusText);
    }
  }
};

document.querySelector(".delete-post-btn").addEventListener("click", deletePostButtonHandler);
