
document.onscroll = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')       
    } else {
        document.querySelector('.header').classList.remove('active') 
    }
}

document.querySelector('.homesection .btn').addEventListener('click', function() {
    alert('Submission functionality remains to be implemented')
})
