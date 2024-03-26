import {Card, Container, Stack, studioTheme, ThemeProvider} from '@sanity/ui'
import {FacebookEmbed} from 'react-social-media-embed'
import React from 'react'

export type FacebookObject = {
  actions: {
    props: {
      value: {
        url: string
      }
    }
  }
}

export function FacebookPreview(props: FacebookObject): React.JSX.Element {
  return (
    <ThemeProvider theme={studioTheme}>
      <Container height="fill">
        <Card padding={2} height="fill">
          <Stack space={1} height="fill">
            {!!props.actions.props.value.url && (
              <Card height="fill">
                <FacebookEmbed url={props.actions.props.value.url} width={328} />
              </Card>
            )}
          </Stack>
        </Card>
      </Container>
    </ThemeProvider>
  )
}
