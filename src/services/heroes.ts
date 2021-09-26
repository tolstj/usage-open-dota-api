import { Hero } from '../interfaces/Hero';
import { URL_API } from './api';

export class HeroesService {
    public static async get(): Promise<Hero[]> {
        const heroes = await fetch(`${URL_API}/heroStats`);
        return heroes.json();
    }
}
