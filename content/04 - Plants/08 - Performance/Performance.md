---
title: "Diagnosa & Optimasi Performa Web: Profiling Memory Leaks & Latency"
publish: true
---

# ⚡ Diagnosa & Optimasi Performa Web: Profiling Memory Leaks & Latency

> **Status:** Plant / Evergreen Note (Matang & Dipublikasikan)  
> **Kategori:** Performance Engineering & Optimization  

> [!tip] Hukum Amdahl
> Peningkatan performa pada satu komponen hanya akan berdampak jika komponen tersebut menjadi hambatan (*bottleneck*) terbesar sistem secara keseluruhan. Selalu ukur sebelum mengabstraksi.

---

## 📌 1. Strategi Multi-Layer Caching

```mermaid
graph TD
    User[User Browser] --> EdgeCache[Layer 1: CDN Edge Cache (Cloudflare)]
    EdgeCache -->|Cache Miss| AppCache[Layer 2: In-Memory App Cache (Redis)]
    AppCache -->|Cache Miss| QueryCache[Layer 3: Database Query Buffer Pool]
    QueryCache -->|Cache Miss| DiskStore[(Layer 4: NVMe Disk Store)]
```

---

## 💻 2. Mendeteksi Memory Leak di Node.js / Chrome DevTools

```javascript
// Contoh Memory Leak populer: Event Listener yang tidak pernah di-cleanup
import { EventEmitter } from "events"

const globalEmitter = new EventEmitter()

class Component {
  constructor() {
    this.bigData = new Array(1000000).fill("DATA_LEAK")
    
    // ❌ LEAK: Binding ini menahan rujukan ke 'this' sehingga GC tidak bisa membuangnya
    globalEmitter.on("update", this.onUpdate)
  }

  onUpdate = () => {
    console.log("Updated")
  }

  // ✅ FIX: Selalu sediakan metode destroy/cleanup
  destroy() {
    globalEmitter.off("update", this.onUpdate)
  }
}
```

---

## 🔗 Tautan Terkait di Knowledge Garden
- Optimasi Database: [[Databases]]
- Performa Frontend: [[Frontend]]
- Otomatisasi Tooling: [[Dev Productivity]]
