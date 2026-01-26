const prefixer = require("postcss-prefix-selector");

module.exports = {
    plugins: [
        prefixer({
            prefix: ".my-bootstrap5",
            transform(prefix, selector, prefixedSelector) {
                if (selector === ":root") return prefix;
                return prefixedSelector;
            },
        }),
    ],
};