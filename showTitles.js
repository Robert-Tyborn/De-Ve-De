// I wanted the code to be well organised so I gave each function their own module / file,
// for better code structure and maintainability.

import { ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export function ShowTitles(db) {
    const dbref = ref(db, "Movies");
    get(dbref)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const movies = snapshot.val();
                const movieEntries = Object.entries(movies);
                const titlesAndReleaseDates = movieEntries.map(([key, movie]) => `${movie.Title} - ${movie.Genre || 'N/A'}, ${movie.ReleaseDate || 'N/A'} ${movie.Watched ? 'Watched' : 'Not Watched'}`);
                alert("Movie Titles:\n" + titlesAndReleaseDates.join("\n"));
            } else {
                alert("Database is empty!");
            }
        })
        .catch((error) => {
            alert(error);
        });
};
