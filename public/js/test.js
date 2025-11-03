
// const questions = [
//   { id: 1, text: "Saya memiliki imajinasi yang kaya", category: "Openness" },
//   {
//     id: 2,
//     text: "Saya selalu mempersiapkan segala sesuatu dengan baik",
//     category: "Conscientiousness",
//   },
//   {
//     id: 3,
//     text: "Saya adalah pusat perhatian di pesta",
//     category: "Extraversion",
//   },
//   {
//     id: 4,
//     text: "Saya merasa simpati terhadap orang lain",
//     category: "Agreeableness",
//   },
//   { id: 5, text: "Saya mudah stres", category: "Neuroticism" },
//   { id: 6, text: "Saya senang mempelajari hal-hal baru", category: "Openness" },
//   {
//     id: 7,
//     text: "Saya menyelesaikan tugas tepat waktu",
//     category: "Conscientiousness",
//   },
//   {
//     id: 8,
//     text: "Saya nyaman berada di sekitar orang banyak",
//     category: "Extraversion",
//   },
//   {
//     id: 9,
//     text: "Saya peduli dengan perasaan orang lain",
//     category: "Agreeableness",
//   },
//   { id: 10, text: "Saya sering merasa cemas", category: "Neuroticism" },
//   { id: 11, text: "Saya tertarik pada konsep abstrak", category: "Openness" },
//   { id: 12, text: "Saya memperhatikan detail", category: "Conscientiousness" },
//   { id: 13, text: "Saya mudah memulai percakapan", category: "Extraversion" },
//   {
//     id: 14,
//     text: "Saya bersikap lembut kepada orang lain",
//     category: "Agreeableness",
//   },
//   { id: 15, text: "Saya mudah tersinggung", category: "Neuroticism" },
//   { id: 16, text: "Saya menghargai seni dan keindahan", category: "Openness" },
//   {
//     id: 17,
//     text: "Saya membuat rencana dan mengikutinya",
//     category: "Conscientiousness",
//   },
//   {
//     id: 18,
//     text: "Saya aktif dalam kegiatan sosial",
//     category: "Extraversion",
//   },
//   { id: 19, text: "Saya membantu orang lain", category: "Agreeableness" },
//   { id: 20, text: "Saya sering merasa sedih", category: "Neuroticism" },
//   {
//     id: 21,
//     text: "Saya terbuka terhadap pengalaman baru",
//     category: "Openness",
//   },
//   { id: 22, text: "Saya bekerja dengan teliti", category: "Conscientiousness" },
//   { id: 23, text: "Saya energik dan penuh semangat", category: "Extraversion" },
//   {
//     id: 24,
//     text: "Saya memaafkan kesalahan orang lain",
//     category: "Agreeableness",
//   },
//   { id: 25, text: "Saya khawatir tentang banyak hal", category: "Neuroticism" },
//   {
//     id: 26,
//     text: "Saya suka berpikir tentang ide-ide filosofis",
//     category: "Openness",
//   },
//   {
//     id: 27,
//     text: "Saya bertanggung jawab atas pekerjaan saya",
//     category: "Conscientiousness",
//   },
//   { id: 28, text: "Saya senang bertemu orang baru", category: "Extraversion" },
//   { id: 29, text: "Saya memercayai orang lain", category: "Agreeableness" },
//   { id: 30, text: "Saya mudah panik", category: "Neuroticism" },
//   { id: 31, text: "Saya memiliki minat yang beragam", category: "Openness" },
//   { id: 32, text: "Saya menepati janji", category: "Conscientiousness" },
//   { id: 33, text: "Saya dominan dalam kelompok", category: "Extraversion" },
//   {
//     id: 34,
//     text: "Saya kooperatif dengan orang lain",
//     category: "Agreeableness",
//   },
//   { id: 35, text: "Saya mudah gugup", category: "Neuroticism" },
//   { id: 36, text: "Saya menikmati diskusi intelektual", category: "Openness" },
//   {
//     id: 37,
//     text: "Saya mengatur waktu dengan efisien",
//     category: "Conscientiousness",
//   },
//   {
//     id: 38,
//     text: "Saya berinisiatif dalam aktivitas grup",
//     category: "Extraversion",
//   },
//   { id: 39, text: "Saya menghormati orang lain", category: "Agreeableness" },
//   { id: 40, text: "Saya mudah tertekan", category: "Neuroticism" },
//   {
//     id: 41,
//     text: "Saya kreatif dalam menyelesaikan masalah",
//     category: "Openness",
//   },
//   {
//     id: 42,
//     text: "Saya berhati-hati dalam mengambil keputusan",
//     category: "Conscientiousness",
//   },
//   {
//     id: 43,
//     text: "Saya ekspresif dan suka berbicara",
//     category: "Extraversion",
//   },
//   {
//     id: 44,
//     text: "Saya baik hati kepada semua orang",
//     category: "Agreeableness",
//   },
//   { id: 45, text: "Saya sering merasa tidak aman", category: "Neuroticism" },
//   { id: 46, text: "Saya menyukai variasi dalam hidup", category: "Openness" },
//   {
//     id: 47,
//     text: "Saya disiplin dalam bekerja",
//     category: "Conscientiousness",
//   },
//   { id: 48, text: "Saya mencari petualangan", category: "Extraversion" },
//   { id: 49, text: "Saya dermawan dan suka berbagi", category: "Agreeableness" },
//   {
//     id: 50,
//     text: "Saya mudah kewalahan oleh situasi",
//     category: "Neuroticism",
//   },
// ];

