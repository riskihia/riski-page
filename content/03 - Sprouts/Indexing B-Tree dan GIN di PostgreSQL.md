---
title: Indexing B-Tree dan GIN di PostgreSQL
publish: false
---

# 🌿 Indexing B-Tree dan GIN di PostgreSQL

> **Status:** Sprout (Catatan Berkembang)  
> **Asal:** Terhubung dari [[Optimasi Query SQL]]  

## Jenis-Jenis Index PostgreSQL
1. **B-Tree Index (Default)**: Ideal untuk operator perbandingan korelasi sama dengan (`=`), rentang (`<`, `>`, `BETWEEN`), dan `ORDER BY`.
2. **GIN (Generalized Inverted Index)**: Sangat ideal untuk pencarian data array, kolom JSONB, dan *Full-Text Search*.
3. **BRIN (Block Range Index)**: Sangat hemat memori untuk data deret waktu (*time-series*) berukuran terabyte.

## 🔗 Tautan Terkait
- Artikel Evergreen (Matang): [[Databases]]
