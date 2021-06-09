# Subscription manager

## Tech Stack:

### Frontend:

- React TS
- React Router
- MobX
- mobx-react-lite
- use-debounce
- react-colorful
- SASS
- axios

### Backend:

- Node TS
- Express
- express-validator
- MongoDB
- mongoose
- Passport

---

## Start server:

Clone down this repository. You will need `Docker` installed globally on your machine.

⚠ Don't forget to customize your `server/.env` file.

Create docker image:

`docker build -t subscr_manager .`

To Start Server:

`docker run -p 5000:5000 subscr_manager`

To Visit App:

[`localhost:5000`](http://localhost:5000/)

---

## Development server:

Clone down this repository. You will need `node`, `npm` and `yarn` installed globally on your machine.

Installation:

`npm run install-server`

`npm run install-client`

⚠ Don't forget to customize your `server/.env` file.

To Start Server:

`npm run start-server`

`npm run start-client`

To Visit App:

[`localhost:3000`](http://localhost:3000/)
