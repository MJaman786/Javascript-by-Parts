const galleryGrid = document.querySelector('.gallery-grid');

const url = 'https://jsonplaceholder.typicode.com/photos';
async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Connection Not Successful");
        } else {
            console.log(`Connection Successful`);
            const data = await response.json();
            const dataPart = data.slice(0, 10);
            dataPart.forEach(element => {
                const div = document.createElement('div');
                div.classList.add('photo-card');
                div.innerHTML = `
                    <img class="photo-card-image" src=${element.thumbnailUrl}>
                    <div class="photo-card-content">
                        <h2>Mock Title: ${element.title}</h2>
                        <p>ID: ${element.id} | Album: ${element.albumId}</p>
                    </div>
                `;
                galleryGrid.appendChild(div);
            });
        }
    } catch (error) {
        console.log(error);
    }
}

fetchData();