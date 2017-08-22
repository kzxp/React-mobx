import React from 'react'
import classnames from 'classnames'
import ReactModal from 'react-modal'
import { compose, withHandlers } from 'recompose'

export const Modal = ({
  children,
  modalClassName,
  className,
  active,
  closeBtn,
  toggleModal,
  ...otherProps
}) => {
  return (
    <ReactModal
      portalClassName={classnames('modal', active && 'is-active', modalClassName)}
      overlayClassName="modal-background"
      className={classnames('modal-content', className)}
      {...otherProps}
    >
      {children}
      {closeBtn && <ModalClose onClick={toggleModal} />}
    </ReactModal>
  )
}

const ModalClose = ({ className, ...otherProps }) => {
  return (
    <button
      className={classnames('modal-close is-large', className)}
      aria-label="close"
      {...otherProps}
    />
  )
}

export const HistoryModal = compose(
  withHandlers({
    toggleModal: ({ history, forwardLink }) => e => {
      e.stopPropagation()
      console.log('history', history)
      history.push(forwardLink)
    }
  })
)(Modal)
