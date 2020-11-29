document.addEventListener('DOMContentLoaded', function() {
    main = document.querySelector('main')

    text = document.querySelector('input[type="text"]') 

    submit = document.querySelector('input[type="submit"]')

    submit.addEventListener('click', function(event) {
        p = document.createElement('p')
        p.innerHTML = text.value
        p.classList.add("sent")
        main.appendChild(p)
        event.preventDefault()
    })
})