const inputButton = document.getElementById('inputButton');
const video = document.getElementById('video');
const form = document.getElementById('form');

inputButton.addEventListener('click', () => video.click());
    video.addEventListener('change', () => {
        if(video.files.length > 0) {
            form.submit();
        }
            });
        