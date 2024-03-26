import {Card, Container, Stack, studioTheme, ThemeProvider} from '@sanity/ui'
import React from 'react'
import {InstagramEmbed} from 'react-social-media-embed'

export type InstagramObject = {
  actions: {
    props: {
      value: {
        url: string
      }
    }
  }
}

export function InstagramPreview(props: InstagramObject): React.JSX.Element {
  return (
    <ThemeProvider theme={studioTheme}>
      <Container height="fill">
        <Card padding={2} height="fill">
          <Stack space={1} height="fill">
            {!!props.actions.props.value.url && (
              <Card height="fill">
                <InstagramEmbed url={props.actions.props.value.url} width={328} />
              </Card>
            )}
          </Stack>
        </Card>
      </Container>
    </ThemeProvider>
  )
}
