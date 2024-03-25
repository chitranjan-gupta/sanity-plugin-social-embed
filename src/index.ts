import {definePlugin} from 'sanity'

import {TwitterPreview} from './components/TwitterPreview'
import {YoutubePreview} from './components/YoutubePreview'

interface SocialMediaConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {socialMedia} from 'sanity-plugin-social-embed'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [socialMedia()],
 * })
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const socialMedia = definePlugin<SocialMediaConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-social-embed')
  return {
    name: 'sanity-plugin-social-embed',
    schema: {
      types: [
        {
          name: 'youtubeembed',
          title: 'Youtube Embed',
          type: 'object',
          components: {
            preview: YoutubePreview,
          },
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Youtube Video URL',
              validation: (Rule) => Rule.required(),
            },
          ],
          initialValue: {
            url: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
          },
        },
        {
          name: 'xembed',
          title: 'X Embed',
          type: 'object',
          components: {
            preview: TwitterPreview,
          },
          fields: [
            {
              name: 'id',
              type: 'string',
              title: 'Tweet ID',
              validation: (Rule) => Rule.required(),
            },
          ],
          initialValue: {
            id: '1772101605745184874',
          },
        },
      ],
    },
  }
})
