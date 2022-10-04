export class tela 
{
    fundo;
    som;
    estado; // nao_reproduzido - em_reproducao - reproduzido

    constructor(imagem, audio) 
    {
        this.fundo = imagem; // colocar arquivos de imagens
        this.som = audio; // arquivos de som 
        this.estado = 'nao_reproduzido'  
        
        //ouvidores
        this.som.addEventListener('ended', ()=>
        {
            this.estado = 'reproduzido';
            console.log(this.estado)//           
        });
    } 

    // metodo---------------------------------------------------------------------------------
    reproduzir(canvasContexto, posX, posY, largura, altura) // printa a imagem na tela com o audio
    {
       canvasContexto.drawImage(this.fundo, posX, posY, largura, altura);
       this.som.play(); 
       this.estado = 'em_reproducao';
       console.log(this.estado)       
    }   
}

