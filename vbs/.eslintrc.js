/* eslint-disable prettier/prettier */
module.exports = {
    root: true,
    env: {
        // eslint-disable-next-line prettier/prettier
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};