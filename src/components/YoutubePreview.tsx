import {Card, Container, Stack, studioTheme, ThemeProvider} from '@sanity/ui'
import React from 'react'
import YoutubePlayer from 'react-player/youtube'

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
  // eslint-disable-next-line no-console
  console.log(props)
  return (
    <ThemeProvider theme={studioTheme}>
      <Container>
        <Card padding={4}>
          <Stack space={3}>
            {!!props.actions.props.value.url && (
              <Card>
                <YoutubePlayer url={props.actions.props.value.url} />
              </Card>
            )}
          </Stack>
        </Card>
      </Container>
    </ThemeProvider>
  )
}
