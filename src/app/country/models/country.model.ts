import { CountryPollution } from 'src/app/country-pollution/models/country-pollution.model';

export class Country {
    constructor(
        public id:number,
        public name:String,
        public continentID:number,
        public countryCode:String,
        public population:number,
        public area:number,
        public industry:number,
        public agriculture:number,
        public popDensity:number,
        public literacy:number,
        public countryPollution:CountryPollution[]
    ){}
}
