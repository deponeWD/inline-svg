(function() {
  var theHTML = document.getElementsByTagName('html')[0];

  // Function to set the JS marker
  function setJSmarker() {
    theHTML.classList.remove("no-js");
    theHTML.classList.add("js");
  }

  // Set class to signal if JS is available or not
  setJSmarker();

  // Add svg-sprite to document
  // Useful because no version of IE and older WebKit-Browsers currently support file paths in use
  // And with a separate svg-sprite we are able to use browser-cache
  function getSVG() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "./assets/images/sprite.svg", true);
    ajax.responseType = "document";
    ajax.onload = function() {
      document.body.insertBefore(ajax.responseXML.documentElement, document.body.childNodes[0]);
    };
    ajax.send();
  };

  // Test if browser supports inline-svg
  // Used from Practical SVG by Chris Coyer
  var supportsSvg = function() {
    var div = document.createElement("div");
    div.innerHTML = "<svg/>";
    return (div.firstChild && div.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
  };

  if (supportsSvg()) {
    document.documentElement.className += " svg";
    // call getSVG-function
    getSVG();

  } else {
    document.documentElement.className += " no-svg";
  };
}());
