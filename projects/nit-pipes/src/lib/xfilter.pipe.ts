import { Pipe, PipeTransform } from '@angular/core';

/**
 * Filters the given array using a custom function.
 */
@Pipe({name: "xfilter"})
export class XFilterPipe<T> implements PipeTransform {

	transform(arr: Array<T>, filter: (e: T) => boolean): Array<T> {
		if (!arr) {
			return arr;
		}
		if (!filter) {
			return arr;
		}
		return arr.filter(filter);
	}
}
