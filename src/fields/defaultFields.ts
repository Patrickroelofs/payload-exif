import type { Field } from "payload"
import type { EXIFTypesKeys } from "src/exports/types.js"

const allExifFieldNames: EXIFTypesKeys[] = [
  "Make",
  "Model",
  "Orientation",
  "XResolution",
  "YResolution",
  "ResolutionUnit",
  "Software",
  "ModifyDate",
  "YCbCrPositioning",
  // "GPSVersionID", // TODO: Removed for now until fixed
  "ExposureTime",
  "FNumber",
  "ExposureProgram",
  "ISO",
  "DateTimeOriginal",
  "CreateDate",
  "ShutterSpeedValue",
  "ApertureValue",
  "ExposureCompensation",
  "MeteringMode",
  "Flash",
  "FocalLength",
  "SubSecTime",
  "SubSecTimeOriginal",
  "SubSecTimeDigitized",
  "ColorSpace",
  "ExifImageWidth",
  "ExifImageHeight",
  "FocalPlaneXResolution",
  "FocalPlaneYResolution",
  "FocalPlaneResolutionUnit",
  "CustomRendered",
  "ExposureMode",
  "WhiteBalance",
  "SceneCaptureType",
  "InteropIndex"
]

const sharedTextAdminFields: NonNullable<Extract<Field, { type: "text" }>['admin']> = {
  components: {
    Field: {
      path: "payload-exif/client#CustomTextFieldClient",
    },
    Label: {
      path: "payload-exif/client#CustomTextFieldLabelClient",
    }
  },
  position: 'sidebar',
  readOnly: true
}

interface DefaultFieldsOptions {
  excludeFields?: EXIFTypesKeys[];
  fields?: Field[];
}

const defaultFields = ({ excludeFields, fields }: DefaultFieldsOptions): Field[] => {
  const filterSet = excludeFields && excludeFields.length > 0 ? new Set(excludeFields) : null
  const filteredNames = filterSet
    ? allExifFieldNames.filter(name => !filterSet.has(name))
    : allExifFieldNames

  return [
    {
      name: "exif",
      type: "group",
      admin: {
        components: {
          Description: {
            path: "payload-exif/client#CustomGroupFieldDescriptionClient",
          },
          Field: {
            path: "payload-exif/client#CustomGroupFieldClient",
          },
          Label: {
            path: "payload-exif/client#CustomGroupFieldLabelClient",
          }
        },
      },
      fields: [
        ...filteredNames.map<Field>((name) => ({
          name,
          type: "text",
          admin: {
            ...sharedTextAdminFields,
          }
        })),
        ...(fields ?? [])
      ],
    },
  ]
}

export { defaultFields }