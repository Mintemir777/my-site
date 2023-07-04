import * as yup from 'yup'

export const ContactsFormValidationSchema = yup.object().shape({
    email: yup.string().min(3, "Минимальная длина - 3 символа").required("Заполните Email")
})