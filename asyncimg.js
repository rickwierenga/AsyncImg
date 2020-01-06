/* https://github.com/rickwierenga/AsyncImg */

window.addEventListener('load', function (){
  var asyncImgs = document.querySelectorAll('img[async-src]');
  for (var i = 0; i<asyncImgs.length; i++) {
    let asyncImg = asyncImgs[i];
    asyncImg.setAttribute("src", asyncImg.getAttribute("async-src"));
    asyncImg.removeAttribute("async-src");
  }
});
