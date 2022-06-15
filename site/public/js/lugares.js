var contador = 1
var respostas = []
var valinor = 0
var numenor = 0
var Khazad = 0
var condado = 0
var ax_maior = -9999
var LugarDefinido = 0

function voltar(){
    window.location = 'QuizLugares.html'
}

function iniciarDivindade() {
    if (contador == 1) {
        sumir.style.display = 'none';
        containerPerguntas.style.display = 'block';
        containerCards.style.display = 'block';
        banner.style.alignItems = "flex-start";
        banner.style.height = "auto";

        card1.style.backgroundImage = 'url("./ASSETS/planicies.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/praia.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/montanha.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/campos.jpg")';

    }

    else if (contador == 5) {
        containerValar.style.display = 'block';
        banner.style.alignItems = "flex-start";
        banner.style.height = "auto";
        sumir.style.display = 'none'

        for (var i = 0; i <= 8; i++) {

            if (Number(valinor) > ax_maior) {
                ax_maior = Number(valinor);
                LugarDefinido = 'valinor';
            }
            else if (Number(Khazad) > ax_maior) {
                ax_maior = Number(Khazad);
                LugarDefinido = 'Khazad';
            }
            else if (Number(condado) > ax_maior) {
                ax_maior = Number(condado);
                LugarDefinido = 'condado';
            }
            else if (Number(numenor) > ax_maior) {
                ax_maior = Number(numenor);
                LugarDefinido = 'numenor';
            }
        }

        if (LugarDefinido == 'valinor') 
        {
            Valar.innerHTML = 'VALINOR';
            Valar.style.backgroundImage = 'url("./ASSETS/valinor.jpg")';
            Descricao.innerHTML = " <b> Valinor  <br> (As Terras Imortais) </b> <br> Em Aman os Valar criaram o Reino que se chamou Valinor, que significa A Terra dos Valar. Valinor está localizada no centro de Aman, como um grande país dentro de um continente. As suas terras são as mais belas do mundo, pois aí vivem os Valar e Maiar em glória, sendo a presença destes poderosos imortais que tornou essa terra tão bela. Também em Aman os Valar estabeleceram o Máhanaxar, o Círculo do Julgamento, onde as sentenças de Manwë e os debates entre os Poderes mudaram os destinos de Arda. Em Valinor foram construídas as grandes Mansões dos Valar. Manwë e Varda vivem ambos em Taniquetil, a mais alta das montanhas de Arda, e em cujo cume ficam as Ilmarin, as suas Mansões, de onde podem vislumbrar toda Arda; é a montanha sagrada, que os elfos também chamavam Oiolossë, a Brancura Eterna, e Elerrína, a Coroada de Estrelas.";

        }
        else if( LugarDefinido == 'Khazad') 
        {
            Valar.innerHTML = 'KHAZAD-DÛM';
            Valar.style.backgroundImage = 'url("./ASSETS/khazad-dum.jpg")';
            Descricao.innerHTML = " <b> Khazad-Dum  <br> (O Reino da Motanha) </b> <br>  Khazad-dûm, ou Moria como é mais conhecida, foi o mais grandioso reino dos Anões na Terra-Média. Seus lindos e enormes salões ficavam sob das Montanhas Nebulosas. De suas profundas e incontáveis minas vieram grandes tesouros, e delas se extraia o mithril, o metal mais precioso de Arda. Durante séculos os Anões prosperaram, e nunca algum inimigo conseguiu entrar nas grutas e sair vivo. Seria de dentro que o mal viria: um Balrog de Morgoth vivia nas profundezas das Minas, e quando os Anões o acordaram foram obrigados a fugir do seu lar. Os salões de Khazad-dûm foram tomados por Orcs enviados por Sauron e outras criaturas escuras; e passou a ser conhecido como Moria, o Abismo Negro, e foi um lugar de terror e morte."
        }
        else if( LugarDefinido == 'condado') 
        {
            Valar.innerHTML = 'CONDADO';
            Valar.style.backgroundImage = 'url("./ASSETS/condado.png")';
            Descricao.innerHTML = " <b> Condado  <br> (A flor Do Sul) </b> <br>  O Condado se refere a uma área povoada exclusivamente por Hobbits e à parte dos acontecimentos do resto da Terra Média. É localizado no noroeste do continente, na grande região de Eriador e no Reino de Arnor. Seu nome em Westron é Sûza 'Condado' ou Sûzat 'O Condado'. Seu nome em Sindarin é i Drann. O rio Brandevin limita o Condado pelo Leste. Hobbits também vivem na Terra dos Buques, que fica a leste do rio e a oeste da Cerca que protege o Condado de invasões das árvores da Floresta Velha; No entanto, a Terra dos Buques não foi reconhecida formalmente como parte do Condado até o fim da Guerra do Anel, quando foi oficialmente cedida ao Condado pelo Rei Elessar. Pelo Norte e pelo Oeste, o Condado é limitado pelas antigas estradas sul e estrada leste e por traços geográficos como as Colinas das Torres. O Condado é descrito como uma terra pequena, mas bonita e frutífera, amada por seus habitantes. Os Hobbits possuem um extensivo sistema de agricultura no Condado, mas não são industrializados. Vários recursos podem ser encontrados no Condado, incluindo cereais, frutas, madeira e erva-de-fumo."
        }
        else if( LugarDefinido == 'numenor') 
        {
            Valar.innerHTML = 'NUMENOR';
            Valar.style.backgroundImage = 'url("./ASSETS/numenor.jpg")';
            Descricao.innerHTML = " <b> Numenor  <br> (A Estrela Do Oceano) </b> <br>  Númenor era cercada pelo Grande Mar de Arda, e o mar teve uma profunda influência na cultura e história de Númenor. Desde os primeiros tempos de sua história, os peixes do mar eram uma parte significativa da dieta Númenoriana; aqueles que forneciam esse alimento foram os primeiros navegadores de Númenor. Os númenorianos rapidamente se tornaram hábeis construtores de navios e marinheiros, com o desejo de explorar e dominar o oceano. Havia uma limitação nesta atividade: a Proibição dos Valar. Quando a ilha de Númenor foi presenteada aos Edain, eles foram estritamente proibidos de navegar para o oeste fora da vista da ilha. Isso aconteceu porque as Terras Imortais, proibida aos mortais, fica tentadoramente perto do oeste de Númenor. Assim, os númenorianos começaram a explorar os mares ao norte, leste e sul. Eles alcançaram a Terra-média a leste e exploraram suas costas, incluindo o Mar Oriental, no outro lado da Terra-média. Os númenorianos trouxeram os presentes de sua civilização superior para os homens da Terra-média, que chamaram os númenorianos de reis do mar. O reino foi estabelecido no início da Segunda Era, e Elros Meio-elfo, filho de Eärendil , irmão de Elrond e descendente de todas as casas reais dos Elfos e Edain, tornou-se o primeiro Rei de Númenor, um monarca absoluto . Sob seu governo, e o de seus descendentes, os númenorianos se tornaram um povo poderoso, amigo dos elfos, tanto de Eressëa quanto da Terra-média. Os elfos de Eressëa trouxeram presentes, incluindo habilidades e plantas. Entre esses presentes estavam sete palantíri, orbes mágicos que podiam prever o futuro, para os Senhores de Andúnië. "
        }
    }

}

