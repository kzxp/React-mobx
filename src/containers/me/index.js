import React from 'react'
import knack from 'knack.png'
import { Container, Cols, Col } from 'components/layout'
import { H1Title, H2Subtitle } from 'components/typography'

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
  <Cols className="personal is-desktop">
    <Col className="left">
      <figure className="image is-128x128">
        <img src={knack} />
      </figure>
    </Col>
    <Col className="right is-6-desktop">
      <H1Title>Name</H1Title>
      <H2Subtitle className="is-spaced">Chankaseam Thanaratkitjakarn</H2Subtitle>
      <H1Title>Age</H1Title>
      <H2Subtitle className="is-spaced">
        {transformAge('1994-05-20')}
      </H2Subtitle>
      <H1Title>Love</H1Title>
      <H2Subtitle className="is-spaced">Sleeping, drinking and Front-end dev.</H2Subtitle>
      <H1Title>Skills</H1Title>
      <H2Subtitle className="is-spaced">HTML, JavaScript, CSS and etc.</H2Subtitle>
    </Col>
  </Cols>

export default Me