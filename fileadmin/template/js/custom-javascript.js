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

/*homepage>section-3columns, clip-Path border*/
const parentOf3columnsWrapper = document.querySelector("#page-content > div:nth-child(3) > div");
//const newSvgElement = document.createElement("svg");
//newSvgElement.innerHTML = `
parentOf3columnsWrapper.innerHTML += `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 1920 361.156">
<defs>
<clipPath id="wave">
<path d="M2372.17,361.156c-19.252,0-38.151-.163-56.173-.486-108.914-1.948-216-6.076-319.568-10.069h-.036l-.123,0-.491-.021h-.033l-.259-.009h-.029c-68.485-2.64-139.3-5.37-209.037-7.381-37.617-1.084-71.871-1.879-104.72-2.43-36.983-.618-71.362-.918-105.1-.918-82.168,0-157.71,1.812-230.943,5.54-53.545,2.727-112.481,4.6-180.177,5.735-60.353,1.006-121.81,1.338-181.244,1.66h-.124l-.087,0h-.066l-.612,0-.312,0-.31,0h-.076c-53.82.294-109.473.6-164.211,1.4-21.289.313-41.959.7-61.435,1.146V6.291c21.557-1.146,40.4-2.064,57.611-2.806C860.387,1.51,900.035.551,935.822.551c14.717,0,29.146.163,42.889.486,83.2,1.949,164.956,6.078,244.017,10.071l.1,0,.376.02h.024l.2.01c52.262,2.639,106.3,5.368,159.623,7.382,28.772,1.085,54.925,1.88,79.956,2.429,28.22.618,54.469.919,80.246.919,62.743,0,120.42-1.812,176.327-5.54,40.9-2.728,85.9-4.6,137.568-5.734,46.083-1.006,92.983-1.338,138.34-1.659h.138l.067,0h.051l.466,0,.239,0,.237,0h.116c41.073-.293,83.543-.6,125.318-1.4,47.242-.91,88.526-2.377,126.213-4.484C2284.9.994,2323.365,0,2365.914,0c65.89,0,132.524,2.423,196.964,4.765h.08l.171.006h.028l.075,0,.237.009C2600.49,6.131,2638.773,7.522,2677,8.445V352.424c-47.31,2.057-97.558,4.2-146.077,5.8C2470.96,360.2,2419.032,361.156,2372.17,361.156Z" transform="translate(-757.001)" fill="#8246af"/>
  </clipPath>
  </defs>
</svg>
`;
//parentOf3columnsWrapper.appendChild(newSvgElement);
setTimeout(() => {
   const sectionRow = parentOf3columnsWrapper.querySelector(".section-row");
   sectionRow.style.clipPath = "url(#wave)";   
}, 100);
