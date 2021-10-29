// -------------------------------------------------------------
// Difference expansion algorithm

function differentialExpansionEncrypt(pixel3DArray: [number, number, number, number][][])  {
    
    const pixelPairs = pixel3DArrayToPixelPairs(pixel3DArray);

    encrypt(pixelPairs)

    return pixel3DArrayToPixelPairs(pixelPairs, pixel3DArray)
}

function pixel3DArrayToPixelPairs(pixel3DArray: [number, number, number, number][][]) {

    // convert pixel 3D array to pixel pairs array (an array of integer pairs)

    return [];
}

function encrypt(pixelPairs: string | any[]) {

    for (let i = 0; i < pixelPairs.length; i++) {
        const pixelA = pixelPairs[i][0];
        const pixelB = pixelPairs[i][1];
        const bitToEncrypt = null;  // get the current bit of the text

        // encrypt the bit to pixels
    }
}

function pixelPairsTo3DArray(pixelPairs: any, pixel3DArray: any[]) {

    // convert pixel pairs array to pixel 3D array 
    
    const temporaryUpsideDownImage = pixel3DArray.reverse();
    return encodeBMPFrom3dData(temporaryUpsideDownImage);
}