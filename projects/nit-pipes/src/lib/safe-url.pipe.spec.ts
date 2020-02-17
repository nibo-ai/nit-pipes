import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { SafeUrlPipe } from './safe-url.pipe';

describe('SafeUrlPipe', () => {

	let pipe: SafeUrlPipe, domSanitizer: DomSanitizer;

	beforeEach(() => {
		domSanitizer = TestBed.get(DomSanitizer);
		pipe = new SafeUrlPipe(domSanitizer);
	});

	it('should create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should work with undefined string', () => {
		expect(pipe.transform(undefined)).toBeUndefined();
	});

	it('should work with null string', () => {
		expect(pipe.transform(null)).toBeNull();
	});

	it('should get sanitized URL', () => {
		expect(pipe.transform("http://www.google.com")).toEqual(domSanitizer.bypassSecurityTrustResourceUrl("http://www.google.com"));
	});

});
