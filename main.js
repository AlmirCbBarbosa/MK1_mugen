import {tela} from "./scripts/classes/tela.js";

(function()
{ 
    //configurando o canvas -----------------------------------------------------
    const canvas = document.getElementById('tela'); // armazenado o elemento canvas em uma variável
    const ctx = canvas.getContext("2d"); // contexto 2d

    canvas.width = 800; // largura do canvas
    canvas.height = 600; // altura do canvas

    // canvas com a tela preta
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //---------------------------------------------------------------------------

    //carregando as imagens ------------------------------------------------------
    const imagemLogo = new Image();
    imagemLogo.src = './arquivos/telas/logo/DEV-TROZ.jpg';

    const imagemMK1 = new Image();
    imagemMK1.src = './arquivos/telas/MK1_mugen/MK1_mugen.jpg';
    //----------------------------------------------------------------------------

    //carregando os sons----------------------------------------------------------
    const somLogo = new Audio('./arquivos/telas/logo/DevSom.wav');

    const somMK1 = new Audio('./arquivos/telas/MK1_mugen/MK1_tema.mp3');
    //-----------------------------------------------------------------------------
    
    // criando as instacias da classe tela----------------------------------------------
    const telaLogo = new tela(imagemLogo, somLogo);
    const telaMK1 = new tela(imagemMK1, somMK1);   

    //-------------------------------------------------------------------------

    //DOM-------------------------------------------------------------------------
    const botaoIniciar = document.getElementById('iniciar');

    //variaveis comuns ---------------------------------------------------------
    let jogoStatus = 'inicial' //inicial,game,fim
    //---------------------------------------------------------------------
    
    
    
        
   function loopGame()
    {
        atualizarGame();
        renderizarGame();
        requestAnimationFrame(loopGame);
    }
    function atualizarGame()
    {

    }

    function renderizarGame()
    {
        switch (jogoStatus)
        {
            case 'inicial':
                if(telaLogo.estado == 'nao_reproduzido')
                {
                    telaLogo.reproduzir(ctx, 0, 0, canvas.width, canvas.height);
                }

                if(telaMK1.estado == 'nao_reproduzido' && telaLogo.estado == 'reproduzido')
                {
                    telaMK1.reproduzir(ctx, 0, 0, canvas.width, canvas.height);
                }
        }

    }


    botaoIniciar.addEventListener('click',()=>
    {   
        botaoIniciar.style.display = 'none';
        loopGame();
    }) 
}()); 
