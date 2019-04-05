class NotFoundError extends Error {
  constructor (...params) {
    super(...params);
    this.code = 404;
    this.errorName = 'NOT_FOUND';
    this.resource = params[0].resource;
    this.message = `The resource ${resource} do not exist or is not available`;
  }
}

module.exports = {
  NotFoundError
}