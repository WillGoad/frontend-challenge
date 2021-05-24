import React from 'react';

import Aux from '../../hoc/Aux_';
import classes from './Layout.module.css';
import Logo from '../../assets/logo.svg';

const layout = ( props ) => (
    <Aux>
        <div className={classes.Container}>
            <img  src={Logo} alt="Logo" className={classes.AppLogo}></img>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    </Aux>
);

export default layout;