const commentFeed = document.querySelector(".comment-feed");

const url = "https://jsonplaceholder.typicode.com/comments";

async function fetchCommentsData() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Connection Error");
  } else {
    const data = await response.json();
    const fragmentData = data.slice(0, 10);
    // console.log(data);

    fragmentData.forEach((data) => {
      commentFeed.innerHTML += `
      <div class="comment-card">
        <div class="comment-meta">
            <strong>${data.name}</strong>
            <span class="email">${data.email}</span>
        </div>
        <div class="comment-body">
            ${JSON.stringify(data.body)}
        </div>
        <div class="post-context">
            Comment ID: ${data.id} | Post ID: ${data.postId}
        </div>
      </div> 
    `;
    });
  }
}

fetchCommentsData();
