import {Box, Stack} from '@sanity/ui'
import React from 'react'
import {ObjectInputProps, ObjectSchemaType} from 'sanity'

export type InstagramObject = {
  url: string
}

export type InstagramProps = ObjectInputProps<InstagramObject, ObjectSchemaType>

export default function InstagramPreview(props: InstagramProps): React.JSX.Element {
  return (
    <Stack space={3}>
      <Box style={{position: 'relative'}}>{!!props.value?.url && <></>}</Box>
    </Stack>
  )
}
