import { createPlugin } from './helpers/createPlugin';

import type { PluginCreator } from './types';

const pluginFunction: PluginCreator = ({ addUtilities, theme }) => {
  addUtilities({
    '.s-h1': { fontSize: theme('fontSize.2xl') },
  })
}

export default createPlugin(pluginFunction, {});
