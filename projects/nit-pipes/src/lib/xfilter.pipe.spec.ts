import { XFilterPipe } from './xfilter.pipe';

describe('XFilterPipe', () => {

	let pipe: XFilterPipe<number>;
	const isOdd = (x: number) => x % 2 === 1;

	beforeEach(() => {
		pipe = new XFilterPipe<number>();
	});

	it('should create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should work with undefined', () => {
		expect(pipe.transform(undefined, isOdd)).toBeUndefined();
	});

	it('should work with null', () => {
		expect(pipe.transform(null, isOdd)).toBeNull();
	});

	it('should get odd numbers', () => {
		expect(pipe.transform([9, 6, 1, 7, 4], isOdd)).toEqual([9, 1, 7]);
	});

});
