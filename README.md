# savior.js
A JavaScript utility to save base64 data as a file on local disc.

# installation
`npm install savior.js --save`

# usage
`import { savior } from 'savior.js';`

```javascript
// byteData - base64 data to be saved as a file
// fileName - filename you want it to be saved as
// type - document type
savior(byteData, fileName, type);
```