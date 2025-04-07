const API_URL="https://directors-1.onrender.com/api/v1/directors";

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(director => [
        director.id,
        director.director,
        director.notable_film,
    ]);

    new gridjs.Grid({
        columns: ["AcctId", "Name", "Film"],
        data: formattedData,
        search: true,
        sort: true,
        pagination: {
            enabled: true,
            limit: 5
        },
        resizeable: true,
        style: {
            table: {
                border: "1px solid #ccc"
            },
            th: {
                "background-color": "#f4f4f44",
                "text-align": "left"

            },
            td: {
                "padding": "8px",
                "border-bottom": "1px solid #ddd"
            }
        }
    }).render(document.getElementById("grid-container"));
})
.catch(error => console.error('Error fetching data', error));