---
title: Penerapan 5 Prinsip SOLID dan Refactoring Code Smells
publish: true
---

# 🧹 Penerapan 5 Prinsip SOLID dan Refactoring Code Smells

> **Status:** Plant / Evergreen Note (Matang & Dipublikasikan)  
> **Kategori:** Clean Code & Refactoring Practices  

> [!important] Boy Scout Rule
> *"Selalu tinggalkan kode dalam keadaan lebih bersih daripada saat Anda menemukannya."* Refactoring berkelanjutan mencegah munculnya kecacatan arsitektural (*technical debt*).

---

## 📐 5 Prinsip SOLID Ringkas

1. **S - Single Responsibility Principle (SRP)**: Satu class hanya memiliki satu alasan untuk berubah.
2. **O - Open-Closed Principle (OCP)**: Terbuka untuk ekstensi, tertutup untuk modifikasi.
3. **L - Liskov Substitution Principle (LSP)**: Subclass harus dapat menggantikan superclass tanpa merusak program.
4. **I - Interface Segregation Principle (ISP)**: Klien tidak boleh dipaksa bergantung pada interface yang tidak mereka gunakan.
5. **D - Dependency Inversion Principle (DIP)**: Subjek bergantung pada abstraksi, bukan konkrit.

---

## 💻 Contoh Refactoring: Open-Closed Principle (OCP)

```typescript
// ❌ SANGAT BURUK (Melanggar OCP: Menambah metode pembayaran harus mengubah class ini)
class PaymentProcessorBad {
  processPayment(type: string, amount: number) {
    if (type === "paypal") {
      // Logika PayPal
    } else if (type === "stripe") {
      // Logika Stripe
    } else if (type === "bank_transfer") {
      // Logika Bank
    }
  }
}

// ✅ BERSIH (Mematuhi OCP: Ekstensi pembayaran baru tinggal buat class baru)
interface PaymentMethod {
  pay(amount: number): Promise<boolean>
}

class PayPalPayment implements PaymentMethod {
  async pay(amount: number): Promise<boolean> {
    // Logika spesifik PayPal
    return true
  }
}

class StripePayment implements PaymentMethod {
  async pay(amount: number): Promise<boolean> {
    // Logika spesifik Stripe
    return true
  }
}

class PaymentProcessorGood {
  async process(method: PaymentMethod, amount: number) {
    return await method.pay(amount)
  }
}
```

---

## 🔗 Tautan Terkait di Knowledge Garden
- Implementasi di PHP: [[Roadmap Kuasai PHP Modern dan Laravel Framework]]
- Rangkuman SOLID Sprout: [[Prinsip SOLID dan Clean Code pada PHP]]
- Performa & Efisiensi: [[Performance]]
