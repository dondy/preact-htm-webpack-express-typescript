# project-template

## TODO

- [docker development container](https://code.visualstudio.com/docs/remote/containers)

## DOING

## DONE

- yarn setup

  ```
  npm i -g yarn
  mkdir project-template
  yarn set version berry
  yarn set version latest
  yarn init
  yarn add eslint prettier typescript --dev
  yarn dlx @yarnpkg/pnpify --sdk vscode
  ```

- tsconfig.json

- add express

  ```
  yarn add express
  yarn add @types/express --dev
  touch server.ts index.{html,css,ts}
  ```

- add webpack

  ```
  yarn add webpack webpack-cli ts-loader --dev
  mkdir dist
  mv index.{html,css} dist
  mkdir src
  mv index.ts src
  ```

- webpack.config.js

- `yarn add preact htm`
