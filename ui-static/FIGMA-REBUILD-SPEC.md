# Figma 重建規格

## 目的
此文件提供 UI 設計師將 `ui-static` 靜態頁面重建為 Figma 檔案時的工作範圍、元件規則、頁面優先順序與交付建議。

此規格的目標不是 1:1 還原 HTML 程式碼，而是把現有畫面整理成可維護的 Figma 設計系統與頁面稿。

## 交付來源
- 靜態入口：`index.html`
- 網站地圖：`UI-HANDOFF-SITEMAP.md`
- 品牌資產：`assets/cyp-logo.png`
- 視覺參考：`css/ui-static.css`
- 品牌手冊：專案根目錄 `05_CYP_品牌手冊_Brand Identity System Guideline.pdf`

## 設計方向
- 產品定位：專業控制系統 / 企業級設備管理平台
- 氣質關鍵字：穩定、專業、清楚、可操作、工程導向
- 視覺重點：高資訊密度，但不凌亂；重視狀態辨識、操作分區與層級清楚
- 互動情境：Pad 管理介面、設備管理、排程管理、巨集編輯、系統設定

## Figma 檔案建議結構
### 1. `00 Cover`
- 專案名稱
- 版本日期
- 設計師 / PM / RD 資訊

### 2. `01 Foundations`
- Colors
- Typography
- Grid / Spacing
- Radius
- Shadow
- Icon style

### 3. `02 Components`
- Topbar
- Sidebar
- Buttons
- Input / Select / Textarea
- Search toolbar
- Table
- Status badge
- Tag / Chip
- Summary card
- Modal / Dialog
- Toast
- Empty state

### 4. `03 Page Templates`
- Dashboard template
- List template
- Form template
- Split-view template
- Triple-column editor template
- Settings template

### 5. `04 Pages`
- 依 sitemap 建立各頁

### 6. `05 Flows`
- Add Device
- Create Schedule
- Edit Macro
- Build Scene Button
- Firmware Upgrade
- Initial Setup

## Frame 建議
- Desktop 主稿：`1440 x Auto height`
- 內容區最大寬度：依現有版型維持 full width dashboard / management console 形式
- 左側 sidebar：固定寬度概念 `260`
- Topbar 高度：`64`

如果要補做 tablet 操作稿，可另外建立：
- Tablet runtime：`1280 x 800`
- Pad runtime control：以 `control-pad-ui.html` 和 `panel-preview.html` 為主

## Layout 規則
- 採用 8px spacing system
- 建議基礎 spacing token：
  - `4, 8, 12, 16, 20, 24, 32`
- 區塊圓角建議：
  - 大卡片：`20-22`
  - 中型卡片 / 表單：`16`
  - 小元件 / chip / button：`12-14`
- 區塊之間保留明確留白，不要讓表單與表格貼太近
- 表單頁以兩欄為主，必要時可切單欄

## Color Tokens
依 `ui-static.css` 先建立以下 token，再由品牌手冊細修：

| Token | Value | 用途 |
| --- | --- | --- |
| `bg/app` | `#F4F7F8` | 主背景 |
| `bg/accent` | `#E8F3F5` | 漸層背景輔色 |
| `bg/panel` | `#FFFFFF` | 卡片底 |
| `bg/soft` | `#F7FBFC` | 次卡片 / 淺底 |
| `text/strong` | `#10233A` | 主文字 |
| `text/body` | `#365062` | 內文 |
| `text/dim` | `#5F7382` | 次文字 |
| `brand/primary` | `#008AAB` | 主品牌色 |
| `brand/secondary` | `#1226AA` | 深藍重點色 |
| `brand/highlight` | `#FFC629` | 提示高亮 |
| `status/warning` | `#FF5C35` | 警示 |
| `status/danger` | `#B92454` | 危險 / 刪除 |

色彩使用原則：
- 主操作與 active 狀態以 `brand/primary` 為主
- 強調按鈕可使用 `primary -> secondary` 漸層
- 不要把警告色用於一般 CTA
- 狀態色需在 badge、toast、table status 中保持一致

## Typography
目前靜態稿以 `Arial` 為基礎；Figma 可先用 Arial 重建，之後再依品牌手冊替換為正式字體。

建議文字層級：
- Page Title: `32-36 / Bold / All Caps optional`
- Section Title: `20-24 / Bold`
- Card Title: `16-18 / Bold`
- Body: `14-16 / Regular`
- Helper / Label / Eyebrow: `12-13 / Bold`
- Table Header: `12 / Bold / Uppercase`

文字規則：
- 管理頁標題可以維持偏系統風格
- 表格、設定頁與表單要優先清晰，不追求裝飾感
- 中英混排時要預留較長字串空間

## Components 重建規格
### Topbar
- 高度 `64`
- 左側為品牌區塊，右側為簡短說明或狀態
- 品牌容器為獨立卡片，不直接貼背景

### Sidebar
- 寬度 `260`
- 含群組標題與連結
- Active item 要有左側高亮與淡底
- 群組之間需有可辨識留白

### Buttons
- Secondary button：白底、細邊框、圓角 `14`
- Primary button：品牌漸層、白字、圓角 `14`
- Icon button：`34 x 34` 小型方圓角

### Form Controls
- Input 高度 `44`
- 邊框偏淡，focus 狀態應有品牌色
- Textarea 預設較高，避免內容擁擠
- 欄位標籤與輸入框保持固定間距

### Table
- 表頭大寫、小尺寸、字距略開
- 列高偏舒適，適合管理頁掃讀
- 操作欄以 icon action 為主
- 建議建立：
  - default row
  - hover row
  - selected row
  - empty table

