
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_j2a5kdb', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
                alert("Email Successfully Sent!")
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}