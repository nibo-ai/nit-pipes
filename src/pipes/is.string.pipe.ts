import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isString'})
export class IsStringPipe implements PipeTransform {

	transform(value: any): value is string {
		return value instanceof String || typeof value === "string";
	}

}
