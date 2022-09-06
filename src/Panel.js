import Cards from './cards'
import Times from './times'
import { Title, Center } from '@mantine/core'
import data from './data.json'
import { useState } from 'react'

const Panel = () => {
  const { steps, durations } = data
  const [showTimes, setShowTimes] = useState(false)
  const timesArray = Object.values(durations)
  const endTime = Math.max(...timesArray)

  const renderTimes = () => {
    setShowTimes(true)
  }

  setInterval(renderTimes, endTime)

  return (
    <>
      <Center>
        <Title order={1} my='xl'>
          Cards and timer
        </Title>
      </Center>
      {steps.map((step) => {
        return (
          <Cards
            key={step.key}
            color={step.value}
            duration={durations[step.key]}
          />
        )
      })}

      {showTimes && <Times durations={durations} />}
    </>
  )
}

export default Panel
