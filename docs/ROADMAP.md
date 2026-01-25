# 🗺️ TinyCrane Development Roadmap

> **Created:** January 25, 2026  
> **Goal:** พัฒนาระบบให้ครบตาม Ideal User Flow

---

## 📊 Overview

```
Phase 1 ──▶ Phase 2 ──▶ Phase 3 ──▶ Phase 4
Free Trial   Token      Time        Payment
   Gate      System    Extension   + Invite
 (1-2 wk)   (2-3 wk)   (1-2 wk)   (3-4 wk)
```

**Total Estimated Time:** 7-11 สัปดาห์

---

## 🚀 Phase 1: Free Trial Gate

> **เป้าหมาย:** ให้คนเล่นฟรีครั้งแรก หลังจากนั้นต้องจ่ายเงิน  
> **Duration:** 1-2 สัปดาห์  
> **Complexity:** ⭐⭐

### Why Start Here?
- ✅ ไม่ต้องเชื่อม Payment Gateway จริง (ลดความซับซ้อน)
- ✅ สร้าง Foundation สำหรับ Device Tracking
- ✅ ทำให้ระบบมี "Gate" ก่อนเข้าเล่น

### Tasks

| # | Task | File(s) | Est. |
|---|------|---------|------|
| 1.1 | ติดตั้ง FingerprintJS | `client/package.json`, `DevicePage.jsx` | 2h |
| 1.2 | สร้าง `DevicePlayHistory` class ใน Parse | `parse-server/index.js` | 1h |
| 1.3 | สร้าง API `GET /api/check-free-trial` | `server/server.js` | 2h |
| 1.4 | สร้าง API `POST /api/use-free-trial` | `server/server.js` | 2h |
| 1.5 | เพิ่ม logic เช็ค free trial ก่อนเข้าคิว | `DevicePage.jsx` | 3h |
| 1.6 | สร้าง "Payment Required" modal | `client/src/components/PaymentRequiredModal.jsx` | 3h |
| 1.7 | Testing & Bug fixes | - | 4h |

### Deliverables
- [ ] Device fingerprint tracking
- [ ] Free trial check API
- [ ] Payment Required modal (placeholder)
- [ ] First-time free play working

---

## 💰 Phase 2: Token System

> **เป้าหมาย:** ให้สมาชิกเติมโทเค็นและใช้โทเค็นเล่น  
> **Duration:** 2-3 สัปดาห์  
> **Complexity:** ⭐⭐⭐

### Tasks

| # | Task | File(s) | Est. |
|---|------|---------|------|
| 2.1 | เพิ่ม `tokens` field ใน User class | Parse Server | 1h |
| 2.2 | สร้าง API `GET /api/user/tokens` | `server/server.js` | 2h |
| 2.3 | สร้าง API `POST /api/user/tokens/deduct` | `server/server.js` | 3h |
| 2.4 | สร้าง API `POST /api/user/tokens/add` | `server/server.js` | 2h |
| 2.5 | สร้าง Token Balance UI ใน Header | `Header.jsx` | 3h |
| 2.6 | อัปเดต AuthContext เพิ่ม token state | `AuthContext.jsx` | 2h |
| 2.7 | สร้าง TopUpModal (mock payment) | `TopUpModal.jsx` (new) | 4h |
| 2.8 | เชื่อม token deduction กับ session start | `DevicePage.jsx`, `server.js` | 4h |
| 2.9 | สร้าง Payment class ใน Parse | Parse Server | 1h |
| 2.10 | Testing & Bug fixes | - | 6h |

### Deliverables
- [ ] Token balance display
- [ ] Token deduction on play
- [ ] Top-up modal (mock)
- [ ] Payment history tracking

---

## ⏰ Phase 3: Time Extension

> **เป้าหมาย:** ให้ผู้เล่นต่อเวลาได้  
> **Duration:** 1-2 สัปดาห์  
> **Complexity:** ⭐⭐

### Tasks

| # | Task | File(s) | Est. |
|---|------|---------|------|
| 3.1 | เพิ่ม Warning state (2 นาทีก่อนหมด) | `DevicePage.jsx` | 2h |
| 3.2 | สร้าง ExtendTimeModal | `ExtendTimeModal.jsx` (new) | 4h |
| 3.3 | สร้าง API `POST /api/session/extend` | `server/server.js` | 3h |
| 3.4 | อัปเดต session timer รองรับ extension | `server/server.js` | 2h |
| 3.5 | เชื่อม Token deduction กับ extend | `DevicePage.jsx` | 2h |
| 3.6 | เพิ่ม Guest QR payment option | `ExtendTimeModal.jsx` | 3h |
| 3.7 | Testing & Bug fixes | - | 4h |

