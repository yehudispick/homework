import { Person } from './person';
import { Item } from './item';

export interface Order{
    person: Person;
    date: String;
    item: Item;

}