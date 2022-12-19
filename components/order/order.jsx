/**
 * create by Kuznetsov Leonid
 * 16.12.2022
 */

import styles from '../../styles/order.module.scss';
import Container from '../container/container';
import { AnimBottom } from '../animate/WueScroll';
import Forms from './form/form';
import FormulaList from './formulaList';


const Order = () =>{

    return(
        <>
            <div className={styles.component}>
                <Container>
                    <AnimBottom>
                        <div className={styles.title}>
                            Оформление &nbsp; <blue>заказа</blue>
                        </div>
                        <div className={styles.sub_title}>
                            Перед заполнением формы ознакомьтесь с нашей схемой работы!
                        </div>
                    </AnimBottom>
                        <FormulaList/>
                    <div>
                        <Forms/>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Order;