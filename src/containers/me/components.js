import React from 'react'
import { compose, withStateHandlers } from 'recompose'

import { ToolTipWrapper, ToolTip } from 'components/tooltip'
import { mail as MailIcon } from 'icons'
import MarkGitGubIcon from 'react-icons/lib/go/mark-github'
import LinkedInIcon from 'react-icons/lib/ti/social-linkedin'

const contactList = [
  {
    link: 'mailto:th.chankaseam@gmail.com',
    text: 'th.chankaseam@gmail.com',
    Icon: ({ ...otherProps }) => <MailIcon className="icon is-large" {...otherProps} />
  },
  {
    link: 'https://github.com/kzxp',
    target: '_blank',
    Icon: ({ ...otherProps }) => <MarkGitGubIcon className="icon is-large" {...otherProps} />
  },
  {
    link: 'https://www.linkedin.com/in/thchnksm',
    target: '_blank',
    Icon: ({ ...otherProps }) => <LinkedInIcon className="icon is-large" {...otherProps} />
  }
]

export const Contact = withStateHandlers(
  ({ initialSelected = null }) => ({
    selected: initialSelected
  }),
  {
    selectItem: ({ selected }) => value => {
      if (selected === value) {
        return { selected: null }
      } else {
        return { selected: value }
      }
    }
  }
)(({ selected, selectItem }) => (
  <div className="contact">
    {contactList.map(({ link, text, Icon, target }, index) => (
      <ToolTipWrapper key={link} className={selected === index && 'is-selected'}>
        <Icon onClick={() => selectItem(index)} />
        {selected === index && (
          <ToolTip>
            <a href={link} target={target}>
              {text || link}
            </a>
          </ToolTip>
        )}
      </ToolTipWrapper>
    ))}
  </div>
))
