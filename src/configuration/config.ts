export const jwtSecret = {
  secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}

export const allowedOrigins = [
  'https://www.yoursite.com',
  'http://127.0.0.1:5500',
  'http://localhost:3500'
];

export const corsOptions = {
  origin: (origin:any, callback:any) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}