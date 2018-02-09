import { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';

describe('ArrayJoinPipe', () => {

	let pipe: ArrayJoinPipe, impurePipe: ArrayImpureJoinPipe;

	//setup
	beforeEach(() => {
		pipe = new ArrayJoinPipe();
		impurePipe = new ArrayImpureJoinPipe();
	});

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

	it('should work with undefined', () => {
		expect(pipe.transform(undefined)).toBeUndefined();
	});

	it('should work with null', () => {
		expect(pipe.transform(null)).toBeNull();
	});

	it('should get the same if not array', () => {
		expect(pipe.transform("just a string")).toEqual("just a string");
		expect(pipe.transform(23)).toEqual("23");
	});

	it('should get joined', () => {
		expect(pipe.transform(["Gigel", "Ionel", "Dorel"])).toEqual("Gigel, Ionel, Dorel");
		expect(pipe.transform(["Gigel", "Ionel", "Dorel"], "|")).toEqual("Gigel|Ionel|Dorel");
	});

	it('impure: should create an instance', () => {
    expect(impurePipe).toBeTruthy();
  });

	it('impure: should work with undefined', () => {
		expect(impurePipe.transform(undefined)).toBeUndefined();
	});

	it('impure: should work with null', () => {
		expect(impurePipe.transform(null)).toBeNull();
	});

	it('impure: should get the same if not array', () => {
		expect(impurePipe.transform("just a string")).toEqual("just a string");
		expect(impurePipe.transform(23)).toEqual("23");
	});

	it('impure: should get joined', () => {
		expect(impurePipe.transform(["Gigel", "Ionel", "Dorel"])).toEqual("Gigel, Ionel, Dorel");
		expect(impurePipe.transform(["Gigel", "Ionel", "Dorel"], "|")).toEqual("Gigel|Ionel|Dorel");
	});
});
