import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yap from 'yup';

import s from './BookingForm.module.css';


const BookingForm = () => {
    const initValues = {
        name: '',
        email: '',
        bookingDate: '',
        comment: ''
    };
    const dispatch = useDispatch();

    const testStorage = {};

    const handleSubmit = (values, actions) => {
        dispatch({ testStorage, ...values });
        actions.resetForm();
    };
    const schema = Yap.object().shape({
        name: Yap.string().min(3).max(20).required(),
        email: Yap.string().min(3).max(30).required(),
        bookingDate: Yap.string().min(6).max(10),
        comment: Yap.string().min().max(100)
    });

    return (
        <>
            <div className={s.wrapper}>
                <h3 className={s.title}>Book your car now</h3>
                <p className={s.text}>Stay connected! We are always ready to help you.</p>    
                <Formik onSubmit={handleSubmit} initialValues={initValues} validationSchema={schema}>
                    <Form>
                        <div className={s.formContainer}>
                            <Field className={s.input} type='text' name='name' placeholder='Name*'></Field>                                               
                            <Field className={s.input} type='text' name='email' placeholder='Email*'></Field>
                            <Field className={s.input} type='text' name='bookingDate' placeholder='Booking Date'></Field>        
                            <Field className={s.inputComment} type='text' name='comment' placeholder='Comment'></Field>
                        </div>
                    </Form>
                </Formik>
                <button className={s.formBtn} type='submit'>Send</button>
            </div>
        </>
    );
};

export default BookingForm;