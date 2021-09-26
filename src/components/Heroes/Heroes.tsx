import React, { useEffect, useState } from 'react';

import { Hero } from '../../interfaces/Hero';
import { HeroesService } from '../../services/heroes';

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
            q
        </div>
    );
}
