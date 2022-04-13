const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Promt to select media strea, pass to video element and then play it.
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
     } catch (error) {
        //Catch error here
        console.log('There\'s an error here: ', error)
    }
}

button.addEventListener('click', async () => {
    //Disable the button
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

//On Load
selectMediaStream();