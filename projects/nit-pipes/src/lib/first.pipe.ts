import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'first'
})
export class FirstPipe implements PipeTransform {

	transform(array: Array<any>, length: number): Array<any> {
		if (!array) {
			return array;
		}
		if (length <= 0) {
			return [];
		}
		return array.slice(0, length);
	}

}
