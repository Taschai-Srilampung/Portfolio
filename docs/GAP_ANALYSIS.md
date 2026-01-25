# 🔍 TinyCrane Gap Analysis Report

> **Generated:** January 25, 2026  
> **Purpose:** เปรียบเทียบ Ideal User Flow กับ Current Codebase

---

## 📊 Executive Summary

| Zone | Description | Status | Progress |
|------|-------------|--------|----------|
| 1. Entry Points | จุดเริ่มต้น | 🟡 Partial | ~60% |
| 2. Payment & Auth | ตรวจสอบสิทธิ์และชำระเงิน | 🔴 Missing | ~15% |
| 3. Queue System | รอคิวและเชื่อมต่อระบบ | 🟢 Done | ~90% |
| 4. Gameplay & Extend | เล่นเกมและขยายเวลา | 🔴 Missing | ~30% |

---

## ✅ Zone 1: จุดเริ่มต้น (Entry Points)

### สิ่งที่ทำเสร็จแล้ว ✅

| Feature | File | Description |
|---------|------|-------------|
| หน้า Lobby (หน้าหลัก) | `client/src/components/PiList.jsx` | แสดงรายการอุปกรณ์ทั้งหมด |
| เลือกรถตามประเภท (type) | `client/src/App.jsx` route `/:type` | Navigate ไปหน้า DevicePage |
| เข้าถึงรถตัวเฉพาะ (Deep Link) | `client/src/App.jsx` route `/:type/:deviceId` | ระบุ device ตรงๆ |
| ระบบ Auto-assign device | `server/server.js` `findBestDeviceByType()` | หารถที่ว่าง/คิวสั้นสุด |

### สิ่งที่ขาด ❌

| Feature | Description | Priority | Effort |
|---------|-------------|----------|--------|
| **Auto Queue Link** | ลิ้งค์ด่วนรถประเภทไหนว่างเข้า `/auto` | Medium | 1-2 days |

---

## ❌ Zone 2: ตรวจสอบสิทธิ์และชำระเงิน (Payment & Auth)

### สิ่งที่ทำเสร็จแล้ว ✅

| Feature | File | Description |
|---------|------|-------------|
| Login/Register UI | `client/src/components/LoginPage.jsx`, `RegisterPage.jsx` | หน้า Login/Register |
| Auth Context | `client/src/context/AuthContext.jsx` | จัดการ state ของ user |
| Parse Server Auth | `client/src/config/parse.js` | REST API สำหรับ auth |
| Guest ID (visitorId) | `client/src/components/DevicePage.jsx` `getVisitorId()` | สร้าง ID สำหรับ Guest |

### สิ่งที่ขาด ❌

| Feature | Description | Priority | Effort |
|---------|-------------|----------|--------|
| **Device Fingerprint** | เช็คว่าเคยเล่นฟรีบนอุปกรณ์นี้หรือยัง | 🔴 High | 2-3 days |
| **Free Trial System** | ให้สิทธิ์เล่นฟรีครั้งแรก | 🔴 High | 1-2 days |
| **Payment QR** | สแกน QR จ่ายเงินสำหรับ Guest | 🔴 High | 3-5 days |
| **Token System** | ระบบโทเค็นสำหรับสมาชิก (เก็บใน User object) | 🔴 High | 2-3 days |
| **Token Balance Check** | ตรวจโทเค็นเพียงพอไหม | 🔴 High | 1 day |
| **Token Deduction** | หักโทเค็นเมื่อเริ่มเล่น | 🔴 High | 1 day |
| **Quick Top-up QR** | เติมโทเค็นด่วนผ่าน QR | 🟡 Medium | 2-3 days |
| **Payment Verification** | Webhook ยืนยันการชำระเงิน | 🔴 High | 2-3 days |

---

## ✅ Zone 3: รอคิวและเชื่อมต่อระบบ (Queue System)

### สิ่งที่ทำเสร็จแล้ว ✅ (เกือบครบ!)

| Feature | File | Description |
|---------|------|-------------|
| Auto Queue System | `server/server.js` `processQueue()` | จัดการคิวอัตโนมัติ |
| Queue Position Tracking | `client/src/components/DevicePage.jsx` | แสดงตำแหน่งคิว |
| Real-time Queue Broadcast | `server/server.js` `broadcastQueueUpdate()` | อัปเดตคิวแบบ real-time |
| Grace Period (รอเริ่มเล่น) | `server/server.js` | รอ 30 วินาทีให้กดเริ่ม |
| Auto-skip Disconnected | `server/server.js` | ข้ามคนที่ disconnect |
| Watch Mode | `VideoFeed.jsx` + `DevicePage.jsx` | ดูผู้เล่นอื่นขณะรอ |
| Queue Persistence | `server/server.js` `saveQueueToDB()` | เก็บคิวใน DB |
| Your Turn Notification | `server/server.js` | แจ้งเตือนเมื่อถึงคิว |

### สิ่งที่ขาด ❌

| Feature | Description | Priority | Effort |
|---------|-------------|----------|--------|
| **Auto Refund** | คืนเงิน/โทเค็นอัตโนมัติเมื่อเชื่อมต่อไม่สำเร็จ | 🟡 Medium | 2-3 days |

---

## ❌ Zone 4: เล่นเกมและขยายเวลา (Gameplay & Extend)

### สิ่งที่ทำเสร็จแล้ว ✅

| Feature | File | Description |
|---------|------|-------------|
| Start Session | `server/server.js` `startSession()` | เริ่ม session |
| Session Timer | `DevicePage.jsx` | แสดง countdown |
| End Session | `server/server.js` `endSession()` | จบ session |
| Motor Controls | `MotorControls.jsx` | ควบคุมมอเตอร์ |
| Control Lock | `DevicePage.jsx` `controlsDisabled` | ล็อคคนอื่น |
| Admin Config | `AdminPage.jsx` | ตั้งค่า session duration |

