# 株式会社豊栄製作所 コーポレートサイト

株式会社豊栄製作所の公式ホームページのソースコードです。

## ディレクトリ構成

```
.
├── src/                 # サイトのソース（GitHub Pages で公開）
│   ├── index.html           # トップページ
│   ├── contact.html         # お問い合わせ
│   ├── privacy-policy.html  # プライバシーポリシー
│   └── assets/
│       ├── css/
│       ├── js/
│       └── images/
├── docs/                # 企画・仕様などのドキュメント
└── README.md
```

## 公開URL

https://nj93a1.github.io/houei/ （`main` に push すると GitHub Actions が自動デプロイ）

## お問い合わせフォームの送信先

`src/contact.html` の `<form action="https://formspree.io/f/YOUR_FORM_ID">` を
Formspree などのフォーム送信サービスのエンドポイントに差し替えてください。
未設定のあいだは、送信ボタンでメールソフト（宛先 soudan@houeiz.com）が開く動作になります。

## 開発

```bash
# ローカルで確認（例）
open src/index.html
```

## ブランチ運用

- `main`: 公開用（常にデプロイ可能な状態を保つ）
- `feature/*`: 機能・ページ追加
- `fix/*`: 修正

## コミットメッセージ

`feat:` / `fix:` / `docs:` / `style:` / `chore:` の接頭辞を付けてください。
