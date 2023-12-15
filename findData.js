import { ref, get, update, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export function FindData(db, findTitle, findGenre, findReleaseDate, watched, findWatched) {
    const dbref = ref(db);
    get(child(dbref, "Movies/" + findTitle.value))
        .then((snapshot) => {
            if (snapshot.exists()) {
                findGenre.innerHTML = "Genre: " + snapshot.val().Genre;
                findReleaseDate.innerHTML = "Release Date: " + snapshot.val().ReleaseDate;
                watched.innerHTML = "Watched: ";
                findWatched.checked = snapshot.val().Watched || false;
                findWatched.addEventListener('change', function() {
                    update(ref(db, "Movies/" + findTitle.value), {
                        Watched: findWatched.checked
                    })
                    .then(() => {
                        alert("Watched status updated!");
                    })
                    .catch((error) => {
                        alert(error);
                    });
                });
            } else {
                alert("You don't have a movie with that name, yet!");
            }
        })
        .catch((error) => {
            alert(error);
        });
    findWatched.style.display = "block";
};
