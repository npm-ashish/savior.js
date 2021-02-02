

/**
 * @function saveAsFile
 * @desc saves base64 byte data as file to local disc
 * @param { string } byteData base64 data to be saved
 * @param { string } fileName name of the file it has to be saved as
 * @param { string } type document type
 */
function saveAsFile (byteData, fileName, type) {
    const linkSource = `data:application/${type};base64,${byteData}`;
    const downloadLink = document.createElement("a");
    
    //
    fileName = fileName || `document.${type}`;

    //
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}

// export
export { saveAsFile as savior };