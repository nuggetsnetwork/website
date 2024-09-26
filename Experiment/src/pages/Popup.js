import React, { useState } from 'react'
import {
  Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import ReactPlayer from 'react-player'
const Popup = ({ isOpenModal, ftitle, imgUrl,closeModal }) => {
  const [isOpen, setOpen] = useState(isOpenModal);

  return (
    <>
      <Modal
        isOpen={isOpen}
        scrollable={false}
        centered={true}
        keyboard={true} toggle={() => closeModal()}>
        <ModalHeader toggle={() => closeModal()}>
          {ftitle}
        </ModalHeader>
        <ModalBody>
          <div className='player-wrapper'>
            <ReactPlayer className='react-player'
              width='100%'
              height='100%' controls={true} playing={true} url={imgUrl} />
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Popup
