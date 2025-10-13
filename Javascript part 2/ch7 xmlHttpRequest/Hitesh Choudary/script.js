// Step 1: Create XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Step 2: Open a GET request to the GitHub API
xhr.open("GET", "https://api.github.com/users/hiteshchoudhary", true);

// select the wrapper
const userCard = document.querySelector('#userCard');

// Step 3: When the data loads
xhr.onload = function() {
  if (xhr.status === 200) {
    // see the status
    console.log(`Connection Successful: ${xhr.status}`);
    
    // Convert JSON string into JavaScript object
    const data = JSON.parse(xhr.responseText);
    
    // Build the card content dynamically
    userCard.innerHTML = `
      <img src="${data.avatar_url}" alt="GitHub Avatar" class="avatar">
        
        <div class="profile-info">
            <h2 class="name">${data.name}</h2>
            <p class="handle">@${data.twitter_username}</p>
        </div>
        
        <p class="bio">${data.bio}</p>
        
        <div class="stats-container">
            <div class="stat-item">
                <span class="stat-count">${data.followers}</span>
                <span class="stat-label">Followers</span>
            </div>
            <div class="stat-item">
                <span class="stat-count">${data.public_repos}</span>
                <span class="stat-label">Repositories</span>
            </div>
            <div class="stat-item">
                <span class="stat-count">${data.public_gists}+</span>
                <span class="stat-label">Gists</span>
            </div>
        </div>
        
        <button class="github-button">View Profile</button>
    `

    // Inject into HTML
    document.getElementById("userCard").innerHTML = cardHTML;
  } else {
    console.log(`Connection Not Successful: ${xhr.status}`);
    document.getElementById("userCard").innerHTML = "<p>Error loading data.</p>";
  }
};

// Step 4: Handle network errors
xhr.onerror = function() {
  document.getElementById("userCard").innerHTML = "<p>Network error occurred.</p>";
};

// Step 5: Send the request
xhr.send();
