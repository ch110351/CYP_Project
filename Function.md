# Function Sample

## 文件目的
本文件依照目前 `CYP_Project` 已完成的內容，整理出完整功能項目清單，作為後續專案複製相同開發模式時的功能基線。

這份文件不是理想規格，而是以目前 repo 已經呈現的資訊架構、頁面內容、模擬流程與互動方式為主，整理成可延用的功能藍本。

## 專案定位
- 專案類型：控制系統 Web GUI / 管理後台 / 裝置控制平台
- 交付形式：靜態 handoff + 可執行整合版 demo
- 技術形式：Node.js + Express + HTML + CSS + Vanilla JavaScript
- 目前狀態：高完成度前端原型，採 mock data 與 prototype interaction 驗證流程

## 系統總覽功能

### 1. App Shell
- Topbar
  - 品牌 Logo
  - 側欄開關
  - 語系切換
  - 使用者選單
  - 設定入口
- Sidebar Navigation
  - Home
  - Control
  - Device
  - Scenes
  - Setting
- Main Content Canvas
  - 主內容切換區
  - 模組化 section 載入
- Modal Layer
  - 建立 / 編輯 / 刪除 / 檢視 / 測試等對話框
- Toast Feedback
  - 成功、失敗、提示、模擬執行結果

### 2. Routing / Navigation
- `/` 首頁與整合入口
- `/scheduling`
- `/scheduling/create`
- `/scheduling/edit/:id`
- `/scenarios`
- `/jobs` 導回 scheduling 流程

### 3. Mock Runtime 能力
- 以 mock data 驗證：
  - command
  - macro
  - schedule
  - device
  - driver
  - network
  - admin
  - scenario
  - icon library
  - event trigger

## 功能模組清單

## A. Home

### Home Dashboard
- 顯示 Pad / Device 基本資訊
  - Device Name
  - Model
  - MAC Address
  - IP Address
  - Firmware Version
  - Network 狀態
- 顯示裝置在線狀態
- 顯示控制 Pad 預覽
- 顯示多頁控制按鈕
- 支援頁面切換與滑動預覽
- 支援按鈕狀態呈現：
  - selected
  - on
  - alert
- 支援 slider 類型控制項

### Control Pad Runtime Preview
- 模擬實機控制頁顯示
- 支援多分頁控制按鈕區塊
- 顯示系統 feedback 區
- 呈現會議室控制情境

## B. Control

### 1. Command Management
- 指令清單列表
- 分頁
- 統計摘要
- 新增指令
- 編輯指令
- 複製 / 測試 / 刪除等行為樣式
- 以表格方式呈現 library 管理

### 2. Command Editor
- 基本欄位
  - Command Name
  - Command Interface
  - Device
  - Command Data
- 依介面顯示差異欄位
  - System
  - RS232
  - Telnet
- Telnet 專用欄位
  - IP
  - Port
- 執行後更新參數
  - 啟用 / 停用
  - Parameter
  - Value Type
  - Value
  - Preview

### 3. Command Test
- 手動選擇欲測試指令
- 輸入測試 payload
- 顯示執行記錄 / 結果回饋
- 驗證 command mock flow

### 4. Macro Management
- Macro 列表
- 搜尋
- 分頁
- 建立 Macro
- 編輯 Macro
- 複製 Macro
- 測試 Macro
- 刪除 Macro
- 空狀態提示

### 5. Macro Editor
- 三欄式編輯器
  - Action Library
  - Flow Editor
  - Inspector
- 支援插入動作
  - Execute Command
  - Delay
  - IF / ELSE
  - Start Polling
  - Update Variable
  - Run Macro
- 支援拖拉加入 step
- 支援 step 選取、刪除、編輯
- 支援 flow 預覽與 review modal
- 支援儲存與測試執行

### 6. Scheduling List
- Schedule 列表
- 搜尋
- Trigger type 篩選
- 顯示：
  - Schedule Name
  - Type
  - Bound Item
  - Trigger Type
  - Rule Summary
  - Next Run
  - Status
- 建立 Schedule
- 編輯 Schedule
- 刪除 Schedule
- Run now
- Enabled / Disabled 切換

### 7. Scheduling Create / Edit
- 建立與編輯整合流程
- 綁定項目
  - Command
  - Macro
- Trigger Type
  - Interval
  - Recurring
  - Calendar
- Trigger 設定欄位
  - Every N Hours
  - Start Time
  - Days of Week
  - Time
  - Date
- 顯示 Preview
  - Binding
  - Rule Summary
  - Next Run
  - Upcoming Runs

### 8. Event Trigger
- Event Trigger 管理頁面骨架
- Trigger 條件與列表呈現 placeholder
- 測試事件觸發 modal
- 可驗證 payload 是否符合 trigger 條件

## C. Device

