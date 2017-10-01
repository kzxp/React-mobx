import React from 'react'
import classnames from 'classnames'
import ReactModal from 'react-modal'
import { compose, withHandlers } from 'recompose'

// export const Modal = ({
//   children,
//   modalClassName,
//   className,
//   active,
//   closeBtn,
//   toggleModal,
//   ...otherProps
// }) => {
//   return (
//     <ReactModal
//       portalClassName={classnames('modal', active && 'is-active', modalClassName)}
//       overlayClassName="modal-background"
//       className={classnames('modal-content', className)}
//       {...otherProps}
//     >
//       {children}
//       {closeBtn && <ModalClose onClick={toggleModal} />}
//     </ReactModal>
//   )
// }

export const Modal = ({
  children,
  modalClassName,
  className,
  active,
  params,
  closeBtn,
  toggleModal
}) => {
  return (
    <div className={classnames('modal', 'is-active', modalClassName)}>
      <div className="modal-background" />
      <ModalContent>{children}</ModalContent>
      {closeBtn && <ModalClose onClick={toggleModal} />}
    </div>
  )
}

const ModalContent = ({ className, children, ...otherProps }) => {
  return (
    <div className={classnames('modal-content', className)} {...otherProps}>
      {children}{' '}
    </div>
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
    toggleModal: ({ history, to }) => e => {
      history.push(to)
    }
  })
)(Modal)
