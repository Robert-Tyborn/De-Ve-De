// I wanted the code to be well organised so I gave each function their own module / file,
// for better code structure and maintainability.

import { ref, get, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export function InsertData(db, enterTitle, enterGenre, enterReleaseDate) {
    const movieRef = ref(db, "Movies/" + enterTitle.value);
    get(movieRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                alert("A movie with the same title already exists!");
            } else {
                set(movieRef, {
                    Title: enterTitle.value,
                    Genre: enterGenre.value,
                    ReleaseDate: enterReleaseDate.value
                })
                .then(() => {
                    alert("Your movie was saved!");
                })
                .catch((error) => {
                    alert(error);
                });
            }
        })
        .catch((error) => {
            alert(error);
        });
};
