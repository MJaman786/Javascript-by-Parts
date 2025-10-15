async function fetchingData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network call error.");
        }else{
            const data = await response.json();
            console.log(data.length);
        }
    } catch (error) {
      console.log(`E: ${error}`);
    } finally{
        console.log(`Async Operation completed.`);
    }
}

fetchingData()