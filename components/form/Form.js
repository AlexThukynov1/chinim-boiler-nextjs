import { Formik, Field, Form } from "formik";

import Image from "next/image";

import Images from "../../resources/image";
import styled from "./Form.module.css"
import BasicFormSchema from "./scheme";



const Forma = (props) => {

    const { onSubmit, closeForm,onVisibleConfidence } = props;
    return (
        <div id="formWrapper" className={styled.formWrapper}>
            <div className={styled.formBg}>
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
                        <Form className={styled.form}>
                            <div className={styled.formHeader}>
                                <div><span className={styled.form.caption}>Залишити заявку</span></div>
                                <div className={styled.closeBtn} onClick={closeForm}><Image src={Images.closeBtn.src} /></div>
                            </div>
                            <Field className={styled.input} type="text" name="userName" placeholder="Вкажіть Ваше ім'я" />

                            {errors.userName &&
                                touched.userName && (
                                    <div className="field-error">{errors.userName}</div>
                                )}
                            <Field className={styled.input} name="phone" placeholder="Вкажіть Ваш номер телефона" type="tel"
                            />

                            {errors.phone && touched.phone && <div className="field-error">{errors.phone}</div>}

                            <Field className={styled.input} name="location" placeholder="Вкажіть звідки Ви" type="text" />

                            {errors.location &&
                                touched.location && (
                                    <div className="field-error">{errors.location}</div>
                                )}
                            <Field className={styled.input} name="description" placeholder="Коротко опишіть Вашу проблему" type="text" />

                            {errors.description &&
                                touched.description && (
                                    <div className="field-error">{errors.description}</div>
                                )}

                            <button className={styled.submitBtn} type="submit">Відправити</button>
                            <span className={styled.description}>Відпрвляючи заявку ви погоджуєтесь з <a className={styled.pseudoLink} onClick={onVisibleConfidence}>Політикою кофіденційності</a></span>
                        </Form>
                    )}
                />
            </div>
        </div>
    )
}

export default Forma;

