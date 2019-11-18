import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isDate'})
export class IsDatePipe implements PipeTransform {

	transform(value: any): value is string {
		return value instanceof Date;
	}

}
