import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isArray'})
export class IsArrayPipe implements PipeTransform {

	transform(arr: any): boolean {
        return Array.isArray(arr);
	}

}