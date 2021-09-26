import React from 'react';

import { Hero } from '../../../../interfaces/Hero';
import { URL } from '../../../../services/api';

import classes from './FullHeroInformation.module.scss';

export function FullHeroInformation({
    localized_name,
    img,
}: Hero): JSX.Element {
    return (
        <div className={classes.fullHeroInformation}>
            <img src={`${URL}${img}`} alt="hero-avatar" />
        </div>
    );
}
