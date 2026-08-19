---
title: Event Driven vs Request Driven
publish: true
---

# 🌱 Event Driven vs Request Driven

> **Status:** Seed (Ide Mentah)  
> **Dibuat:** 2026-08-20  

## Premis Utama
Arsitektur **Request-Response (Synchronous)** seperti REST/gRPC menciptakan ketergantungan erat (*tight coupling*). Jika Service B *down*, Service A juga ikut gagal. Sebaliknya, **Event-Driven Architecture (Asynchronous)** melepaskan ketergantungan ini melalui *Event Broker*.

## 🔗 Tautan Terkait
- Pengembangan: [[Message Broker Kafka vs RabbitMQ]]
- Artikel Evergreen (Matang): [[System Design]]
