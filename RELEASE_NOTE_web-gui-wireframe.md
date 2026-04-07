# Web GUI Wireframe Release Note

**Release Date:** 2026-04-07  
**Release Version:** 0.1
**Release Type:** Wireframe Milestone  
**Project:** Android Controller Pad Web GUI

## 概要

本次版本為 Web GUI wireframe 階段性里程碑，已完成主要資訊架構、頁面骨架、核心操作流程與前端互動原型，可作為內部評審、UI/UX 對齊、功能規格確認，以及後續前後端串接開發基礎。

本版本重點在於建立完整的管理介面輪廓與操作情境，讓各模組能以一致的版型與互動方式呈現。目前多數功能已具備前端展示與模擬互動能力，但仍以 mock data / prototype behavior 為主，尚未全面串接正式後端、裝置通訊與帳號權限機制。

## 本次完成項目

### 1. App Shell 與整體導覽架構

- 建立統一的 Web GUI 應用外框，包含 top bar、側邊導覽列與主內容區。
- 完成多層級側邊選單結構，涵蓋 Home、Control、Device、Scenes、Setting 等主分類。
- 建立頁面標題切換、導覽展開收合與基礎使用者選單互動。
- 提供語系切換入口，作為後續多語系擴充基礎。

### 2. Home Dashboard 與 Pad 預覽

- 完成首頁儀表板資訊區塊，展示裝置名稱、型號、MAC、IP、韌體版本與網路狀態等概要資訊。
- 建立 Pad 預覽區，模擬控制面板按鈕、分頁切換、按鈕狀態與亮度滑桿等互動樣式。
- 初步呈現實際控制面板操作情境，作為後續場景編排與按鍵配置功能的展示基礎。

### 3. Control 模組 Wireframe

- 完成 `Command Management` 畫面與資料表呈現。
- 建立 Command Editor Modal，涵蓋：
  - Command Name
  - Interface 類型
  - Device 選擇
  - Telnet IP / Port
  - Command Data
  - 執行後參數更新設定
- 完成 `Macro Management` 列表與 `Macro Editor` 原型。
- 提供 macro flow 編排、步驟插入、拖拉操作、檢視與測試按鈕等互動設計。
- 建立 `Scheduling` / `Jobs` 對應頁面路由與 automation 相關版型。
- 完成 `Event Trigger` 管理與測試互動雛形。

### 4. Device 模組 Wireframe

- 完成 `Device Integration` 管理畫面與裝置清單互動。
- 完成 `Driver Library` 頁面，支援搜尋、篩選、廠牌/型號檢視與匯入 driver 的 mock 流程。
- 建立裝置建立、刪除、檢視詳細資料等 modal / review 互動。

### 5. Scenes 模組 Wireframe

- 完成 `Scenario Management` 畫面骨架與互動原型。
- 建立場景配置相關 modal，包括版型切換確認、按鈕設定、動作選擇與 icon 選擇等操作流程。
- 為後續 pad 頁面設計、場景按鍵配置與 icon mapping 提供基礎框架。

### 6. Setting 模組 Wireframe

- 完成 `Pad Display Setting` 介面原型。
- 完成 `Network` 管理介面，涵蓋 Ethernet / Wi-Fi 狀態、DHCP / Static 設定、Wi-Fi 選網與密碼輸入流程。
- 完成 `Admin` 管理介面，包含：
  - 密碼與角色設定
  - 設定匯入 / 匯出
  - Log 下載
  - OTA / 手動韌體更新
  - Reboot / Factory Reset 確認流程
- 完成 `Icon Management` 畫面與 icon 上傳/刪除 mock 互動。
- 完成 `Developer Tool` 頁面，提供 discovery 與 debug console 的原型展示。


## 目前版本特性

- 可透過 Node.js + Express 啟動本地 Web GUI。
- 主要模組已具備可操作的 wireframe / prototype 介面。
- 多數列表、表單、modal、toast、切頁、拖拉與狀態切換已可於前端展示互動。
