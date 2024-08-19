import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier"; // Импортируем плагин Prettier
import configPrettier from "eslint-config-prettier"; // Импортируем конфигурацию Prettier

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Включаем поддержку JSX
        },
      },
    },
    plugins: {
      prettier: pluginPrettier, // Добавляем плагин Prettier
      react: pluginReact, // Добавляем плагин React
    },
    rules: {
      "prettier/prettier": "error", // Ошибка при несоответствии форматированию Prettier
      "react/prop-types": "off", // Отключаем правило prop-types (если используете TypeScript)
    },
    settings: {
      react: {
        version: "detect", // Автоматическое определение версии React
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier, // Добавляем конфигурацию Prettier
];
