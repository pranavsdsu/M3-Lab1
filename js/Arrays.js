// 1. Create an array of my five favorite movies and Display the second movie in the array
var favoriteMovies = ["The Hangover", "Up", "The Dark Knight", "Finding Nemo", "Harry Potter"];
console.log("My second favorite movie is: " + favoriteMovies[1]);
console.log("");

// 2. Declare an array using the Array constructor with a length of 5, Assign favorite movies to each index
var movies = new Array(5);
movies[0] = "The Hangover";
movies[1] = "Up";
movies[2] = "The Dark Knight";
movies[3] = "Finding Nemo";
movies[4] = "Harry Potter";
console.log("My first favorite movie is: " + movies[0]);
console.log("");

// 3. Declare an array using the Array constructor with a length of 5, Insert a new movie into the 3rd position
var movies = new Array(5);
movies[0] = "The Hangover";
movies[1] = "Up";
movies[2] = "The Dark Knight";
movies[3] = "Finding Nemo";
movies[4] = "Harry Potter";
movies.splice(2, 0, "Avengers: Endgame"); // Moves other elements forward
console.log("Total movies in the array: " + movies.length);
console.log(movies);
console.log("");

// 4. Declare an array using literal notation with 5 favorite movies, Use the delete operator to remove the first movie
var movies = ['The Hangover', 'Up', 'Avengers: Endgame', 'The Dark Knight', 'Finding Nemo'];
delete movies[0];
console.log(movies);
console.log("");

// 5. Declare an array using literal notation with 7 favorite movies, Use a for/in loop to iterate through the array and display each movie
var movies = ['The Hangover', 'Up', 'Avengers: Endgame', 'The Dark Knight', 'Finding Nemo', 'Harry Potter', 'Joker'];
for (var index in movies) {
    console.log(movies[index]);
}
console.log("");

// 6. Declare an array using literal notation with 7 favorite movies, Use a for/of loop to iterate through the array and display each movie
var movies = ['The Hangover', 'Up', 'Avengers: Endgame', 'The Dark Knight', 'Finding Nemo', 'Harry Potter', 'Joker'];
for (var movie of movies) {
    console.log(movie);
}
console.log("");

// 7. Declare an array using literal notation with 7 favorite movies, Sort the array
var movies = ['The Hangover', 'Up', 'Avengers: Endgame', 'The Dark Knight', 'Finding Nemo', 'Harry Potter', 'Joker'];
movies.sort();
for (var movie of movies) {
    console.log(movie);
}
console.log("");

// 8. Declare an array using literal notation with 7 favorite movies, Create a new array called leastFavMovies with 3 movies that you regret watching
var movies = ['The Hangover', 'Up', 'Avengers: Endgame', 'The Dark Knight', 'Finding Nemo', 'Harry Potter', 'Joker'];
var leastFavMovies = ['Troll 2', 'The last Airbender', 'Smirf'];
console.log("Movies I like:");
for (var movie of movies) {
    console.log(movie);
}
console.log("");
console.log("Movies I regret watching:");
for (var movie of leastFavMovies) {
    console.log(movie);
}
console.log("");

// 9. Merge the two arrays into a single array called movies using concat(), Sort the merged array in reverse order
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
console.log("All movies (sorted in reverse order):");
for (var movie of movies) {
    console.log(movie);
}
console.log("");

// 10. Display the last movie in the array using an array function
console.log("The last movie in the array is:");
console.log(movies[movies.length - 1]);
console.log("");

// 11. Display the first movie in the array using an array method
console.log("The first movie in the array is:");
console.log(movies.shift());
console.log("");

// 12. Find indices of least favorite movies, Replace disliked movies with liked movies and Display the updated movie list
var movies = ['The Hangover', 'Up', 'Avengers: Endgame', 'The Dark Knight', 'Finding Nemo', 'Harry Potter', 'Joker'];
var leastFavMovies = ['Troll 2', 'The last Airbender', 'Smirf'];
movies.splice(1, 0, ...leastFavMovies);
var replacementMovies = ['Inception', 'Interstellar', 'Shutter Island'];
var dislikedIndices = [];
movies.forEach((movie, index) => {
    if (leastFavMovies.includes(movie)) {
        dislikedIndices.push(index);
    }
});
console.log("the indices of the least favourite movies:", dislikedIndices)
dislikedIndices.forEach((index, i) => {
    if (i < replacementMovies.length) {
        movies[index] = replacementMovies[i]; // Replace with a liked movie
    }
});
console.log("Updated movies list:");
movies.forEach(movie => console.log(movie));
console.log("");

//13. Extract only the movie names using filter()
// Multi-dimensional array of favorite movies with rankings
var movies = [
    ["The Hangover", 1], 
    ["Up", 2], 
    ["Avengers: Endgame", 3], 
    ["The Dark Knight", 4], 
    ["Finding Nemo", 5]
];
// Extract only the movie names using filter()
var movieNames = movies.map(movie => movie.filter(item => typeof item === "string"));
// Flatten the array and display the movie names
console.log("Favorite Movies:");
console.log(movieNames.flat().join("\n"));
console.log("");

//14. Anonymous function to display employees
// Declare an array of employees using literal notation
var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
var showEmployee = function(employeeList) {
    console.log("Employees:\n");
    employeeList.forEach(employee => console.log(employee.toUpperCase()));
};
// Call the function, passing the employees array as an argument
showEmployee(employees);
console.log("");

//15. filter false, null, 0 and blank values from an array.
function filterValues(arr) {
    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== "");
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
console.log("");

//16. JavaScript function to get a random item from an array
function getRandomItem(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(number));
console.log("");

//17. get the largest number from a numeric array
function getLargestNumber(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    return Math.max(...arr);
}
const numbers = [10, 25, 78, 99, 36, 500, 89];
console.log(getLargestNumber(numbers)); 