import React, { useEffect, useState } from 'react';

import { Hero } from '../../interfaces/Hero';
import { HeroesService } from '../../services/heroes';
import { HeroCard } from './HeroCard';

import classes from './Heroes.module.scss';

export function Heroes(): JSX.Element {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [filterByNameInput, setFilterByNameInput] = useState<string>('');

    function onChangeFilterByNameInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setFilterByNameInput(event.target.value);
    }

    function filterByName(hero: Hero): boolean {
        return hero.localized_name.toLowerCase().startsWith(filterByNameInput.toLowerCase());
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
                    className={classes.filterByName}
                    value={filterByNameInput}
                    onChange={onChangeFilterByNameInput}
                    placeholder="Find by name"
                />
            </div>

            <div className={classes.heroes__table}>
                {heroes
                    .filter(filterByName)
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
