import { AxiosErrorCodes } from '@/enums';

export const errorMessages: Record<AxiosErrorCodes, string> & {
  ERR_UNKNOWN: string;
  getError: (code: AxiosErrorCodes) => string;
} = {
  ERR_BAD_REQUEST: 'Неправильный запрос',
  ERR_NOT_FOUND: 'Не найдено',
  ERR_REQUEST_TIMEOUT: 'Время вышло',
  ERR_TOO_MANY_REQUESTS: 'Слишком много запросов',
  ERR_UNKNOWN: 'Произошла неизвестная ошибка',
  getError: code => errorMessages[code] ?? errorMessages.ERR_UNKNOWN,
};
