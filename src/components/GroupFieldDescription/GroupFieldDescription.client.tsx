'use client'
import type { GroupFieldDescriptionClientComponent } from 'payload'
import type { PluginPayloadEXIF, PluginPayloadEXIFTranslationKeys } from 'src/translations/index.js'

import { FieldDescription, useTranslation } from '@payloadcms/ui'
import React from 'react'

export const CustomGroupFieldDescriptionClient: GroupFieldDescriptionClientComponent = ({
  path,
}) => {
  const { t } = useTranslation<PluginPayloadEXIF, PluginPayloadEXIFTranslationKeys>()

  return (
    <FieldDescription
      description={t("plugin-payload-exif:groupDescription")}
      path={path}
    />
  )
}