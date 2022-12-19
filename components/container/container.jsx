/**
 * create by Kuznetsov Leonid 
 * 15.12.2022
 */
import styles from '../../styles/container.module.scss';

const Container = ({ children }) => {
    return (
        <>
            <div className={styles.Container}>
                {children}
            </div>
        </>
    );
}
export default Container