import { IsStringPipe } from './is.string.pipe';

describe('IsStringPipe', () => {

	let pipe: IsStringPipe;

	beforeEach(() => {
		pipe = new IsStringPipe();
	});

	it('should create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should work with undefined string', () => {
		expect(pipe.transform(undefined)).toBeFalsy();
	});

	it('should work with null string', () => {
		expect(pipe.transform(null)).toBeFalsy();
	});

	it('should check strings', () => {
		// tslint:disable-next-line: no-construct
		expect(pipe.transform(new String("abc"))).toBeTruthy();
		expect(pipe.transform("abc")).toBeTruthy();
		expect(pipe.transform({a: 1}.toString())).toBeTruthy();
	});

	it('should check non-strings', () => {
		expect(pipe.transform(["abc", "de"])).toBeFalsy();
		expect(pipe.transform(123)).toBeFalsy();
		expect(pipe.transform({})).toBeFalsy();
		expect(pipe.transform({a: 1, b: 2})).toBeFalsy();
	});

});
