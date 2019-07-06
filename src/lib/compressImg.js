/*
https://zocada.com/compress-resize-images-javascript-browser/
*/

export default function compressImg(imgInBase64, cb) {
    let compressedImg;

    const img = new Image();
    console.log('Hice la imagen')
    img.src = imgInBase64;
    console.log('Le cargo base64')

    img.onload = () => {
        const width = 600;
        const scaleFactor = width / img.width;

        const canvas = document.createElement('canvas');
        console.log('Creo canvas')
        canvas.width = width;
        canvas.height = img.height * scaleFactor;
        const ctx = canvas.getContext('2d');

        // img.width and img.height will contain the original dimensions
        console.log('Meto img en ctx')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        console.log('Me llevo la imagen comprimida en')
        compressedImg = ctx.canvas.toDataURL('image/jpeg');
        cb(compressedImg);

        // Esto es para que devuelva como blob. Talvez lo necesite!
        // ctx.canvas.toBlob((blob) => {
        //     const file = new File([blob], fileName, {
        //         type: 'image/jpeg',
        //         lastModified: Date.now()
        //     });
        // }, 'image/jpeg', 1);
    }
    // console.log('Devuelvo compressedImg', compressedImg)
    // return compressedImg;
}