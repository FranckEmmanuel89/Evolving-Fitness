document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
  
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            const successMessage = document.getElementById('success-message');
            successMessage.classList.remove('opacity-0', 'pointer-events-none');

            setTimeout(() => {
                successMessage.classList.add('opacity-0', 'pointer-events-none');
            }, 4000);
            this.reset();
        } else {
            alert("Oops! There was a problem submitting your form");
            this.reset();
        }
    })
    .catch(error => console.error('Error:', error));
    
  });
