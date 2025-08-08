import { type CollectionSlug, type Config, deepMergeSimple } from 'payload'

import { defaultFields } from './fields/defaultFields.js'
import { defaultHooks } from './fields/defaultHooks.js'
import { translations } from './translations/index.js'


export type PayloadExifConfig = {
  /**
   * An array specifying which collections to enable the plugin for.
   */
  collections: (CollectionSlug)[]
  /**
   * Enables or disables the PayloadExif plugin.
   *
   * @defaultValue true
   */
  enabled?: boolean
  /**
   * Enables or disables logging for the PayloadExif plugin.
   * When set to `true`, additional debug information will be output to the console.
   *
   * @defaultValue false
   */
  logging?: boolean
}

export const payloadExif =
  ({
    enabled = true,
    logging = false,
    ...pluginConfig
  }: PayloadExifConfig) =>
    (config: Config): Config => {
      if (!enabled || !config.collections) {
        return config
      }

      return {
        ...config,
        collections: config.collections?.map((collection) => {
          const { slug } = collection
          const isEnabledForCollection = pluginConfig?.collections?.includes(slug) ?? false


          if (isEnabledForCollection) {
            return {
              ...collection,
              fields: [
                ...(collection.fields || []),
                ...defaultFields,
              ],
              hooks: {
                ...(collection.hooks || {}),
                ...defaultHooks({
                  logging,
                }),
              },
            }
          }

          return collection;
        }) || [],
        i18n: {
          ...config.i18n,
          translations: deepMergeSimple(translations, config.i18n?.translations ?? {}),
        }
      }
    }
