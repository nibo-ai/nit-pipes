import { LastPipe } from './last.pipe';

describe('LastPipe', () => {

	let array: Array<string>;
	let pipe: LastPipe;

	beforeEach(() => {
		array = ["A", "B", "C", "D"];
		pipe = new LastPipe();
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
		expect(pipe.transform(array, -3)).toEqual([]);
	});

	it('should trim', () => {
		expect(pipe.transform(array, 2)).toEqual(["C", "D"]);
	});

});
