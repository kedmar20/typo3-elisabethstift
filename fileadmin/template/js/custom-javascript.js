console.log("hello JavaScript");
/*Footer-Menu*/
const fotterMenuUl = document.querySelector("#c56 > div > div > div > div > ul");
fotterMenuUl.classList.add("catamaran-22-medium");

/*Dropdownmenu on hover*/
const hauptmenuItemAll = [...document.querySelectorAll("#mainnavigation > ul > li")];
const header1 = document.querySelector("header");
const dropdownContainer = document.querySelectorAll(".dropdown-menu");
console.log(dropdownContainer);

hauptmenuItemAll.forEach((elemHauptMenuItem) => {
   const megaMenuContainer = elemHauptMenuItem.querySelector(".dropdown-menu.dropdown-menu-simple");

   elemHauptMenuItem.addEventListener("mouseover", (event) => {
      /*setTimeout(function() {*/
      if (!!megaMenuContainer) {
         megaMenuContainer.classList.add("show");
         megaMenuContainer.setAttribute("data-bs-popper", "static");

         const arrayWithoutElemhauptmenuitem = hauptmenuItemAll.filter((item) => {
            return item !== elemHauptMenuItem;
         });
         arrayWithoutElemhauptmenuitem.forEach((e) => {
            const megaMenuContainerNotActiv = e.querySelector(".dropdown-menu.dropdown-menu-simple");
            if (!!megaMenuContainerNotActiv) {
               megaMenuContainerNotActiv.classList.remove("show");
               megaMenuContainerNotActiv.removeAttribute("data-bs-popper", "static");
            }
         });
      }
      /*}, 200);                       */
   });

   header1.addEventListener("mouseleave", (e) => {
      /*setTimeout(function() {*/
      if (!!megaMenuContainer && !elemHauptMenuItem.classList.contains("active")) {
         megaMenuContainer.classList.remove("show");
         megaMenuContainer.removeAttribute("data-bs-popper", "static");
      }
      /*}, 200);*/
   });
});

/*scroll event + smaller Header*/

window.addEventListener("scroll", (e) => {
   if (!!(window.scrollY > 5)) {
      header1.classList.remove("header-scroll-null");
      header1.classList.add("header-scroll");
      /*header1.style.paddingTop = "10px";
      header1.style.paddingBottom = "10px";
      header1.style.height = "8vw";
      header1.style.maxHeight = "8vw";*/
      !!dropdownContainer
         ? dropdownContainer.forEach((item) => {
              /* item.style.top = "8vw";*/
              item.classList.add("dropdown-scroll");
           })
         : "";
   } else {
      header1.classList.remove("header-scroll");
      header1.classList.add("header-scroll-null");
      !!dropdownContainer
         ? dropdownContainer.forEach((item) => {
              item.classList.remove("dropdown-scroll");
           })
         : "";
   }
});
