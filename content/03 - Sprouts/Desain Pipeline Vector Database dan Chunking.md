---
title: Desain Pipeline Vector Database dan Chunking
publish: true
---

# 🌿 Desain Pipeline Vector Database dan Chunking

> **Status:** Sprout (Catatan Berkembang)  
> **Asal:** Terhubung dari [[RAG dan Agentic Workflows]]  

## Strategi Chunking Dokumen
Kualitas pencarian RAG ditentukan 80% oleh cara dokumen dipecah (*chunking*):
1. **Fixed-size Chunking**: Memotong per 512 token. Cepat tetapi sering memotong konteks kalimat di tengah jalan.
2. **Recursive Character Chunking**: Memotong berdasarkan hirarki paragraf `\n\n`, kalimat `.\s`, baru kata. Ini rekomendasi standar.
3. **Semantic Chunking**: Menggunakan jarak kosinus (*cosine distance*) antar kalimat untuk memotong saat konteks topik berubah secara signifikan.

## Reranking dengan Cross-Encoder
Setelah Vector Database mengambil 20 kandidat dokumen teratas (top-k), gunakan **Cohere Rerank** atau **BGE-Reranker** untuk menghitung ulang skor relevansi sebelum dikirimkan ke konteks LLM.

## 🔗 Tautan Terkait
- Artikel Evergreen (Matang): [[AI & LLMs]]
