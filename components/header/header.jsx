/**
 * Create by Kuznetsov Leonid 
 * 15.12.2022
 */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/header.module.scss';
import NavbarAPI from '../../pages/api/navbarAPI';
import Container from '../container/container';
import Hamburger from '../hamburger/hamburger';

const Header = () => {
    const [ Collapse, SetCollapse ] = useState(false);
    let condition = Collapse;
    const {pathname} = useRouter();


    const Navbar = () => {
        return(
            <>
            {NavbarAPI.map(({ id, item, path }) => (
                <Link
                    style={{'textDecoration':'none'}}
                    key = {id}
                    href = {path}
                    className = {`${pathname === path ? styles._Active : styles._Link}`}
                >
                    {item}
                </Link>
            ))}
            </>
        );
    }

    return(
        <>
            <div className={styles.Header}>
                <Container>
                    <div className={styles.row}>
                        <div className={styles.Logo}>
                            <Link style={{'textDecoration':'none', 'color':'inherit'}} href = '/'>
                                loremipum.<blue>net</blue>
                            </Link>
                        </div>
                        <div className={styles.Navbar}>
                            <Navbar/>
                            <div className={`${styles.Hamburger}`} onClick={() => condition == false ? SetCollapse(true) : SetCollapse(false)}>
                                <Hamburger/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={`${condition == true ? styles.Navbar__toggler : styles.Navbar__collapse}`}>
                <Navbar/>
            </div>
        </>
    );
}
export default Header;