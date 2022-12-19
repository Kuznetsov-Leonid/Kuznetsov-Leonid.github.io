/**
 * create by Kuznetsov Leonid 
 * 16.12.2022
 */
import React, { useRef } from 'react';
import styles from '../../../styles/form.module.scss';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LargeButtonBlue } from '../../buttons/buttons';
import { useForm } from 'react-hook-form';

const Forms = () => {
    const [ Value, setValue ] = useState(75);
    const form = useRef();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm({
        mode: "onTouched"
    }); 
    const SelectItem = [
        {id:1, txt:'Sed ut perspiciatis'},
        {id:2, txt:'Nemo enim ipsam'},
        {id:3, txt:'Et harum quidem'},
        {id:4, txt:'Temporibus autem'},
        {id:5, txt:'Itaque earum rerum'},
    ]

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <>
            <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.FormGroup}>
                    <div className={styles.text_field_wrapper}>
                        <Form.Select 
                            name="category_select" 
                            aria-label="Default select example" 
                            className={styles.text_field__select}
                            {...register("category_select")}
                        >
                            <option style={{'display':'none'}}>Выберите тип системы</option>
                            {SelectItem.map(({ id, txt }) => (
                                <>
                                    <option key={id} value={txt}>{txt}</option>
                                </>
                            ))}
                        </Form.Select>
                    </div>
                    <div className={styles.text_field}>
                        <input 
                            type="email" 
                            placeholder="Ваш e-mail" 
                            name="email" 
                            id="email" 
                            className={styles.text_field__input}
                            {...register("email")}
                        />
                    </div>
                    <div className={styles.text_field}>
                        <input 
                            type="name" 
                            placeholder="Ваше имя" 
                            name="name" 
                            id="name" 
                            className={styles.text_field__input}
                            {...register("name")}
                        />
                    </div>
                </div>
                <div className={styles.FormGroups}>
                    <div className={styles.text_range}>
                        <div className={styles.text_field_lable}>
                            <div>Sed ut perspiciatis, unde omnis iste natus</div>
                            <dir>{Value}%</dir>
                        </div>
                        <Form.Range 
                        id='myrange' 
                        value={Value} 
                        className={styles.range}
                        {...register("range")}
                        />
                    </div>
                    <div class="upload-file__wrapper">
                        <input
                            type="file"
                            name="files[]"
                            id="upload-file__input_1"
                            className={styles.upload_file__input}
                            accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip"
                            multiple
                            {...register("file")}
                        />
                        <label className={styles.upload_file__label} for="upload-file__input_1">
                            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8125 4.60899L13.3304 1.12685C12.9174 0.713902 12.0915 0.36792 11.5 0.36792H1.50002C0.9085 0.36792 0.428589 0.847831 0.428589 1.43935V19.2965C0.428589 19.888 0.9085 20.3679 1.50002 20.3679H16.5C17.0915 20.3679 17.5714 19.888 17.5714 19.2965V6.43935C17.5714 5.84783 17.2255 5.02194 16.8125 4.60899ZM11.8572 1.88578C12.0469 1.95274 12.2366 2.05319 12.3148 2.13131L15.8081 5.62462C15.8862 5.70274 15.9866 5.89247 16.0536 6.08221H11.8572V1.88578ZM16.1429 18.9394H1.85716V1.79649H10.4286V6.43935C10.4286 7.03087 10.9085 7.51078 11.5 7.51078H16.1429V18.9394ZM4.7143 9.29649V10.0108C4.7143 10.2117 4.87055 10.3679 5.07145 10.3679H12.9286C13.1295 10.3679 13.2857 10.2117 13.2857 10.0108V9.29649C13.2857 9.0956 13.1295 8.93935 12.9286 8.93935H5.07145C4.87055 8.93935 4.7143 9.0956 4.7143 9.29649ZM12.9286 11.7965H5.07145C4.87055 11.7965 4.7143 11.9527 4.7143 12.1536V12.8679C4.7143 13.0688 4.87055 13.2251 5.07145 13.2251H12.9286C13.1295 13.2251 13.2857 13.0688 13.2857 12.8679V12.1536C13.2857 11.9527 13.1295 11.7965 12.9286 11.7965ZM12.9286 14.6536H5.07145C4.87055 14.6536 4.7143 14.8099 4.7143 15.0108V15.7251C4.7143 15.926 4.87055 16.0822 5.07145 16.0822H12.9286C13.1295 16.0822 13.2857 15.926 13.2857 15.7251V15.0108C13.2857 14.8099 13.1295 14.6536 12.9286 14.6536Z" fill="#272733"/>
                            </svg>
                            <span className={styles.upload_file__text}>Прикрепить файл</span>
                        </label>
                    </div>
                </div>
                <div className={styles.button}>
                    <LargeButtonBlue type='submit' title='отправить'/>
                </div>
            </Form>
        </>
    );
}

export default Forms;
