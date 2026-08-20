---
title: Software Entropy dan Broken Windows Theory
type: sprout
status: growing
created: 2026-08-20
updated: 2026-08-21
topics:
  - "[[Clean Code]]"
  - "[[Dev Productivity]]"
---

# 🌿 Software Entropy dan Broken Windows Theory

> **Status:** Sprout (Sedang Berkembang)  
> **Asal Ide:** Terhubung dari Seed [[Software Entropy dan Technical Debt]]  

---

## 🔍 Mengapa Kode Bisa Membusuk (*Software Rot*)?

Entropi dalam fisika adalah ukuran derajat ketidakteraturan. Dalam software engineering, ketika kita membiarkan satu *bug kecil*, *hacky workaround*, atau kode kotor tanpa dirapikan, fenomena ini memicu **Teori Jendela Pecah (*Broken Windows Theory*)**:

1. **Jendela Pertama Pecah**: Satu bagian kecil kode ditulis asal jadi ("asal jalan dulu").
2. **Keputusasaan Menular**: Developer lain yang melihat kode kotor tersebut akan berasumsi bahwa tidak ada standar kualitas di codebase ini.
3. **Efek Bola Salju**: Dalam beberapa bulan, seluruh sistem menjadi *legacy code* yang ditakuti untuk disentuh.

---

## 🛠️ Gejala & Studi Kasus Nyata

| Gejala (*Code Smells*) | Contoh Nyata di Proyek | Dampak Jangka Panjang |
| :--- | :--- | :--- |
| **Ignored Warnings / Linter Errors** | Mematikan aturan ESLint atau PHP CS Fixer | Kesalahan sepele lolos ke tahap production |
| **Copy-Paste Workaround** | Duplikasi logika query SQL di 5 controller berbeda | Bug harus diperbaiki di 5 tempat terpisah |
| **Uncommented Magic Logic** | `if ($status == 99)` tanpa penjelasan | Developer baru takut mengubah nilai tersebut |

---

## 💡 Hipotesis Solusi yang Sedang Diuji
- Menerapkan **Boy Scout Rule** pada setiap Pull Request.
- Mewajibkan *Automated Testing* sebelum fitur baru diizinkan *merge*.

---

## 🔗 Tautan Terkait
- Seed Asal: [[Software Entropy dan Technical Debt]]
- Evergreen Guide (Plant): [[Software Entropy dan Strategi Mengatasi Technical Debt]]
- Prinsip Dasar: [[Clean Code]]
