import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  const initValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    console.log("Booking submitted:", values);
    toast.success("Car successfully booked!");
    actions.resetForm();
  };

  const schema = Yup.object().shape({
    name: Yup.string().min(3, "Min 3 chars").max(20, "Max 20 chars").required("Name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    bookingDate: Yup.string(),
    comment: Yup.string().max(100, "Max 100 chars"),
  });

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Book your car now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>

      <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={schema}>
        <Form>
          <div className={s.formContainer}>
            <Field className={s.input} name="name" type="text" placeholder="Name*" />
            <ErrorMessage name="name" component="div" className={s.error} />

            <Field className={s.input} name="email" type="email" placeholder="Email*" />
            <ErrorMessage name="email" component="div" className={s.error} />

            <Field className={s.input} name="bookingDate" type="date" />
            <ErrorMessage name="bookingDate" component="div" className={s.error} />

            <Field className={s.inputComment} as="textarea" name="comment" placeholder="Comment" />
            <ErrorMessage name="comment" component="div" className={s.error} />
          </div>

          <button className={s.formBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
