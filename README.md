# リサイクルショップ夢工房様 公式Webサイト

リサイクルショップ「夢工房」様の公式Webサイト（保守運用・管理リポジトリ）です。

- **公開URL**: https://risaikuruyumekoubou.com/
- **クライアント様**: リサイクルショップ夢工房 堂下　透　様　
- **制作・保守担当**: SWPS (Sapporo Web Partner Studio) / 芝 智男（Shiba Tomoo）
- **連絡先**: swps.shiba@gmail.com
- **初回公開日**: 2026年9月

---

## 📌 サイト構成と技術仕様

- **構成**: 静的HTML / CSS / JavaScript（レスポンシブ対応）
- **ホスティング環境**: GitHub Pages
- **ドメイン管理**: 独自ドメイン (`risaikuruyumekoubou.com`) 連携済み
- Wixで独自ドメイン取得。wixのオーナー権限をswpsに付与済
- ビジネスメールとスモールビジネスプランは自動更新解除が必要。
- クライアントへの説明後、本人に解除してもらうのがベスト
- **連携外部サービス**:
  - Googleビジネスプロフィール（Googleマップ表示・クチコミ）
  - LINE公式アカウント（買取査定・相談導線）
  - Googleフォーム（問い合わせ・無料査定フォーム）
  - 公式Instagram(recycle.yumekoubo)

  - Googleアカウント(recycle.yumekoubo@gmail.com)
　-Googleフォーム、GitHubアカウントはGoogleアカウントで作成。
　-GitHubアカウント(recycle-yumekoubo) swpsにCollaboration設定済み
---

## 🛠 更新・保守手順（開発者・引き継ぎ担当者向け）

### 1. ローカルでの修正方法
```bash
# リポジトリのクローン
git clone [https://github.com/](https://github.com/)[ご自身のアカウント名]/[リポジトリ名].git

# 該当ファイルを修正（HTML/CSS等）後、変更を保存

```

### 2. 実家じまい・遺品整理ページ

- `seiri.html` で、実家じまい・遺品整理・生前整理の相談内容を案内しています。
- スタイルは `seiri.css`、施工事例の写真は `images/` 内の `kitchen_*.jpg` と `shed_*.jpg` を参照しています。

### 3. 取り扱い商品ページ

- `items.html` で工具・釣具・除雪用品の商品写真を確認できます。トップページのナビゲーションと取り扱い品目欄からリンクしています。
- 商品写真は `images/` 内の `snow-shovels.jpg`、`socket-wrenches.jpg` など内容が分かる名前で保存しています。
- 写真は商品の一例です。在庫・状態・価格が変わることをページ内に案内しています。
- トップページから `seiri.html` の片付け相談案内へ移動できます。商品ページには上部とフッターにトップページへ戻るボタンがあります。
