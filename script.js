document.addEventListener('DOMContentLoaded', function() {
    // Генерация звездочек для рейтинга
    const starElements = document.querySelectorAll('.stars');
    
    starElements.forEach(element => {
        const rating = parseInt(element.getAttribute('data-rating'));
        let starsHtml = '';
        
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }
        
        element.innerHTML = starsHtml;
    });
    
    // Эффект при наведении на кнопку скачивания
    const downloadBtn = document.querySelector('.download-btn');
    
    downloadBtn.addEventListener('mouseenter', function() {
        this.querySelector('i').classList.add('fa-bounce');
    });
    
    downloadBtn.addEventListener('mouseleave', function() {
        this.querySelector('i').classList.remove('fa-bounce');
    });
});