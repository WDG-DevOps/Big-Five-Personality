const traitData = {
  openness: {
    name: "Openness (Keterbukaan)",
    icon: "🌟",
    descriptions: {
      low: "Anda cenderung praktis dan konvensional. Anda lebih nyaman dengan rutinitas dan hal-hal yang sudah familiar.",
      medium:
        "Anda memiliki keseimbangan antara keterbukaan terhadap hal baru dan kenyamanan dengan hal yang familiar.",
      high: "Anda sangat terbuka terhadap pengalaman baru, kreatif, dan imajinatif. Anda senang menjelajahi ide-ide baru dan berpikir abstrak.",
    },
    characteristics: {
      low: [
        "Praktis dan realistis",
        "Menyukai rutinitas",
        "Konservatif dalam berpikir",
        "Fokus pada fakta konkret",
      ],
      medium: [
        "Seimbang antara tradisi dan inovasi",
        "Terbuka namun selektif",
        "Kreatif dalam konteks tertentu",
        "Fleksibel dalam pendekatan",
      ],
      high: [
        "Sangat imajinatif dan kreatif",
        "Senang mencoba hal baru",
        "Menghargai seni dan keindahan",
        "Pemikir abstrak dan filosofis",
      ],
    },
  },
  conscientiousness: {
    name: "Conscientiousness (Kehati-hatian)",
    icon: "✅",
    descriptions: {
      low: "Anda cenderung spontan dan fleksibel. Anda lebih santai terhadap aturan dan deadline.",
      medium:
        "Anda memiliki tingkat kedisiplinan yang seimbang, terorganisir ketika diperlukan namun tetap fleksibel.",
      high: "Anda sangat terorganisir, bertanggung jawab, dan dapat diandalkan. Anda selalu merencanakan dengan matang dan menepati komitmen.",
    },
    characteristics: {
      low: [
        "Spontan dan fleksibel",
        "Santai terhadap jadwal",
        "Lebih fokus pada gambaran besar",
        "Adaptif terhadap perubahan",
      ],
      medium: [
        "Terorganisir ketika diperlukan",
        "Seimbang antara rencana dan spontanitas",
        "Cukup dapat diandalkan",
        "Fleksibel namun bertanggung jawab",
      ],
      high: [
        "Sangat terorganisir dan terencana",
        "Bertanggung jawab dan dapat diandalkan",
        "Perfeksionis dan detail-oriented",
        "Disiplin dalam mencapai tujuan",
      ],
    },
  },
  extraversion: {
    name: "Extraversion (Ekstraversi)",
    icon: "🎉",
    descriptions: {
      low: "Anda cenderung introvert, menikmati waktu sendiri untuk merenung. Anda lebih nyaman dalam kelompok kecil.",
      medium:
        "Anda ambivert - nyaman baik dalam situasi sosial maupun waktu sendiri. Anda adaptif terhadap berbagai situasi sosial.",
      high: "Anda sangat ekstrovert dan energik. Anda senang bersosialisasi, menjadi pusat perhatian, dan mendapat energi dari interaksi sosial.",
    },
    characteristics: {
      low: [
        "Introspektif dan pemikir",
        "Menikmati waktu sendiri",
        "Pendengar yang baik",
        "Nyaman dalam kelompok kecil",
      ],
      medium: [
        "Seimbang antara sosial dan waktu sendiri",
        "Adaptif terhadap situasi",
        "Nyaman dalam berbagai setting",
        "Energi seimbang",
      ],
      high: [
        "Sangat sosial dan ramah",
        "Energik dan antusias",
        "Senang menjadi pusat perhatian",
        "Mudah memulai percakapan",
      ],
    },
  },
  agreeableness: {
    name: "Agreeableness (Keramahan)",
    icon: "🤝",
    descriptions: {
      low: "Anda cenderung objektif dan tegas. Anda tidak ragu menyatakan pendapat meskipun berbeda dengan orang lain.",
      medium:
        "Anda memiliki keseimbangan antara empati dan ketegasan. Anda kooperatif namun tetap bisa bersikap tegas ketika diperlukan.",
      high: "Anda sangat empatik, kooperatif, dan peduli terhadap orang lain. Anda menghindari konflik dan selalu berusaha membantu.",
    },
    characteristics: {
      low: [
        "Objektif dan analitis",
        "Tegas dalam berpendapat",
        "Skeptis terhadap niat orang",
        "Kompetitif",
      ],
      medium: [
        "Seimbang antara empati dan ketegasan",
        "Kooperatif namun bisa tegas",
        "Diplomatis",
        "Selektif dalam membantu",
      ],
      high: [
        "Sangat empatik dan peduli",
        "Kooperatif dan supportif",
        "Mudah memaafkan",
        "Menghindari konflik",
      ],
    },
  },
  neuroticism: {
    name: "Neuroticism (Neurotisisme)",
    icon: "😌",
    descriptions: {
      low: "Anda sangat stabil secara emosional, tenang, dan jarang stres. Anda menghadapi masalah dengan kepala dingin.",
      medium:
        "Anda memiliki stabilitas emosional yang seimbang. Anda bisa mengelola stres dengan baik meskipun kadang merasa cemas.",
      high: "Anda cenderung sensitif secara emosional dan mudah mengalami stres atau kecemasan. Anda merasakan emosi dengan intens.",
    },
    characteristics: {
      low: [
        "Sangat tenang dan stabil",
        "Jarang merasa cemas",
        "Resilient terhadap stres",
        "Optimis dan positif",
      ],
      medium: [
        "Cukup stabil emosional",
        "Sesekali merasa cemas",
        "Bisa mengelola stres",
        "Realistis dalam pandangan",
      ],
      high: [
        "Sensitif secara emosional",
        "Mudah merasa cemas",
        "Rentan terhadap stres",
        "Merasakan emosi dengan intens",
      ],
    },
  },
};

