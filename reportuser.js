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