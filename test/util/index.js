import { assert } from 'chai';
const {formatTime}=require('../../mini/utils/util');

describe('Util test.', () => {
  it('formatTime', () => {
    assert(formatTime(new Date()), 'formatTime error');
  });

});
