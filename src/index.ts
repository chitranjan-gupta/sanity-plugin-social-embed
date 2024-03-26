import {definePlugin} from 'sanity'

import {FacebookPreview} from './components/FacebookPreview'
import {InstagramPreview} from './components/InstagramPreview'
import {LinkedInPreview} from './components/LinkedInPreview'
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
        },
        {
          name: 'twitterembed',
          title: 'Twitter Embed',
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
        },
        {
          name: 'instagramembed',
          title: 'Instagram Embed',
          type: 'object',
          components: {
            preview: InstagramPreview,
          },
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Instagram Post URL',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'facebookembed',
          title: 'Facebook Embed',
          type: 'object',
          components: {
            preview: FacebookPreview,
          },
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Facebook Post URL',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'linkedinembed',
          title: 'LinkedIn Embed',
          type: 'object',
          components: {
            preview: LinkedInPreview,
          },
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'LinkedIn Post URL',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  }
})
