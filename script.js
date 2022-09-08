console.log("loading")



let asideToggler = document.querySelector('.aside-toggler')

let aside = document.querySelector('aside')

console.log(aside)

asideToggler.addEventListener('click', function(){
    aside.classList.toggle('active')
    asideToggler.classList.toggle('active')
})

