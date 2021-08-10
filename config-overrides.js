const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@pages": "src/Pages",
    "@routes": "src/Routes",
    "@components": "src/Components",
    "@api": "src/API/index.ts",
    "@redux": "src/redux",
    "@actions": "src/redux/actions",
    "@utils": "src/utils",
    "@UI": "src/UI",
    "@hooks": "src/Hooks",
    "@assets": "public/assets",
    "@styles": "src/styles",
  })(config);

  return config;
};
