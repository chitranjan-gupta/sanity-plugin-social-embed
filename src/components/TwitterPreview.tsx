import {Box, Stack} from '@sanity/ui'
import React from 'react'
import {Tweet} from 'react-tweet'
import {ObjectInputProps, ObjectSchemaType} from 'sanity'

export type TwitterObject = {
  id: string
}

export type TwitterProps = ObjectInputProps<TwitterObject, ObjectSchemaType>

export function TwitterPreview(props: TwitterProps): React.JSX.Element {
  return (
    <Stack space={3}>
      {
        <Box style={{position: 'relative'}}>
          {!!props.value?.id && <Tweet id={props.value?.id} />}
        </Box>
      }
    </Stack>
  )
}

export function createScopedTwitterInputComponent() {
  return function ScopedInputComponent(props: TwitterProps): React.JSX.Element {
    return <TwitterPreview {...props} />
  }
}
