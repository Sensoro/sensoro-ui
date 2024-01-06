import type { PluginCreator, Config } from 'tailwindcss/types/config';

export type Plugin = {
  withOptions<T>(plugin: (options: T) => PluginCreator, config?: (options: T) => Partial<Config>): {
    (options: T): { handler: PluginCreator; config?: Partial<Config> };
    __isOptionsFunction: true
  }
  (plugin: PluginCreator, config?: Partial<Config>): { handler: PluginCreator; config?: Partial<Config> }
}

export type { PluginCreator } from 'tailwindcss/types/config';
