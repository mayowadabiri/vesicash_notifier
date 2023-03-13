export class CustomError extends Error {
  status: number;
  data?: object;
  constructor(status: number, message: string, data?: object) {
    super(message);
    this.status = status;
    this.data = data;
  }
}
export class NotFoundError extends CustomError {
  constructor(key: string) {
    const status: number = 404;
    super(status, `${key} not found`);
    this.name = 'NotFoundError';
  }
}
export class BadRequestError extends CustomError {
  constructor(message: string, data?: object) {
    const status: number = 400;
    super(status, message, data);
    this.name = 'BadRequestError';
  }
}

export class ServerError extends CustomError {
  constructor(message: string) {
    const status: number = 500;
    super(status, message);
    this.name = 'ServerError';
  }
}
