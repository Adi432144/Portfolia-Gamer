document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".changing-text");
    const texts = ["Mohammad Adi", "Gamer", "Web Developer", "Game Developer"];
    let index = 0;

    function changeText() {
        textElement.classList.add("fade-out");
        
        setTimeout(() => {
            index = (index + 1) % texts.length;
            textElement.textContent = texts[index];
            textElement.classList.remove("fade-out");
            textElement.classList.add("fade-in");
        }, 1000); // Wait for fade-out transition to complete
    }

    setInterval(changeText, 4000); // Change text every 4 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector("#skills");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkSkillsInView() {
        if (isInViewport(skillsSection)) {
            skillsSection.classList.add("visible");
            window.removeEventListener('scroll', checkSkillsInView); // Animation only once
        }
    }

    window.addEventListener('scroll', checkSkillsInView);
    checkSkillsInView(); // Initial check in case it's already in view
});
