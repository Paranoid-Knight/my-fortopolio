const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // cegah reload page

  // ambil value dari input/textarea
  const nama = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const res = await fetch("/kirim-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama, email, message })
    });

    const data = await res.json();

    if(data.success){
      alert("Email berhasil terkirim!");
      form.reset(); // reset form setelah terkirim
    } else {
      alert("Gagal mengirim email, cek console.");
      console.log(data);
    }

  } catch (err) {
    console.error(err);
    alert("Error server, cek console");
  }
});
