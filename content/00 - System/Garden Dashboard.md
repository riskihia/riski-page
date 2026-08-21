---
type: system
title: Garden Dashboard
publish: true
---

# 🌳 Digital Knowledge Garden Dashboard

> [!abstract] Siklus Pengetahuan (Knowledge Lifecycle)
> 🌱 **Seed** (Ide Mentah) ➔ 🌿 **Sprout** (Eksplorasi) ➔ 🌳 **Plant** (Matang/Evergreen) ➔ 🌾 **Harvest** (Karya/Output)

---

## 📊 Statistik & Kesehatan Kebun

```dataview
TABLE WITHOUT ID
  length(filter(rows, (r) => r.stage = "seed" OR contains(r.file.folder, "02 - Seeds"))) AS "🌱 Seeds",
  length(filter(rows, (r) => r.stage = "sprout" OR contains(r.file.folder, "03 - Sprouts"))) AS "🌿 Sprouts",
  length(filter(rows, (r) => r.stage = "plant" OR contains(r.file.folder, "04 - Plants"))) AS "🌳 Plants",
  length(filter(rows, (r) => r.stage = "harvest" OR contains(r.file.folder, "05 - Harvest"))) AS "🌾 Harvest",
  length(rows) AS "Total Catatan"
FROM ""
WHERE (stage != null OR contains(file.folder, "02 - Seeds") OR contains(file.folder, "03 - Sprouts") OR contains(file.folder, "04 - Plants") OR contains(file.folder, "05 - Harvest")) AND !contains(file.name, "Dashboard") AND !contains(file.folder, "Templates")
GROUP BY true
```

---

## 🌱 Seeds — Bibit Ide Baru
*Ide cepat, cuplikan konsep, atau pertanyaan spontan yang siap dikembangkan.*

```dataview
TABLE file.folder AS "Lokasi", file.ctime AS "Dibuat"
FROM ""
WHERE (stage = "seed" OR contains(file.folder, "02 - Seeds")) AND !contains(file.name, "Dashboard") AND !contains(file.name, "Seeds.md")
SORT file.ctime DESC
LIMIT 10
```

---

## 🌿 Sprouts — Sedang Berkembang
*Catatan yang sedang aktif dieksplorasi, dihubungkan, dan diuji pemahamannya.*

```dataview
TABLE tags AS "Topik", file.mtime AS "Terakhir Diupdate"
FROM ""
WHERE (stage = "sprout" OR contains(file.folder, "03 - Sprouts")) AND !contains(file.name, "Dashboard") AND !contains(file.name, "Sprouts.md")
SORT file.mtime DESC
```

---

## 🌳 Plants — Pengetahuan Matang (Evergreen)
*Catatan yang sudah utuh, ditulis dengan bahasa sendiri, dan terhubung erat dengan peta konsep.*

```dataview
TABLE tags AS "Topik", file.mtime AS "Terakhir Diupdate"
FROM ""
WHERE (stage = "plant" OR contains(file.folder, "04 - Plants")) AND !contains(file.name, "Dashboard") AND !contains(file.name, "Plants.md")
SORT file.mtime DESC
```

---

## 🌾 Harvest — Karya & Output Publik
*Artikel utuh, panduan, studi kasus, atau arsitektur sistem yang siap dipublikasikan.*

```dataview
TABLE publish AS "Published", file.mtime AS "Tanggal Rilis"
FROM ""
WHERE (stage = "harvest" OR contains(file.folder, "05 - Harvest")) AND !contains(file.name, "Dashboard") AND !contains(file.name, "Harvest.md")
SORT file.mtime DESC
```
