function startTest() {
  alert(
    "Tes akan segera dimulai! Siapkan diri Anda untuk menjawab pertanyaan dengan jujur."
  );
  // Di sini Anda bisa menambahkan navigasi ke halaman tes
  // window.location.href = 'test.html';
}

// Animasi untuk trait cards
const traitCards = document.querySelectorAll(".trait-card");
traitCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  card.style.animation = "fadeInUp 0.6s ease-out forwards";
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
