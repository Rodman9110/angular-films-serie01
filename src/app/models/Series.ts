import { DecimalPipe } from '@angular/common';

export class Series{
    constructor(
    public  id: number,
	public name: string,
	public duration: DecimalPipe,
	public description: string,
	public premiere: string,
	public classification: string,
	public episode: number,
	public season: number,
	public poster_series: string
        
    ){}
}