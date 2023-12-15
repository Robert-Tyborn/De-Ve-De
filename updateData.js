import { ref, get, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export function UpdateData(db, enterTitle, enterGenre, enterReleaseDate) {
    const movieRef = ref(db, "Movies/" + enterTitle.value);
    get(movieRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const updateData = {};
                const newGenre = enterGenre.value.trim();
                const newReleaseDate = enterReleaseDate.value.trim();

                if (newGenre !== '' && snapshot.val().Genre !== newGenre) {
                    updateData['Genre'] = newGenre;
                }

                if (newReleaseDate !== '' && snapshot.val().ReleaseDate !== newReleaseDate) {
                    updateData['ReleaseDate'] = newReleaseDate;
                }

                if (Object.keys(updateData).length > 0) {
                    update(movieRef, updateData)
                        .then(() => {
                            alert("The movie was updated!");
                        })
                        .catch((error) => {
                            alert(error);
                        });
                } else {
                    alert("No new data provided for update.");
                }
            } else {
                alert("Movie not found!");
            }
        })
        .catch((error) => {
            alert(error);
        });
};