function getAndNormalizeScores() {
    // 1. Ambil data JSON dari elemen skrip di hasil.ejs
    const dataElement = document.getElementById("probabilities-data");
    if (!dataElement || !dataElement.textContent) {
        console.error("Gagal mengambil data probabilitas dari EJS.");
        // Kembalikan nilai default atau kosong jika gagal
        return {
            openness: 50, conscientiousness: 50, extraversion: 50, 
            agreeableness: 50, neuroticism: 50
        };
    }
    
    // Parse string JSON menjadi objek JavaScript
    const rawProbs = JSON.parse(dataElement.textContent.trim());

    // Data Probabilitas: { AGR: 0.0256, CSN: 0.0227, EST: 0.022, EXT: 0.9168, OPN: 0.0129 }
    
    // Normalisasi dan Pemetaan: Ubah singkatan (EXT, OPN) ke kunci yang digunakan di traitData
    // dan konversi probabilitas (0-1) menjadi skor persentase (0-100).
    const scores = {
        // Neuroticism (EST) sering dibalik, di mana probabilitas tinggi = skor rendah
        // Karena data Anda dari model, kita anggap probabilitas EST tinggi = Neuroticism tinggi
        neuroticism: Math.round(parseFloat(rawProbs.EST) * 100), 
        agreeableness: Math.round(parseFloat(rawProbs.AGR) * 100),
        conscientiousness: Math.round(parseFloat(rawProbs.CSN) * 100),
        extraversion: Math.round(parseFloat(rawProbs.EXT) * 100),
        openness: Math.round(parseFloat(rawProbs.OPN) * 100)
    };
    
    console.log("Normalized Scores:", scores);
    return scores;
}

// Mendapatkan level berdasarkan skor
function getLevel(score) {
  if (score < 40) return "low";
  if (score < 70) return "medium";
  return "high";
}

// Mendapatkan label level
function getLevelLabel(level) {
  const labels = {
    low: "Rendah",
    medium: "Sedang",
    high: "Tinggi",
  };
  return labels[level];
}

// Render hasil
function renderResults() {
  const scores = getAndNormalizeScores();
    if (Object.keys(scores).length === 0) {
        document.getElementById("traitResults").innerHTML = "<p>Data hasil tidak valid atau hilang. Silakan ulangi tes.</p>";
        return;
    }

    const container = document.getElementById("traitResults");
    container.innerHTML = ''; // Pastikan container bersih sebelum diisi

    // Generate summary
    generateSummary(scores);

    // --- LOGIKA PENGURUTAN BARU DIMULAI ---

    // 1. Ubah objek skor menjadi array objek: [{key: 'openness', score: 91}, ...]
    const sortedTraits = Object.keys(scores).map(traitKey => ({
        key: traitKey,
        score: scores[traitKey]
    }));

    // 2. Urutkan array berdasarkan skor, dari Tinggi ke Rendah
    sortedTraits.sort((a, b) => b.score - a.score);

    // 3. Render setiap trait berdasarkan urutan yang sudah diurutkan
    sortedTraits.forEach((item) => {
        const traitKey = item.key;
        const score = item.score;
        
        const trait = traitData[traitKey];
        const level = getLevel(score);

        const traitHTML = `
            <div class="trait-result">
                <div class="trait-header">
                    <div class="trait-title">
                        <span class="trait-icon">${trait.icon}</span>
                        <span class="trait-name">${trait.name}</span>
                    </div>
                    <span class="trait-score">${score}%</span>
                </div>
                
                <div class="trait-bar-container">
                    <div class="trait-bar ${level}" style="width: ${score}%">
                        ${score}%
                    </div>
                </div>
                
                <span class="trait-level ${level}">${getLevelLabel(
                    level
                )}</span>
                
                <p class="trait-description">${
                    trait.descriptions[level]
                }</p>
                
                <div class="trait-characteristics">
                    <h4>Karakteristik Anda:</h4>
                    <ul>
                        ${trait.characteristics[level]
                            .map((char) => `<li>${char}</li>`)
                            .join("")}
                    </ul>
                </div>
            </div>
        `;

        container.innerHTML += traitHTML;
    });
    drawRadarChart(scores);
}

