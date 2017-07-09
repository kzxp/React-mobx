import React from 'react'
import { Columns, Box, Image, Heading, Timestamp } from 'grommet'
import { BoxWithH2, BoxWithH3 } from 'components/common'

const transformAge = value => {
  let currentDate = new Date(),
    birthDate = new Date(value),
    currentYear = currentDate.getFullYear(),
    birthYear = birthDate.getFullYear(),
    currentMonth = currentDate.getMonth(),
    birthMonth = birthDate.getMonth(),
    currenDay = currentDate.getDate(),
    birthDay = birthDate.getDate(),
    age = currentYear - birthYear

  if (birthMonth > currentMonth) age--
  else if (birthMonth === currentMonth && birthDay > currenDay) age--

  return age + ' years old'
}

const Me = () =>
  <BoxWithH2 heading="Me">
    <Columns justify="center">
      <Columns justify="center">
        <Box align="center" pad="medium" margin="small" colorIndex="light-2">
          <Image src="https://via.placeholder.com/350x350" />
        </Box>
      </Columns>
      <Columns style={{ flexDirection: 'column' }} justify="center">
        <Box
          direction="column"
          flex="grow"
          align="start"
          pad="medium"
          margin="small"
          colorIndex="light-2"
        >
          <Heading tag="h3">Name</Heading>
          Chankaseam Thanaratkitjakarn
          <Heading tag="h3">Age</Heading>
          {transformAge('1994-05-20')}
          <Heading tag="h3">Love</Heading>
          Sleeping, drinking and Front-end dev.
          <Heading tag="h3">Skills</Heading>
          HTML, JavaScript, CSS and etc.
        </Box>
      </Columns>
    </Columns>
  </BoxWithH2>

export default Me
