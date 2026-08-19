---
title: Server Components vs Client Components
publish: false
---

# 🌿 Server Components vs Client Components

> **Status:** Sprout (Catatan Berkembang)  
> **Asal:** Terhubung dari [[Web Performance Metrics]]  

## Perbedaan Utama React Server Components (RSC) vs Client Components

| Dimensi | Server Components (RSC) | Client Components (`'use client'`) |
| :--- | :--- | :--- |
| **Eksekusi** | 100% di Server (Node.js/Edge) | Server Pre-render + Client Hydration |
| **Bundle Size** | 0 KB di JavaScript client | Termasuk dalam JS bundle |
| **Akses DB/Filesystem** | Langsung via `async/await` | Melalui API fetch HTTP |
| **Interaktivitas (State/Effects)**| ❌ Tidak bisa (`useState`, `useEffect`) | ✅ Bisa sepenuhnya |

## 🔗 Tautan Terkait
- Artikel Evergreen (Matang): [[Frontend]]
