/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$(".hot").each(function() {
  $(this).removeClass("hot");
  $(this).addClass("cool");
});

// traverse the elements
$("#one")
  .next()
  .next()
  .text("milk");

$("add").click(addElement);
//Novermber 4 2020
/*
var nlist= document.querySelectorAll("li.hot");
for (var i=0; i<nlist.length; i++)
{
  nlist[i].setAttribute("class", "cool");
}
*/
// traverse the elements

// add a new element

// add by clicking the plus sign
document.getElementById("add").addEventListener("click", addElement);

function addElement() {
  $("#todo").append("<li> <input type=text></li>");
  // add a new element

  $("input").blur(function() {
    $(this)
      .parent()
      .addClass("cool");

    var userInput = $(this).val();
    $(this)
      .parent()
      .text(userInput);
    $("li").click(changeStyle);
  });
}
$("li").click(changeStyle);
//  click the li element will change the changeStyle
function changeStyle() {
  if ($(this).hasClass("complete")) {
    $(this).removeClass("complete");
    $(this).addClass("cool");
  } else {
    $(this).addClass("complete");
  }
  if ($(this).hasClass("hot")) {
    $(this).removeClass("hot");
    $(this).addClass("complete");
  } else {
    $(this).addClass("complete");
  }
}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  $("li.complete").remove();
  // remove the marked element
}
