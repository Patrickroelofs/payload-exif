import type { CollectionSlug, Config } from 'payload'

import { defaultFields } from './fields/defaultFields.js'
import { defaultHooks } from './fields/defaultHooks.js'

export type PayloadExifConfig = {
  /**
   * List of collections to add a custom field
   */
  collections?: ({} | CollectionSlug)[]
  disabled?: boolean
}

export const payloadExif =
  (pluginConfig: PayloadExifConfig) =>
    (config: Config): Config => {
      if (!config.collections) {
        config.collections = []
      }

      return {
        ...config,
        collections: config.collections?.map((collection) => {
          const { slug } = collection
          const isEnabled = pluginConfig?.collections?.includes(slug) ?? false


          if (isEnabled) {
            return {
              ...collection,
              fields: [
                ...(collection.fields || []),
                ...defaultFields,
              ],
              hooks: {
                ...(collection.hooks || {}),
                ...defaultHooks,
              },
            }
          }

          return collection;
        }) || [],
      }
    }
