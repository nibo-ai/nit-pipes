import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'initials'
})
export class InitialsPipe implements PipeTransform {

	transform(name: any, maxLength?: number): any {
		if (!name) {
			return name;
		}
		if (!name.split) {
			name = name.toString();
		}
		if (name.length <= 0) {
			return name;
		}
		let initials = "";
		const s = name.split(' ');
		if (s.length === 1) {
			initials = name;
		} else {
			for (let i = 0, n = s.length; i < n; i++) {
				initials += s[i][0];
			}
			initials = initials.toUpperCase();
		}
		if (!maxLength) {
			maxLength = 3;
		}
		if (initials.length > maxLength) {
			initials = initials.substr(0, maxLength);
		}
		return initials;
	}

}
