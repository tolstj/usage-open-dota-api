import React, { useEffect, useState } from 'react';

import { Hero } from '../../interfaces/Hero';
import { HeroesService } from '../../services/heroes';
import { HeroCard } from './HeroCard';

import classes from './Heroes.module.scss';

export function Heroes(): JSX.Element {
    const [heroes, setHeroes] = useState<Hero[]>([]);

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
            <div className={classes.heroes__table}>
                {heroes.map((hero) => (
                    <HeroCard
                        {...hero}
                        key={hero.id}
                    />
                ))}
            </div>
        </div>
    );
}
