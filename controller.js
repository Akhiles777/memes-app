class Controller{
    constructor(){
        this.model = new Model({
            onMemesChange: this.handleModelMemesChange,
            onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
            onTextTopChange: this.handleModelTextTopChange,
            onTextBottomChange: this.handleModelTextBottomChange
        });
        this.view = new View({onMemesChange: this.handleViewMemeChange, onTextTopChange: this.handleViewTextTopChange,
            onTextBottomChange: this.handleViewTextBottomChange
        });
        this.api = new Api()
    }


init(){


this.api.getMemes()

.then(data => {

 const memes = data.data.memes

    this.model.setMemes(memes)
})










    
}


handleModelMemesChange = () => {
    this.view.renderMemesSelect(this.model.getMemes(),this.model.getCurrentMemeId())


}

handleViewMemeChange = (id) => {


this.model.setCurrentMemeId(id)

}



handleModelCurrentMemeIdChange = () => {
      
     

this.view.renderPreview(this.model.getPreview())

}



handleViewTextTopChange = (text) =>{
 

this.model.setTextTop(text)

}


handleViewTextBottomChange = (text) =>{
 
    this.model.setTextBottom(text)
    
}


handleModelTextTopChange = () =>{
    this.view.renderPreview(this.model.getPreview())

}


handleModelTextBottomChange = () =>{
    this.view.renderPreview(this.model.getPreview())

}


}