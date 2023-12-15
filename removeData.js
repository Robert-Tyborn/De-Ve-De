// I wanted the code to be well organised so I gave each function their own module / file,
// for better code structure and maintainability.

import { ref, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export function RemoveData(db, enterTitle) {
    remove(ref(db, "Movies/" + enterTitle.value))
        .then(() => {
            alert("The movie was removed!");
        })
        .catch((error) => {
            alert(error);
        });
};
