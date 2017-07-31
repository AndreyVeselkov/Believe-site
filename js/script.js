// Instantiate the Bootstrap carousel
$(".multi-item-carousel").carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$(".multi-item-carousel .item").each(function() {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  if (next.next().length > 0) {
    next.next().children(":first-child").clone().appendTo($(this));
  } else {
    $(this)
      .siblings(":first")
      .children(":first-child")
      .clone()
      .appendTo($(this));
  }
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        x.previousElementSibling.className += " w3-green";
    } else { 
        x.className = x.className.replace(" show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-green", "");
    }
}
function myAccFunc1() {
    var x = document.getElementById("demoAcc1");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        x.previousElementSibling.className += " w3-green";
    } else { 
        x.className = x.className.replace(" show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-green", "");
    }
}

