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
<svg height="0" width="0" viewBox="0 0 1920 620">
<defs>
<clipPath id="wave">
<path     
      d="M0,320L15,320C30,320,60,320,90,288C120,256,150,192,180,181.3C210,171,240,213,270,234.7C300,256,330,256,360,266.7C390,277,420,299,450,304C480,309,510,299,540,277.3C570,256,600,224,630,202.7C660,181,690,171,720,149.3C750,128,780,96,810,117.3C840,139,870,213,900,208C930,203,960,117,990,80C1020,43,1050,53,1080,85.3C1110,117,1140,171,1170,202.7C1200,235,1230,245,1260,234.7C1290,224,1320,192,1350,197.3C1380,203,1410,245,1425,266.7L1440,288L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"
   ></path>
</clipPath>
</defs>
</svg>
`;
//parentOf3columnsWrapper.appendChild(newSvgElement);
/*setTimeout(() => {
   const sectionRow = parentOf3columnsWrapper.querySelector(".section-row");
   sectionRow.style.clipPath = "url(#wave)";
   parentOf3columnsWrapper.style.margin = "20px";
}, 5000);*/
