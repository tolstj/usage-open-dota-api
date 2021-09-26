import React, { useState } from 'react';
import cn from 'classnames';

import { Icon } from '../../../common/Icon';
import { Hero } from '../../../interfaces/Hero';
import { URL } from '../../../services/api';

import classes from './HeroCard.module.scss';
import { FullHeroInformation } from './FullHeroInformation';

export function HeroCard({
    ...props
}: Hero): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function toggle(): void {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    return (
        <div className={classes.heroCard}>
            <div className={classes.heroCard__toggler} onClick={toggle}>
                <div className={classes.heroCard__basicInformation}>
                    <img src={`${URL}${props.icon}`} alt="" />
                    <div className={classes.heroCard__name}>{props.localized_name}</div>
                </div>

                <Icon
                    className={cn(
                        classes.heroCard__iconArrowRight, {
                            [classes.heroCard__iconArrowRight_opened]: isOpen,
                        }
                    )}
                    name="arrow-right"
                />
            </div>

            {isOpen && <FullHeroInformation {...props} />}
        </div>
    );
}
