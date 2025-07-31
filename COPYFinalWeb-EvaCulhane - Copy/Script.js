let url = 'https://echoes.soferity.com/api/quotes'
let quote = document.getElementById('quote')
let a = document.getElementById('a')
fetch(url)
.then(response => response.json())
    .then(data => {
        quote.innerText = data.data[0].quote
        a.innerText = data.data[0].author

    })