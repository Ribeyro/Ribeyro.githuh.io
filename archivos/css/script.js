
    document.addEventListener("DOMContentLoaded", function () {
        const sectionLinks = document.querySelectorAll(".section-link");
        const sections = document.querySelectorAll(".right-section section");

        sectionLinks.forEach((link) => {
            link.addEventListener("click", () => {
                const sectionName = link.getAttribute("data-section");

                sections.forEach((section) => {
                    section.style.display = "none";
                });

                const selectedSection = document.getElementById(sectionName);
                selectedSection.style.display = "block";
            });
        });
    });

