const dbconfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  db: process.env.PGDATABASE,
  dbport: process.env.PGPORT,
  dbstring: process.env.PGURI,
};

console.log(dbconfig);

export default dbconfig;
