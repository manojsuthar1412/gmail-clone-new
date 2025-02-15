import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import "./SendMail.css"

import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from "firebase";

export default function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <Close 
                onClick={() => dispatch(closeSendMessage())}
                className="sendMail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to"
                    placeholder="To"
                    type="email"
                    ref={register({required: true})} 
                />
                {errors.to && <p className="sendMail_error">"Email is required"</p>}

                <input 
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    ref={register({required: true})}
                />
                {errors.subject && <p className="sendMail_error">"Subject is required"</p>}

                <input 
                    name="message"
                    placeholder="Message..."
                    type="text"
                    className="sendMail_message"
                    ref={register({required: true})}
                />
                {errors.message && <p className="sendMail_error">"Message is required"</p>}

                <div className="sendMail_options">
                    <Button
                        className="sendMail_send"         
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}
