import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './contacts.module.css'

function Contacts() {
    return (
        <div className={s.main_container}>
            <div className={s.form_pos}>
                <form className={s.form}>
                    <h3>Связаться со мной</h3>
                    <TextField className={s.input_form} id="outlined-basic" label="ФИО" variant="outlined"/>
                    <TextField className={s.input_form} id="outlined-basic" label="E-mail" variant="outlined"/>
                    <TextField className={s.input_form} id="outlined-basic" label="Сообщение" variant="outlined"/>
                    <Button variant="contained">Отправить</Button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;