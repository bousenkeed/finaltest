import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './contacts.module.css'

function Contacts() {
    return (
        <div className={s.main_container}>
            <div className={s.form_pos}>
                <form className={s.form}>
                    <TextField className={s.form_input} id="outlined-basic" label="ФИО" variant="outlined"/>
                    <TextField className={s.form_input} id="outlined-basic" label="E-mail" variant="outlined"/>
                    <TextField className={s.form_input} id="outlined-basic" label="Сообщение" variant="outlined"/>
                    <Button variant="contained">Отправить</Button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;