### Status / Badge / Chip
- 使用圓角膠囊樣式
- 至少建立：
  - enabled
  - disabled
  - command type
  - macro type
  - trigger
  - selected day chip

### Cards
- Summary Card：資訊摘要
- Page Card：大區塊容器
- Preview Card：右側資訊摘要卡
- Metric Card：debug / KPI 數據卡

### Dialogs / Toasts / Empty States
- 直接參考 `dialogs-showcase.html` 與 `states-showcase.html`
- 這兩頁應先拆成元件，再回填到正式頁面

## Page Templates
### Dashboard Template
對應頁面：
- `home.html`
- `device-information.html`

特徵：
- 上方摘要
- 中段卡片群組
- 低互動、高資訊可讀性

### List Template
對應頁面：
- `command-management.html`
- `macro-management.html`
- `scheduling-list.html`
- `devices-list.html`
- `device-discovery.html`

特徵：
- 搜尋與 filter toolbar
- 表格主體
- 狀態與 action patterns

### Form Template
對應頁面：
- `command-editor.html`
- `device-create.html`
- `scheduling-create.html`
- `system-settings.html`
- `date-time.html`
- `network.html`
- `admin.html`

特徵：
- 左側表單
- 右側摘要或預覽
- 重要 CTA 固定在頁首或區塊尾端

### Split View Template
對應頁面：
- `scenario-management.html`
- `driver-library.html`

特徵：
- 左列表，右內容
- master-detail 模式

### Triple Column Editor Template
對應頁面：
- `macro-editor.html`

特徵：
- Action Library
- Flow Editor
- Inspector

### Runtime Template
對應頁面：
- `control-pad-ui.html`
- `panel-preview.html`

特徵：
- 偏操作導向
- 大按鈕區
- 狀態回饋明確

## 頁面優先順序
### Priority A
這批建議先完成，最能定義整體視覺與元件規範：
- `home.html`
- `command-management.html`
- `macro-editor.html`
- `scheduling-create.html`
- `device-create.html`
- `scenario-management.html`
- `control-pad-ui.html`
- `network.html`
- `admin.html`

### Priority B
在核心視覺確立後補齊：
- `command-editor.html`
- `command-test.html`
- `macro-management.html`
- `scheduling-list.html`
- `devices-list.html`
- `driver-library.html`
- `button-editor.html`
- `panel-layouts.html`
- `panel-preview.html`
- `system-settings.html`
- `pad-display-setting.html`
- `theme-assets.html`
- `firmware-upgrade.html`

### Priority C
偏系統支援、輔助與展示頁：
- `event-trigger.html`
- `device-discovery.html`
- `debug-console.html`
- `device-information.html`
- `date-time.html`
- `backup-restore.html`
- `language.html`
- `log-export.html`
- `initial-setup.html`
- `dialogs-showcase.html`
- `states-showcase.html`

## Flow 拆解建議
### Add Device
- Device list
- Add device
- Driver choose / manual add
- Connection settings
- Capability preview

### Create Schedule
- Schedule list
- Create schedule
- Item binding
- Trigger configuration
- Preview / save confirmation

### Macro Authoring
- Macro list
- Macro editor
- Test run
- Save success toast

### Scene Authoring
- Scenario management
- Button editor
- Layout selection
- Panel preview

### System Maintenance
- Admin
- Firmware upgrade
- Backup / restore
- Log export

## Figma 元件命名建議
- `Layout/Topbar/Default`
- `Layout/Sidebar/Default`
- `Button/Primary/Default`
- `Button/Secondary/Default`
- `Button/Icon/Edit`
- `Form/Input/Default`
- `Form/Select/Default`
- `Table/Header Cell`
- `Table/Row/Default`
- `Badge/Status/Enabled`
- `Badge/Status/Disabled`
- `Card/Summary/Default`
- `Card/Page/Default`
- `Dialog/Delete Confirm`
- `Toast/Success`

## Auto Layout 建議
- 所有 card、toolbar、form section、dialog 都建議使用 Auto Layout
- 表格可用元件列 + 欄位約束，不建議完全自由拉版
- Sidebar 與 topbar 建議做成可跨頁重用的主 layout
- 表單欄位採 label + field 的巢狀 Auto Layout

## Prototype 建議
原則上這份是視覺重建稿，不要求完整互動，但建議至少補以下 prototype：
- Sidebar 頁面切換
- Add / Save / Delete dialog 開啟
- Create Schedule 基本流程
- Macro Editor 基本區塊切換
- Panel layout 選擇到 preview

## 交付標準
設計稿完成時，至少應包含：
- 一份整理好的 Figma 檔案結構
- Foundations 與 Components
- Priority A 頁面完整稿
- 常用 Dialog / Toast / Empty State 元件
- 基本 prototype flow

如果時間允許，再補：
- 全 sitemap 頁面
- Tablet runtime mock
- 深色版或高對比版探索

## 注意事項
- 靜態頁面中的文案可視為 placeholder，不必逐字照搬
- HTML 中的 spacing 與大小是視覺參考，不是唯一答案
- 設計上可優化資訊層級，但不應改變頁面資訊架構
- `event-trigger.html` 目前偏 placeholder，可在 Figma 中保留低保真狀態
- `dialogs-showcase.html` 與 `states-showcase.html` 應視為設計系統參考頁，不只是單頁畫面

## 建議交接方式
交給 UI 設計師時，請一起提供：
- `ui-static` 整包
- 此文件 `FIGMA-REBUILD-SPEC.md`
- `UI-HANDOFF-SITEMAP.md`
- 品牌手冊 PDF
- Logo 檔

