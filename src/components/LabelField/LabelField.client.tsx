'use client'
import type { TextFieldLabelClientComponent } from 'payload'
import type { PluginPayloadEXIF, PluginPayloadEXIFTranslationKeys } from 'src/translations/index.js'

import { FieldLabel, useTranslation } from '@payloadcms/ui'
import React from 'react'

export const CustomTextFieldLabelClient: TextFieldLabelClientComponent = ({
  field,
  path,
}) => {
  const { t } = useTranslation<PluginPayloadEXIF, PluginPayloadEXIFTranslationKeys>()

  return (
    <FieldLabel
      label={t(`plugin-payload-exif:exif:${field?.name}`)}
      path={path}
      required={field?.required}
    />
  )
}