function mudanca(resposta) {
    if (contador == 1) {
        if (resposta == 1) {
            respostas.push('VL1')
        }
        else if (resposta == 2) {
            respostas.push('NM4')
        }
        else if (resposta == 3) {
            respostas.push('KH5')
        }
        else if (resposta == 4) {
            respostas.push('CD3')
        }

        Pergunta.innerHTML = 'Escolha uma dentre essas armas forjadas por mestres ferreiros?'
        card1.style.backgroundImage = 'url("./ASSETS/machado.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/pacifista.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/arco.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/espadas.jpg")';
        card1.innerHTML = 'Machado';
        card2.innerHTML = 'Pacifista';
        card3.innerHTML = 'Arco';
        card4.innerHTML = 'Espada';
        contador++

    }

    else if (contador == 2) {
        if (resposta == 1) {
            respostas.push('KH2')
        }
        else if (resposta == 2) {
            respostas.push('CD4')
        }
        else if (resposta == 3) {
            respostas.push('VL3')
        }
        else if (resposta == 4) {
            respostas.push('NM5')
        }

        Pergunta.innerHTML = 'Você tem a chance de pegar um dos anéis do poder, qual dentre estes você escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/narya.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/nenya.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/vilya.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/barahir.jpg")';
        card1.innerHTML = 'Narya';
        card2.innerHTML = 'Nenya';
        card3.innerHTML = 'Vilya';
        card4.innerHTML = 'Barahir';
        contador++
    }

    else if (contador == 3) {
        if (resposta == 1) {
            respostas.push('KH3')
        }
        else if (resposta == 2) {
            respostas.push('VL5')
        }
        else if (resposta == 3) {
            respostas.push('NM2')
        }
        else if (resposta == 4) {
            respostas.push('CD1')

        }

        Pergunta.innerHTML = 'Como um dos grandes guerreiros(a) da terra-média, em qual destas batalhas você Lutou?'
        card1.style.backgroundImage = 'url("./ASSETS/ira.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/giliath.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/fornost.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/pacifista2.jpg")';
        card1.innerHTML = 'Guerra da Ira';
        card2.innerHTML = 'Dagor Giliath';
        card3.innerHTML = 'Queda de Fornost';
        card4.innerHTML = 'Sou Pacifista';
        contador++
    }

    else if (contador == 4) {
        if (resposta == 1) {
            respostas.push('NM3')
        }
        else if (resposta == 2) {
            respostas.push('VL4')
        }
        else if (resposta == 3) {
            respostas.push('KH1')
        }
        else if (resposta == 4) {
            respostas.push('CD5')

        }

        Pergunta.innerHTML = 'Os reinos de arda possuiem Reis e Rainhas como seus líderes, e estes possuem coroas, Escolha uma Coroa'
        card1.style.backgroundImage = 'url("./ASSETS/coroaElfo.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/coroaHumano.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/coroaAnao.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/coroaFlores.jpg")';
        card1.innerHTML = 'Coroa Elfica';
        card2.innerHTML = 'Coroa Humana';
        card3.innerHTML = 'Coroa Anã';
        card4.innerHTML = 'Coroa de Flores';
        contador++
    }

    else if (contador == 5) {
        if (resposta == 1) {
            respostas.push('VL2')
        }
        else if (resposta == 2) {
            respostas.push('NM1')
        }
        else if (resposta == 3) {
            respostas.push('KH4')
        }
        else if (resposta == 4) {
            respostas.push('CD2')
        }

        containerCards.style.display = 'none'
        containerPerguntas.style.display = 'none'
        sumir.style.display = 'block'
        banner.style.height = "85vh"
        banner.style.alignItems = 'center'
        titulo.innerHTML = 'Descubra Qual o Seu Reino de Origem em Arda'
        subtitulo.innerHTML = '';
        btn.innerHTML = 'Descobrir';

        for (i = 0; i < respostas.length; i++) {

            //numenor
            if (respostas[i] == 'NM1') {
                numenor++
            }
            else if (respostas[i] == 'NM2') {
                numenor = numenor + 2
            }
            else if (respostas[i] == 'NM3') {
                numenor = numenor + 3
            }
            else if (respostas[i] == 'NM4') {
                numenor = numenor + 4
            }
            else if (respostas[i] == 'NM5') {
                numenor = numenor + 5
            }

            //Khazad
            else if (respostas[i] == 'KH1') {
                Khazad++
            }
            else if (respostas[i] == 'KH2') {
                Khazad = Khazad + 3
            }
            else if (respostas[i] == 'KH3') {
                Khazad = Khazad + 4
            }
            else if (respostas[i] == 'KH4') {
                Khazad = Khazad + 5
            }
            else if (respostas[i] == 'KH5') {
                Khazad = Khazad + 5
            }

            //condado
            else if (respostas[i] == 'CD1') {
                condado++
            }
            else if (respostas[i] == 'CD2') {
                condado = condado + 3
            }
            else if (respostas[i] == 'CD3') {
                condado = condado + 4
            }
            else if (respostas[i] == 'CD4') {
                condado = condado + 5
            }
            else if (respostas[i] == 'CD5') {
                condado = condado + 5
            }

            //valinor
            else if (respostas[i] == 'VL1') {
                valinor++
            }
            else if (respostas[i] == 'VL2') {
                valinor = valinor + 3
            }
            else if (respostas[i] == 'VL3') {
                valinor = valinor + 4
            }
            else if (respostas[i] == 'VL4') {
                valinor = valinor + 5
            }
            else if (respostas[i] == 'VL5') {
                valinor = valinor + 5
            }

        }

    }

}







