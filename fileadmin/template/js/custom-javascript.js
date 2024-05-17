console.log("hello JavaScript");
/*Footer-Menu*/
const fotterMenuUl = document.querySelector("#c56 > div > div > div > div > ul");
fotterMenuUl.classList.add("catamaran-22-medium");

/*Dropdownmenu on hover*/
const hauptmenuItemAll =[...document.querySelectorAll("#mainnavigation > ul > li")];
console.log(hauptmenuItemAll);



hauptmenuItemAll.forEach((elemHauptMenuItem)=>{
    elemHauptMenuItem.addEventListener("mouseover", (event)=>{
        /*setTimeout(function() {*/
            const megaMenuContainer = elemHauptMenuItem.querySelector(".dropdown-menu.dropdown-menu-simple");            
            if(!!megaMenuContainer){
                megaMenuContainer.classList.add("show");	
                megaMenuContainer.setAttribute("data-bs-popper", "static");	
            }           								
            /*}, 200);                       */
    })

    elemHauptMenuItem.addEventListener("mouseleave", (e)=>{			
        /*setTimeout(function() {*/
             const megaMenuContainer = elemHauptMenuItem.querySelector(".dropdown-menu.dropdown-menu-simple");            
            if(!!megaMenuContainer && !elemHauptMenuItem.classList.contains("active")){
                megaMenuContainer.classList.remove("show");	
                megaMenuContainer.removeAttribute("data-bs-popper", "static");	
            }           																		
        /*}, 200);*/
        });
});












/*scroll event + smaller Header
document.addEventListener("scroll", (event) => {
    */
