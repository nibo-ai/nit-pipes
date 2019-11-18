import { IsArrayPipe } from './is.array.pipe';

describe('IsArrayPipe', () => {

	let pipe: IsArrayPipe;

	beforeEach(() => {
		pipe = new IsArrayPipe();
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

	it('should check arrays', () => {
		expect(pipe.transform([])).toBeTruthy();
		expect(pipe.transform([1, 2, 3])).toBeTruthy();
		expect(pipe.transform(new Array(10))).toBeTruthy();
		expect(pipe.transform(new Array("a", "b", "c"))).toBeTruthy();
	});

	it('should check non-arrays', () => {
		expect(pipe.transform("abc")).toBeFalsy();
		expect(pipe.transform({})).toBeFalsy();
		expect(pipe.transform({a: 1, b: 2})).toBeFalsy();
	});

});
