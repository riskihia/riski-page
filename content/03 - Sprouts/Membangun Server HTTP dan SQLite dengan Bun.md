---
title: Membangun Server HTTP dan SQLite dengan Bun
publish: true
tags:
  - bun
  - backend
  - sqlite
  - typescript
---

# 🌿 Membangun Server HTTP dan SQLite dengan Bun

> **Status:** Sprout (Tunas / Eksperimen Praktis)  
> **Dibuat:** 2026-08-28  

Setelah mengeksplorasi premis awal di [[Eksplorasi Bun Runtime dan Ekosistem]], catatan ini mendokumentasikan eksperimen langsung membuat Web Server mandiri dan integrasi Database SQLite tanpa library pihak ketiga.

---

## 1. Menjalankan HTTP Server Bawaan (`Bun.serve`)

Bun menyediakan API HTTP server langsung di level runtime:

```typescript
// server.ts
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response("Halo dari Bun Server! 🥟", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    if (url.pathname === "/api/health") {
      return Response.json({ status: "healthy", timestamp: Date.now() });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`🚀 Server aktif di http://localhost:${server.port}`);
```

Jalankan dengan mode hot-reload:
```bash
bun --watch server.ts
```

---

## 2. Menggunakan Database Bawaan (`bun:sqlite`)

Tanpa perlu menginstal `better-sqlite3` atau driver C/C++ eksternal:

```typescript
import { Database } from "bun:sqlite";

// Membuka atau membuat file database
const db = new Database("app.db", { create: true });

// Membuat tabel
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )
`);

// Insert data
const insertUser = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
insertUser.run("Riski", "riski@example.com");

// Query data
const users = db.query("SELECT * FROM users").all();
console.log("Daftar Pengguna:", users);
```

---

## 3. Manipulasi File Cepat (`Bun.file`)

Membaca dan menulis file jauh lebih singkat daripada modul `node:fs`:

```typescript
// Membaca file
const configFile = Bun.file("config.json");
const configData = await configFile.json();

// Menulis file
await Bun.write("output.txt", "Halo dunia dari Bun!");
```

---

## 🔗 Tautan Terkait
- Ide Awal: [[Eksplorasi Bun Runtime dan Ekosistem]]
- Pola Arsitektur Lanjutan: [[Arsitektur Backend Modern dengan Bun]]
- Rujukan Artikel Lengkap: [[Panduan Lengkap Belajar Bun untuk JavaScript dan TypeScript Developer]]
