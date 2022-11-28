const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@felipemarinho/design-system",
  "@felipemarinho/utils",
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
