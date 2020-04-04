module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab",
            // { "SwitchCase": 1 }
            // {
            //     "VariableDeclarator": {
            //         "var": 0.5,
            //         "let": 0.5,
            //         // "const": 0.75
            //     }
            // }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        'no-console': [
            'warn',
            { allow: ["warn", "error"] }
        ],
        'brace-style': [
            "error",
            "1tbs",
            { "allowSingleLine": true }
        ],
        'no-unused-vars': [
            'warn',
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ],
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ]
    }
};