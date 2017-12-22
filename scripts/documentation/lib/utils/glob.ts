import * as _glob from 'glob';

function glob(pattern): string[] {
  return _glob.sync(pattern, { nodir: true, dot: false });
}

export default glob;
