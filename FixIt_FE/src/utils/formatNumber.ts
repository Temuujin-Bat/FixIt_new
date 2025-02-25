import numeral from 'numeral';

type InputValue = string | number | null;

function getLocaleCode() {
  return {
    code: 'he-IL',
    currency: 'ILS',
  };
}

function result(format: string, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}

const fCurrency = (inputValue: InputValue) => {
  const { code, currency } = getLocaleCode();

  if (!inputValue) return '';

  const number = Number(inputValue);

  return new Intl.NumberFormat(code, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
};

const fPercent = (inputValue: InputValue) => {
  const { code } = getLocaleCode();

  if (!inputValue) return '';

  const number = Number(inputValue) / 100;

  const fm = new Intl.NumberFormat(code, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(number);

  return fm;
};

function fShortenNumber(number: InputValue) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

export {
  fCurrency,
  fPercent,
  fShortenNumber,
};
