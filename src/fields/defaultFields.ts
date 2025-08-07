import type { Field } from "payload"

const sharedTextAdminFields: NonNullable<Extract<Field, { type: "text" }>['admin']> = {
  position: 'sidebar',
  readOnly: true,
}

const defaultFields: Field[] = [
  {
    type: "collapsible",
    admin: {
      initCollapsed: true,
      position: 'sidebar',
    },
    fields: [
      {
        name: "exif",
        type: "group",
        admin: {
          description: "EXIF data parsed from the image file",
          position: 'sidebar',
        },
        fields: [
          {
            name: "Make",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "Model",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "Orientation",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "XResolution",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "YResolution",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ResolutionUnit",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "Software",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ModifyDate",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "YCbCrPositioning",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "GPSVersionID",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ExposureTime",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "FNumber",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ExposureProgram",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ISO",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "DateTimeOriginal",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "CreateDate",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ShutterSpeedValue",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ApertureValue",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ExposureCompensation",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "MeteringMode",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "Flash",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "FocalLength",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "SubSecTime",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "SubSecTimeOriginal",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "SubSecTimeDigitized",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ColorSpace",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ExifImageWidth",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ExifImageHeight",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "FocalPlaneXResolution",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "FocalPlaneYResolution",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "FocalPlaneResolutionUnit",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "CustomRendered",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "ExposureMode",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "WhiteBalance",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "SceneCaptureType",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          },
          {
            name: "InteropIndex",
            type: "text",
            admin: {
              ...sharedTextAdminFields,
            }
          }
        ],
      }
    ],
    label: "EXIF",
  }
]

export { defaultFields }