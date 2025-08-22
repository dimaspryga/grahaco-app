"use client";

import { useState, useEffect, useCallback } from "react";

// Interface untuk struktur data testimonial
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

/**
 * Custom hook untuk menyediakan data testimonial statis.
 * Dalam aplikasi nyata, data ini bisa diambil dari API atau database.
 */
export function useTestimonialsData() {
  const testimonials: Testimonial[] = [
    {
      name: "Rina & Adi",
      role: "Klien Rumah Tinggal",
      content:
        "Awalnya kami takut biaya membengkak dan proyek molor, tapi bersama Grahaco semua berjalan sesuai rencana. Progresnya jelas, biayanya transparan, dan hasil rumah kami jauh melebihi ekspektasi. Terima kasih Grahaco sudah mewujudkan rumah impian pertama kami!",
      rating: 5,
    },
    {
      name: "Bapak Hendra",
      role: "Renovasi Hunian",
      content:
        "Saya melakukan renovasi rumah lama agar lebih nyaman ditinggali. Tim Grahaco sangat profesional, memberi banyak masukan soal desain dan material, dan hasilnya rumah jadi lebih modern serta hemat energi. Prosesnya juga tanpa ribet karena semuanya di-handle oleh tim.",
      rating: 5,
    },
    {
      name: "Clara",
      role: "Klien Desain Interior",
      content:
        "Yang saya suka dari Grahaco adalah detailnya. Dari 3D render, pilihan material, sampai laporan mingguan, semua jelas dan transparan. Saya bisa tetap tenang walau sibuk kerja, karena progress selalu terpantau. Interior rumah pun sesuai dengan gaya yang saya mau.",
      rating: 5,
    },
    {
      name: "Safrijal",
      role: "Pengembang Perumahan",
      content:
        "Sebagai pengembang, saya butuh partner yang bisa diandalkan untuk proyek besar. Grahaco selalu tepat waktu, kualitas bangunan sangat baik, dan komunikasi selama proyek berjalan lancar. Saya sudah merekomendasikan Grahaco ke rekan-rekan sesama pengembang.",
      rating: 5,
    },
  ];

  return { testimonials };
}

/**
 * Custom hook untuk mengelola logika carousel testimonial.
 * Mengelola state indeks saat ini, auto-playing, dan responsivitas tampilan kartu.
 */
export function useTestimonialCarousel(testimonials: Testimonial[]) {
  // currentIndex melacak indeks testimonial pertama yang terlihat di slide saat ini.
  const [currentIndex, setCurrentIndex] = useState(0);
  // isHovered melacak apakah mouse berada di atas carousel untuk menghentikan auto-slide.
  const [isHovered, setIsHovered] = useState(false);
  // isAutoPlaying melacak apakah auto-slide aktif.
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // cardsPerPage melacak berapa banyak testimonial yang harus ditampilkan per slide berdasarkan lebar layar.
  // Ini untuk kontrol tampilan, bukan untuk pergerakan slide.
  const [cardsPerPage, setCardsPerPage] = useState(1); // Default ke 1 untuk tampilan seluler

  // Effect hook untuk menentukan jumlah kartu per halaman berdasarkan lebar layar.
  // Ini akan berjalan saat komponen di-mount dan saat ukuran jendela berubah.
  useEffect(() => {
    const handleResize = () => {
      // Menentukan breakpoint untuk menampilkan 3, 2, atau 1 kartu
      if (window.innerWidth >= 1024) {
        // Layar besar (lg breakpoint)
        setCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        // Layar menengah (md breakpoint)
        setCardsPerPage(2);
      } else {
        // Layar kecil (sm dan di bawahnya)
        setCardsPerPage(1);
      }
    };

    // Set nilai awal saat komponen di-mount
    handleResize();
    // Tambahkan event listener untuk perubahan ukuran jendela
    window.addEventListener("resize", handleResize);

    // Fungsi cleanup untuk menghapus event listener saat komponen unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array dependensi kosong berarti effect ini hanya berjalan sekali saat mount dan cleanup saat unmount

  // Menghitung indeks maksimum yang valid agar set kartu terakhir tetap penuh
  // Contoh: 4 testimonial, 3 kartu per halaman. maxValidIndex = 4 - 3 = 1.
  // currentIndex bisa 0 atau 1.
  const maxValidIndex = Math.max(0, testimonials.length - cardsPerPage);

  // useCallback untuk fungsi nextSlide untuk memastikan stabilitas dan menghindari render ulang yang tidak perlu
  // Bergeser satu kartu pada satu waktu, looping saat mencapai maxValidIndex.
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const next = prevIndex + 1;
      // Jika indeks berikutnya melebihi indeks valid terakhir, kembali ke 0 (looping)
      if (next > maxValidIndex) {
        return 0;
      }
      return next;
    });
  }, [maxValidIndex]); // Dependensi maxValidIndex

  // useCallback untuk fungsi prevSlide untuk memastikan stabilitas
  // Bergeser satu kartu pada satu waktu, looping ke maxValidIndex saat mundur melewati awal.
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - 1;
      // Jika indeks sebelumnya kurang dari 0, pergi ke indeks valid terakhir (looping)
      if (prev < 0) {
        return maxValidIndex;
      }
      return prev;
    });
  }, [maxValidIndex]); // Dependensi maxValidIndex

  // Effect hook untuk mengelola auto-slide.
  // Akan berjalan saat isHovered, isAutoPlaying, atau dependensi nextSlide berubah.
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying && !isHovered) {
      intervalId = setInterval(() => {
        nextSlide(); // Memanggil fungsi nextSlide yang di-memoized
      }, 3000); // Auto-slide setiap 3 detik
    }

    // Fungsi cleanup untuk membersihkan interval saat komponen unmount atau dependensi berubah
    return () => clearInterval(intervalId);
  }, [isHovered, isAutoPlaying, nextSlide]); // Dependensi nextSlide ditambahkan karena ia dipanggil di sini

  // Event handler untuk mouse enter (menghentikan auto-slide)
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsAutoPlaying(false); // Menghentikan auto-slide saat kursor masuk
  };

  // Event handler untuk mouse leave (melanjutkan auto-slide)
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsAutoPlaying(true); // Melanjutkan auto-slide saat kursor keluar
  };

  // totalPages sekarang mewakili jumlah "halaman" atau set kartu lengkap yang dapat ditampilkan.
  const totalPages = maxValidIndex + 1;

  return {
    currentIndex,
    setCurrentIndex,
    isHovered,
    nextSlide,
    prevSlide,
    handleMouseEnter,
    handleMouseLeave,
    cardsPerPage, // Export cardsPerPage (untuk tampilan responsif)
    totalPages, // Export totalPages (untuk pagination)
  };
}
