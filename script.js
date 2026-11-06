
// MOBILE MENU

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// ARTICLE SEARCH

function searchArticles() {

    let input = document.getElementById("searchInput");

    if (!input) return;

    let filter = input.value.toLowerCase().trim();

    let cards = document.querySelectorAll(".blog-card");

    let noResults = document.getElementById("noResults");

    let found = 0;

    cards.forEach(function(card) {

        let content = card.innerText.toLowerCase();

        if (content.includes(filter)) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });

    if (noResults) {

        if (found === 0) {

            noResults.innerText = "No articles found. Try another search.";

        } else {

            noResults.innerText = "";

        }

    }

}

// CONTACT FORM

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    document.querySelector(".contact-form").reset();

}
