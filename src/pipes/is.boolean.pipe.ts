import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isBoolean'})
export class IsBooleanPipe implements PipeTransform {

	transform(value: any): value is boolean {
		return value instanceof Boolean || typeof value === "boolean";
	}

}
