# Prompt COMMAND_EDITOR

## 頁面目的
建立 Command Editor 頁面或 modal，用來新增與編輯 command。

## 生成要求
- 採表單頁或大型 modal
- 清楚分成 Command Properties 與 Execution Context
- 支援不同 interface 顯示不同欄位

## 內容區塊
- 頁面標題：Command Editor
- Command Properties
  - Command Name
  - Command Interface
  - Device
  - Command Data
- Execution Context
  - Telnet IP
  - Telnet Port
  - retry / timeout 可保留欄位延伸空間
- Update runtime parameter after execution
  - enable toggle
  - parameter
  - value type
  - value
  - preview

## 風格限制
- 工程設定頁
- 欄位清楚、資訊密度高但不凌亂
