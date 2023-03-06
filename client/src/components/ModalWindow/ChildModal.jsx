import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Form from '../../pages/Cart/Form/Form';
import '../Button/button.scss'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        if (props.payment == 'CD') {
            setOpen(true);
        } else if (props.payment == 'CC') {
            { props.checkoutPayment() }
        }
    };
    const handleClose = () => {
        setOpen(false);
    };



    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Next</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={style}>
                    {/* Форма заказа при получении */}
                    <Form />
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default ChildModal