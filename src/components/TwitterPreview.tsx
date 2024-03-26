import {Card, Container, Stack, studioTheme, ThemeProvider} from '@sanity/ui'
import React from 'react'
import {Tweet} from 'react-tweet'

export type TwitterObject = {
  actions: {
    props: {
      value: {
        id: string
      }
    }
  }
}

export function TwitterPreview(props: TwitterObject): React.JSX.Element {
  return (
    <ThemeProvider theme={studioTheme}>
      <Container height="fill">
        <Card padding={2} height="fill">
          <Stack space={1} height="fill">
            {!!props.actions.props.value.id && (
              <Card height="fill">
                <Tweet id={props.actions.props.value.id} />
              </Card>
            )}
          </Stack>
        </Card>
      </Container>
    </ThemeProvider>
  )
}
