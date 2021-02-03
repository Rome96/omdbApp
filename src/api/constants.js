const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5eec5adc&s";

const HTTP_STATUSES = {
  OK: 200,
  VALID: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
};

export {
  URL,
  HTTP_STATUSES
}