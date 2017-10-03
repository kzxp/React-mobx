import React from 'react'
import { Col } from 'components/layout'
import { Card, CardContent } from 'components/card'
import { Field, Control, Input } from 'components/form'
import { Tag } from 'components/tag'
import { Title, Subtitle } from 'components/typography'
import { Button } from 'components/button'

export const FilterBar = () => {
  return (
    <Field>
      <Control className="is-expanded">
        <Input className="is-medium" type="text" />
      </Control>
    </Field>
  )
}

export const Item = ({ match, history }) =>
  [...new Array(1)]
    .map(() => ({
      title: 'Fun friday memo',
      createdDate: new Date().toDateString(),
      content:
        'Use to memo fun friday expense and play around with Chrome camera API to capture image from device. <br> <strong>*Works only on android</strong>',
      tag: [
        { color: 'primary', text: 'Redux' },
        { color: 'primary', text: 'Chrome' },
        { color: 'primary', text: 'Hobby' }
      ],
      to: '/FunFridayMemo'
    }))
    .map(({ title, createdDate, content, to, tag }, index) => (
      <Col key={index} className="is-one-third-tablet">
        <Card className="doing" onClick={() => history.push(match.url + to)}>
          <CardContent>
            <div className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <Title tag="p" className="is-4">
                  {title}
                </Title>
                <Subtitle tag="p" className="is-6">
                  {createdDate}
                </Subtitle>
              </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
            <div>
              {tag.map(({ color, text }, index) => (
                <Tag className={`is-${color}`} key={`tag-${index}`}>
                  {text}
                </Tag>
              ))}
            </div>
          </CardContent>
        </Card>
      </Col>
    ))

{
  // import { HistoryModal } from 'components/modal'
  // const isModal = !!(location.state && location.state.modal && this.previousLocation !== location)
  /* {isModal && (
        <Route
          path={`${match.url}/i/:id`}
          component={props => (
            <HistoryModal closeBtn={true} to={match.url} {...props}>
              <Card params={props.params}>
                <CardContent>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <Title tag="p" className="is-4">
                        555555
                      </Title>
                      <Subtitle tag="p" className="is-6">
                        555555
                      </Subtitle>
                    </div>
                  </div>
                  <div className="content">lorem</div>
                </CardContent>
              </Card>
            </HistoryModal>
          )}
        />
      )} */
}
{
  /* {isLogin && (
        <Cols className="action">
          <Col>
            <Button className="is-primary is-outlined is-size-2">Add new one</Button>
          </Col>
          <Col>
            <Button className="is-danger  is-outlined is-size-2">Delete</Button>
          </Col>
        </Cols>
      )} */
}