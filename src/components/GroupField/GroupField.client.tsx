'use client'
import type { GroupFieldClientComponent } from 'payload'
import type { PluginPayloadEXIF, PluginPayloadEXIFTranslationKeys } from 'src/translations/index.js'

import { GroupField, useTranslation } from '@payloadcms/ui'
import React from 'react'

export const CustomGroupFieldClient: GroupFieldClientComponent = ({
  field,
  forceRender,
  indexPath,
  parentPath,
  parentSchemaPath,
  path,
  permissions,
  readOnly,
  renderedBlocks,
  schemaPath,
}) => {
  const { t } = useTranslation<PluginPayloadEXIF, PluginPayloadEXIFTranslationKeys>()

  return (
    <GroupField
      field={field}
      forceRender={forceRender}
      indexPath={indexPath}
      parentPath={parentPath}
      parentSchemaPath={parentSchemaPath}
      path={path}
      permissions={permissions}
      readOnly={readOnly}
      renderedBlocks={renderedBlocks}
      schemaPath={schemaPath}
    />
  )
}