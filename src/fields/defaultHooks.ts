
import { type CollectionConfig } from "payload";
import { ExifParserFactory } from "ts-exif-parser";

const defaultHooks: CollectionConfig['hooks'] = {
  afterChange: [
    ({ doc, req }) => {
      const image = req.file?.data

      if (!image) {
        return doc;
      }


      const exifData = ExifParserFactory.create(image);
      const result = exifData.parse();

      if (!result || !result.tags) {
        return doc;
      }

      return {
        ...doc,
        exif: {
          ...result.tags,
        }
      };
    },
  ],
}

export { defaultHooks };