### Deliverables
- [ ] 2-minute warning modal
- [ ] Time extension API
- [ ] Token/QR extension options
- [ ] Seamless time addition

---

## 💳 Phase 4: Payment Gateway + Invite

> **เป้าหมาย:** เชื่อมต่อ Payment Gateway จริง + ระบบชวนเพื่อน  
> **Duration:** 3-4 สัปดาห์  
> **Complexity:** ⭐⭐⭐⭐

### Part A: Payment Gateway (2 สัปดาห์)

| # | Task | File(s) | Est. |
|---|------|---------|------|
| 4.1 | เลือก Payment Gateway | Research | 4h |
| 4.2 | สร้าง payment module | `server/payment.js` (new) | 8h |
| 4.3 | Integrate QR Code Generation | `server/payment.js` | 4h |
| 4.4 | สร้าง Webhook endpoint | `server/server.js` | 4h |
| 4.5 | สร้าง PaymentQRModal | `PaymentQRModal.jsx` (new) | 4h |
| 4.6 | Replace mock payment with real | Multiple files | 4h |
| 4.7 | Testing with sandbox | - | 8h |

### Part B: Invite System (1-2 สัปดาห์)

| # | Task | File(s) | Est. |
|---|------|---------|------|
| 4.8 | สร้าง Invite class ใน Parse | Parse Server | 1h |
| 4.9 | สร้าง API `POST /api/invite/create` | `server/server.js` | 2h |
| 4.10 | สร้าง API `GET /api/invite/:code` | `server/server.js` | 2h |
| 4.11 | สร้าง API `POST /api/invite/accept` | `server/server.js` | 3h |
| 4.12 | สร้าง InviteFriendModal | `InviteFriendModal.jsx` (new) | 4h |
| 4.13 | เพิ่ม invite option ใน ExtendTimeModal | `ExtendTimeModal.jsx` | 2h |
| 4.14 | Reward system (free time) | `server/server.js` | 3h |
| 4.15 | Testing & Bug fixes | - | 6h |

### Payment Gateway Options

| Provider | Pros | Cons |
|----------|------|------|
| **PromptPay** | ฟรี, ใช้งานง่าย | Manual verify |
| **SCB Easy** | Auto verify, API | ต้องสมัคร merchant |
| **TrueWallet** | Popular | API ซับซ้อน |
| **Omise** | Developer friendly | ค่าธรรมเนียม |

### Deliverables
- [ ] Real QR payment working
- [ ] Payment verification webhook
- [ ] Invite link generator
- [ ] Invite tracking & rewards

---

## 📋 New Files to Create

```
client/src/components/
├── PaymentRequiredModal.jsx    (Phase 1)
├── TopUpModal.jsx              (Phase 2)
├── ExtendTimeModal.jsx         (Phase 3)
├── PaymentQRModal.jsx          (Phase 4)
└── InviteFriendModal.jsx       (Phase 4)

server/
└── payment.js                  (Phase 4)
```

---

## 🎯 Quick Start Commands

### Phase 1 - Install FingerprintJS
```bash
cd client
pnpm add @fingerprintjs/fingerprintjs
```

### Phase 2 - No new dependencies needed

### Phase 3 - No new dependencies needed

### Phase 4 - Install QR Generator
```bash
cd client
pnpm add qrcode.react
cd ../server
pnpm add qrcode
```

---

## ✅ Progress Tracking

### Phase 1: Free Trial Gate
- [ ] 1.1 FingerprintJS installed
- [ ] 1.2 DevicePlayHistory class created
- [ ] 1.3 Check free trial API
- [ ] 1.4 Use free trial API
- [ ] 1.5 Free trial logic in DevicePage
- [ ] 1.6 PaymentRequiredModal
- [ ] 1.7 Testing complete

### Phase 2: Token System
- [ ] 2.1 - 2.10 (All tasks)

### Phase 3: Time Extension
- [ ] 3.1 - 3.7 (All tasks)

### Phase 4: Payment + Invite
- [ ] 4.1 - 4.15 (All tasks)

---

## 🔗 Related Documents

- [GAP_ANALYSIS.md](./GAP_ANALYSIS.md) - Current vs Ideal comparison
- [QUEUE_SYSTEM_GUIDE.md](../QUEUE_SYSTEM_GUIDE.md) - Queue system details

---

## 📝 Notes

- **MVP First:** ทำ Phase 1-3 ก่อน แล้วค่อย integrate payment จริง
- **Mock Payment:** ใช้ mock payment ใน Phase 2-3 เพื่อ test flow
- **Incremental:** แต่ละ Phase build on top of previous

---

*Last Updated: January 25, 2026*
