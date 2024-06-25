const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'ndwiga1441',
  server: 'localhost',
  database: 'DESKTOP-IJ36Q8F',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

sql.connect(config, err => {
  if (err) console.log('Connection error:', err);
  else console.log('Connected to the database.');
});