### สิ่งที่ขาด ❌

| Feature | Description | Priority | Effort |
|---------|-------------|----------|--------|
| **Pre-expire Warning** | เตือนก่อนหมดเวลา 2 นาที | 🔴 High | 1 day |
| **Extend Prompt** | ถามว่าต้องการเล่นต่อไหม | 🔴 High | 1-2 days |
| **Invite Friend** | ระบบชวนเพื่อน (ได้เวลาฟรี) | 🟡 Medium | 3-5 days |
| **Extend with Token** | ต่อเวลาด้วยโทเค็น (Member) | 🔴 High | 1-2 days |
| **Extend with QR** | ต่อเวลาด้วย QR (Guest) | 🔴 High | 2-3 days |
| **Invite Link Generator** | สร้างลิ้งค์ชวนเพื่อน | 🟡 Medium | 1-2 days |
| **Invite Tracking** | ติดตามว่าเพื่อนเข้ามาไหม | 🟡 Medium | 2-3 days |
| **Game Over Screen** | หน้าจบเกม | 🟡 Medium | 1 day |
| **Convert to Member** | ชวนสมัครสมาชิกหลังจบเกม | 🟢 Low | 1 day |

---

## 📋 Database Schema ที่ต้องเพิ่ม

```javascript
// Parse Server - User class (เพิ่ม fields)
{
  tokens: Number,           // จำนวนโทเค็นคงเหลือ
  totalSpent: Number,       // ยอดเงินที่ใช้ไปทั้งหมด
  memberSince: Date,        // วันที่สมัครสมาชิก
}

// Parse Server - DevicePlayHistory class (ใหม่)
{
  visitorId: String,        // Device fingerprint
  deviceSlug: String,       // อุปกรณ์ที่เล่น
  playedAt: Date,           // เวลาที่เล่น
  wasFree: Boolean,         // เป็นการเล่นฟรีหรือไม่
}

// Parse Server - Payment class (ใหม่)
{
  visitorId: String,        // ใครจ่าย
  userId: Pointer<User>,    // ถ้าเป็นสมาชิก
  amount: Number,           // จำนวนเงิน
  type: String,             // 'play' | 'topup' | 'extend'
  status: String,           // 'pending' | 'success' | 'failed'
  qrRef: String,            // Reference จาก Payment Gateway
  createdAt: Date,
}

// Parse Server - Invite class (ใหม่)
{
  inviterId: String,        // คนชวน
  inviteCode: String,       // รหัสชวน
  inviteeId: String,        // คนถูกชวน (หลังจากเข้ามา)
  status: String,           // 'pending' | 'accepted' | 'expired'
  rewardGiven: Boolean,     // ให้รางวัลแล้วหรือยัง
  createdAt: Date,
  expiresAt: Date,
}
```

---

## 🏗️ Current Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    CURRENT SYSTEM                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐               │
│  │ React   │────▶│ Node.js │────▶│ Parse   │               │
│  │ Client  │◀────│ Server  │◀────│ Server  │               │
│  └─────────┘     └─────────┘     └─────────┘               │
│       │              │                                      │
│       │         WebSocket                                   │
│       │              │                                      │
│       │         ┌─────────┐                                 │
│       └────────▶│ Pi Cars │ (Video + Control)              │
│                 └─────────┘                                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ ✅ DONE:                                                    │
│    • WebSocket real-time queue                              │
│    • Session management                                     │
│    • Queue auto-assignment                                  │
│    • Video streaming (TCP/UDP)                              │
│    • Motor controls                                         │
│    • Admin panel                                            │
│    • Parse Server auth (login/register)                     │
│    • Device registry                                        │
│                                                             │
│ ❌ MISSING:                                                 │
│    • Payment/Token system (ระบบจ่ายเงิน/โทเค็น)              │
│    • Free trial tracking (ระบบทดลองฟรี)                      │
│    • Time extension (ต่อเวลา)                                │
│    • Invite friend feature (ชวนเพื่อน)                       │
│    • Pre-expire warning (เตือนก่อนหมดเวลา)                   │
│    • Refund on failure (คืนเงินอัตโนมัติ)                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 File Structure Reference

### Server Files
```
server/server.js
├── Line 112-140: saveQueueToDB()
├── Line 165-200: loadFromDB()
├── Line 486-600: Queue Management Functions
├── Line 600-700: Session Functions
├── Line 695-735: processQueue()
├── Line 735-830: broadcastQueueUpdate()
├── Line 830-910: Interval Checker
└── Line 2055-2400: REST API Endpoints
```

### Client Files
```
client/src/
├── App.jsx                    - Routes
├── components/
│   ├── DevicePage.jsx         - Main game page (800+ lines)
│   ├── PiList.jsx             - Device selection
│   ├── VideoFeed.jsx          - Video streaming
│   ├── MotorControls.jsx      - RC controls
│   ├── AdminPage.jsx          - Admin panel
│   ├── LoginPage.jsx          - Login form
│   ├── RegisterPage.jsx       - Register form
│   ├── AuthModal.jsx          - Auth modal wrapper
│   └── Header.jsx             - Navigation header
├── context/
│   ├── AuthContext.jsx        - User auth state
│   └── RCContext.jsx          - RC connection state
└── config/
    ├── api.js                 - API URL config
    └── parse.js               - Parse Server client
```

---

## 🔗 Related Documents

- [ROADMAP.md](./ROADMAP.md) - Development phases และ tasks
- [QUEUE_SYSTEM_GUIDE.md](../QUEUE_SYSTEM_GUIDE.md) - คู่มือระบบคิว

---

*Last Updated: January 25, 2026*
