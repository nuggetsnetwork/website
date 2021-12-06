import React, { useState } from 'react'
import {
  Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import ReactPlayer from 'react-player'
const Popup = () => {
  const [isOpen, setOpen] = useState(false);
  const noRefCheck = () => {
    console.log('hello');
    setOpen(!isOpen);;
  }
  return (
    <>
      <div>
        <Button
          color="danger"
          onClick={() => noRefCheck()}
        >
          Click Me
        </Button>
        <Modal
          isOpen={isOpen}
          scrollable={false}
          keyboard={true}
          toggle={() => noRefCheck()}
        >
          <ModalHeader toggle={() => noRefCheck()}>
            Modal title
          </ModalHeader>
          <ModalBody>
          <div className='player-wrapper'>
            <ReactPlayer className='react-player'
              width='100%'
              height='100%' controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
         </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => noRefCheck()}
            >
              Do Something
            </Button>
            {' '}
            <Button onClick={() => noRefCheck()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  )
}

export default Popup
