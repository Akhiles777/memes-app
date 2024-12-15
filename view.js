class View{
    constructor({onMemesChange, onTextTopChange, onTextBottomChange}){
       this.previewTopTextNode = document.querySelector('.js-top-text') 
       this.previewBottomTextNode = document.querySelector('.js-text-bottom')

      this.previewImage = document.querySelector('.js-image')

      this.settingsSelectNode = document.querySelector('.js-memes-select')

      this.textTopInputNode = document.querySelector('.js-text-top')

      this.textBottomInputNode = document.querySelector('.js-bottom-text')

      this.onMemesChange = onMemesChange


      this.onTextTopChange = onTextTopChange

      this.onTextBottomChange = onTextBottomChange
      
     this.settingsSelectNode.addEventListener('change', this.handleSelectChange)
      

     this.textTopInputNode.addEventListener('input', this.handleTextTopChange)

     this.textBottomInputNode.addEventListener('input', this.handleTextBottomChange)



    }



renderPreview(preview){
const{
    url,
    textTop,
    textBottom
} = preview




this.previewTopTextNode.innerText =  textTop;

this.previewBottomTextNode.innerText = textBottom;

this.previewImage.src = url;


}

renderMemesSelect(memes, currentMemeId){
    memes.forEach(meme => {

       const{
        id,
        name
       } = meme


        const optionNode = document.createElement('option')
        optionNode.setAttribute('value', id)
        optionNode.innerText = name


      if(id === currentMemeId){
      
        optionNode.setAttribute('selected', true)
      }

  
   

        

        this.settingsSelectNode.appendChild(optionNode)


     });
}



handleSelectChange = () =>  {

  const id = this.settingsSelectNode.value

  


  this.onMemesChange(id)
}

handleTextTopChange = (event) =>{
this.onTextTopChange(event.target.value)
}

handleTextBottomChange = (event) =>{
  this.onTextBottomChange(event.target.value)
}

}

