---
title: Eksplorasi Workflow PostgreSQL Lokal dan psql CLI
type: garden
stage: sprout
publish: true
created: 2026-08-29
updated: 2026-08-29
tags:
  - database
  - postgresql
  - cli
  - devops
---

# 🌿 Eksplorasi Workflow PostgreSQL Lokal dan psql CLI

> **Status:** Sprout (Sedang Dikembangkan & Dianalisis)  
> **Asal Ide:** Terhubung dari [[Dasar dan Operasi PostgreSQL Lokal]]  

---

## 💡 Konsep Inti & Arsitektur Akses Lokal

Koneksi lokal ke PostgreSQL melibatkan 3 komponen utama:
1. **Service Daemon (`postgres.exe`)**: Berjalan di background pada port `5432`.
2. **Client CLI (`psql`)**: Utilitas command line untuk menjalankan kueri SQL maupun perintah internal *backslash* (`\`).
3. **Database Client GUI**: Alternatif visual seperti **DBeaver**, **TablePlus**, atau **pgAdmin 4**.

---

## 🔍 Verifikasi Status & Akses di Lingkungan Windows

### 1. Pengecekan Service & Port di PowerShell
```powershell
# Memeriksa service Windows apakah statusnya 'Running'
Get-Service -Name "*postgres*"

# Memeriksa konektivitas port TCP 5432
Test-NetConnection -ComputerName localhost -Port 5432
```

### 2. Protokol Autentikasi CLI
```powershell
psql -U postgres -h localhost -p 5432
```
* **Kebutuhan Identitas**: User superadmin bawaan adalah `postgres`.
* **Port**: Default adalah `5432`.

---

## ⚡ Analisis Perintah Meta `psql` (Slash Commands)

Berbeda dengan kueri SQL standar ANSI yang memerlukan titik koma (`;`), perintah internal `psql` diawali tanda backslash (`\`) dan dieksekusi seketika:

- `\l` : Menampilkan seluruh database dalam cluster.
- `\c <nama_db>` : Mengalihkan sesi aktif ke database tujuan.
- `\dt` : Memfilter dan menampilkan tabel relasional pada skema aktif.
- `\d <nama_tabel>` : Menginspeksi skema kolom, tipe data, not-null constraint, dan index.
- `\du` : Memeriksa daftar user dan atribut wewenang (*superuser*, *createrole*, dsb).
- `\timing` : Menyalakan pengukuran durasi eksekusi kueri.
- `\q` : Keluar dari sesi interaktif psql.

---

## 🔗 Tautan Rantai Pengetahuan
- 🌱 **Ide Awal:** [[Dasar dan Operasi PostgreSQL Lokal]]
- 🌳 **Evergreen Note:** [[Panduan Esensial PostgreSQL Lokal]]
- 🌾 **Artikel Publik:** [[Panduan Lengkap PostgreSQL Lokal dari Nol - Instalasi, Akses CLI, Query Dasar, hingga Shortcut Esensial]]
