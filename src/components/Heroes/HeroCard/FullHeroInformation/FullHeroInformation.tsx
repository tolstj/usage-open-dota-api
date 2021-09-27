import React from 'react';
import cn from 'classnames';

import { Hero } from '../../../../interfaces/Hero';
import { URL } from '../../../../services/api';

import classes from './FullHeroInformation.module.scss';

export function FullHeroInformation({
    img,
    localized_name,
    primary_attr,
    attack_type,
    roles,
    base_health,
    base_health_regen,
    base_mana,
    base_mana_regen,
    base_armor,
    base_attack_min,
    base_attack_max,
    base_str,
    base_agi,
    base_int,
}: Hero): JSX.Element {
    return (
        <div className={classes.fullHeroInformation}>
            <img src={`${URL}${img}`} alt="hero-avatar" />

            <div className={classes.fullHeroInformation__heroDescription}>
                <div className={classes.name}>{localized_name}</div>
            
                <div className={classes.heroParams}>
                    <div className={cn(classes.param, classes.primaryAttr)}>
                        Primary attribute: {primary_attr}
                    </div>

                    <div className={cn(classes.param, classes.attackType)}>
                        Attack type: {attack_type}
                    </div>

                    <div className={cn(classes.param, classes.roles)}>
                        Roles: {roles.map((role) => `${role} `)}
                    </div>

                    <div className={cn(classes.param, classes.baseHealth)}>
                        Base health: {base_health} +{base_health_regen}
                    </div>

                    <div className={cn(classes.param, classes.baseMana)}>
                        Base mana: {base_mana} +{base_mana_regen}
                    </div>

                    <div className={cn(classes.param, classes.baseArmor)}>
                        Base armor: {base_armor}
                    </div>

                    <div className={cn(classes.param, classes.baseAttack)}>
                        Base attack: {base_attack_min}-{base_attack_max}
                    </div>

                    <div className={cn(classes.param, classes.baseStr)}>
                        Base strength: {base_str}
                    </div>

                    <div className={cn(classes.param, classes.baseAgi)}>
                        Base agility: {base_agi}
                    </div>

                    <div className={cn(classes.param, classes.baseInt)}>
                        Base intelligence: {base_int}
                    </div>
                </div>
            </div>
        </div>
    );
}
