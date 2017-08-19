import React from 'react'
import knack from 'knack.png'
import { Container, Cols, Col } from 'components/layout'
import { Title, Subtitle } from 'components/typography'

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

  if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currenDay)) {
    age--
  }

  return age + ' years old'
}

const Me = () =>
  <Cols className="personal is-desktop">
    <Col className="left">
      <figure className="image is-128x128">
        <img src={knack} />
      </figure>
    </Col>
    <Col className="right is-6-desktop">
      <Title tag="h1">Name</Title>
      <Subtitle tag="h2" className="is-spaced">
        Chankaseam Thanaratkitjakarn
      </Subtitle>
      <Title tag="h1">Age</Title>
      <Subtitle tag="h2" className="is-spaced">
        {transformAge('1994-05-20')}
      </Subtitle>
      <Title tag="h1">Love</Title>
      <Subtitle tag="h2" className="is-spaced">
        Sleeping, drinking and Front-end dev.
      </Subtitle>
      <Title tag="h1">Skills</Title>
      <Subtitle tag="h2" className="is-spaced">
        HTML, JavaScript, CSS and etc.
      </Subtitle>
    </Col>
  </Cols>

export default Me
