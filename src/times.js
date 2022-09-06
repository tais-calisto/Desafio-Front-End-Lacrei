import React from 'react'
import { SimpleGrid, Text } from '@mantine/core'

const Times = ({ durations }) => {
  const times = Object.entries(durations)
  return (
    <SimpleGrid cols={1}>
      {times.map((time) => {
        return (
          <Text key={time[0]} transform='capitalize' align='center'>
            {time[0]} Card: {time[1]}ms
          </Text>
        )
      })}
    </SimpleGrid>
  )
}

export default Times
