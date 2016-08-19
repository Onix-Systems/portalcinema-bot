import { PARSE_MODE } from '../constants';
import filmKeyboard from '../keyboards/film';

export default (...args) => ({
  parse_mode: PARSE_MODE.MARKDOWN,
  reply_markup: {
    inline_keyboard: filmKeyboard(...args)
  }
});