# CLAUDE.md

このファイルは Claude Code が自動的に読み込む恒久規約である。
案件開始時に一度記入し、以後は技術的な決定が変わったときだけ更新する。

## 参照すべき文書

作業開始前に必ず以下を読むこと。

- docs/requirements.md : 目的、スコープ、要件、受け入れ基準
- docs/design-tokens.md : 視覚仕様の数値
- docs/tasks.md : 実装タスクの台帳（存在する場合）
- docs/decisions.md : 過去の決定と理由（判断に迷ったときのみ参照）

## プロジェクト概要

- 名称: KabuTrace
- 一行説明: 適時開示から抽出した情報のまとめ、気になる銘柄の分析、投資ブログの3本柱からなる個人サイト。将来的にアフィリエイト用ページを追加予定。
- 公開URL: https://tarkechain.github.io/kabu-trace/

## 技術スタック

- 言語/フレームワーク: Astro（既存プロジェクト my-site と同一。Content Collections を使い、開示情報・銘柄分析・blogをそれぞれ独立したコレクションとして扱う）
- スタイル手法: 素のCSS + カスタムプロパティ（design-tokens.md の値をCSS変数として展開する）
- パッケージマネージャ: npm
- ホスティング: GitHub Pages（既存パターンを踏襲）

## よく使うコマンド

- 開発サーバ起動: npm run dev
- 本番ビルド: npm run build
- ビルド結果の確認: npm run preview
- Lint: 導入しない（静的サイトのため当面不要。必要になったら提案する）
- テスト: 導入しない（静的サイトのため当面不要）
- 依存関係の脆弱性確認: npm audit

## ディレクトリ構成

```
kabu-trace/
├── src/
│   ├── pages/          各ページのルーティング
│   ├── content/         Content Collections（開示情報・銘柄分析・blog記事など）
│   ├── components/      再利用するUI部品
│   └── layouts/         ページ共通レイアウト
├── public/               静的アセット（画像等）
├── astro.config.mjs
└── docs/                 このテンプレート一式
```
上記の構成をそのまま採用する（my-site固有の事情に合わせた個別調整は行わない）。

## コーディング規約

- CSSの色・サイズ値は docs/design-tokens.md の値のみを使用し、直書きしない
- コンポーネントは1ファイル1責務とする
- コメントは「なぜ」を書き、「何を」は書かない
- コンテンツのファイル名は次の規則に従う: 開示情報は `src/content/disclosures/YYYY-MM-DD-銘柄コード.md`、銘柄分析は `src/content/stocks/銘柄コード.md`、blogは `src/content/blog/YYYY-MM-DD-slug.md`

## 厳守事項

- docs/requirements.md に記載のない機能を追加しない。必要だと判断した場合は実装せず提案のみ行う。
- 依存パッケージを無断で追加しない。追加が必要な場合は、理由・代替案・削除時の影響を提示して承認を得る。
- 秘密情報（APIキー、トークン、個人情報）をリポジトリに含めない。
- main ブランチへ直接コミットしない（作業はブランチを切り、PRを経てmainへ反映する）
- 破壊的なコマンド（rm -rf、force push、履歴改変）を実行しない。

## 作業の進め方

1. 指示を受けたら、まず上記の参照文書を読む。
2. 要件に曖昧さ・矛盾・欠落があれば、実装せず質問として列挙する。推測で埋めない。
3. 計画を提示し、承認を得てから実装する。
4. 実装後は docs/requirements.md の受け入れ基準に照らして検証し、結果を報告する。
5. 1コミット1論点とし、コミットメッセージには何を変えたかと対応する要件番号を書く。

利用可能なコマンド: /kickoff /audit /plan-tasks /build /verify
