let contactForm = document.getElementById('contact-form')



window.onload = function () {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', '#contact-form')
            .then(() => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}