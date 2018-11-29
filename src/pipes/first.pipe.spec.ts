import { FirstPipe } from './first.pipe';

describe('FirstPipe', () => {

	let array: Array<string>;
	let pipe: FirstPipe;

	beforeEach(() => {
		array = ["A", "B", "C", "D"];
		pipe = new FirstPipe();
	});

	it('should work with undefined', () => {
		expect(pipe.transform(undefined, 3)).toBeUndefined();
	});

	it('should work with null', () => {
		expect(pipe.transform(null, 3)).toBeNull();
	});

	it('should get the same for > length array', () => {
		expect(pipe.transform(array, 10)).toEqual(["A", "B", "C", "D"]);
	});

	it('should get empty for 0', () => {
		expect(pipe.transform(array, 0)).toEqual([]);
	});

	it('should ignore negative', () => {
		expect(pipe.transform(array, -2)).toEqual([]);
	});

	it('should trim', () => {
		expect(pipe.transform(array, 2)).toEqual(["A", "B"]);
	});

});
