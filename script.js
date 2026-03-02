// 1. Smooth Scrolling untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Offset untuk header fixed
                behavior: 'smooth'
            });
        }
    });
});

// 2. Efek Scroll Header (Opsional: berubah warna saat di-scroll)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#001a30'; // Biru lebih gelap saat scroll
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        header.style.background = '#002b4e';
        header.style.boxShadow = 'none';
    }
});

// 3. Pesan Konsol untuk Debugging Startup
console.log("KepatihanFresh Digital Solution - Kelompok 3 UNESA");