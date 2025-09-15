let webSeries = [
    { id: 1, title: "Breaking Bad", genre: "Crime", rating: 9.5, seasons: 5 },
    { id: 2, title: "Stranger Things", genre: "Sci-Fi", rating: 8.7, seasons: 4 },
    { id: 3, title: "Money Heist", genre: "Thriller", rating: 8.3, seasons: 5 },
    { id: 4, title: "The Witcher", genre: "Fantasy", rating: 8.2, seasons: 3 },
    { id: 5, title: "Friends", genre: "Comedy", rating: 8.9, seasons: 10 },
    { id: 6, title: "Dark", genre: "Sci-Fi", rating: 8.8, seasons: 3 },
    { id: 7, title: "Game of Thrones", genre: "Fantasy", rating: 9.2, seasons: 8 },
    { id: 8, title: "The Office", genre: "Comedy", rating: 8.8, seasons: 9 },
    { id: 9, title: "Narcos", genre: "Crime", rating: 8.9, seasons: 3 },
    { id: 10, title: "The Boys", genre: "Action", rating: 8.7, seasons: 4 }
];

// filtering based on rating
let bestSeries = webSeries
    .filter((series) => series.rating > 8.9)
    .map((series) => series.title)
console.log(bestSeries); // [ 'Breaking Bad', 'Game of Thrones' ]

// filtering based on category
let myChoice = webSeries.reduce((acc, currentValue) => {
    if (currentValue.genre === "Action" || currentValue.genre === "Comedy") {
        acc.push(currentValue.title);
    }
    return acc;
}, [])
console.log(myChoice);

// 
let { scifi, comedy } = webSeries.reduce((acc, series) => {
    if (series.genre === "Sci-Fi") {
        acc.scifi.push(series.title);
    } else if (series.genre === "Comedy") {
        acc.comedy.push(series.title)
    }
    return acc;
}, { scifi: [], comedy: [] })

console.log({ scifi, comedy });
/*
{
  scifi: [ 'Stranger Things', 'Dark' ],
  comedy: [ 'Friends', 'The Office' ]
}
*/ 