let buttonAdd = document.getElementById('buttonClassAdd')
let buttonRemove = document.getElementById('buttonClassRemove')
let classToClass = document.querySelectorAll('.elements')

console.log(classToClass)

buttonAdd.addEventListener('click', () => {
    classToClass.forEach(element => {
        element.classList.add('globotexto')
    })
});

buttonRemove.addEventListener('click', () => {
    classToClass.forEach(element => {
        element.classList.remove('globotexto')
    } )
})





