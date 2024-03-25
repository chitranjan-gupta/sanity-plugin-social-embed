# sanity-plugin-social-embed

> This is a **Sanity Studio v3** plugin.

# Development
## Run the following command in sanity studio project
## For yarn
yalc add --link sanity-plugin-social-embed && yarn install

## For npm
npx yalc add sanity-plugin-social-embed && npx yalc link sanity-plugin-social-embed && npm install

# Production
## Installation

```sh
npm install sanity-plugin-social-embed
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {socialMedia} from 'sanity-plugin-social-embed'

export default defineConfig({
  //...
  plugins: [socialMedia({})],
})
```

## License

[MIT](LICENSE) © Chitranjan Gupta

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.