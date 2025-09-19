// Check if the device is touchscreen (NOT SURE)
function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}


//jquery for toggle dropdown menus
if(isTouchDevice()){

    $(document).ready(function () {
        //toggle sub-menus
        $(".sub-btn").click(function () {
            // If the clicked sub-menu is already open, close it
            if ($(this).next(".sub-menu").is(":visible")) {
                $(this).next(".sub-menu").slideUp();
            } else {
                // Close all other sub-menus first
                $(".sub-menu, .more-menu").slideUp();
                // Then open the clicked one
                $(this).next(".sub-menu").slideDown();
            }
        });

        //toggle more-menus
        $(".more-btn").click(function () {
            $(this).next(".more-menu").slideToggle();
        });
        
        $(".close-btn").click(function () {
            $(".sub-menu, .more-menu").slideUp();  // Hide all dropdown menus
        });
    });
}
//javascript for the responsive navigation menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});