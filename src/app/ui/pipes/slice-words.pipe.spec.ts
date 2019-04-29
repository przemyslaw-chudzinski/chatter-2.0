import { SliceWordsPipe } from './slice-words.pipe';

fdescribe('SliceWordsPipe', () => {

  let pipeInstance;

  let text;

  beforeEach(() => {
    pipeInstance = new SliceWordsPipe();
    text = 'asd asd asd asd asd asd asd asd asd asd';
  });


  it('create an instance', () => {
    expect(pipeInstance).toBeTruthy();
  });

  describe('transform', () => {

    it('should return five words when it gets string which contain more than 5 words', () => {
      expect(pipeInstance.transform(text).split(' ').length).toBe(5);
    });

    it('should return 7 words when it gets string which contain more than 7 words and as second argument equals 7', () => {
      expect(pipeInstance.transform(text, 7).split(' ').length).toBe(7);
    });

    it('should return empty string when value is null', () => {
      expect(pipeInstance.transform(null)).toBe('');
    });

    it('should return received value when given value contains less than 5 words', () => {
      text = 'asd asd asd';
      expect(pipeInstance.transform(text)).toBe(text);
    });

    it('should return text like this "asd asd asd asd asd..." when it gets text whit more than 5 words', () => {
      expect(pipeInstance.transform(text)).toBe('asd asd asd asd asd...');
    });

  });

});
