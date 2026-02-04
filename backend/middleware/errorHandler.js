const errorHandler = (error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'Server Error';

  // Mongoose bad ObjectId
  if (error.name === 'CastError') {
    message = 'Resource not found';
    statusCode = 404;
  }

  // Mongoose duplicate key
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue)[0];
    message = `${field} aldready exists`;
    statusCode = 400;
  }

  // Mongoose validation error
  if (error.name === 'ValidationError') {
    message = Object.values(error.errors)
      .map((val) => val.message)
      .join(', ');
    statusCode = 400;
  }

  //Multer file size error
  if (error.code === 'LIMIT_FILE_SIZE') {
    message = 'File size exceeds the maximum limit of 10MB';
    statusCode = 400;
  }

  // JWT errors
  if (error.name === 'JsonWebTokenError') {
    message = 'Invalid token';
    statusCode = 401;
  }

  if (error.name === 'TokenExpiredError') {
    message = 'Token expired';
    statusCode = 401;
  }

  console.error('Error:', {
    message: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  });

  res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
    ...(process.env.NODE_ENV === 'development' ? { stack: error.stack } : {}),
  });
};

export default errorHandler;
