import { Hero } from '../interfaces/Hero';
import { URL } from './api';

const HERO_STATS_URN = '/heroStats';

export class HeroesService {
    public static async get(): Promise<Hero[]> {
        const heroes = await fetch(URL + HERO_STATS_URN);
        return heroes.json();
    }
}
