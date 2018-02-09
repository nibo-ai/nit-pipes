import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {

	let pipe: InitialsPipe;

	//setup
	beforeEach(() => {
		pipe = new InitialsPipe();
	});

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

	it('should work with undefined string', () => {
		expect(pipe.transform(undefined)).toBeUndefined();
	});

	it('should work with null string', () => {
		expect(pipe.transform(null)).toBeNull();
	});

	it('should get initials', () => {
		expect(pipe.transform("Adrian Ber")).toEqual("AB");
		expect(pipe.transform("Dorel Ionel Gigel")).toEqual("DIG");
		expect(pipe.transform("Dorel Ionel Gigel", 2)).toEqual("DI");
	});

	it('should get initials for one word', () => {
		expect(pipe.transform("Adrian")).toEqual("Adr");
		expect(pipe.transform("Adrian", 2)).toEqual("Ad");
	});

});
