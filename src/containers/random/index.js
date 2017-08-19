import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import routes from './routes'
import { matchPath } from 'react-router-dom'
import { Section, Container, Cols, Col } from 'components/layout'
import { Button } from 'components/button'
import { Tag } from 'components/tag'
import { Card, CardContent, CardFooter, CardFooterItem } from 'components/card'
import { Title, Subtitle } from 'components/typography'
import { CustomLink } from 'components/custom'

const Random = ({ match, children }) =>
  <Cols className="random is-multiline">
    <Switch>
      <Route
        exact
        path={match.url}
        component={() =>
          [...new Array(50)]
            .map(() => ({
              title: 'Redux' + Math.round(Math.random() * Date.now()).toString(6),
              createdDate: new Date().toDateString(),
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
              tag: [{ color: 'primary', text: 'Redux' }, { color: 'light', text: 'test' }]
            }))
            .map(({ title, createdDate, content, tag }, index) =>
              <Col className="is-one-third-tablet" key={index}>
                <Card>
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
                    <div className="content">
                      {content}
                    </div>
                    <div>
                      {tag.map(({ color, text }, index) =>
                        <Tag className={`is-${color}`} key={`tag-${index}`}>
                          {text}
                        </Tag>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Col>
            )}
      />
      <Route path={`${match.url}/i/:id`} component={() => <Title tag="h1">Access from id</Title>} />
      {routes.map(({ name, path }) =>
        <Route
          exact
          key={name}
          path={`${match.url}${path}`}
          component={() =>
            React.Children.toArray([
              <Col className="is-full">
                <Title tag="h1">
                  {name}
                </Title>
              </Col>,
              [...new Array(50)]
                .map(() => ({
                  title: 'Redux' + Math.round(Math.random() * Date.now()).toString(6),
                  createdDate: new Date().toDateString(),
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
                  tag: [{ color: 'primary', text: 'Redux' }, { color: 'light', text: 'test' }]
                }))
                .map(({ title, createdDate, content, tag }, index) =>
                  <Col className="is-one-third-tablet" key={index}>
                    <Card>
                      <CardContent>
                        <div className="media">
                          <div className="media-left">
                            <figure className="image is-64x64">
                              <img
                                src="http://bulma.io/images/placeholders/96x96.png"
                                alt="Image"
                              />
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
                        <div className="content">
                          {content}
                        </div>
                        <div>
                          {tag.map(({ color, text }, index) =>
                            <Tag className={`is-${color}`} key={`tag-${index}`}>
                              {text}
                            </Tag>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Col>
                )
            ])}
        />
      )}
      <Redirect to={match.url} />
    </Switch>

    <Cols className="action">
      <Col>
        <Button className="is-primary is-outlined is-size-2">Add new one</Button>
      </Col>
      <Col>
        <Button className="is-danger  is-outlined is-size-2">Delete</Button>
      </Col>
    </Cols>
  </Cols>

export default Random
