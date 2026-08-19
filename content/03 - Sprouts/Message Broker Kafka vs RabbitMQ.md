---
title: Message Broker Kafka vs RabbitMQ
publish: false
---

# 🌿 Message Broker Kafka vs RabbitMQ

> **Status:** Sprout (Catatan Berkembang)  
> **Asal:** Terhubung dari [[Event Driven vs Request Driven]]  

## Perbandingan Arsitektural

| Fitur | Apache Kafka | RabbitMQ |
| :--- | :--- | :--- |
| **Model** | Distributed Commit Log (Pull-based) | Smart Broker / Dumb Consumer (Push-based) |
| **Data Retention** | Persisten dalam jangka panjang (Replayability) | Dihapus setelah dikonsumsi (*transient*) |
| **Throughput** | Sangat Tinggi (Jutaan event/detik) | Sedang hingga Tinggi |
| **Use Case** | Event Sourcing, Real-time Stream Processing | Task Queues, Complex Routing (AMQP) |

## 🔗 Tautan Terkait
- Artikel Evergreen (Matang): [[System Design]]
