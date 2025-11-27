const form = document.getElementById('contact-form')

form.addEventListener('submit', async (cek) => {
  cek.preventDefault();

  const nama = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const lempar = await fetch("/kirim-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama, email, message })
  });
})