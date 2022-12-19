/**
 * create by Kuznetsov Leonid
 * 16.12.2022
 */

import Container from "../container/container";
import styles from '../../styles/lorem.module.scss';
import { RegularButtonBlue, RegularButtonWhite } from '../buttons/buttons';
import { AnimBottom } from '../animate/WueScroll';

const Lorem = () => {
    const ShortItem = [
        {id:1, item:'Totam rem aperiam eaque ipsa'},
        {id:2, item:'Sit voluptatem accusantium doloremque laudantium'},
        {id:3, item:'Sed ut perspiciatis, unde omnis iste natus error'}
    ]
    return(
        <>
            <div className={styles.jumbotrone}>
                <Container>
                    <AnimBottom>
                        <div className={styles.title}>
                            <blue>Lorem ipsum</blue> dolor sit ametconsectetur <blue>adipiscing</blue>
                        </div>
                    </AnimBottom>
                    <div className={styles.shorts}>
                        <AnimBottom>   
                            <div className={styles.shorts__title}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus!
                            </div>
                        </AnimBottom>
                        <AnimBottom>
                            <div className={styles.shorts__ittems}>
                                {ShortItem.map(({ id, item }) => (
                                    <div
                                        key={id}
                                        className = {styles._item}
                                    >
                                        - {item}
                                    </div>
                                ))}
                            </div>
                        </AnimBottom>
                    </div>
                    <div className={styles.buttons}>
                        <RegularButtonBlue title="заказать"/>
                        <RegularButtonWhite title="подробнее"/>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Lorem;