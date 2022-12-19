/**
 * create by Kuznetsov Leonid
 * 16.12.2022
 */
import styles from '../../styles/buttons.module.scss';

export const RegularButtonBlue = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${styles.RegularButtonBlue}`}
            >
                {props.title}
            </button>
        </>
    );
}

export const RegularButtonWhite = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${styles.RegularButtonWhite}`}
            >
                {props.title}
            </button>
        </>
    );
}

export const LargeButtonBlue = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${styles.LargeButtonBlue}`}
            >
                {props.title}
            </button>
        </>
    );
}