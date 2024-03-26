import {Card, Container, Stack, studioTheme, ThemeProvider} from '@sanity/ui'
import {YouTubeEmbed} from 'react-social-media-embed'
import React from 'react'

export type YoutubeObject = {
  actions: {
    props: {
      value: {
        url: string
      }
    }
  }
}

export function YoutubePreview(props: YoutubeObject): React.JSX.Element {
  return (
    <ThemeProvider theme={studioTheme}>
      <Container height="fill">
        <Card padding={4} height="fill">
          <Stack space={1} height="fill">
            {!!props.actions.props.value.url && (
              <Card height="fill">
                <YouTubeEmbed url={props.actions.props.value.url} width={325} height={220} />
              </Card>
            )}
          </Stack>
        </Card>
      </Container>
    </ThemeProvider>
  )
}
