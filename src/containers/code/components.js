import React from 'react'
import _fp from 'lodash/fp'
const fp = _fp.convert({ cap: false })
import { CODE } from 'CONSTANTS'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { compose, toClass, setStatic, branch, renderComponent, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Cols, Col } from 'components/layout'
import { Card, CardContent } from 'components/card'
import { Field, Label, Control, Input } from 'components/form'
import { Tag } from 'components/tag'
import { Title, Subtitle } from 'components/typography'
import { Button } from 'components/button'
import { Progress } from 'components/progress'
import { Loader } from 'components/loader'
import { Select } from 'components/select'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import { convertToRaw } from 'draft-js'

import availableChunk from './available-chunk'
import { HistoryModal } from 'components/modal'

import { edit as EditIcon, upload as UploadIcon } from 'icons'

import { editDraft } from 'actions'

import {
  getSequenceByKey,
  getMappedTags,
  getDraft,
  getPerCodeData,
  getIsSomeDataFetching,
  getMappedCodeDataWithoutComponent
} from 'selectors'

export class ModalSwitch extends React.Component {
  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/img/2` in a modal, rather than as the
  // main page, keeping the gallery visible behind it.
  //
  // Normally, `/img/2` wouldn't match the gallery at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/img/2`.
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(location.state && location.state.modal && this.previousLocation !== location)

    return <AllRoutes {...this.props} isModal={isModal} />
  }
}

export const AllRoutes = compose(
  connect(state => ({
    code: getMappedCodeDataWithoutComponent(state),
    isSomeDataFetching: getIsSomeDataFetching(state)
  })),
  branch(({ isSomeDataFetching }) => isSomeDataFetching, renderComponent(Loader)),
  pure
)(({ code, match, location, isModal }) => {
  return [
    <Switch key="code-switch">
      <Route key="items" exact path={match.url} component={Items} />
      {fp.map(
        ({ Component, to }, key) => <Route key={key} path={match.url + to} component={Component} />,
        availableChunk
      )}
      {fp.map(
        (_, key) => (
          <Route key={key} path={`${match.url}/${key}`} component={() => <div>hi</div>} />
        ),
        code
      )}
      {<Route path="*" component={NotFound} />}
    </Switch>,
    isModal ? <Route key="create-route" path={`${match.url}`} component={CreateNewModal} /> : null
  ]
})

const CreateNewModal = connect(
  state => ({
    tags: getMappedTags(state),
    ...getDraft(state)
  }),
  dispatch => bindActionCreators({ editDraft }, dispatch)
)(({ intro, tags, editDraft, ...props }) => (
  <HistoryModal closeBtn={true} to={props.match.url} {...props}>
    <Card>
      <CardContent>
        <Field>
          <Label>Title</Label>
          <Control className="is-expanded">
            <Input className="is-medium" type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Intro</Label>
          <Control className="is-expanded">
            <Editor
              editorState={intro}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={value => editDraft('intro', value)}
            />
            {console.log(draftToHtml(convertToRaw(intro.getCurrentContent())))}
          </Control>
        </Field>
        <Field>
          <Label>Content</Label>
          <Control className="is-expanded">
            <Input className="is-medium" type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Tag</Label>
          <Control className="is-expanded">
            <Select className="is-medium is-fullwidth" options={tags} />
          </Control>
        </Field>
        {/* <Field>
          <Label>Component</Label>
          <Control className="is-expanded">
            <Input className="is-medium" type="text" />
          </Control>
        </Field> */}
        {/* <Field>
          <Label>Images</Label>
          <div className="file">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <UploadIcon />
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
            </label>
          </div>
        </Field> */}
        <Field>
          <Control>
            <Button className="is-primary is-outlined is-medium">Submit</Button>
          </Control>
        </Field>
      </CardContent>
    </Card>
  </HistoryModal>
))

const NotFound = ({ match }) => (
  <Col className="is-full">
    <p className="has-text-centered is-size-3">
      <strong>{match.url}</strong> is not found...
    </p>
  </Col>
)

export const Items = compose(
  connect(state => ({
    sequence: getSequenceByKey(state, 'code')
  }))
)(({ sequence, ...props }) => [
  <Cols key="action-col" className="action">
    <Col>
      <Link to={{ pathname: props.match.url, state: { modal: true } }}>
        <Button className="is-primary is-outlined is-medium">
          <EditIcon />
        </Button>
      </Link>
    </Col>
  </Cols>,
  ...sequence.map(val => <Item key={val} id={val} {...props} />)
])

export const Item = connect((state, { id }) => ({
  ...getPerCodeData(state, id)
}))(({ id, match, history, title, intro, tags, status, Component }) => {
  const to = fp.getOr(`/${id}`, 'to', availableChunk[Component])
  return (
    <Col className="is-half-tablet is-one-third-widescreen">
      <Link to={match.url + to}>
        <Card className={status}>
          <CardContent>
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img src="https://via.placeholder.com/96x96" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <Title tag="p" className="is-4">
                  {title}
                </Title>
              </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
            <div>
              {tags.map(({ color, text }, index) => (
                <Tag className={`is-${color}`} key={`tag-${index}`}>
                  {text}
                </Tag>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </Col>
  )
})

{
  // const isModal = !!(location.state && location.state.modal && this.previousLocation !== location)
  /* {isModal && (
        <Route
          path={`${match.url}/i/:id`}
          component={props => (
 
          )}
        />
      )} */
}
{
  /* {isLogin && (

      )} */
}
