import xbytes from '../lib';

it('stringify bytes', () => {
  expect(xbytes(2375)).toBe('2.38 KB');
});

it('human readable parsing', () => {
  expect(xbytes.parseSize('74 TiB')).toBe(81363860455424);
});

it('decimal parsing', () => {
  expect(xbytes.parseSize('776.74 TiB')).toBe(854034661758730.2);
  expect(xbytes.parseSize('0.543 GB')).toBe(543000000);
});

it('expected failures', () => {
  expect(xbytes.parseSize('.293 B')).toBe(undefined);
});
