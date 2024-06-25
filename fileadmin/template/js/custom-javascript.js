if (screen.width > 1150) {
  console.log("hello JavaScript");
  /*Footer-Menu*/
  const fotterMenuUl = document.querySelector(
    "#c56 > div > div > div > div > ul"
  );
  fotterMenuUl.classList.add("catamaran-22-medium");

  /*Dropdownmenu on hover*/
  const hauptmenuItemAll = [
    ...document.querySelectorAll("#mainnavigation > ul > li"),
  ];
  const header1 = document.querySelector("header");
  const dropdownContainer = document.querySelectorAll(".dropdown-menu");

  hauptmenuItemAll.forEach((elemHauptMenuItem) => {
    const megaMenuContainer = elemHauptMenuItem.querySelector(
      ".dropdown-menu.dropdown-menu-simple"
    );

    elemHauptMenuItem.addEventListener("mouseover", (event) => {
      /*setTimeout(function() {*/
      if (!!megaMenuContainer) {
        megaMenuContainer.classList.add("show");
        megaMenuContainer.setAttribute("data-bs-popper", "static");

        const arrayWithoutElemhauptmenuitem = hauptmenuItemAll.filter(
          (item) => {
            return item !== elemHauptMenuItem;
          }
        );
        arrayWithoutElemhauptmenuitem.forEach((e) => {
          const megaMenuContainerNotActiv = e.querySelector(
            ".dropdown-menu.dropdown-menu-simple"
          );
          if (!!megaMenuContainerNotActiv) {
            megaMenuContainerNotActiv.classList.remove("show");
            megaMenuContainerNotActiv.removeAttribute(
              "data-bs-popper",
              "static"
            );
          }
        });
      }
      /*}, 200);                       */
    });

    header1.addEventListener("mouseleave", (e) => {
      /*setTimeout(function() {*/
      if (
        !!megaMenuContainer &&
        !elemHauptMenuItem.classList.contains("active")
      ) {
        megaMenuContainer.classList.remove("show");
        megaMenuContainer.removeAttribute("data-bs-popper", "static");
      }
      /*}, 200);*/
    });
  });

  /*scroll event + smaller Header*/
  window.addEventListener("scroll", (e) => {
    if (!!(window.scrollY > 150)) {
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
}

/*********************************************************************************************/
/*homepage>section-3columns, clip-Path border*/
const parentOf3columnsWrapper = document.querySelector(
  ".custom-parent-of-sectionrow-3columnssection"
);

if (screen.width > 1339) {
  if (
    !(window.location.pathname === "/") &&
    !(window.location.pathname === "") &&
    !(window.location.pathname === "/elisabethstift/app/")
  ) {
    console.log("yes");
    parentOf3columnsWrapper
      ? (parentOf3columnsWrapper.innerHTML += `
            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 1920 361.156">
            <defs>
            <clipPath id="wave">
            <path d="M2372.17,361.156c-19.252,0-38.151-.163-56.173-.486-108.914-1.948-216-6.076-319.568-10.069h-.036l-.123,0-.491-.021h-.033l-.259-.009h-.029c-68.485-2.64-139.3-5.37-209.037-7.381-37.617-1.084-71.871-1.879-104.72-2.43-36.983-.618-71.362-.918-105.1-.918-82.168,0-157.71,1.812-230.943,5.54-53.545,2.727-112.481,4.6-180.177,5.735-60.353,1.006-121.81,1.338-181.244,1.66h-.124l-.087,0h-.066l-.612,0-.312,0-.31,0h-.076c-53.82.294-109.473.6-164.211,1.4-21.289.313-41.959.7-61.435,1.146V6.291c21.557-1.146,40.4-2.064,57.611-2.806C860.387,1.51,900.035.551,935.822.551c14.717,0,29.146.163,42.889.486,83.2,1.949,164.956,6.078,244.017,10.071l.1,0,.376.02h.024l.2.01c52.262,2.639,106.3,5.368,159.623,7.382,28.772,1.085,54.925,1.88,79.956,2.429,28.22.618,54.469.919,80.246.919,62.743,0,120.42-1.812,176.327-5.54,40.9-2.728,85.9-4.6,137.568-5.734,46.083-1.006,92.983-1.338,138.34-1.659h.138l.067,0h.051l.466,0,.239,0,.237,0h.116c41.073-.293,83.543-.6,125.318-1.4,47.242-.91,88.526-2.377,126.213-4.484C2284.9.994,2323.365,0,2365.914,0c65.89,0,132.524,2.423,196.964,4.765h.08l.171.006h.028l.075,0,.237.009C2600.49,6.131,2638.773,7.522,2677,8.445V352.424c-47.31,2.057-97.558,4.2-146.077,5.8C2470.96,360.2,2419.032,361.156,2372.17,361.156Z" transform="translate(-757.001)" fill="#8246af"/>
            </clipPath>
            </defs>
            </svg>
            `)
      : "";

    setTimeout(() => {
      const sectionRow = parentOf3columnsWrapper.querySelector(".section-row");
      sectionRow.style.clipPath = "url(#wave)";
    }, 100);
  } else {
    console.log("no");
  }
}

/*********************************************************************************************/
/*Footer - Active Link*/
const footerLinks = [...document.querySelectorAll("footer li a, footer h5 a")];
const docsUrl = document.URL;
footerLinks.forEach((elLink) => {
  if (!!(elLink.href.toString() === docsUrl)) {
    elLink.classList.add("custom-active");
  }
});

/*********************************************************************************************/
/*3-Columns-Spalte HREF to a-element*/
const url3columnsSpalteOrange = document.querySelector("#c112");
const url3columnsSpalteBlue = document.querySelector("#c113");
const url3columnsSpalteViolet = document.querySelector("#c114");

const firstColumnOrange = document.querySelector(
  "#page-content > div.section.section-default.custom-3columns-section > div > div > a:nth-child(1)"
);
firstColumnOrange
  ? (firstColumnOrange.href = url3columnsSpalteOrange.innerText)
  : "";

const firstColumnBlue = document.querySelector(
  "#page-content > div.section.section-default.custom-3columns-section > div > div > a:nth-child(2)"
);
firstColumnBlue ? (firstColumnBlue.href = url3columnsSpalteBlue.innerText) : "";

const firstColumnViolet = document.querySelector(
  "#page-content > div.section.section-default.custom-3columns-section > div > div > a:nth-child(3)"
);
firstColumnViolet
  ? (firstColumnViolet.href = url3columnsSpalteViolet.innerText)
  : "";

/*********************************************************************************************/
/*Template '3columns' - SideBarMenu - copy icon */
const linkRowAll = document.querySelectorAll(
  ".custom-3columns-haupt-section .custom-menu-sidebar>div"
);

if (!!linkRowAll) {
  linkRowAll.forEach((rowLink) => {
    const whereAppend = rowLink.querySelector(".texticon-content>* a");
    const whatAppendIcon = rowLink.querySelector(
      ".texticon span.texticon-inner-icon"
    );
    const newElementToCopyIcon = document.createElement("span");
    console.log("hier you are->> linkRowAll: ", linkRowAll);
    console.log("hier you are->> whereAppend: ", whereAppend);
    newElementToCopyIcon.innerHTML = whatAppendIcon.innerHTML;
    newElementToCopyIcon.classList = whatAppendIcon.classList;
    newElementToCopyIcon.classList.add("custom-new-span-icon-copy");
    whereAppend ? whereAppend.appendChild(newElementToCopyIcon) : "";
  });
}

/*********************************************************************************************/
/**bzgl. Header Mobil, Elm. Mit Text:"startseite"*/
if (
  !!(window.location.pathname === "/") ||
  !!(window.location.pathname === "") ||
  !!(window.location.pathname === "/elisabethstift/app/")
) {
  const ulWhereToAppend = document.querySelector(
    "#page-header #mainnavigation > ul"
  );
  const beforeWhatToAppend = document.querySelector(
    "#mainnavigation > ul > li:nth-child(1)"
  );
  if (!!ulWhereToAppend && screen.width < 1150) {
    const newLinkElement = document.createElement("a");
    newLinkElement.setAttribute("href", "/");
    newLinkElement.textContent = "Startseite";
    newLinkElement.classList.add("custom-new-link-elm");
    ulWhereToAppend.insertBefore(newLinkElement, beforeWhatToAppend);
  }
}
/*********************************************************************************************/
/*Header - Link to 'Lupe' - open Subpage 'Suchenergebnisse'*/
const dieLupeButton = document.querySelector(
  "#mainnavigation > nav > div > button"
);
dieLupeButton
  ? dieLupeButton.addEventListener("click", (el) => {
      document.location.href =
        "https://dev-typografix.de/elisabethstift/app/suchergebnis";
    })
  : "";

/*********************************************************************************************/
/*Accordieon - Angebote - Title under the Image*/
const rowsOfimagesByAccordions = document.querySelectorAll(
  "#p7 #page-content > div.section.section-default.custom-3columns-haupt-section div.frame-type-accordion div.accordion-content-item.accordion-content-media div.gallery-row"
);
rowsOfimagesByAccordions.forEach((row) => {
  const imagesByThisAccordion = row.querySelectorAll("div.gallery-item img");
  imagesByThisAccordion.forEach((image) => {
    const newPElementWithImageTitle = document.createElement("p");
    newPElementWithImageTitle.textContent = image.title.toString();
    newPElementWithImageTitle.classList.add(
      "custom-new-undertitle-accordion-image"
    );
    image.after(newPElementWithImageTitle);
  });
});
/*********************************************************************************************/
/*Button-von CKEditor-Automatisierung - subpages of Angebote*/
const parentElemOfButton = document.querySelectorAll(
  "*:has(>.custom-rte-button-1)"
);
if (!!parentElemOfButton) {
  parentElemOfButton.forEach((parentElement) => {
    let textColor = parentElement.style.color;
    let backgroundColor = parentElement.style.backgroundColor;
    const elementToChangeHtml = parentElement.querySelector(
      ".custom-rte-button-1"
    );

    elementToChangeHtml.innerHTML = `
  <a href="" class="custom-a-button">
   <button class="custom-button-1" style="background-color:${backgroundColor};">
      <h4 class="catamaran-25-semibold"><span class="custom-button-1-span" style="color:${textColor};">${elementToChangeHtml.innerText}</span></h4>
      <i class="custom-button-1-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="${textColor}" width="" height="" viewBox="0 0 512 512" class="" aria-hidden="true"><path d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z"></path></svg>
      </i>
   </button>
   </a>
  `;
  });
}
/*********************************************************************************************/
/*Background-HeroImage2-Subpages of Angebote */
if (screen.width >= 768) {
  const whatImageSrc = document.querySelector(
    ".custom-parent-angebote .custom-3columns-hero-section .section-row> div:nth-child(2)> div:nth-child(2).frame img"
  ).src;
  if (!!whatImageSrc) {
    const whereImage = document.querySelector(
      ".custom-parent-angebote .custom-3columns-hero-section .section-row > div:nth-child(2)"
    );
    whereImage.style.backgroundImage = `url(${whatImageSrc})`;
  }
}
if (screen.width < 768) {
  const whatImageSrc = document.querySelector(
    ".custom-parent-angebote .custom-3columns-hero-section .section-row> div:nth-child(2)> div:nth-child(3).frame img"
  ).src;
  console.log(whatImageSrc);
  if (!!whatImageSrc) {
    const whereImage = document.querySelector(
      ".custom-parent-angebote .custom-3columns-hero-section .section-row > div:nth-child(2)"
    );
    whereImage.style.backgroundImage = `url(${whatImageSrc})`;
  }
}
/*********************************************************************************************/
