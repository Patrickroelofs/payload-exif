# ![Payload EXIF](.github/assets/github-title.png)

## Introduction

**Payload EXIF** is a plugin for [Payload CMS](https://payloadcms.com/) that automatically extracts and manages EXIF metadata from uploaded images. This helps you access image details such as camera model, geolocation, and timestamps directly within your Payload collections.

https://github.com/user-attachments/assets/3069f356-dd76-4fdc-bc12-dc5db0dd4cc8

## Quick-start

1. **Install the plugin:**
  ```bash
  pnpm install payload-exif
  ```
2. **Add to your Payload config:**
  ```js
  import exifPlugin from 'payload-exif';

  export default {
    plugins: [
     exifPlugin({
      // Required: an array of collections payload-exif should add EXIF data to, 
      // requires `upload` to be set to `true`.
      collections: ['media']

      // other plugin options here, the plugin has full typescript support!
     }),
    ],
  };
  ```
3. **Upload an image** to the chosen collection with an upload field. EXIF data will be extracted and stored automatically.

## Features

- Extracts EXIF metadata from uploaded images
- Stores EXIF data in a configurable field
- Supports JPEG, TIFF, and other common formats
- Easy integration with existing Payload projects
- Optionally allows editing of EXIF data (Coming soon)
- Translations in multiple languages

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request

Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Need Help?

If you have questions or need support, open an issue on [GitHub](https://github.com/payloadcms/payload-exif/issues), or find me on the Payload [discord](https://discord.com/invite/r6sCXqVk3v).

## Contributors
<img align="left" src="https://contributors-img.web.app/image?repo=patrickroelofs/payload-exif"/>
