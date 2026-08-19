---
title: Systematic Debugging di AI Agent
publish: false
---

# 🌿 Systematic Debugging di AI Agent

> **Status:** Sprout (Catatan Berkembang)  
> **Asal:** Terhubungkan dari [[AI Agentic Reasoning]]  

## Konsep Kunci: The Iron Law of Debugging
Dalam rekayasa perangkat lunak modern, ada hukum ketat yang disebut **Iron Law of Debugging**:
> *"Dilarang keras mengajukan atau menulis perbaikan kode sebelum investigasi akar masalah (root cause) selesai 100%."*

## Mengapa AI Mengalami "Symptom Patching"?
Saat AI menemukan error `NullPointerException` atau `TypeError`, kecenderungan tanpa arahan adalah membungkus baris kode dengan `try/catch` atau fallback `|| null`. Ini adalah *symptom patching* (menutupi gejala), bukan membetulkan masalah utamanya.

## 🔄 Alur Kerja Debugging Ideal untuk Agent
1. **Investigasi Log**: Baca full stacktrace tanpa terpotong.
2. **Reproduksi**: Uji ulang error menggunakan script tes yang minim.
3. **Formulasi Hipotesis Tunggal**: Uji 1 variabel pada satu waktu.
4. **Eksekusi Fix & Verifikasi**: Jalankan kembali perintah tes sampai benar-benar *pass*.

## 🔗 Tautan Terkait
- Artikel Evergreen (Matang): [[Prinsip Systematic Debugging untuk AI Coding Agent]]
