document.addEventListener("DOMContentLoaded", function() {
    const enrollButtons = document.querySelectorAll(".enroll-btn");
    const wishlistButtons = document.querySelectorAll(".wishlist-btn");

    enrollButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("You have successfully enrolled in the course!");
        });
    });

    wishlistButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Course added to your wishlist!");
        });
    });
});
