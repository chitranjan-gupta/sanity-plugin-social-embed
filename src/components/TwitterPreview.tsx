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
  // eslint-disable-next-line no-console
  console.log(props)
  return (
    <ThemeProvider theme={studioTheme}>
      <Container>
        <Card padding={4}>
          <Stack space={3}>
            {!!props.actions.props.value.id && (
              <Card>
                <Tweet id={props.actions.props.value.id} />
              </Card>
            )}
          </Stack>
        </Card>
      </Container>
    </ThemeProvider>
  )
}
