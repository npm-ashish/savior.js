import mimeTypes from './mime-types.js';

/**
 * @function saveAsFile
 * @desc saves base64 byte data as file to local disc
 * @param { string } byteData base64 data to be saved
 * @param { string } fileName name of the file it has to be saved as
 * @param { string } extension document type
 */
function saveAsFile (byteData, fileName, extension) {
    const mime = mimeTypes[extension.toLowerCase()] || 'text/plain';
    const linkSource = `data:${mime};base64,${byteData}`;
    const downloadLink = document.createElement("a");
    
    // file name
    fileName = fileName || `document.${extension}`;

    // save to local
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}

// export
export { saveAsFile as savior };