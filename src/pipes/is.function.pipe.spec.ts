import { IsFunctionPipe } from './is.function.pipe';

describe('isFunctionPipe', () => {

	let pipe: IsFunctionPipe;

	beforeEach(() => {
		pipe = new IsFunctionPipe();
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

	it('should check functions', () => {
		expect(pipe.transform(new Function())).toBeTruthy();
		expect(pipe.transform(() => 123)).toBeTruthy();
		expect(pipe.transform(() => { const a = 1 + 1; return a; })).toBeTruthy();
		expect(pipe.transform(function() { const a = 1 + 1; return a; })).toBeTruthy();
		expect(pipe.transform(function f() { const a = 1 + 1; return a; })).toBeTruthy();
	});

	it('should check non-functions', () => {
		expect(pipe.transform("abc")).toBeFalsy();
		expect(pipe.transform({})).toBeFalsy();
		expect(pipe.transform({a: 1, b: 2})).toBeFalsy();
	});

});
