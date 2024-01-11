class criandoPersonagem {


	constructor(classePersonagem, ataquePersonagem){
    
		this.classePersonagem = classePersonagem
		this.ataquePersonagem = ataquePersonagem}
        
        escrever(){
        console.log(`O personagem da ${this.classePersonagem} atacou usando ${this.ataquePersonagem}`)
       
    }
    }



let personagemMago =new criandoPersonagem("classe: Mago", "sua magia de bola de fogo")
let personagemLutador =new criandoPersonagem("classe:Lutador", "seus poderosos punhos")
let personagemAtirador =new criandoPersonagem("classe:Atirador", " suas flechas de fogo em seu inimigo")
let personagemSuporte =new criandoPersonagem("classe:Suporte", "seu forte escudo")


personagemMago.escrever()

 