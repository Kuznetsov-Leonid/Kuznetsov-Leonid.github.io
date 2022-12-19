/**
 * create by Kuznetsov Leonid 
 * 16.12.2022
 */
import { useState } from 'react';
import styles from '../../styles/hamburger.module.scss';

const Hamburger = ({children}) => {
    const [ HamburgerOpen, SetHamburgeropen ] = useState(false);
    let condition = HamburgerOpen;
    return(
        <>
            <div 
                className={`
                    ${styles.Hamburger} 
                    ${condition == true ? styles.open : styles.close}`
                }
                onClick = {() => condition == false ? SetHamburgeropen(true) : SetHamburgeropen(false)}
                >
                <div />
                <div />
                <div />
            </div>
        </>
    );
}

export default Hamburger;