const editCommentFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length -1
  ];
  const comment_body = document.querySelector(`textarea[name="comment-body"]`).value;

  const response = await fetch(`/api/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      comment_body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to edit comment.');
  }
};

document.querySelector('.edit-comment-form').addEventListener('submit', editCommentFormHandler);