const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const imageLinkParagraph = document.getElementById("image-link");

inputFile.addEventListener("change", uploadFile);

function uploadFile() {
    const file = inputFile.files[0];

    if (file.type.startsWith('image/')) {
        // If the uploaded file is an image
        const imgLink = URL.createObjectURL(file);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent = "";
        imageView.style.border = 0;
        imageLinkParagraph.textContent = "Image Link: " + imgLink;
        localStorage.setItem('imageLink', imgLink);
    } else if (file.type.startsWith('video/')) {
        // If the uploaded file is a video
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.controls = true;
        video.style.width = '100%'; // Match the container width
        video.style.height = '100%'; // Match the container height
        video.style.borderRadius = '20px';
        video.style.border = '2px dashed #bbb5ff';
        video.style.background = '#ecf4f3';
        video.style.backgroundPosition = 'center';
        video.style.backgroundSize = 'cover';
        video.style.margin = 'auto'; // Center horizontally
        video.style.display = 'block'; // Ensure block-level element
        imageView.innerHTML = '';
        imageView.appendChild(video);
        imageLinkParagraph.textContent = "Video Link: " + video.src;
        localStorage.setItem('videoLink', video.src);
    }
}

        function toggleCheckbox(selectedCard) {
            var cards = document.querySelectorAll('.card');
            cards.forEach(function (card) {
                if (card !== selectedCard) {
                    card.classList.remove('selected');
                    card.querySelector('.checkmark').style.display = 'none';
                }
            });
    
            selectedCard.classList.toggle('selected');
            var checkmark = selectedCard.querySelector('.checkmark');
            checkmark.style.display = selectedCard.classList.contains('selected') ? 'block' : 'none';
        }

        const findMyState = ()=>{
            const status=document.querySelector('.status');

            const success =(position)=>
            {
                console.log(position);
                const latitude=position.coords.latitude;
                const  longitude=position.coords.longitude;
                //console.log(latitude +' '+longitude);
                const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
                fetch(geoApiUrl)
                .then(res=>res.json())
                .then(data=>{
                    const place=data.locality;
                })
            }
            const error =()=>
            {
                status.textContent ='Unable to retrieve your location';
            }
            navigator.geolocation.getCurrentPosition(success,error);
        }
        document.querySelector('.find-state').addEventListener('click',findMyState);
        localStorage.setItem('LAT',latitude);
        localStorage.setItem('LON',longitude);
        localStorage.setItem('LOC',place);
