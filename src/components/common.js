import React from 'react'
import { Box, Heading } from 'grommet'

export const BoxWithH2 = ({ heading, children, ...otherProps }) =>
  <Box {...otherProps}>
    <Heading tag="h2" align="center">
      {heading}
    </Heading>
    {children}
  </Box>

export const BoxWithH3 = ({ heading, children, ...otherProps }) =>
  <Box {...otherProps}>
    <Heading tag="h3">
      {heading}
    </Heading>
    {children}
  </Box>
