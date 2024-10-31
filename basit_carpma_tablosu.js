// Kullanıcıdan çarpma tablosunu oluşturmak için bir sayı al
let sayi = prompt("Çarpma tablosunu oluşturmak için bir sayı girin:");

// Girişin bir sayı olup olmadığını kontrol et
if (isNaN(sayi) || sayi === "") {
  alert("Lütfen geçerli bir sayı girin.");
} else {
  // Kullanıcıdan alınan sayıyı tam sayıya dönüştür
  sayi = parseInt(sayi);

  // Çarpma tablosunu oluştur
  let sonuclar = ""; // Sonuçları saklamak için değişken

  for (let i = 1; i <= 10; i++) {
    sonuclar += `${sayi} x ${i} = ${sayi * i}\n`; // Her çarpma işlemini sonuclar değişkenine ekle
  }

  // Sonuçları göster
  alert(sonuclar);
}
