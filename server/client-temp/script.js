const userVideo = document.getElementById("user-stream")
window.addEventListener('load', async e=>{
    const media = await navigator
    .mediaDevices
    .getUserMedia({audio: true , video: true})
    userVideo.srcObject = media
})
// document.getElementById('start-stream').addEventListener('onclick',