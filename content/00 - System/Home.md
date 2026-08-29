---
type: system
title: Home Dashboard
---

# 🌳 My Knowledge Garden

> *A place to capture daily thoughts, cultivate ideas, connect concepts, and grow lifetime knowledge.*

---

## 📅 Today

* **[[2026-08-19]]** — *Catatan harian hari ini (19 Agustus 2026)*

> 💡 **Tips Daily Note:** Di Obsidian, Anda juga bisa langsung menekan ikon **Kalender (Open today's daily note)** di panel sebelah kiri untuk otomatis membuka/membuat catatan harian hari ini.

---

### ⚡ Quick Links & Dashboards
* 📊 **[[Garden Dashboard]]** — *Dashboard Status & Pertumbuhan Knowledge Garden*
* 📜 **[[How This Garden Works]]** — *Panduan Standar & 7 Aturan Emas Garden*
* 📋 **[[Daily]]** — *Template Daily Note*
* 🌱 **[[Seed]]** — *Template Seed Note*
* 🌳 **[[Garden]]** — *Template Garden Note*

---

## 🌳 Garden Health Quick Widget

```dataview
TABLE WITHOUT ID
  "🌱 " + length(filter(rows, (r) => r.stage = "seed" OR contains(r.file.folder, "02 - Seeds"))) + " Seeds   |   " +
  "🌿 " + length(filter(rows, (r) => r.stage = "sprout" OR contains(r.file.folder, "03 - Sprouts"))) + " Sprouts   |   " +
  "🌳 " + length(filter(rows, (r) => r.stage = "plant" OR contains(r.file.folder, "04 - Plants"))) + " Plants   |   " +
  "🌾 " + length(filter(rows, (r) => r.stage = "harvest" OR contains(r.file.folder, "05 - Harvest"))) + " Harvest" AS "Status Pertumbuhan Kebun"
FROM ""
WHERE (stage != null OR contains(file.folder, "02 - Seeds") OR contains(file.folder, "03 - Sprouts") OR contains(file.folder, "04 - Plants") OR contains(file.folder, "05 - Harvest")) AND !contains(file.name, "Dashboard") AND !contains(file.folder, "Templates")
GROUP BY true
```

---

## 🧭 Navigation & Areas

| Area | Purpose |
| :--- | :--- |
| **[[01 - Daily]]** | Catatan harian & penangkapan ide spontan |
| **[[02 - Seeds]]** | Ide & observasi mentah |
| **[[03 - Sprouts]]** | Ide yang sedang dikembangkan |
| **[[04 - Plants]]** | Pengetahuan matang & terhubung (Evergreen) |
| **[[05 - Harvest]]** | Hasil karya, proyek, & keputusan |
| **[[06 - Sources]]** | Buku, artikel, video, & paper |
| **[[99 - Archive]]** | Catatan lama atau inaktif |

---

## 🌳 Knowledge Areas (Main Gardens)

* 🗄️ **[[Panduan Esensial PostgreSQL Lokal|Databases]]** — *PostgreSQL & Database Engineering*
* 🍲 **[[Kuliner]]** — *Resep & Sains Kuliner*
* 🧠 **[[Psychology]]** — *Mental Models, Learning, & Behavior*
* 💼 **[[Business]]** — *Strategy, Product, & Growth*
* ✍️ **[[Writing]]** — *Storytelling, Worldbuilding, & Structure*

---

## 🔄 Growth Cycle

```text
📅 Daily (01 - Daily)
   │
   ↓
🌱 Seed (02 - Seeds)
   │
   ↓
🌿 Sprouts (03 - Sprouts)
   │
   ↓
🌳 Plants (04 - Plants)
   │
   ↓
🍎 Harvest (05 - Harvest)
   │
   ↓
🌲 Connected Knowledge Garden
```

---

## 🌱 7 Aturan Emas Garden
1. **Daily Notes bersifat kronologis**: Tempat mencatat spontan harian.
2. **Seeds boleh berantakan**: Cukup tangkap pemikiran awal.
3. **Garden Notes berisi pemahaman sendiri**: Tulis dengan bahasa Anda sendiri.
4. **Links lebih penting dari folder**: Gunakan `[[...]]` untuk membangun jaringan pengetahuan.
5. **Tidak semua Seed harus jadi Garden**: Wajar jika ada Seed yang tidak dilanjutkan.
6. **Evergreen bukan berarti selesai**: Catatan matang terus berkembang (`## Evolution`).
7. **Jangan over-optimize**: Utamakan menulis pengetahuan dibanding merapikan visual.
