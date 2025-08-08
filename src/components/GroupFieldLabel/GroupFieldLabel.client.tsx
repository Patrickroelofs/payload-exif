'use client'
import type { GroupFieldLabelClientComponent } from 'payload'
import type { PluginPayloadEXIF, PluginPayloadEXIFTranslationKeys } from 'src/translations/index.js'

import { FieldLabel, useTranslation } from '@payloadcms/ui'
import React from 'react'

export const CustomGroupFieldLabelClient: GroupFieldLabelClientComponent = ({
  path,
}) => {
  const { t } = useTranslation<PluginPayloadEXIF, PluginPayloadEXIFTranslationKeys>()

  return (
    <FieldLabel
      as='h3'
      label={t("plugin-payload-exif:groupTitle")}
      path={path}
    />
  )
}