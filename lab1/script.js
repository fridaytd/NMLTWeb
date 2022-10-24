
const search = document.getElementById('search')
search.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        if (search.value.length == 0) {
            event.preventDefault()
        }
    }
    else {
        
    }
})
