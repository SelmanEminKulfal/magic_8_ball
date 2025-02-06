const answers = [
    "Evet", "Hayır", "Belki", "Daha sonra tekrar sor", "Kesinlikle", "Sanmıyorum",
    "Kesinlikle evet", "Emin değilim", "Tekrar dene", "Tabii ki!", "Çok büyük ihtimalle",
    "Muhtemelen hayır", "Hiç şüphesiz", "Şimdi söylemesem daha iyi", "Tahmin edemiyorum",
    "Büyük ihtimalle", "Buna güvenme", "Zamanla evet", "Kaynaklarım hayır diyor",
    "Odaklan ve tekrar sor", "İşaretler evet diyor", "Çok şüpheli", 
    "Ona güvenebilirsin", "Görünüm pek iyi değil", "Cevap net değil, tekrar dene",
    "Kendine güvenerek sor", "Cevap içindeki hislerde", "Kesinlikle hayır!",
    "Olabilir", "Kalbinin sesini dinle"
];

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shakeBall() {
    const questionInput = document.getElementById("questionInput");
    const answerText = document.querySelector(".answer");
    
    if (!questionInput.value.trim()) {
        answerText.textContent = "Lütfen bir soru sor!";
        return;
    }

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answerText.textContent = randomAnswer;
    
    document.body.style.backgroundColor = getRandomColor();
}
