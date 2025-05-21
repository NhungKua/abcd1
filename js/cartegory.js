const itemsliderbar = document.querySelectorAll(".car-left-li")
itemsliderbar.forEach(function(menu, index){
    menu.addEventListener("click", function(){
        menu.classList.toggle("block")
    })
})