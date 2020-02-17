import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'join'})
export class ArrayJoinPipe implements PipeTransform {

	transform(arr: any, separator?: string): string {
		if (!arr) {
			return arr;
		}
		if (!arr.join) {
			return arr.toString();
		}
		return arr.join(separator || ", ");
	}

}

@Pipe({name: 'impureJoin', pure: false})
export class ArrayImpureJoinPipe implements PipeTransform {

	transform(arr: any, separator?: string): string {
		if (!arr) {
			return arr;
		}
		if (!arr.join) {
			return arr.toString();
		}
		return arr.join(separator || ", ");
	}

}
