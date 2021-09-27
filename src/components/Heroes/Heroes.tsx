import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { Hero } from '../../interfaces/Hero';
import { HeroAttackType } from '../../interfaces/HeroAttackType';
import { HeroesService } from '../../services/heroes';
import { HeroCard } from './HeroCard';

import classes from './Heroes.module.scss';

interface FilterBy {
    name: string;
    attackType: HeroAttackType | '';
}

export function Heroes(): JSX.Element {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [filterBy, setFilterBy] = useState<FilterBy>({
        name: '',
        attackType: '',
    });

    function onChangeFilterByName(event: React.ChangeEvent<HTMLInputElement>): void {
        setFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            name: event.target.value,
        }));
    }

    function onChangeFilterByAttackType(event: React.ChangeEvent<HTMLSelectElement>): void {
        setFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            attackType: event.target.value as HeroAttackType,
        }));
    }

    function filterByName(hero: Hero): boolean {
        return hero.localized_name.toLowerCase().startsWith(filterBy.name.toLowerCase());
    }

    function filterByAttackType(hero: Hero): boolean {
        if (!filterBy.attackType) return true;
        return hero.attack_type === filterBy.attackType;
    }

    async function setupHeroes(): Promise<void> {
        setHeroes(
            await HeroesService.get()
        );
    }

    useEffect(() => {
        setupHeroes();
    }, []);

    return (
        <div className={classes.heroes}>
            <div className={classes.heroes__filter}>
                <input
                    className={cn(classes.filter, classes.filterByName)}
                    value={filterBy.name}
                    onChange={onChangeFilterByName}
                    placeholder="Find by name"
                />

                <select
                    className={cn(classes.filter, classes.filterByAttackType)}
                    onChange={onChangeFilterByAttackType}
                >
                    <option value="">Attack type</option>
                    <option value={HeroAttackType.Melee}>{HeroAttackType.Melee}</option>
                    <option value={HeroAttackType.Ranged}>{HeroAttackType.Ranged}</option>
                </select>
            </div>

            <div className={classes.heroes__table}>
                {heroes
                    .filter((hero) => (
                        filterByName(hero)
                        && filterByAttackType(hero)
                    ))
                    .map((hero) => (
                        <HeroCard
                            {...hero}
                            key={hero.id}
                        />
                    ))
                }
            </div>
        </div>
    );
}
