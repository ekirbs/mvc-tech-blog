const editCommentFormHandler = async (event) => {
  event.preventDefault();
  console.log("we're inside editComment.js");

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length -1
  ];

  const comment_body = document.querySelector(`textarea[name="comment-body"]`).value;
  console.log(id, comment_body);

  await fetch(`/api/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      comment_body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
  
};

document.querySelector('.edit-comment-form').addEventListener('submit', editCommentFormHandler);