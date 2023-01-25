const editPostFormHandler = async (event) => {
  event.preventDefault();
  console.log("we're here!");

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length -1
  ];
  // const id = event.target.getAttribute('data-id');

  const title = document.querySelector(`input[name="post-title"]`).value;
  const post_body = document.querySelector(`textarea[name="post-body"]`).value;

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);

  if (response.ok) {
    // document.location.reload();
    // document.location.replace('/dashboard');
  } else {
    alert('Failed to edit post.');
  }
};

document.querySelector('.edit-post-form').addEventListener('submit', editPostFormHandler);