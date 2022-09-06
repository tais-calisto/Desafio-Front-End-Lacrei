import React, { useState } from 'react'
import { Loader, Container, Center } from '@mantine/core'

const Cards = ({ color, duration }) => {
  const [background, setBackground] = useState('transparent')
  const [loaderColor, setLoaderColor] = useState(color)

  function changeColor() {
    setBackground(color)
    setLoaderColor('transparent')
  }

  setInterval(changeColor, duration)

  return (
    <>
      <Container
        style={{
          backgroundColor: background,
          borderRadius: '10px',
          border: `solid 5px ${color}`,
        }}
        my='xl'
      >
        <Center style={{ height: 100 }}>
          <Loader variant='dots' size='xl' color={loaderColor}></Loader>
        </Center>
      </Container>
    </>
  )
}

export default Cards
