var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
// backdrop.style.display = "block";
var noContinue = document.querySelector(".modal__action--negative");
var choosePlan = document.querySelectorAll(".plan button");
var toogleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// show Modal andd BackDrop
for (i = 0; i < choosePlan.length; i++) {
	choosePlan[i].addEventListener("click", function () {
		//backdrop.style.display = "block";
		//modal.style.display = "block";
		backdrop.classList.add("open");
		modal.classList.add("open");
	});
}
backdrop.addEventListener("click", function () {
	mobileNav.classList.remove("open");
	closeModal();
});
if (noContinue) {
	noContinue.addEventListener("click", closeModal);
}

function closeModal() {
	if (modal) {
		modal.classList.remove("open");
	}
	backdrop.classList.remove("open");
	// backdrop.style.display = "none";
	// modal.style.display = "none";
}
toogleButton.addEventListener("click", function () {
	backdrop.classList.add("open");
	mobileNav.classList.add("open");

	// mobileNav.style.display = "block";
	// backdrop.style.display = "block";
});
// console.dir(backdrop);
// console.dir(modal);
