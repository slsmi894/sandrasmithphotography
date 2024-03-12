let contactForm = document.getElementById('contact-form')


(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY",
    });
})();
</script >
    <script type="text/javascript">
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function (event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
}