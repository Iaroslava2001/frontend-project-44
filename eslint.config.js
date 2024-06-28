import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { 
      globals: globals.browser 
    },
    rules: {
      "no-console": "off",
      "import/extensions": "off"
    }
  },
  pluginJs.configs.recommended,
];