import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'sanitize'})
export class SanitizePipe implements PipeTransform {

	constructor(private domSanitizer: DomSanitizer) {}

	transform(value: any, context?: SecurityContext | string | String) {
		if (!value) {
			return value;
		}
		if (typeof context === "undefined") {
			context = SecurityContext.HTML;
		}
		if (context instanceof String) {
			context = context.toString();
		}
		if (typeof context === "string" || context instanceof String) {
			context = SecurityContext[context.replace("-", "_").toUpperCase()];
		}
		return this.domSanitizer.sanitize(context as SecurityContext, value);
	}
}
