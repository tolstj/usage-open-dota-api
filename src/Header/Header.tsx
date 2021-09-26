import React from 'react';
import { NavLink } from 'react-router-dom';

import { headerRoutes } from '../routes';

import classes from './Header.module.scss';

export function Header(): JSX.Element {
    return (
        <div className={classes.header}>
            {headerRoutes.map(({ name, route }) => (
                <NavLink
                    to={route}
                    className={classes.header__link}
                    activeClassName={classes.header__link_active}
                >
                    {name}
                </NavLink>
            ))}
        </div>
    );
}
