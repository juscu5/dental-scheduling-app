const allowedAppSite = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:8085",
  "http://192.168.2.250:8085",
  "http://a42a158350bd24c4389db2b0f168ee1a-4756918.us-east-1.elb.amazonaws.com"
];

const corsOptions = {
  origin: allowedAppSite,
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE"],
  headers: ["Content-Type", "Authorization", "X-Requested-With"],
};

const xOptions = {
  frameguard: {
    action: "deny",
  },
};

module.exports ={
    corsOptions,
    xOptions
}

