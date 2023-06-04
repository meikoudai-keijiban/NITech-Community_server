//npx eslint . --ext ts
//npx eslint . --ext ts --fix
module.exports = {
    root: true, //設定ファイルがルートファイル
    parser: "@typescript-eslint/parser", //TypeScriptコードを解析するツール
    parserOptions: { //解析するためのオプション
        tsconfigRootDir: __dirname, //（一個）tsconfig.jsonの場所を指定，.eslintrc.jsと同じディレクトリを指定
        project: ["tsconfig.json"], //（複数）tsconfig.jsonのパスを指定
    },
    plugins: [ //使用しようとするプラグインを指定
        "@typescript-eslint",
    ],
    extends: [ //設置拡張：使用するルールを指定，そのルールの所属プラグインを前のpluginsで指定
        "eslint:recommended", //ESlint推奨のデフォルトのルール
        "plugin:@typescript-eslint/recommended", //プラグイン@typescript-eslintの推奨ルール
        "plugin:@typescript-eslint/recommended-requiring-type-checking", //型チェックを厳格に
        "plugin:import/errors", //import文に関するエラーのルール
        "plugin:import/warnings", //import文に関する警告のルール
        "plugin:import/typescript", //TypeScript用のimport文ルールを使用
        "prettier", //Prettierルール：コードのフォーマットを統一する
    ],
    rules: { //カスタマイズのルール
        "import/order": [ //importの順序に関するルール
            "error", //エラーレベルで扱う
            {"alphabetize": {"order": "asc"}} //アルファベット順（昇順）でimport文をソート
        ]
    }
}