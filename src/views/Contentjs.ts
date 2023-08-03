//Element จะค่่อยๆ โชว์ให้เห็น
export function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
let lastScrollTop = window.screenY || document.documentElement.scrollTop;
export function reveal2() {
  var reveals3 = document.getElementById("scrollupshow");
  var scrollTopPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollTopPosition > lastScrollTop) {
    reveals3?.classList.add("active")
  } else if (scrollTopPosition == 0) {
    reveals3?.classList.remove("active")
  }
}



