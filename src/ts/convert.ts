const today = (): string => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return `${year}-${month}-${date}`;
};

export const convert = (input: string | null): string => {
  const timeFormat: Intl.DateTimeFormatOptions = { era: 'long' };
  const date = new Date(input ?? today());
  return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', timeFormat).format(date);
};
