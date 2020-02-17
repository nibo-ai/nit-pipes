import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'last'
})
export class LastPipe implements PipeTransform {

	transform(array: Array<any>, length: number): Array<any> {
		if (!array) {
			return array;
		}
		if (length <= 0) {
			return [];
		}
		const n = array.length;
		length = Math.min(length, n);
		return array.slice(n - length, n);
	}

}
