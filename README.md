# TypeORM Nested Entity Relation Issue

Reproduction repo:

1. `yarn`
2. `yarn build`
3. `docker run --rm -it -p 127.0.0.1:5432:5432 -ePOSTGRES_PASSWORD=test -ePOSTGRES_USER=test -ePOSTGRES_DB=test postgres`
4. `node dist/index.js`
