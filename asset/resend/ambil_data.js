const form = document.getElementById('contact-form') ;

form.addEventListener('submit', async (r) => {
    r.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email')
    const message = document.getElementById('message')

    const data = { name, email, message };

    await fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
});

