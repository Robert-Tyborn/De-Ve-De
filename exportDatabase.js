// I wanted the code to be well organised so I gave each function their own module / file,
// for better code structure and maintainability.

import { ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export function ExportDatabase(db) {
    const dbref = ref(db, "Movies");
    get(dbref)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const movies = snapshot.val();
                const jsonData = JSON.stringify(movies, null, 2);

                const blob = new Blob([jsonData], { type: 'application/json' });

                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'movieDatabase.json';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                alert("Database is empty!");
            }
        })
        .catch((error) => {
            alert(error);
        });
};
