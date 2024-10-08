// SCROLL UP BUTTON JAVASCRIPT
// SCROLL UP BUTTON JAVASCRIPT
const scrollUpBtn = document.getElementById('scrollUpBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


// BOTÓN DAME CLICK DE LA SECCIÓN DE ABOUT
$('.btn-primary').click(function() {
    let $card = $(this).closest('.card-body');
    let $cardText = $card.find('.card-text');
    
    $cardText.toggleClass('d-none d-block');
});

// TABS DE MIS SKILLS E INTERESES
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLinks")
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

document.querySelector(".tab button").click();

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        const modalImg = document.querySelector('.modal-img');
        modalImg.src = this.getAttribute('data-bs-src');
    });
});
