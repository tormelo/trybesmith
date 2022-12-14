const errorMap = {
  REQUIRED_FIELD: 400,
  INVALID_VALUE: 422,
};

const mapError = (type: string) => errorMap[type as keyof typeof errorMap] || 500;

export default mapError;
