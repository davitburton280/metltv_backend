const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_LIMIT_NUMBER = 10;

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_LIMIT_NUMBER;
  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};