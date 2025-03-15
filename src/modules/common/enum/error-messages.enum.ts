export enum ErrorMessages {
  ExpiredToken = "Token has expired",
  Unauthorized = "Unauthorized Access",
  SystemUnauthorized = "UnauthorizedException",
  TokenExpiredError = "TokenExpiredError",
  VerificationCodeExpired = "Verification Code Expired",
  BadRequestError = "Bad Request",
  PasswordExist = "Old Password and New Password cannot be same",
  InvalidFile = "Invalid File Type",
  JWTFailed = "JWT Failed",
  MagicCodeExpired = "Magic Code Expired",
}

export enum FeedbackErrorMessages {
  VideoCountLimit = "Only one video per feedback is allowed",
  VideoSizeLimit = "Video size should be less than 10 MB",
  FilesCountLimit = "Files Count should not be greater than 5",
  ImageSizeLimit = "Image size should be less than 2 MB",
}
