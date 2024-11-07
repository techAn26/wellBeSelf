const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const eslintConfigPrettier  = require('eslint-config-prettier')
const reactHooks = require('eslint-plugin-react-hooks')
const importPlugin = require('eslint-plugin-import')

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
module.exports = [
  {
    ignores: ['**/dist/', '**/*.config.{js,cjs,mjs}', 'template/', '**/.next/']
  },
  {
    files: ['**/*.{ts,tsx}']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      import: importPlugin
    }
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'caughtErrorsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
    }
  },
  {
    files: ['front/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-console': 'error',
    }
  }
]
