# savior.js
A JavaScript utility to save base64 data as a file on local disc. 
This supports more than 650+ file types.

# installation
`npm install savior.js --save`

# usage
`import { savior } from 'savior.js';`

```javascript
// byteData - base64 data to be saved as a file
// fileName - filename you want it to be saved as
// fileExtension - document type
savior(byteData, fileName, fileExtension);
```