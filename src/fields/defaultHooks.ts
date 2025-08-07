
import { type CollectionConfig } from "payload";
import { ExifParserFactory } from "ts-exif-parser";

const defaultHooks: CollectionConfig['hooks'] = {
  beforeValidate: [
    ({ data, req }) => {
      const image = req.file?.data

      if (!image) {
        return data;
      }


      const exifData = ExifParserFactory.create(image);
      const result = exifData.parse();

      if (!result || !result.tags) {
        return data;
      }

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