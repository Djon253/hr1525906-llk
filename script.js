function handleSubmit(event) {
    event.preventDefault();

    // Собираем данные формы
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        platform: document.getElementById('platform').value,
        budget: document.getElementById('budget').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    // Сохраняем в localStorage
    localStorage.setItem('consultationRequest', JSON.stringify(formData));

    // Перенаправляем на страницу спасибо
    window.location.href = 'thank-you.html';
}

// Проверяем если пришли со страницы спасибо - очищаем форму
if (window.location.pathname.includes('thank-you.html')) {
    // Страница спасибо загружена
    console.log('Thank you page loaded');
}
