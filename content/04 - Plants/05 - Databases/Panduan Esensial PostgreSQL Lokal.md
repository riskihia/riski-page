---
title: Panduan Esensial PostgreSQL Lokal - Manajemen Database, Query Dasar, dan Konvensi
type: garden
stage: plant
publish: true
created: 2026-08-29
updated: 2026-08-29
tags:
  - database
  - postgresql
  - backend
  - sql
  - evergreen
---

# 🌳 Panduan Esensial PostgreSQL Lokal

> **Status:** Plant / Evergreen Note (Matang & Terstruktur)  
> **Kategori:** Database Management & SQL Engineering  

> [!important] Prinsip Esensial Interaksi PostgreSQL
> 1. **SQL Commands** selalu membutuhkan titik koma (`;`) untuk dieksekusi.
> 2. **Meta Commands** (`\`) dijalankan seketika tanpa titik koma.
> 3. Gunakan penamaan bersahabat `snake_case` untuk menghindari kerumitan kutip ganda (*case sensitivity*).

---

## 🏗️ 1. Definisi Skema & Manajemen Basis Data

```sql
-- Membuat basis data baru
CREATE DATABASE store_app;

-- Membuat tabel dengan primary key auto-increment & default timestamp
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    price NUMERIC(12, 2) NOT NULL CHECK (price >= 0),
    stock INT DEFAULT 0 CHECK (stock >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📊 2. Operasi CRUD (Create, Read, Update, Delete)

```sql
-- INSERT (Menambah Data)
INSERT INTO products (name, price, stock)
VALUES 
    ('Mechanical Keyboard', 850000.00, 10),
    ('Wireless Mouse', 350000.00, 25);

-- SELECT (Query & Filtering)
SELECT id, name, price, stock 
FROM products 
WHERE price >= 400000.00 
ORDER BY price DESC;

-- UPDATE (Memperbarui Data)
UPDATE products 
SET stock = stock - 1, price = 820000.00 
WHERE id = 1;

-- DELETE (Menghapus Data)
DELETE FROM products 
WHERE id = 2;
```

---

## 🛠️ 3. Cheatsheet psql CLI Terpenting

```text
\l              -> Menampilkan seluruh database
\c <database>   -> Pindah / koneksi ke database tertentu
\dt             -> Menampilkan daftar tabel
\d <tabel>      -> Menampilkan skema lengkap dari tabel
\du             -> Menampilkan daftar roles / users
\timing         -> Mengaktifkan / mematikan stopwatch durasi query
\x              -> Mengaktifkan mode expanded display (format vertikal)
\q              -> Keluar dari psql
```

---

## 🔗 Tautan Rantai Pengetahuan
- 🌱 **Bibit Awal:** [[Dasar dan Operasi PostgreSQL Lokal]]
- 🌿 **Catatan Berkembang:** [[Eksplorasi Workflow PostgreSQL Lokal dan psql CLI]]
- 🌾 **Artikel Lengkap (Harvest):** [[Panduan Lengkap PostgreSQL Lokal dari Nol - Instalasi, Akses CLI, Query Dasar, hingga Shortcut Esensial]]
- 📚 **Catatan Terkait:** [[Databases]] | [[Optimasi Query SQL]]
