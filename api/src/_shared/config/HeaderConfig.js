const allowedAppSite = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:8085",
  "http://192.168.2.250:8085",
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

