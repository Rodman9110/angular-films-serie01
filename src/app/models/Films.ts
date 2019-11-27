import { DecimalPipe } from '@angular/common';

export class Films{
    constructor(
    public  id: number,
	public name: string,
	public duration: DecimalPipe,
	public description: string,
	public premiere: string,
	public classification: string
        
    ){}
}