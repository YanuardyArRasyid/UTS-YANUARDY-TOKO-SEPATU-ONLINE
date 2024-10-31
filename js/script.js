// script.js

// Smooth scrolling untuk navbar links
document.querySelectorAll(".navbar-nav .nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Notifikasi sementara saat tombol "Beli Sekarang" diklik
document.querySelectorAll(".btn-primary").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Membuat elemen notifikasi
    const notification = document.createElement("div");
    notification.classList.add(
      "alert",
      "alert-success",
      "fixed-top",
      "text-center"
    );
    notification.innerText = "Produk berhasil ditambahkan ke keranjang!";

    document.body.appendChild(notification);

    // Menghilangkan notifikasi setelah 2 detik
    setTimeout(() => {
      notification.remove();
    }, 2000);
  });
});
