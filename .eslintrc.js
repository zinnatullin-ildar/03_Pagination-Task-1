module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["standard", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4], // отступ - количество пробелов
        semi: [2, "always"], // точка с запятой в конце строки
        "space-before-function-paren": ["error", "never"], // убираем пробел при обозночении функции
        quotes: ["error", "double", { allowTemplateLiterals: true }] // использование двойных и обратных кавычек
    }
};
