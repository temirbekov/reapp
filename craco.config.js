/* craco.config.js */
const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@store": path.resolve(__dirname, "src/store"),
            "@providers": path.resolve(__dirname, "src/providers"),
            "@core": path.resolve(__dirname, "src/core"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@components": path.resolve(__dirname, "src/components"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@data": path.resolve(__dirname, "src/data"),
        },
    },
};