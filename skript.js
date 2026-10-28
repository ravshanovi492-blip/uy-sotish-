document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobil Menyu uchun
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Kategoriya bo'yicha uylarni filtr qilish
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            propertyCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Modal oyna (Batafsil ma'lumot)
    const modal = document.getElementById('propertyModal');
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const closeModal = document.querySelector('.close-modal');

    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDesc = document.getElementById('modalDesc');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modalTitle.textContent = trigger.getAttribute('data-title');
            modalPrice.textContent = trigger.getAttribute('data-price');
            modalDesc.textContent = trigger.getAttribute('data-desc');
            modalImg.src = trigger.getAttribute('data-img');

            modal.style.display = 'flex';
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 4. Aloqa formasini yuborish
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Arizangiz qabul qilindi! Agentimiz tez orada ko'rsatilgan telefon raqamingizga bog'lanadi.");
            contactForm.reset();
        });
    }
});