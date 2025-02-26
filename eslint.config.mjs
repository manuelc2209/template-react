// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginQuery from '@tanstack/eslint-plugin-query';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, {
    plugins: {
        '@tanstack/query': pluginQuery,
        'unused-imports': unusedImports
    },
    rules: {
        '@tanstack/query/exhaustive-deps': 'error'
    },
    ignores: ['*/dist', '*/public']
});
