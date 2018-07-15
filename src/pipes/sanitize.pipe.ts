import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'sanitize'})
export class SanitizePipe implements PipeTransform {

	constructor(private domSanitizer: DomSanitizer) {}

	transform(value: any, type?: string) {
		if (!value) {
			return value;
		}
		return this.domSanitizer.sanitize(SecurityContext.HTML, value);
	}
}
