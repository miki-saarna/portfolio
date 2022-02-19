
import React, { ReactElement, useState } from "react";
import { sumbitContactForm } from "../utils/api";
import { Form, FormSubmissionResponse } from "../utils/types"
import './ContactForm.css';

function ContactForm(): ReactElement {
    const initialFormState: Form = {
        name: '',
        email: '',
        url: '',
        message: '',
    }

    const [formData, setFormData] = useState<Form>(initialFormState)
    const [displayForm, setDisplayForm] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<string>('');
    // const [submitStatusCode, setSubmitStatusCode] = useState('');

    const displayFormHandler = (event) => {
        event.preventDefault();
        const contactContainer: HTMLElement = event.target.parentNode;
        // fix type annotation below
        const contactGradientBorder:any = document.querySelector('.slide-across-border');
        if (displayForm) {
            contactContainer.classList.remove('active');
            contactGradientBorder.classList.remove('slideAcross')
            contactGradientBorder.classList.add('slideBack')
            // contactGradientBorder.style.bottomBorder = `none`
        } else {
            contactContainer.classList.add('active');
            contactGradientBorder.classList.add('slideAcross')
            contactGradientBorder.classList.remove('slideBack')
            // contactGradientBorder.style.bottomBorder = `2px solid #f1f1f1`
            // prevent success messaging from appearing
            // setSubmitStatus('');
        }
        setDisplayForm(!displayForm);
    }

    const changeHandler = ({ target }) => {
        const value: HTMLElement = target.value;
        // const { value } = target;
        setFormData({
            ...formData,
            [target.name]: value, 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        sumbitContactForm(formData, abortController.signal)
            .then(({ response }: FormSubmissionResponse) => {
                displayFormHandler(event)
                setTimeout(() => {
                    // setSubmitStatusCode(`201`)
                    setSubmitStatus(response);
                }, 1250)
            });
        setFormData(initialFormState);
        return () => abortController.abort();
    }

    return (
        <div className="contact" id="contact">
            {/* <div className='contact-gradient'></div> */}
            <button onClick={displayFormHandler}>Contact me</button>
            <div className='slide-across-border'></div>
            <form onSubmit={handleSubmit}>
            
                <label htmlFor='name'>
                    Name:
                    <input
                        id='name'
                        name='name'
                        type='text'
                        onChange={changeHandler}
                        value={formData.name}
                        required
                        />
                </label>

                <br />

                <label htmlFor='email'>
                    Email address:
                    <input
                        id='email'
                        name='email'
                        type='email'
                        onChange={changeHandler}
                        value={formData.email}
                        required
                        />
                </label>

                <br />

                <label htmlFor='url'>
                    Website URL (if available):
                    <input
                        id='url'
                        name='url'
                        type='text'
                        onChange={changeHandler}
                        value={formData.url}
                        />
                </label>

                <br />

                <label htmlFor='message'>
                    Message:
                    <textarea
                        id='message'
                        name='message'
                        // type='textarea'
                        rows={3}
                        onChange={changeHandler}
                        value={formData.message}
                        required
                    ></textarea>
                </label>

                <br />
                <button type='submit'>Submit</button>
            </form>
          {submitStatus ? <p>{submitStatus}</p> : null }
        </div>
    )
}

export default ContactForm;