// Generate summary kepribadian
function generateSummary(scores) {
  const summaryEl = document.getElementById("personalitySummary");

  const dominantTrait = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const traitNames = {
    openness: "terbuka terhadap pengalaman baru",
    conscientiousness: "bertanggung jawab dan terorganisir",
    extraversion: "ekstrovert dan sosial",
    agreeableness: "ramah dan kooperatif",
    neuroticism: "sensitif secara emosional",
  };

  summaryEl.textContent = `Anda memiliki profil kepribadian yang unik dengan kecenderungan yang ${traitNames[dominantTrait]}. Hasil tes menunjukkan kombinasi karakteristik yang membentuk cara Anda berinteraksi dengan dunia dan orang lain.`;
}

// Draw radar chart menggunakan Canvas
function drawRadarChart(scores) {
  const canvas = document.getElementById("radarChart");
  const ctx = canvas.getContext("2d");

  // Set canvas size
  canvas.width = 500;
  canvas.height = 400;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 150;

  const traits = [
    "Openness",
    "Conscientiousness",
    "Extraversion",
    "Agreeableness",
    "Neuroticism",
  ];
  const values = [
    scores.openness / 100,
    scores.conscientiousness / 100,
    scores.extraversion / 100,
    scores.agreeableness / 100,
    scores.neuroticism / 100,
  ];

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw grid circles
  ctx.strokeStyle = "#e0e0e0";
  ctx.lineWidth = 1;
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Draw axes
  const angleStep = (Math.PI * 2) / traits.length;
  ctx.strokeStyle = "#ccc";
  ctx.lineWidth = 1;

  for (let i = 0; i < traits.length; i++) {
    const angle = angleStep * i - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Draw labels
    ctx.fillStyle = "#333";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const labelX = centerX + Math.cos(angle) * (radius + 30);
    const labelY = centerY + Math.sin(angle) * (radius + 30);
    ctx.fillText(traits[i], labelX, labelY);
  }

  // Draw data polygon
  ctx.beginPath();
  ctx.fillStyle = "rgba(102, 126, 234, 0.3)";
  ctx.strokeStyle = "#667eea";
  ctx.lineWidth = 3;

  for (let i = 0; i < values.length; i++) {
    const angle = angleStep * i - Math.PI / 2;
    const value = values[i];
    const x = centerX + Math.cos(angle) * radius * value;
    const y = centerY + Math.sin(angle) * radius * value;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Draw data points
  for (let i = 0; i < values.length; i++) {
    const angle = angleStep * i - Math.PI / 2;
    const value = values[i];
    const x = centerX + Math.cos(angle) * radius * value;
    const y = centerY + Math.sin(angle) * radius * value;

    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#667eea";
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

// Function handlers
function downloadPDF() {
  alert(
    "Fitur download PDF akan segera tersedia!\n\nDalam versi lengkap, Anda bisa mendownload hasil tes dalam format PDF."
  );
}

function retakeTest() {
  if (
    confirm(
      "Apakah Anda yakin ingin mengulang tes? Hasil saat ini akan hilang."
    )
  ) {
    window.location.href = '/test';
  }
}

function goHome() {
  window.location.href = '/';
}

function shareToFacebook() {
  const text =
    "Saya baru saja menyelesaikan Big Five Personality Test! Coba juga dan temukan kepribadian sejati Anda.";
  const url = window.location.href;
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(text)}`,
    "_blank"
  );
}

function shareToTwitter() {
  const text =
    "Saya baru saja menyelesaikan Big Five Personality Test! 🧠✨ #BigFiveTest #PersonalityTest";
  const url = window.location.href;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`,
    "_blank"
  );
}

function shareToWhatsApp() {
  const text =
    "Saya baru saja menyelesaikan Big Five Personality Test! Coba juga: " +
    window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
}

// Initialize
renderResults();
