class card extends HTMLElement {
    constructor(){
        super()
        this.build()
    }
    build () {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.style())
        shadow.appendChild(this.createCard())

    }

    style () {
        const style = document.createElement('style')
        style.textContent = `
                
            
                .card{
                    width: ${this.largura()};
                    height: ${this.altura()};
                    background-color: ${this.bgcolor()};
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;
                    box-shadow: 5px 5px 10px rgba(30, 14, 14, 0.858);
                    
                }
                
                .card-text{
                    width: 85%;
                     background-color: rgba(107, 123, 123, 0.287); 
                    padding: 4px;
                    text-align: center;
                    text-transform: uppercase;
                    color: aliceblue;
                    border-radius: 12px;
                    box-shadow: 0 0 2px rgba(255, 255, 255, 0.458);
                }
                
                .card-imagem{
                    width: 50%;
                    height: 50%;
                    border-radius: 50%;
                    box-shadow: inset 0 0 12px;
                    
                    background-image:${this.imagem()} ;
                    background-size: cover;
                
                }
        `
        return style;
    }


    createCard () {
        const card =document.createElement('div')
        card.classList.add('card')
        card.innerHTML= `
        

            <div class="card">
                <div class="card-text"> ${this.nomePersonagem()} </div>
                <div class="card-imagem"></div>
                <div class="card-text"> ${this.definicao()} </div>
            </div>
            

     


        
        
        `

        return card
    }
    bgcolor(){
        const color = this.getAttribute('data-bgcolor') ?? '#e8373e'
        return color
    }
    nomePersonagem(){
        const nome = this.getAttribute('data-nome') ?? 'nome'
        return nome
    }

    definicao(){
        const definicao = this.getAttribute('data-definir') ?? 'personagem'
        return definicao
    }
    imagem(){
        const img = this.getAttribute('data-img') ?? 'url(./img/irmaoJorel.png)'
        return img
    }
    largura(){
        let width = this.getAttribute('data-width') 
        if(width < "200px"|| width==null){
            width = "300px"
        } 

        return width
    }
    altura(){
        let height = this.getAttribute('data-height')
        if(height < "200px"|| height==null){
            height = "300px"
        } 

        return height
    }
    
    

}
customElements.define('irmao-do-jorel', card)
