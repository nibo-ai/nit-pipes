import { IsBooleanPipe } from './is.boolean.pipe';

describe('IsBooleanPipe', () => {

	let pipe: IsBooleanPipe;

	beforeEach(() => {
		pipe = new IsBooleanPipe();
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

	it('should check booleans', () => {
		expect(pipe.transform(false)).toBeTruthy();
		expect(pipe.transform(true)).toBeTruthy();
		// tslint:disable-next-line: no-construct
		expect(pipe.transform(new Boolean(false))).toBeTruthy();
		// tslint:disable-next-line: no-construct
		expect(pipe.transform(new Boolean(true))).toBeTruthy();
	});

	it('should check non-booleans', () => {
		expect(pipe.transform("abc")).toBeFalsy();
		expect(pipe.transform({})).toBeFalsy();
		expect(pipe.transform({a: 1, b: 2})).toBeFalsy();
	});

});
