# Prompt SCHEDULING_CREATE

## 頁面目的
建立 Create Schedule / Edit Schedule 表單頁，完成 command 或 macro 的時間排程設定。

## 生成要求
- 採主表單加側邊 preview 的 layout
- 讓使用者在同一頁完成綁定、觸發條件、預覽
- 支援 create 與 edit 兩種模式

## 內容區塊
- 頁面標題：Create Schedule
- Scheduling Setup
  - Schedule Name
  - Status
  - Description
- Action Binding
  - Item Type
  - Select Item
- Trigger Type
  - Interval
  - Recurring
  - Calendar
- 對應欄位
  - Every N Hours
  - Start Time
  - Days of Week
  - Time
  - Date
- Execution Preview
  - Binding
  - Rule Summary
  - Next Run
  - Upcoming Runs

## 風格限制
- 清楚、可一步一步設定
- 不要分散成多頁 wizard
