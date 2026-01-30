const prefixer = require("postcss-prefix-selector");

console.error("[postcss] config loaded");

const EXCLUDED_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const removeTagsRules = () => ({
    postcssPlugin: 'remove-tags-rules',
    Rule(rule) {
        const selector = rule.selector;
        if (!selector) return;
        const selectors = selector.split(',').map(s => s.trim());
        if (selectors.some(s => EXCLUDED_TAGS.includes(s))) {
            rule.remove();
        }
    },
});

removeTagsRules.postcss = true;

module.exports = {
    plugins: [
        removeTagsRules(),
        prefixer({
            prefix: ".my-bootstrap5",
            transform(prefix, selector, prefixedSelector) {
                if (selector === ":root") return prefix;
                return prefixedSelector;
            },
        }),
    ],
};
