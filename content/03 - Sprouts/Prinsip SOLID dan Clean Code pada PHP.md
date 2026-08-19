---
title: Prinsip SOLID dan Clean Code pada PHP
publish: true
---

# 🌿 Prinsip SOLID dan Clean Code pada PHP

> **Status:** Sprout (Catatan Berkembang)  
> **Asal:** Terhubung dari [[Evolusi PHP dan Ekosistem Framework]]  

## 📐 Standar PSR & Clean Code
Sebelum masuk ke Laravel, kode PHP harus mematuhi standar komunitas:
- **PSR-4**: Autoloading class secara otomatis berdasarkan namespace dan struktur folder.
- **PSR-12**: Formatting style kode (indentasi, tanda kurung, pembukaan tag PHP).
- **Strict Types**: Selalu tambahkan `declare(strict_types=1);` di bagian atas file PHP untuk mencegah koersi tipe data misterius.

## 🧱 Penerapan Prinsip SOLID di PHP

### 1. Single Responsibility Principle (SRP)
Satu class hanya boleh memiliki **satu alasan untuk berubah**.
- ❌ *Buruk*: Class `OrderController` memproses HTTP request, menghitung diskon, menyimpan ke database SQL, dan mengirim email invoice.
- ✅ *Bersih*: Split menjadi `OrderController`, `DiscountCalculator`, `OrderRepository`, dan `InvoiceMailer`.

### 2. Dependency Inversion Principle (DIP)
High-level module tidak boleh bergantung pada low-level module langsung, melainkan bergantung pada **Interface (Abstraksi)**.
- Gunakan **Constructor Injection** di PHP 8:
```php
public function __construct(
    private readonly PaymentGatewayInterface $paymentGateway
) {}
```

## 🔗 Tautan Terkait
- Artikel Evergreen (Matang): [[Roadmap Kuasai PHP Modern dan Laravel Framework]]