let currentQuestionIndex = 0;
let answers = {};

const traitMap = {
  'O': 'Openness',
  'C': 'Conscientiousness',
  'E': 'Extraversion',
  'A': 'Agreeableness',
  'N': 'Neuroticism'
};

// Inisialisasi
function init() {
  // 'questions.length' sekarang akan merujuk ke variabel
  // yang Anda suntikkan dari test.ejs
  document.getElementById("totalQuestions").textContent = questions.length;
  loadQuestion();
  updateProgress();
}

// Memuat pertanyaan
function loadQuestion() {
  // 'questions[currentQuestionIndex]' juga akan menggunakan
  // variabel yang disuntikkan
  const question = questions[currentQuestionIndex];
  document.getElementById("questionText").textContent = question.question_text; // <-- (Saya sesuaikan ini ke 'question_text' dari model database Anda)
  document.getElementById("questionNum").textContent = currentQuestionIndex + 1; // <-- (Lebih baik pakai index daripada ID)
  document.getElementById("categoryBadge").textContent = traitMap[question.trait] || question.trait; // <-- (Saya sesuaikan ini ke 'trait' dari model database Anda)
  document.getElementById("currentQuestion").textContent =
    currentQuestionIndex + 1;

  // Reset pilihan
  const options = document.querySelectorAll(".option-button");
  options.forEach((option) => {
    option.classList.remove("selected");
    option.onclick = () => selectOption(option);
  });

  // Load jawaban sebelumnya jika ada
  // Menggunakan index sebagai key
  if (answers[currentQuestionIndex]) {
    const selectedOption = document.querySelector(
      `[data-value="${answers[currentQuestionIndex].score}"]`
    );
    if (selectedOption) {
      selectedOption.classList.add("selected");
      document.getElementById("nextBtn").disabled = false;
    }
  } else {
    document.getElementById("nextBtn").disabled = true;
  }

  // Update tombol back
  document.getElementById("backBtn").disabled = currentQuestionIndex === 0;
}

// Memilih opsi
function selectOption(selectedButton) {
  const options = document.querySelectorAll(".option-button");
  options.forEach((option) => option.classList.remove("selected"));
  selectedButton.classList.add("selected");

  const questionId = questions[currentQuestionIndex].id;
  // Simpan jawaban berdasarkan index untuk navigasi
  answers[currentQuestionIndex] = {
    question_id: questionId,
    score: parseInt(selectedButton.dataset.value),
  };

  document.getElementById("nextBtn").disabled = false;

  // Otomatis lanjut ke pertanyaan berikutnya
  setTimeout(nextQuestion, 300); // Tunda sedikit agar pilihan terlihat
}

// Pertanyaan selanjutnya
function nextQuestion() {
  // Cek jika tombol 'next' di-disable (artinya belum dijawab)
  // Ini mencegah auto-next jika kita hanya klik 'selectOption'
  if (document.getElementById("nextBtn").disabled) return;

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Selesai - kirim hasil ke server
    submitTest();
  }
}

// Pertanyaan sebelumnya
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Update progress bar
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
}

// Mengirim hasil ke Server
async function submitTest() {
  // Ubah format 'answers' dari object (berbasis index) ke array
  const finalAnswers = Object.values(answers);

  // Tampilkan pesan loading
  document.querySelector(".test-container").innerHTML =
    "<h2>Tes Selesai!</h2><p>Mengirim jawaban Anda, mohon tunggu...</p>";

  try {
    const response = await fetch("/test/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers: finalAnswers }),
    });

    if (!response.ok) {
      throw new Error("Gagal mengirim jawaban.");
    }

    const result = await response.json();

    // Arahkan ke halaman hasil
    window.location.href = `/result`;
  } catch (err) {
    console.error(err);
    document.querySelector(
      ".test-container"
    ).innerHTML =
      "<h2>Terjadi Kesalahan</h2><p>Maaf, gagal mengirim jawaban Anda. Silakan coba muat ulang halaman.</p>";
  }
}

// Keyboard navigation (biarkan sama)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && !document.getElementById("nextBtn").disabled) {
    nextQuestion();
  } else if (e.key === "ArrowLeft" && currentQuestionIndex > 0) {
    previousQuestion();
  } else if (e.key >= "1" && e.key <= "5") {
    const option = document.querySelector(`[data-value="${e.key}"]`);
    if (option) selectOption(option);
  }
});

// Mulai aplikasi
init();