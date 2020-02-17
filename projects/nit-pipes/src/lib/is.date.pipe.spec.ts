import { IsDatePipe } from './is.date.pipe';

describe('IsDatePipe', () => {

	let pipe: IsDatePipe;

	beforeEach(() => {
		pipe = new IsDatePipe();
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

	it('should check dates', () => {
		expect(pipe.transform(new Date())).toBeTruthy();
		expect(pipe.transform(new Date(Date.now()))).toBeTruthy();
	});

	it('should check non-dates', () => {
		expect(pipe.transform("abc")).toBeFalsy();
		expect(pipe.transform(["abc", "de"])).toBeFalsy();
		expect(pipe.transform(123)).toBeFalsy();
		expect(pipe.transform({})).toBeFalsy();
		expect(pipe.transform({a: 1, b: 2})).toBeFalsy();
	});

});
