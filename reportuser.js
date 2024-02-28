const dropArea=document.getElementById("drop-area");
const inputFile=document.getElementById("input-file");
const imageView=document.getElementById("img-view");
const imageLinkParagraph = document.getElementById("image-link");
inputFile.addEventListener("change",uploadImage);

function uploadImage()
{
    inputFile.files[0];
    let imgLink=URL.createObjectURL( inputFile.files[0]);
    imageView.style.backgroundImage=`url(${imgLink})`;
    imageView.textContent="";
    imageView.style.border=0;
    imageLinkParagraph.textContent = "Image Link: " + imgLink;
    localStorage.setItem('imageLink', imgLink);
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
