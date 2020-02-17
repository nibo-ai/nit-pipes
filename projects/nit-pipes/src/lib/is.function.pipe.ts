import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isFunction'})
export class IsFunctionPipe implements PipeTransform {

	transform(value: any): value is Function {
		return value instanceof Function || typeof value === "function";
	}

}
