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

	it('should work with undefined string', () => {
		expect(pipe.transform(undefined, isOdd)).toBeUndefined();
	});

	it('should work with null string', () => {
		expect(pipe.transform(null, isOdd)).toBeNull();
	});

	it('should get sanitized URL', () => {
		expect(pipe.transform([9, 6, 1, 7, 4], isOdd)).toEqual([9, 1, 7]);
	});

});
