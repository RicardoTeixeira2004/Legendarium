// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var racaPerso = sessionStorage.RACA_PERSONAGEM;
    var classePerso = sessionStorage.CLASSE_PERSONAGEM;
    var nomePerso = sessionStorage.NOME_PERSONAGEM;

    var racaPersonagem = document.getElementById("racaDesc");
    var classePersonagem = document.getElementById("classeDesc");
    var fotoPersonagem = document.getElementById("cardPersonagem");
    var b_usuario = document.getElementById("b_usuario");
    var m_usuario = document.getElementById("m_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);

        if (racaPerso == 'Elfo')
        {
            racaPersonagem.innerHTML = " <b> Elfo <br> </b> <br> Os Elfos auto-nominados Qundi são os primogenitos de Eru illuvatar, considerados os mais belos e sábios dos habitantes de Arda, Não envelhecem nem adoecem, e se forem mortalmente feridos ou se sofrerem um grande desgosto seu corpo morre, mas seu espírito sobrevive sendo então enviado para as Mansões de Mandos onde permanece até poder reencarnar, em um corpo idêntico e com as mesmas lembranças. Um direito que os elfos têm é o de ir, se assim desejarem, para Valinor, no continente sagrado de Aman, destino esse vedado aos mortais.";

            if (classePerso == 'Arqueiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/elfoArqueiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso; 
                classePersonagem.innerHTML = " <b> Arqueiro  <br> </b> <br> Um arqueiro é um verdadeiro mestre no uso de arco, e nem mesmo um guerreiro muito experiente pode se igualar as suas capacidades. Com seu rigoroso treinamento em combate à distância, um arqueiro consegue enfraquecer seu inimigo, reduzir suas resistências, prejudicar sua capacidade de combate, ou ampliar o dano causado em seu alvo. Sua capacidade de disparar uma grande quantidade de flechas o torna capaz de matar seu inimigo antes que ele consiga se aproximar."
                
            }
            else if (classePerso == 'Mago')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/elfoMago.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Mago  <br> </b> <br> Os magos são estudantes das artes misteriosas de arda, suas magias muitas vezes podem passar despercebidas, mas elas estão lá, andma com cajados capazes de grandes feitos e são capazes de enfeitiçar objetos para funções extraordinárias, os magos são a classe mais rara de toda a terra média, acredita-se que na verdade eles são um dos Ainur desfarçados andando juntos dos mortais de arda."
            }
            else if (classePerso == 'Guerreiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/elfoGuerreiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Guerreiro  <br> </b> Os Guerreiros são mestres das espadas e lanças, suas habilidades no manejo das laminas supera a dos outros, são ageis e rápidos e estratégistas de batalhas, usam fortes armaduras pra se proteger e empunham adagas para supreender seus inimigos, essa é a classe mais comum de ser vista por toda a arda."
            }
            else if (classePerso == 'Escudeiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/elfoEscudeiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Escudeiro  <br> O escudeiro era o companheiro e servente do cavaleiro. Os deveres do escudeiro incluíam o polimento das armaduras e armas, ajudar seu cavaleiro a se vestir e despir, tomar conta de seus pertences e até dormir no vão ocupado pela porta como um guarda. Nos torneios e batalhas, o escudeiro ajudava seu cavaleiro quando preciso. Ele levava armas substitutas e cavalos, tratava das feridas, afastava os cavaleiros feridos do perigo, ou garantia um enterro decente, se necessário. Em muitos casos, o escudeiro ia à batalha com seu cavaleiro e lutava ao seu lado. Um cavaleiro evitava lutar contra um escudeiro; se possível, procurava ter como adversário um cavaleiro de posição similar ou mais alta que a sua. Os escudeiros, por sua vez, procuravam atacar cavaleiros inimigos, a fim de ganhar glória matando ou capturando um nobre de título maior que o seu. </b> "
            }
            else if (classePerso == 'Bardo')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/elfoBardo.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Bardo  <br> </b> Os bardos são mestres das artes da música, a música tem incríveis propriedades em arda sendo que o proprio mundo foi criado a partir do Ainulindalde, a musica dos ainur, bardos conseguem realizar feitos apenas a partir de seus instrumentos, sejam qual eles forem, flautas, harpas ou alaúdes, tentam propriedades de cura, motivação e até ternura para os inimigos."
            }
        }

        else if (racaPerso == 'Anão')
        {

            racaPersonagem.innerHTML = " <b> Anão <br> </b> <br> Os Anões conhecidos como o povo de durin não são contados entre os filhos de Illuvatar pois estes não foram gerados de sua mente, mas sim pelo Valar Aule o ferreiro do mundo, que impaciente pela espera dos filhos de illuvatar criou-os. Os Anões são naturalmente resistentes a magias obscurar e possuem incrpiveis aptidões mineradouras e de confecção de objetos e joias preciosas, mas isso os leva muitas vezes a ruina pela ganância.";
            
            if (classePerso == 'Arqueiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/AnaoArqueiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso; 
                classePersonagem.innerHTML = " <b> Arqueiro  <br> </b> <br> Um arqueiro é um verdadeiro mestre no uso de arco, e nem mesmo um guerreiro muito experiente pode se igualar as suas capacidades. Com seu rigoroso treinamento em combate à distância, um arqueiro consegue enfraquecer seu inimigo, reduzir suas resistências, prejudicar sua capacidade de combate, ou ampliar o dano causado em seu alvo. Sua capacidade de disparar uma grande quantidade de flechas o torna capaz de matar seu inimigo antes que ele consiga se aproximar."
            }
            else if (classePerso == 'Mago')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/AnaoMago.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Mago  <br> </b> <br> Os magos são estudantes das artes misteriosas de arda, suas magias muitas vezes podem passar despercebidas, mas elas estão lá, andma com cajados capazes de grandes feitos e são capazes de enfeitiçar objetos para funções extraordinárias, os magos são a classe mais rara de toda a terra média, acredita-se que na verdade eles são um dos Ainur desfarçados andando juntos dos mortais de arda."
            }
            else if (classePerso == 'Guerreiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/AnaoGuerreiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Guerreiro  <br> </b> Os Guerreiros são mestres das espadas e lanças, suas habilidades no manejo das laminas supera a dos outros, são ageis e rápidos e estratégistas de batalhas, usam fortes armaduras pra se proteger e empunham adagas para supreender seus inimigos, essa é a classe mais comum de ser vista por toda a arda."
            }
            else if (classePerso == 'Escudeiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/AnaoEscudeiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Escudeiro  <br> O escudeiro era o companheiro e servente do cavaleiro. Os deveres do escudeiro incluíam o polimento das armaduras e armas, ajudar seu cavaleiro a se vestir e despir, tomar conta de seus pertences e até dormir no vão ocupado pela porta como um guarda. Nos torneios e batalhas, o escudeiro ajudava seu cavaleiro quando preciso. Ele levava armas substitutas e cavalos, tratava das feridas, afastava os cavaleiros feridos do perigo, ou garantia um enterro decente, se necessário. Em muitos casos, o escudeiro ia à batalha com seu cavaleiro e lutava ao seu lado. Um cavaleiro evitava lutar contra um escudeiro; se possível, procurava ter como adversário um cavaleiro de posição similar ou mais alta que a sua. Os escudeiros, por sua vez, procuravam atacar cavaleiros inimigos, a fim de ganhar glória matando ou capturando um nobre de título maior que o seu. </b> "
            }
            else if (classePerso == 'Bardo')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/anaoBardo.png")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Bardo  <br> </b> Os bardos são mestres das artes da música, a música tem incríveis propriedades em arda sendo que o proprio mundo foi criado a partir do Ainulindalde, a musica dos ainur, bardos conseguem realizar feitos apenas a partir de seus instrumentos, sejam qual eles forem, flautas, harpas ou alaúdes, tentam propriedades de cura, motivação e até ternura para os inimigos."
            }
            }

            else if (racaPerso == 'Hobbit')
            {
                racaPersonagem.innerHTML = " <b> Hobbit <br> </b> <br> Os hobbits são um povo discreto e muito antigo, normalmente não ultrapassam um metro de altura, são bem menos robustos que anões e consideram a possibilidade de participarem de uma aventura como uma atitude insana, pois preferem a calma de sua vida rotineira, amam uma região campestre organizada e bem cultivada. São ágeis pois acostumaram-se a fugir dos 'homens grandes', conseguiram tanta experiência nessa área que pode-se confundir com magia, porém, hobbits nunca tiveram interesse em magia, além disso, hobbits tem ouvidos agudos e olhos perspicazes. Embora habilidosos, os hobbits não conseguem entender ou gostar de máquinas mais complicadas que um fole de forja, um moinho d'água ou um tear manual. Andam descalços, porque a sola de seus pés é muito espessa, não necessitando de calçados. "

            if (classePerso == 'Arqueiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/hobbitArqueiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso; 
                classePersonagem.innerHTML = " <b> Arqueiro  <br> </b> <br> Um arqueiro é um verdadeiro mestre no uso de arco, e nem mesmo um guerreiro muito experiente pode se igualar as suas capacidades. Com seu rigoroso treinamento em combate à distância, um arqueiro consegue enfraquecer seu inimigo, reduzir suas resistências, prejudicar sua capacidade de combate, ou ampliar o dano causado em seu alvo. Sua capacidade de disparar uma grande quantidade de flechas o torna capaz de matar seu inimigo antes que ele consiga se aproximar."
            }
            else if (classePerso == 'Mago')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/hobbitMago.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Mago  <br> </b> <br> Os magos são estudantes das artes misteriosas de arda, suas magias muitas vezes podem passar despercebidas, mas elas estão lá, andma com cajados capazes de grandes feitos e são capazes de enfeitiçar objetos para funções extraordinárias, os magos são a classe mais rara de toda a terra média, acredita-se que na verdade eles são um dos Ainur desfarçados andando juntos dos mortais de arda."
            }
            else if (classePerso == 'Guerreiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/hobbitGuerreiro.png")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Guerreiro  <br> </b> Os Guerreiros são mestres das espadas e lanças, suas habilidades no manejo das laminas supera a dos outros, são ageis e rápidos e estratégistas de batalhas, usam fortes armaduras pra se proteger e empunham adagas para supreender seus inimigos, essa é a classe mais comum de ser vista por toda a arda."
            }
            else if (classePerso == 'Escudeiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/hobbitEscudeiro.png")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Escudeiro  <br> O escudeiro era o companheiro e servente do cavaleiro. Os deveres do escudeiro incluíam o polimento das armaduras e armas, ajudar seu cavaleiro a se vestir e despir, tomar conta de seus pertences e até dormir no vão ocupado pela porta como um guarda. Nos torneios e batalhas, o escudeiro ajudava seu cavaleiro quando preciso. Ele levava armas substitutas e cavalos, tratava das feridas, afastava os cavaleiros feridos do perigo, ou garantia um enterro decente, se necessário. Em muitos casos, o escudeiro ia à batalha com seu cavaleiro e lutava ao seu lado. Um cavaleiro evitava lutar contra um escudeiro; se possível, procurava ter como adversário um cavaleiro de posição similar ou mais alta que a sua. Os escudeiros, por sua vez, procuravam atacar cavaleiros inimigos, a fim de ganhar glória matando ou capturando um nobre de título maior que o seu. </b> "
            }
            else if (classePerso == 'Bardo')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/hobbitBardo.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Bardo  <br> </b> Os bardos são mestres das artes da música, a música tem incríveis propriedades em arda sendo que o proprio mundo foi criado a partir do Ainulindalde, a musica dos ainur, bardos conseguem realizar feitos apenas a partir de seus instrumentos, sejam qual eles forem, flautas, harpas ou alaúdes, tentam propriedades de cura, motivação e até ternura para os inimigos."
            }
            }

            else if (racaPerso == 'Humano')
            {

                racaPersonagem.innerHTML = " <b> Humanos <br> </b> <br> A raça dos Humanos é a segunda raça de seres criados pelo Único Deus, Ilúvatar. Por terem despertado no começo dos Anos do Sol, enquanto os Elfos haviam despertado no começo da Primeira Era, durante os Anos das Árvores, eles são chamados de Segundo Povo. Os Humanos possuem o assim chamado Dom dos Homens, a mortalidade. Quando os Humanos morrem, eles são “libertados” de Arda e partem para um local desconhecido até mesmo aos Valar. Os Humanos tinham grande capacidade de adaptação e industrialização, seus reinos eram grandes, porém não duradouros."

            if (classePerso == 'Arqueiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/humanoArqueiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso; 
                classePersonagem.innerHTML = " <b> Arqueiro  <br> </b> <br> Um arqueiro é um verdadeiro mestre no uso de arco, e nem mesmo um guerreiro muito experiente pode se igualar as suas capacidades. Com seu rigoroso treinamento em combate à distância, um arqueiro consegue enfraquecer seu inimigo, reduzir suas resistências, prejudicar sua capacidade de combate, ou ampliar o dano causado em seu alvo. Sua capacidade de disparar uma grande quantidade de flechas o torna capaz de matar seu inimigo antes que ele consiga se aproximar."
            }
            else if (classePerso == 'Mago')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/humanoMago.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Mago  <br> </b> <br> Os magos são estudantes das artes misteriosas de arda, suas magias muitas vezes podem passar despercebidas, mas elas estão lá, andma com cajados capazes de grandes feitos e são capazes de enfeitiçar objetos para funções extraordinárias, os magos são a classe mais rara de toda a terra média, acredita-se que na verdade eles são um dos Ainur desfarçados andando juntos dos mortais de arda."
            }
            else if (classePerso == 'Guerreiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/humanoGuerreiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Guerreiro  <br> </b> Os Guerreiros são mestres das espadas e lanças, suas habilidades no manejo das laminas supera a dos outros, são ageis e rápidos e estratégistas de batalhas, usam fortes armaduras pra se proteger e empunham adagas para supreender seus inimigos, essa é a classe mais comum de ser vista por toda a arda."

            }
            else if (classePerso == 'Escudeiro')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/humanoEscudeiro.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Escudeiro  <br> O escudeiro era o companheiro e servente do cavaleiro. Os deveres do escudeiro incluíam o polimento das armaduras e armas, ajudar seu cavaleiro a se vestir e despir, tomar conta de seus pertences e até dormir no vão ocupado pela porta como um guarda. Nos torneios e batalhas, o escudeiro ajudava seu cavaleiro quando preciso. Ele levava armas substitutas e cavalos, tratava das feridas, afastava os cavaleiros feridos do perigo, ou garantia um enterro decente, se necessário. Em muitos casos, o escudeiro ia à batalha com seu cavaleiro e lutava ao seu lado. Um cavaleiro evitava lutar contra um escudeiro; se possível, procurava ter como adversário um cavaleiro de posição similar ou mais alta que a sua. Os escudeiros, por sua vez, procuravam atacar cavaleiros inimigos, a fim de ganhar glória matando ou capturando um nobre de título maior que o seu. </b> "
            }
            else if (classePerso == 'Bardo')
            {
                fotoPersonagem.style.backgroundImage = 'url("/assets/humanoBardo.jpg")';
                fotoPersonagem.innerHTML = nomePerso;
                classePersonagem.innerHTML = " <b> Bardo  <br> </b> Os bardos são mestres das artes da música, a música tem incríveis propriedades em arda sendo que o proprio mundo foi criado a partir do Ainulindalde, a musica dos ainur, bardos conseguem realizar feitos apenas a partir de seus instrumentos, sejam qual eles forem, flautas, harpas ou alaúdes, tentam propriedades de cura, motivação e até ternura para os inimigos."
            }
            }
        
        b_usuario.innerHTML = nomePerso;
        m_usuario.innerHTML = racaPerso;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// // carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// // modal
// function mostrarModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "flex";
// }

// function fecharModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "none";
// }

