import { SliceCharsPipe } from './slice-chars.pipe';

fdescribe('SliceCharsPipe', () => {

  let pipe;

  beforeEach(() => {
    pipe = new SliceCharsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it ('should return text which have length 20 chars when it gets value which have greater than 20 characters', () => {
    const result = pipe.transform('asd asd asd asd asdsss asd asd asdsa as', 20);
    expect(result.length).toBe(20);
  });

  it ('should return input value when input is equals or less than 20 when value', () => {
    const result = pipe.transform('asd asd asd', 20);
    expect(result).toBe('asd asd asd');
  });

});
