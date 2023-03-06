import React from "react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChildModal from "./ChildModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalWindow = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [payment, setpayment] = useState('')

    return (
        <>
            <Button onClick={handleOpen}>Go to checkout</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div>
                        <fieldset>
                            <legend>Choose your payment method</legend>
                            <input type="radio" id="pay-card" name="payment" value="CC" checked={payment == 'CC'}
                                onChange={((event) => setpayment(event.target.value))} />
                            <label htmlFor="pay-card">Online payment</label>
                            <br></br>
                            <input type="radio" id="pay-cash" name="payment" value="CD" checked={payment == 'CD'}
                                onChange={((event) => setpayment(event.target.value))} />
                            <label htmlFor="pay-cash">Payment upon receipt</label>
                        </fieldset>
                    </div>

                    <div className="testModal">
                        <div>
                            <ChildModal payment={payment} checkoutPayment={props.checkoutPayment} />
                        </div>
                        <div>
                            <Button onClick={handleClose}>Cancel</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ModalWindow