const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nama = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const res = await fetch("/.netlify/functions/kirimEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama, email, message })
    });

    const data = await res.json();
    if(data.success){
      alert("Email berhasil terkirim!");
      form.reset();
    } else {
      alert("Gagal mengirim email");
      console.log(data);
    }

  } catch(err) {
    console.error(err);
    alert("Error server");
  }
});
