/**
 * create by Kuznetsov Leonid 
 * 16.12.2022
 */

import Fade from 'react-reveal/Fade';

export const AnimBottom = ({children}) => {
    return(
        <>
            <Fade bottom>
                {children}
            </Fade>
        </>
    );
}
