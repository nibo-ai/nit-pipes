import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {

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
		switch (context) {
			case SecurityContext.HTML:
				return this.domSanitizer.bypassSecurityTrustHtml(value);
			case SecurityContext.RESOURCE_URL:
				return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
			case SecurityContext.SCRIPT:
				return this.domSanitizer.bypassSecurityTrustScript(value);
			case SecurityContext.STYLE:
				return this.domSanitizer.bypassSecurityTrustStyle(value);
			case SecurityContext.URL:
				return this.domSanitizer.bypassSecurityTrustUrl(value);
		}
		return this.domSanitizer.sanitize(context as SecurityContext, value);
	}
}
