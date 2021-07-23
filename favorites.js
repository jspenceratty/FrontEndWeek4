function addFavorite() {
    let table = document.getElementById('favoriteThings');
    let row = table.insertRow(2); /* start at 2 so Annabel stays at top */
    row.insertCell(0).innerHTML = document.getElementById('new-favorite-thing').value;
    row.insertCell(1).innerHTML = document.getElementById('new-comment').value;
    document.getElementById('new-favorite-thing').value = '';
    document.getElementById('new-comment').value = '';
}