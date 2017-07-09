import React from 'react'
import _ from 'lodash'
import { Route } from 'react-router'

import { CustomLink } from 'components/custom'
import { BoxWithH3 } from 'components/common'
import { Box, Heading, List, ListItem, Anchor } from 'grommet'
import Status from 'grommet/components/icons/Status'

const RandomList = ({ name, parentPath, children }) => {
  return (
    <BoxWithH3
      heading={name}
      colorIndex="light-2"
      pad="small"
      margin={{ bottom: 'small' }}
    >
      <List>
        {_.map(children, v =>
          <ListItem key={v.name} justify="between" separator="none">
            <CustomLink
              {...v}
              path={`${parentPath}/${v.path}`}
              key={`link-${v.name}`}
            />
          </ListItem>
        )}
      </List>
    </BoxWithH3>
  )
}

export default RandomList
