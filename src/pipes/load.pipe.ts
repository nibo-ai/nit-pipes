import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

/**
 * Transforms an array into a new one tracked by a given property.
 */
@Pipe({name: "load"})
export class LoadPipe implements PipeTransform {

	asyncPipe: AsyncPipe;

	constructor(cdr: ChangeDetectorRef) {
		this.asyncPipe = new AsyncPipe(cdr);
	}

	transform(value: any): any {
		if (value instanceof Promise) {
			return this.asyncPipe.transform(value);
		}
		if (value instanceof Observable) {
			return this.asyncPipe.transform(value.toPromise());
		}
		return value;
	}
}
