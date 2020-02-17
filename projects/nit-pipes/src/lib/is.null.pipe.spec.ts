import { IsNullPipe } from './is.null.pipe';

describe('IsNullPipe', () => {

	let pipe: IsNullPipe;

	beforeEach(() => {
		pipe = new IsNullPipe();
	});

	it('should create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should work with undefined', () => {
		expect(pipe.transform(undefined)).toBeTruthy();
	});

	it('should work with null', () => {
		expect(pipe.transform(null)).toBeTruthy();
	});

	it('should check non-null or non-undefined', () => {
		expect(pipe.transform(["abc", "de"])).toBeFalsy();
		expect(pipe.transform(123)).toBeFalsy();
		expect(pipe.transform({})).toBeFalsy();
		expect(pipe.transform({a: 1, b: 2})).toBeFalsy();
	});

});
