import type { Plugin } from '../types';

export const createPlugin = ((plugin, config) => {
  return {
    handler: plugin,
    config,
  }
}) as Plugin;

createPlugin.withOptions = (pluginFunction,  configFunction = () => ({})) => {
  const optionsFunction = function (options) {
    return {
      __options: options,
      handler: pluginFunction(options),
      config: configFunction(options),
    }
  }

  optionsFunction.__isOptionsFunction = true as const;
  optionsFunction.__pluginFunction = pluginFunction
  optionsFunction.__configFunction = configFunction

  return optionsFunction
}
