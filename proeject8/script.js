const myBt = document.getElementById("myBtn");
const myPopover = document.getElementById("myPopover");
const closeBt = document.getElementById("closeBtn");

// myBt.addEventListener("click", function() {
//     myPopover.classList.add("active");
// });
// closeBt.addEventListener("click", function() {
//     myPopover.classList.remove("active");
// });

myBt.addEventListener("click", function() {
    myPopover.classList.add("active");
});

closeBt.addEventListener("click", function() {
    myPopover.classList.remove("active");
});
