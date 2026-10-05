# Backend structure

- `server.js`: Express setup, shared middleware, route mounting, port 4000.
- `config/`: MySQL connection, JWT key, and product image upload storage.
- `middleware/`: cookie token verification.
- `routes/`: existing HTTP methods and paths grouped by feature.
- `controllers/`: existing request handlers and SQL queries grouped by feature.

Run with `npm start` from this directory. The MySQL connection still uses the existing `housewareshop` database settings. Product uploads still target `../src/assets/publicimg/imgproduct` relative to `server/`.

The existing `POST /login` is registered twice. Express handles it with the first handler because that handler sends a response. Both registrations are retained to preserve the current routing behavior.
