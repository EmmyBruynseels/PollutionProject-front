import { ContinentPollution } from 'src/app/continent-pollution/models/continent-pollution.model';

export class Continent {
    constructor(
        public continentId:number,
        public name:String,
        public continentPollutions:ContinentPollution[]
    ){}
}
