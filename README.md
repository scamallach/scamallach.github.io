## Fáilte go dtí baile na scamaill!

Today's weather report: cloudy with a chance of rainbows.

#### Contributing

Pre-requisites:
- Read up on how this site was generated in the [React Readme](REACT_README.md)
- Install Node, npm
- From the root run `npm install` to pull in dependencies

Development:
- `dev` is the blessed branch. Start from there and create pull requests as usual. One review is required before each merge.
- From the root run `npm start` to debug as you go
- Preview the final site package at any time by running `npm run build`

Deployment:
- Have repo admin powers 😈
- From the dev branch run `npm run deploy`. This will build a minified release in your local `build` folder, and then commit the contents of that folder directly to the remote master branch. The commit message will always be "Updates".
