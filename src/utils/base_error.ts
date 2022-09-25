export class BaseError extends Error {
  name: string;
  statusCode: number;
  isOperational: boolean;
  description?: string;

  constructor(name: string, statusCode: number, isOperational: boolean, description?: string) {
    super();
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.description = description;
  }
}
