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
        whitelist: [...whitelister("bootstrap/dist/css/bootstrap.css"), "navbar"],
      }),
    ],
  },
};
