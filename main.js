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
    
    //criando objetos da tela------------------------------------------------------
    const telaLogo =
    {
        imagem: imagemLogo,
        som: somLogo,
        situacao: 0, // 0- não executado, 1-em execução, 2- executado
        reproduzir: 1 // 0- não reproduzir, 1- reproduzir
    };

    const telaMK1 =
    {
        imagem: imagemMK1,
        som: somMK1,
        situacao: 0, // 0- não executado, 1-em execução, 2- executado
        reproduzir: 0 // 0- não reproduzir, 1- reproduzir
    };
    //-----------------------------------------------------------------------------

    //DOM-------------------------------------------------------------------------
    const botaoIniciar = document.getElementById('iniciar');



    //variaveis comuns ---------------------------------------------------------
    let jogoStatus = 'inicial' //inicial,game,fim

    //Ouvidores------------------------------------------------
    telaLogo.som.addEventListener('ended',()=>
    {
        telaLogo.situacao = 2;
        telaMK1.reproduzir = 1;
    });
    //---------------------------------------------------------


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
                if(telaLogo.situacao == 0 && telaLogo.reproduzir == 1)
                {
                    ctx.drawImage(telaLogo.imagem, 0, 0, canvas.width, canvas.height);
                    telaLogo.som.play();
                    telaLogo.situacao = 1;
                    telaLogo.reproduzir = 0;
                }

                if(telaMK1.situacao == 0 && telaMK1.reproduzir == 1)
                {
                    ctx.drawImage(telaMK1.imagem, 0, 0, canvas.width, canvas.height);
                    telaMK1.som.play();
                    telaMK1.situacao = 1;
                    telaMK1.reproduzir = 0;
                }
        }

    }


    botaoIniciar.addEventListener('click',()=>
    {   
        botaoIniciar.style.display = 'none';
        loopGame();
    })
}());
