// Global Variables
var navList = document.getElementById("navbar__list");
var sections = document.querySelectorAll("section")


// Dynamically Create Nav Menu Items
function createNavList(){
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < sections.length; i++) {
  const navItemText = sections[i].querySelector("h2").textContent;
  const navListItem = document.createElement("li");
  const navListLink = document.createElement("a");
  const sectionId = "#"+ sections[i].id;

  navListLink.setAttribute('href', sectionId);
  navListLink.innerHTML = navItemText;
  navListItem.appendChild(navListLink);
  fragment.appendChild(navListItem);
}
  navList.appendChild(fragment)
}
createNavList();


// Check If In The Viewport Function
function isInViewPort(el){
  const domRect = el.getBoundingClientRect();
  const myElementHeight = el.offsetHeight;
  const myElementwidth = el.offsetWidth;
  return (domRect.top >= 0 &&
          domRect.left >= 0 &&
          domRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (myElementHeight/2) &&
          domRect.right <= (window.innerWidth || document.documentElement.clientWidth) + (myElementwidth/2)
        );
      };

// Check Section and Set "active" Class to Nav Menu Item
function ifSection(){
  for (let i = 0; i < sections.length; i++) {
    const sectionName = sections[i].querySelector("h2").innerHTML;
    var el = sections[i];
    if (isInViewPort(el)) {
      const links = document.querySelectorAll("a");
        for (let i = 0; i < links.length; i++) {
          if (sectionName == links[i].innerHTML) {
            links[i].parentNode.classList.add('active');
          }else {
            links[i].parentNode.classList.remove('active');
          }
        }
      }
    }
  }

// Listener Event
document.addEventListener("scroll", function(){
  ifSection();
});


// Back to Top function
const topBtn = document.querySelector("#top__btn");

window.onscroll = function (){
  showBtn();
}

function showBtn(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  }else {
    topBtn.style.display = "none";
  }
};

document.addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
