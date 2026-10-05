# HY-Fitness

H&amp;Y FITNESS 官方網站底板（GitHub Pages 靜態站）。

## 本地預覽

用任意靜態伺服器開啟根目錄，例如：

```bash
npx --yes serve .
```

瀏覽器開啟提示的網址即可。

## 部署到 GitHub Pages

1. 將 repo 推上 GitHub（例如 `你的帳號/HY-Fitness`）。
2. **Settings → Pages → Build and deployment**：Source 選 **Deploy from a branch**。
3. Branch 選 `main`，資料夾選 **`/ (root)`**。
4. 儲存後約 1–2 分鐘，站點會出現在 `https://<username>.github.io/HY-Fitness/`。

## 待替換素材

- `index.html` 教練區塊：姓名、照片、證照與專長
- 空間區塊：工作室實拍（替換 `.ph` 區塊或改為 `<img>`）
- 學員回饋：取得同意後的真實引述
- 聯絡區：可嵌入 Google Maps iframe
