 const tombolPortfolio = document.querySelector("#tombol-portfolio");

tombolPortfolio.addEventListener("click", function() {
    alert("Terima kasih sudah tertarik! Portofolio sedang disiapkan.");
});

const judul = document.querySelector(".hero-judul");

judul.addEventListener("mouseover", function() {
    judul.textContent = "Halo, Senang Bertemu Kamu!";
});

judul.addEventListener("mouseout", function() {
    judul.textContent = "Halo, Saya Putra Agung Hernanto";
});


let jamSekarang = new Date ().getHours();

if (jamSekarang < 12) {
    judul.textContent = "Selamat Pagi, Saya Putra Agung Hernanto";
} else if (jamSekarang < 18) {
    judul.textContent = "Selamat Siang, Saya Putra Agung Hernanto";
} else {
    judul.textContent = "Selamat Malam, Saya Putra Agung Hernanto"
}

for (let i = 1; i <= 10; i++) {
    console.log("Angka ke-" + i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + "-Genap");
    } else {
        console.log(i + "-Ganjil");
    }
}

const tombolKirim = document.querySelector("#tombol-kirim");

tombolKirim.addEventListener("click", function() {
    const nama = document.querySelector("#input-nama").value;
    const email = document.querySelector("#input-email").value;
    const pesan = document.querySelector("#input-pesan").value;
    const statusPesan = document.querySelector("#pesan-status");

    if (nama === "") {
        statusPesan.textContent = "Nama tidak boleh kosong!";
        statusPesan.style.color = "red";
    } else if (email ==="" || !email.includes("@")) {
        statusPesan.textContent = "Email tidak valid, harus mengandung @";
        statusPesan.style.color = "red";
    } else if (pesan ==="") {
        statusPesan.textContent = "Pesan tidak boleh kosong!";
        statusPesan.style.color = "red";
    } else {
        statusPesan.textContent = "Pesan berhasil dikirim! Terima kasih, " + nama;
        statusPesan.style.color = "lightgreen";
    }
});

    const observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {threshold:0.1});

    const elemensAnimasi = document.querySelectorAll(".animate-on-scroll");
    elemensAnimasi.forEach(function(elemen) {
        observer.observe(elemen);
});