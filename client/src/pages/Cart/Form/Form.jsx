import React, {useContext, useState} from "react"
import './style-form.scss'
import { useSelector } from "react-redux";
// import axios from "axios";
import Button from "../../../components/Button/Button";
import { makeRequest } from "../../../makeRequest";
import {AuthContext} from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";


const Form = (promo) => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.products)
    const { user } = useContext(AuthContext);
    //**START of controlled input
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [payMethod, setPayMethod] = useState('')

    // Состояния для активности полей input и ошибки
    const [mailValid, setMailValid] = useState(false)
    const [mailError, setEmailError] = useState('Email не может быть пустым')

    const [nameValid, setNameValid] = useState(false)
    const [nameError, setNameError] = useState('Имя не может быть пустым')

    const [secondValid, setSecondValid] = useState(false)
    const [secondError, setSecondError] = useState('Фамилия не может быть пустой')

    const [deliveryValid, setDeliveryValid] = useState(false)
    const [deliveryError, setDeliveryError] = useState('Адресс не может быть пустым')


    // Валидация полей формы (email, firstName, secondName, deliveryAdress)
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email должен содержать @domen.ru')
        } else {
            setEmailError('')
        }
    }

    const nameHandler = (e) => {
        setFirstName(e.target.value)
        if (!e.target.value) {
            setNameError('Имя не может быть пустым')
        } else {
            setNameError('')
        }
    }

    const secondHandler = (e) => {
        setSecondName(e.target.value)
        if (!e.target.value) {
            setSecondError('Фамилия не может быть пустой')
        } else {
            setSecondError('')
        }
    }

    const deliveryHandler = (e) => {
        setDeliveryAddress(e.target.value)
        if (!e.target.value) {
            setDeliveryError('Адресс не может быть пустым')
        } else {
            setDeliveryError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setMailValid(true)
                break
            case 'firstName':
                setNameValid(true)
                break
            case 'secondName':
                setSecondValid(true)
                break
            case 'deliveryAddress':
                setDeliveryValid(true)
                break;
            default:
        }
    }

    // const goOrder = (event) => {
    //     // if (email.length != 0 && firstName.length != 0 && secondName.length != 0 && deliveryAddress.length != 0) {
    //     //     event.preventDefault();
    //     console.log('Форма не отправилась')
    //     // }
    // }

    //** START get Order

    //START of axios request
    // const getOrder = () => {
    //     axios.defaults.headers.post['Content-Type'] = 'application/json';
    //     axios.post('https://formsubmit.co/ajax/9264549700@mail.ru', {
    //         firstName: firstName,
    //         secondName: secondName,
    //         email: email,
    //         phone: phone,
    //         deliveryAddress: deliveryAddress,
    //         payByCreditCard: payMethod,
    //         data: (JSON.stringify(cartItems))
    //     })
    //         .then(response => (console.log(response),
    //             alert('Success! Your food is coming!')))
    //         .catch(error => console.log(error));
    // }
    //END of axios

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const getOrder = async () => {
        try {
            await makeRequest.post("/orders", {
                cartItems,
                mail: user?.email,
                firstName,
                promo,
                secondName,
                phone,
                deliveryAddress,
                payByCreditCard: payMethod,
                firebaseId: user?.uid
            })
            navigate('/success');
        }  catch (err) {
            console.log(err);
        }
    };
    //**END of getOrder

    const changePaymentMethod = (e) => {
        setPayMethod(e.target.value)
    }

    return (
        <>
            <h1>Form of the order</h1>
            <div className="form-wrp">

                <form onSubmit={handleSubmit}>
                    <div className="form-radio">
                        <div>
                            <label className="form-label" htmlFor="PayCard">Payment by terminal</label>
                            <input type="radio" name="card" value="PayCard" id="pay-card"
                                checked={payMethod === 'PayCard'}
                                onChange={changePaymentMethod} />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="PayCard">Payment in cash</label>
                            <input type="radio" name="cash" value="PayCash" id="pay-cash"
                                checked={payMethod === 'PayCash'}
                                onChange={changePaymentMethod} />
                        </div>
                    </div>
                    <div className="form-buyOrder">
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        {(nameValid && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
                    </div>
                    <div className="form-buyOrder">
                        <input className="form-input"
                            name="firstName"
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => nameHandler(e)}
                            onBlur={e => blurHandler(e)}
                        />
                    </div>
                    <div className="form-buyOrder">
                        <label className="form-label" htmlFor="secondName">Second Name</label>
                        {(secondValid && secondError) && <div style={{ color: 'red' }}>{secondError}</div>}
                    </div>
                    <div className="form-buyOrder">
                        <input className="form-input"
                            name="secondName"
                            id="secondName"
                            type="text"
                            value={secondName}
                            onChange={(e) => secondHandler(e)}
                            onBlur={e => blurHandler(e)}
                        />
                    </div>
                    <div className="form-buyOrder">
                        <label className="form-label" htmlFor="email">Email</label>
                        {(mailValid && mailError) && <div style={{ color: 'red' }}>{mailError}</div>}
                    </div>
                    <div className="form-buyOrder">
                        <input className="form-input"
                            name="email"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => emailHandler(e)}
                            onBlur={e => blurHandler(e)}
                        />
                    </div>
                    <div className="form-buyOrder">
                        <label className="form-label" htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-buyOrder">
                        <input className="form-input"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-buyOrder" >
                        <label className="form-label" htmlFor="deliveryAddress">Delivery Address</label>
                        {(deliveryValid && deliveryError) && <div style={{ color: 'red' }}>{deliveryError}</div>}
                    </div>
                    <div className="form-buyOrder" >
                        <input className="form-input"
                            name="deliveryAddress"
                            id="deliveryAddress"
                            type="text"
                            value={deliveryAddress}
                            onChange={(e) => deliveryHandler(e)}
                            onBlur={e => blurHandler(e)}
                        />
                    </div>
                    <div className="form-btn-buyOrder">
                        {email.length != 0 && firstName.length != 0 && deliveryAddress != 0 && secondName != 0 ? (
                            <Button onClick={getOrder} type='submit' text='Place an order'
                                className="form-btn-display-none">
                            </Button>
                        ) : (<p>Заполните поля формы</p>)}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
