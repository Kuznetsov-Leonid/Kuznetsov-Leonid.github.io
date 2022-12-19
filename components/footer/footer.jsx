/**
 * create by Kuznetsov Leonid 
 * 16.12.2022
 */

import styles from '../../styles/footer.module.scss';
import Container from '../container/container';
import Image from 'next/image';
//------------------------------------------
import mail from '../../public/footer/mail.svg';
import qiwi from '../../public/footer/qiwi.svg';
import vk from '../../public/footer/vk.svg';
import web from '../../public/footer/web.svg';
import yandex from '../../public/footer/yandex.svg';
//------------------------------------------
const Footer = () => {
    const PaySistem = [
        {id:1, img: qiwi, txt: 'Qiwi wallet'},
        {id:2, img: yandex, txt: 'Yandex Money'},
        {id:3, img: web, txt: 'Web Money'},
    ];
    const Contacts = [
        {id:1, img: mail, txt: 'info@ipsum228.com'},
        {id:2, img: vk, txt: 'Мы вконтакте'}
    ]
    return(
        <>
            <div className={styles.Component}>
                <Container>
                    <div className={styles.Footer}>
                        <div className={styles.Copirite}>
                            © 2018 «LoremIpsum.net» Все права защищены.
                        </div>
                        <div className={styles.PaySistem}>
                            {PaySistem.map(({ id, img, txt })=>(
                                <>
                                    <div className={styles.PaySistem__item} key = {id}>
                                        <Image src={img} alt={txt}/>
                                        <span>{txt}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className={styles.Contacts}>
                            {Contacts.map(({ id, img, txt })=>(
                                <>
                                    <div className={styles.Contacts__item} key = {id}>
                                        <a 
                                            style={{'textDecoration':'none', 'color':'inherit'}} 
                                            href="#" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Image src={img} alt={txt}/>
                                            <span>{txt}</span>
                                        </a>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Footer;