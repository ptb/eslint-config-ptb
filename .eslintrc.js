/* eslint-env commonjs */ /* eslint import/no-commonjs: "off" */

const INDENT_SIZE = 2

module.exports = {
  "env": {
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "better",
    "fp",
    "import",
    "json",
    "promise",
    "standard"
  ],
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "error",
    "array-element-newline": "off",
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "better/explicit-return": "warn",
    "better/no-classes": "off",
    "better/no-deletes": "off",
    "better/no-exceptions": "off",
    "better/no-exports": "off",
    "better/no-fors": "off",
    "better/no-function-expressions": "off",
    "better/no-ifs": "warn",
    "better/no-imports": "off",
    "better/no-instanceofs": "warn",
    "better/no-new": "warn",
    "better/no-nulls": "off",
    "better/no-reassigns": "off",
    "better/no-switches": "off",
    "better/no-this": "off",
    "better/no-typeof": "off",
    "better/no-undefined": "off",
    "better/no-variable-declaration": "off",
    "better/no-whiles": "off",
    "block-scoped-var": "error",
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "callback-return": "error",
    "camelcase": [
      "error",
      {
        "properties": "always"
      }
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
        "ignoreConsecutiveComments": true
      }
    ],
    "class-methods-use-this": "error",
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": "off",
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-return": "error",
    "consistent-this": [
      "warn",
      "self"
    ],
    "constructor-super": "error",
    "curly": [
      "error",
      "all"
    ],
    "default-case": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": false
      }
    ],
    "eol-last": [
      "error",
      "unix"
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "for-direction": "error",
    "fp/no-arguments": "error",
    "fp/no-class": "warn",
    "fp/no-delete": "error",
    "fp/no-events": "error",
    "fp/no-get-set": "error",
    "fp/no-let": "warn",
    "fp/no-loops": "warn",
    "fp/no-mutating-assign": "error",
    "fp/no-mutating-methods": "error",
    "fp/no-mutation": [
      "error",
      {
        "commonjs": true
      }
    ],
    "fp/no-nil": "warn",
    "fp/no-proxy": "error",
    "fp/no-rest-parameters": "warn",
    "fp/no-this": "warn",
    "fp/no-throw": "warn",
    "fp/no-unused-expression": [
      "warn",
      {
        "allowUseStrict": true
      }
    ],
    "fp/no-valueof-field": "error",
    "func-call-spacing": [
      "error",
      "always"
    ],
    "func-name-matching": "error",
    "func-names": "off",
    "func-style": [
      "error",
      "expression"
    ],
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "generator-star-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "getter-return": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": [
      "error",
      "^(err|error)$"
    ],
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "import/export": "error",
    "import/no-amd": "error",
    "import/no-commonjs": [
      "warn",
      "allow-primitive-modules"
    ],
    "indent": [
      "error",
      INDENT_SIZE,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1
      }
    ],
    "init-declarations": "off",
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "key-spacing": [
      "error",
      {
        "afterColon": true,
        "beforeColon": false,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "line-comment-position": [
      "error",
      {
        "position": "above"
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": [
      "error",
      {
        "afterBlockComment": false,
        "afterLineComment": false,
        "allowArrayEnd": true,
        "allowArrayStart": true,
        "allowBlockEnd": true,
        "allowBlockStart": true,
        "allowObjectEnd": true,
        "allowObjectStart": true,
        "beforeBlockComment": true,
        "beforeLineComment": true
      }
    ],
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "max-depth": "off",
    "max-len": [
      "warn",
      {
        "code": 78,
        "ignoreUrls": true
      }
    ],
    "max-lines": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": [
      "warn",
      {
        "max": 10
      }
    ],
    "max-statements-per-line": [
      "error",
      {
        "max": 1
      }
    ],
    "multiline-comment-style": [
      "error",
      "starred-block"
    ],
    "multiline-ternary": "off",
    "new-cap": [
      "error",
      {
        "capIsNew": true,
        "newIsCap": true
      }
    ],
    "new-parens": "error",
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-catch-shadow": "off",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "no-console": "warn",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-continue": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": [
      "error",
      {
        "includeExports": true
      }
    ],
    "no-else-return": "error",
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-empty-character-class": "error",
    "no-empty-function": "warn",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-parens": [
      "error",
      "all",
      {
        "returnAssign": false
      }
    ],
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": [
      "error",
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "warn",
      {
        "enforceConst": true,
        "ignoreArrayIndexes": true
      }
    ],
    "no-mixed-operators": "error",
    "no-mixed-requires": [
      "error",
      {
        "allowCall": true,
        "grouping": true
      }
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": [
      "error",
      {
        "builtinGlobals": true
      }
    ],
    "no-regex-spaces": "error",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-modules": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": [
      "error",
      "always"
    ],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "warn",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": [
      "error",
      {
        "builtinGlobals": true,
        "hoist": "all"
      }
    ],
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-sync": "off",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": false
      }
    ],
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "no-unused-labels": "error",
    "no-unused-vars": [
      "error",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "vars": "all"
      }
    ],
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "warn",
    "no-void": "error",
    "no-warning-comments": "warn",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": true,
        "objectsInObjects": true
      }
    ],
    "object-property-newline": "off",
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidQuotes": true
      }
    ],
    "one-var": [
      "error",
      {
        "initialized": "never",
        "uninitialized": "always"
      }
    ],
    "one-var-declaration-per-line": "off",
    "operator-assignment": [
      "error",
      "always"
    ],
    "operator-linebreak": [
      "error",
      "after",
      {
        "overrides": {
          ":": "before",
          "?": "before"
        }
      }
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "next": "*",
        "prev": [
          "const",
          "let",
          "var"
        ]
      },
      {
        "blankLine": "any",
        "next": [
          "const",
          "let",
          "var"
        ],
        "prev": [
          "const",
          "let",
          "var"
        ]
      }
    ],
    "prefer-arrow-callback": "off",
    "prefer-const": "warn",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "promise/param-names": "error",
    "quote-props": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true,
        "avoidEscape": true
      }
    ],
    "radix": [
      "error",
      "always"
    ],
    "require-await": "error",
    "require-jsdoc": "warn",
    "require-yield": "off",
    "rest-spread-spacing": [
      "error",
      "always"
    ],
    "semi": [
      "error",
      "never"
    ],
    "semi-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "sort-imports": "error",
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ],
    "sort-vars": [
      "warn",
      {
        "ignoreCase": true
      }
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        "nonwords": false,
        "words": true
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!",
          ","
        ]
      }
    ],
    "standard/array-bracket-even-spacing": [
      "error",
      "either"
    ],
    "standard/computed-property-even-spacing": [
      "error",
      "even"
    ],
    "standard/object-curly-even-spacing": [
      "error",
      "either"
    ],
    "strict": [
      "error",
      "safe"
    ],
    "switch-colon-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "symbol-description": "off",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "template-tag-spacing": [
      "error",
      "always"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "use-isnan": "error",
    "valid-jsdoc": "warn",
    "valid-typeof": "error",
    "vars-on-top": "error",
    "wrap-iife": [
      "error",
      "any"
    ],
    "wrap-regex": "error",
    "yield-star-spacing": [
      "error",
      "both"
    ],
    "yoda": [
      "error",
      "never"
    ]
  }
}
