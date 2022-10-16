# Image Processing API

## Usage

1. Configure build environment
   1. install npm packages dependencies
      ```bash
      npm i
      ```

   2. For reference, proposed set of packages with their versions are package.json file as well as in *Dependencies* section

2. Run server
    ```bash
    # Run server with node.js
    npm run start
    ```
    
3. Access the endpoints
   1. http://HostURL:3000/status [GET]

   2. http://HostURL:3000/api/images [GET] (query parameters: filename, width, height)
      - expected parameters
         - filename should be provided as 'encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', or 'santamonica.'
         - width and height should be provided as positive integers.
      - sample URL: http://HostURL:3000/api/images?filename=fjord&width=500&height=500

* Unit testing using Jasmine
    ```bash
    npm run test
    ```

## Dependencies

| Type | Description |
| ----------- | ----------- |
| Software | The project is tested on Google Chrome 100.0.4896.75(official build) (arm64) with javascript version 1.7. The project is tested on node.js version 16.14.2. The project is tested with packages dependencies with their versions (below the table)|
| Firmware | No known dependency |
| Hardware | the project is tested on MacBook Air (M1, 2020) |

```javascript
 "dependencies": {
    "express": "^4.18.1",
    "sharp": "^0.31.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/jasmine": "^4.0.3",
    "@types/node": "^18.7.16",
    "@types/sharp": "^0.30.5",
    "@types/supertest": "^2.0.12",
    "@typescript-eslint/eslint-plugin": "^5.32.0",
    "@typescript-eslint/parser": "^5.32.0",
    "eslint": "^8.21.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-prettier": "^4.2.1",
    "fs": "^0.0.1-security",
    "jasmine": "^4.4.0",
    "jasmine-spec-reporter": "^7.0.0",
    "prettier": "^2.7.1",
    "supertest": "^6.2.4",
    "typescript": "^4.8.3"
  }
```

## List of files
- spec
   - support
      - jasmine.json
- src
   - tests
      - helpers
         - reporter.ts
      - utilities
         - imageSpec.ts
      - indexSpec.ts
   - utilities
      - image.ts
   - index.ts
- assets
   - full
      - encenadaport.jpg
      - fjord.jpg
      - icelandwaterfall.jpg
      - palmtunnel.jpg
      - santamonica.jpg
   - thumb
- .eslintrc.js
- .gitignore
- .prettierrc
- .CODEOWNERS
- LICENCE.txt
- package.json
- README.md
- tsconfig.json

## License

[License](LICENSE.txt)