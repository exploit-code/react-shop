import React from 'react'
import Button from '../Button/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import './ModalWindowSupport.scss'

let style = {}

const TestModalWindow = (props) => {
  const handleClose = () => props.setOpen(false)
  let dopname = props.dopname ? props.dopname : ''
  const position = 'absolute'
  const top = '50%'
  const left = '50%'
  let width = 0
  const transform = 'translate(-50%, -50%)'
  if (dopname === 'support') {
    width = 444
  } else {
    width = 540
  }

  const bgcolor = '#FFFFFF'
  const borderRadius = '10px'

  style = {
    position,
    top,
    left,
    transform,
    width,
    bgcolor,
    borderRadius,
  }

  return (
    <>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div>{props.children}</div>

          {/* <div className='modal_buttons_box'> */}
          {/*<Button onClick={getForm} type='submit' text='SUBMIT' classname='modal_button'></Button>*/}
          {/* <Button
              text='CANCEL'
              classname='modal_button'
              onClick={handleClose}
            ></Button>
          </div> */}
        </Box>
      </Modal>
    </>
  )
}

export default TestModalWindow
