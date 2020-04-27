const path = require("path");
const fs = require("fs");
const glob = require("glob-all");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const PurgecssPlugin = require("purgecss-webpack-plugin");
const whitelister = require("purgecss-whitelister");

module.exports = {
  webpack: {
    plugins: [
      new PurgecssPlugin({
        paths: [resolveApp("public/index.html"), ...glob.sync(`${resolveApp("src")}/**/**/*`, { nodir: true })],
        whitelist: [
          ...whitelister("bootstrap/dist/css/bootstrap.css"),
          "collapse",
          "show",
          "slide",
          // "nav",
          // "navbar",
          // "navbar-light",
          // "navbar-brand",
          // "navbar-nav",
          // "navbar-collapse",
          // "navbar-expand-sm",
          // "navbar-expand-md",
          // "navbar-expand-lg",
          // "navbar-toggler",
          // "navbar-toggler-icon",
          // "nav-item",
          // "nav-link",
          // "breadcrumb",
          // "breadcrumb-item",
          // "dropdown",
          // "dropdown",
          // "dropdown-toggle",
          // "dropdown-menu",
          // "dropdown-item",
          // "carousel",
          // "carousel-indicators",
          // "carousel-inner",
          // "carousel-item",
          // "carousel-item-prev",
          // "carousel-item-next",
          // "carousel-item-left",
          // "carousel-item-right",
          // "carousel-control-prev",
          // "carousel-control-prev-icon",
          // "carousel-control-next",
          // "carousel-control-next-icon",
          // "mapboxgl-map",
          // "mapboxgl-ctrl",
          // "mapboxgl-ctrl-attrib",
        ],
        whitelistPatterns: [/^nav/, /^carousel/, /^breadcrumb/, /^dropdown/, /^mapboxgl/],
      }),
    ],
  },
};
