import { Component } from "react"
import BasicFormSchema from "./scheme";
import { Formik, Field, Form } from "formik";
import Images from "../../resources/image";
import "./index.css"

class Forma extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onSubmit, closeForm } = this.props;
        return (
            <div id="formWrapper" className="form-wrapper">
                <div className="form-bg">
                    <Formik
                        id="myform"
                        initialValues={{
                            userName: "",
                            phone: "",
                            location: "",
                            description: ""
                        }}
                        validationSchema={BasicFormSchema}
                        onSubmit={onSubmit}
                        render={({ errors, touched }) => (
                            <Form className="form">
                                <div className="form-header">
                                    <div><span className="form-caption">Залишити заявку</span></div>
                                    <div className="close-btn" onClick={closeForm}><img src={Images.closeBtn.src} /></div>
                                </div>
                                <Field className="input input-name" type="text" name="userName" placeholder="Вкажіть Ваше ім'я" />

                                {errors.userName &&
                                    touched.userName && (
                                        <div className="field-error">{errors.userName}</div>
                                    )}
                                <Field className="input input-tel" name="phone" placeholder="Вкажіть Ваш номер телефона" type="tel"
                                />

                                {errors.phone && touched.phone && <div className="field-error">{errors.phone}</div>}

                                <Field className="input input-city" name="location" placeholder="Вкажіть звідки Ви" type="text" />

                                {errors.location &&
                                    touched.location && (
                                        <div className="field-error">{errors.location}</div>
                                    )}
                                <Field className="input input-text-area" name="description" placeholder="Коротко опишіть Вашу проблему" type="text" />

                                {errors.description &&
                                    touched.description && (
                                        <div className="field-error">{errors.description}</div>
                                    )}

                                <button className="submit-btn" type="submit">Відправити</button>
                            </Form>
                        )}
                    />
                    {/* <form className="form" onSubmit={onSubmit}>
                    <div className="form-header">
                        <div><span className="form-caption">Залишити заявку</span></div>
                        <div onClick={closeForm}><img src={Images.closeBtn.src}/></div>
                    </div>
                    <input className="input input-name" type="text" placeholder="Вкажіть Ваше і'мя"/>
                    <input className="input input-tel" type="tel" placeholder="Вкажіть Ваш номер телефона"/>
                    <input className="input input-city" type="text" placeholder="Вкажіть Ваше місто\район"/>
                    <input className="input input-text-area" type="text" placeholder="Коротко опишіть Вашу проблему"/>
                    <button className="submit-btn" type="submit">Відправити</button>
                </form> */}
                </div>
            </div>
        )
    }
}

export default Forma;

