const api = 'https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json'
fetch(api)
.then(response => response.json())
.then(data => console.log(data))