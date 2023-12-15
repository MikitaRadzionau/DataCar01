let addVue = document.querySelector('.el-add');
let button = document.querySelector('.btn');
let choiceVue = document.querySelector('.elChoice');
let button2 = document.querySelector('.btn2');

button.addEventListener("click",(evt)=>{
    evt.preventDefault();
    addVue.classList.toggle("el-add-hide")
});
button2.addEventListener("click",(evt2)=>{
    evt2.preventDefault();
    choiceVue.classList.toggle("elChoice-hide")
})

let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
}
