
import { type CollectionConfig } from "payload";
import { ExifParserFactory } from "ts-exif-parser";

import { compareObjects, isEmptyObject } from "../util/compareObjects.js";


const defaultHooks: CollectionConfig['hooks'] = {
  beforeValidate: [
    ({ data, originalDoc, req }) => {
      if (data && compareObjects(data.exif, originalDoc.exif)) {
        req.payload.logger.info("payload-exif: Document is unchanged, cancelling exif parsing.");

        return data;
      }

      const image = req.file?.data

      if (!image) {
        req.payload.logger.info("payload-exif: No image found, cancelling exif parsing.");

        return data;
      }


      const exifData = ExifParserFactory.create(image);
      const result = exifData.parse();

      if (!result.tags || isEmptyObject(result.tags)) {
        req.payload.logger.info("payload-exif: No EXIF data found, cancelling exif parsing.");

        return data;
      }

      req.payload.logger.info("payload-exif: Parsed EXIF data", result);

      return {
        ...data,
        exif: {
          ...result.tags,
        }
      };
    },
  ],
}

export { defaultHooks };