### 1. Devices List
- Device 列表
- 顯示 driver/manual 類型
- 表格操作樣式
- 建立裝置入口
- 編輯 / 刪除 / review 流程

### 2. Add Device
- 從 driver 建立裝置
- 基本資訊設定
- Connection 設定
  - IP
  - Port
  - Protocol
- Capability / Summary 預覽
- 儲存前檢視結果

### 3. Driver Library
- Search / Filter toolbar
- Vendor list
- Model list
- Driver detail
- 匯入 Driver
- 匯出 Driver
- 由 Driver 建立 Device
- Driver Import modal

### 4. Device Discovery
- 掃描後裝置列表
- 顯示 reachability
- 顯示 protocol 類型
- discovery detail modal
- start discovery mock workflow

## D. Scenes

### 1. Scenario Management
- 場景管理主頁
- 左側：
  - layout templates
  - button templates
  - page switching
- 中間：
  - pad preview / scenario canvas
- 右側或 modal：
  - button config
  - action picker
  - icon picker
- 支援多頁場景編排
- 支援按鈕拖拉放置
- 支援 layout compatibility 檢查
- 支援 unsaved changes 提示
- 支援 sync / remove 等操作

### 2. Button Editor
- Button label
- Icon
- Macro / Command binding
- Execute behavior
  - Normal
  - Toggle
  - Repeat
- 顯示 selected button summary

### 3. Panel Layouts
- 模板版型選擇
- 顯示不同格局容量
- 作為場景設計前的結構選擇

### 4. Panel Preview
- 最終控制面板預覽
- 顯示房間控制 mock
- 作為 runtime page 視覺確認頁

## E. Setting

### 1. Device Information
- 顯示 Name / IP / MAC / Serial
- 顯示 Firmware / Uptime / System summary
- 作為設備資訊總覽頁

### 2. System Settings
- Login / Logout 狀態
- Session Timeout
- Access Control Policy Summary
- 安全與登入策略管理

### 3. Date & Time
- 時間來源
  - NTP
  - Manual
- 12 / 24 小時格式
- 顯示目前時間設定結果

### 4. Pad Display Setting
- 顯示亮度調整
- Theme Mode
- Pad Language
- Screen Lock
- Idle Time
- Screen Saver Content
- Preview / Current State

### 5. Theme & Assets
- 視覺主題預設
- Wallpaper 資產
- Icon 資產整理
- 為主題與素材管理提供參考頁

### 6. Backup / Restore
- 匯出設定
- 匯入設定
- 顯示 package scope
- restore validation 說明

### 7. Language
- 多語系切換
  - Zh
  - En
  - Ja
- 語系選擇與 localize 方向提示

### 8. Log Export
- 篩選輸出範圍
- Log type 選擇
- 匯出摘要顯示

### 9. Firmware Upgrade
- OTA 升級
- Local package 升級
- 顯示版本與套件資訊
- 升級流程入口

### 10. Network
- Ethernet 設定
  - DHCP
  - Static
- Wi-Fi 開關
- Wi-Fi 清單
- 輸入 Wi-Fi 密碼
- 連線狀態顯示
- Network summary

### 11. Admin
- Admin Password 設定
- Password confirm
- Access Role
  - Admin
  - Operator
  - Viewer
- Configuration import / export
- Download log
- OTA update
- Manual firmware upgrade
- Reboot
- Factory reset
- Confirm action modal

### 12. Initial Setup
- 首次開機設定流程骨架
- Recovery / reset 之後導引
- Wizard 型流程 placeholder

## F. Developer Tools

### 1. Debug Console
- 顯示 system event console
- 輸入 mock command
- 顯示 diagnostic feedback
- 可作為工程測試頁

### 2. Device Discovery
- 納入工程工具群
- 作為網路掃描與裝置辨識入口

## G. UI Reference

### 1. Dialogs Showcase
- Device Review dialog
- Delete confirm dialog
- Import dialog
- 供設計與開發對齊 modal 樣式

### 2. States Showcase
- Empty State
- Search Empty
- Delete Confirm message
- Toast variants
- 供設計與開發對齊狀態呈現

## 共用互動能力
- Search
- Filter
- Table action buttons
- Empty states
- Toast feedback
- Modal open / close
- Confirm / cancel flows
- Section navigation
- mock execution feedback
- file upload placeholder flow
- download export flow

## 共用資料模型
- commands
- macros
- schedules
- runtimeParameters
- drivers
- devices
- icon library
- network status
- admin settings
- event trigger draft
- scenario pages / buttons / templates

## 文件延用規則
後續新專案若要沿用這份 `Function.md`，建議只替換以下內容：
- 品牌名稱
- 導覽群組
- 功能優先順序
- 真實資料欄位
- 特定裝置類型或控制情境

其餘整體結構可直接沿用，作為控制型平台專案的功能模板。
