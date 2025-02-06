document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById("table-body");
        data.forEach(row => {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.textContent = row["Tarih ve Saat"];
            td2.textContent = row["Gezegen Yöneticisi"];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tableBody.appendChild(tr);
        });
    })
    .catch(error => console.error("Veri yüklenemedi:", error));
});
