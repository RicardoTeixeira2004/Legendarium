var contador = 1
var respostas = []
var anel = 0
var silmarils = 0
var PedraArken = 0
var Anduril = 0
var ax_maior = -9999
var ArtefatoDefinido = 0

function voltar(){
    window.location = 'QuizArtefatos.html'
}

function iniciarDivindade() {
    if (contador == 1) {
        sumir.style.display = 'none';
        containerPerguntas.style.display = 'block';
        containerCards.style.display = 'block';
        banner.style.alignItems = "flex-start";
        banner.style.height = "auto";

        card1.style.backgroundImage = 'url("./ASSETS/beleza.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/funcao.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/valor.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/poder.jpg")';

    }

    else if (contador == 5) {
        containerValar.style.display = 'block';
        banner.style.alignItems = "flex-start";
        banner.style.height = "auto";
        sumir.style.display = 'none'

        for (var i = 0; i <= 8; i++) {

            if (Number(anel) > ax_maior) {
                ax_maior = Number(anel);
                ArtefatoDefinido = 'anel';
            }
            else if (Number(PedraArken) > ax_maior) {
                ax_maior = Number(PedraArken);
                ArtefatoDefinido = 'PedraArken';
            }
            else if (Number(Anduril) > ax_maior) {
                ax_maior = Number(Anduril);
                ArtefatoDefinido = 'Anduril';
            }
            else if (Number(silmarils) > ax_maior) {
                ax_maior = Number(silmarils);
                ArtefatoDefinido = 'silmarils';
            }
        }

        if (ArtefatoDefinido == 'anel') 
        {
            Valar.innerHTML = 'ANEL DE PODER';
            Valar.style.backgroundImage = 'url("./ASSETS/anelDePoder.jpg")';
            Descricao.innerHTML = " <b> Anel De Poder  <br> (Um Anel para Todos Governar) </b> <br>  'Três anéis para os Reis-Élfos sob o céu, Sete para os Senhores-Anões em seus rochosos corredores, Nove para os Homens Mortais fadados ao eterno sono, Um para o Senhor do Escuro em seu escuro trono, Na Terra de Mordor, onde as sombras se deitam. Um Anel para todos governar, Um anel para encontrá-los, Um Anel para todos trazer e na escuridão aprisioná-los na Terra de Mordor, onde as Sombras se deitam.' O Anel de Sauron, também conhecido como O Anel Mestre ou referindo como O Anel do Poder ou O Um Anel, ou também chamado de 'Precioso' é um dos 20 Anéis do Poder. Foi criado e forjado pelo Senhor do Escuro Sauron no fogo da Montanha da Perdição durante a Segunda Era, num plano maléfico de dominar, controlar e governar todos os outros anéis do poder, inclusive dominar a Terra-Média. Porém, durante a batalha de Mordor, Sauron é derrotado e perde sua forma física inclusive perde o Anel Mestre. Ele foi criado com o propósito de aumentar o poder de Sauron, o que o faria o Senhor Supremo da Terra-Média. O Um Anel poderia ser usado para controlar os que estivessem usando os outros dezenove anéis, que foram feitos pelo Elfo Celebrimbor e seu povo com a assistência do próprio Sauron desfarçado como Annatar O senhor dos presentes.";

        }
        else if( ArtefatoDefinido == 'PedraArken') 
        {
            Valar.innerHTML = 'PEDRA ARKEN';
            Valar.style.backgroundImage = 'url("./ASSETS/pedraArken.jpg")';
            Descricao.innerHTML = " <b> Pedra Arken  <br> (O coração da Montanha) </b> <br>  ‘É um globo com mil facetas, que brilha como prata à luz do fogo , como a água ao sol , como a neve sob as estrelas, como a chuva sobre a Lua !’. A Pedra Arken de Thrain, também conhecida como o Coração da Montanha, é uma joia maravilhosa procurada por Thorin II Escudo-de-Carvalho. Ela foi descoberta por baixo da Montanha Solitária pelos antepassados de Thorin, Thrain e lapidadas pelos anões. A Pedra Arken tornou-se o símbolo da família do Povo de Durin, mas foi perdida quando o dragão Smaug capturou a montanha dos Anões. Thorin ao tentar recuperar seu lar na Montanha Solitária, acabou causando a batalha dos cinco exércitos, onde humanos, elfos, anões, orcs e goblins lutaram pelo controle da montanha e pela posse da pedra, no fim da guerra os anões recuperam seu lar, mas thorin morreu na batalha, e a Pedra Arken foi enterrada junto dele."
        }
        else if( ArtefatoDefinido == 'Anduril') 
        {
            Valar.innerHTML = 'ANDURIL';
            Valar.style.backgroundImage = 'url("./ASSETS/Anduril.jpg")';
            Descricao.innerHTML = " <b> Anduril  <br> (Chama do Ocidente) </b> <br>  A espada foi forjada na Primeira Era pelo Anão Telchar de Nogrod, O nome da espada contém os elementos nar e thil, 'fogo' e 'luz branca' respectivamente em Quenya, referindo-se a Sol e Lua. Não se sabe para quem Telchar originalmente fez Narsil. A única certeza acerca da história da espada começa dois mil anos depois da primeira era, quando o seu descendente distante, Amandil, Senhor perdido de Andúnië, enviou o seu filho Elendil de volta à Terra Média com Narsil, quase no final da Segunda Era, quando adivinhou corretamente a destruição iminente de Númenor. Elendil tornou-se um grande rei, usando Narsil no cerco a Barad-dûr, mas quando a vitória parecia próxima Sauron em pessoa apareceu, juntando-se as suas forças prestes a ser derrotadas. Ao derrotar Sauron, Elendil e Gil-Galad perderam as vidas e Narsil partiu-se em seis fragmentos. O filho e herdeiro de Elendil, Isildur pegou na espada quebrada do pai e cortou o Um Anel da mão de Sauron, banindo-o. Apesar do seu corpo estar destruído e do seu poder removido, o espírito de Sauron sobreviveu quando Isildur reclamou o Um Anel para si mesmo. Isildur levou os restos de Narsil com ele. Mas enquanto regressava da guerra sofreu um ataque e morreu, caindo ao rio. Ohtar, um pajem de Isildur, resgatou os restos de Narsil mas o Um Anel ficou perdido, e assim permaneceu durante dois mil e quinhentos anos. Os restos de Narsil tornaram-se uma das heranças dos Reis de Arnor, e depois da destruição do Reino do Norte, permaneceram a ser heranças dos Caminhantes do Norte. A espada foi reforjada em Valfenda no ano 3019 da Terceira Era, durante a Guerra do Anel, em celebração à descoberta e captura do Anel. Aí foi renomeada como Andúril (Chama do Ocidente), por Elrond para Aragorn, herdeiro de Isildur."
        }
        else if( ArtefatoDefinido == 'silmarils') 
        {
            Valar.innerHTML = 'SILMARILS';
            Valar.style.backgroundImage = 'url("./ASSETS/Silmaril.jpg")';
            Descricao.innerHTML = " <b> Silmarils  <br> (As Gemas De Feanor) </b> <br>  As Silmarils eram três gemas, criadas pelo Alto-Elfo Fëanor, filho do Rei dos Noldor, Finwë. Feitas em Aman e continham a luz das Duas Árvores de Valinor : Laurelin e Temperion. Fëanor criou as Silmarilli na Era das Árvores, antes do sol e da lua serem feitos, num período conhecido como A Primavera de Valinor. As Silmarilli foram consagradas por Varda, a Rainha de Arda, a Senhora das Estrelas, e todo ser maligno que as tocasse, teria as mãos queimadas. Fëanor foi o Elfo Noldor que trouxe “seu maior renome e suas mais profundas infelicidades”, e as Gemas foram sua maior criação, e delas ele se tornou muito orgulhoso, influenciado por Melkor.Após Melkor roubar as Silmarils de Feanor, seus filhos fizeram um juramento de as recuperarem, assim as Silmarils foram os objetos chave da primeira era e causaram inúmeros conflitos e batalhas por sua posse no que ficou conhecida como A Guerra Das Joias. Uma das Silmarils foi recuperada por Beren e Lúthien por meio de grande perigo e perda, quando Lúthien mandou Morgoth dormir com ela cantando e Beren a cortou de sua coroa. O lobisomem Carcharoth os atacou quando eles deixaram Angband e engoliu a mão de Beren contendo a Silmaril, e isso deixou Carcharoth louco. Mais tarde, ele foi morto por Huan, o Cão, que morreu em decorrência de seus ferimentos, e Mablung cortou a Silmaril. Mais tarde, foi levado para os Valar no Ocidente por Eärendil, filho de Tuor e Idril e marido de Elwing: herdeiro de Beren e Lúthien , como um símbolo de arrependimento. Os Valar então definiram esta Silmaril como uma estrela no céu. As outras duas gemas permaneceram nas mãos de Morgoth e foram tiradas dele por um servo de Manwë no final da Guerra da Ira. No entanto, logo depois, eles foram roubados pelos dois filhos restantes de Fëanor, Maedhros e Maglor, enquanto tentavam cumprir o juramento que haviam feito tantos anos antes. Mas as joias queimaram suas mãos, negando seus direitos de posse, como haviam queimado as mãos de Morgoth antes. Em agonia, Maedhros jogou a si mesmo e sua Silmaril em um poço de fogo, e Maglor jogou sua Silmaril no mar. Assim, as Silmarils permanecem no oceano, na terra e no céu - sua luz está presente, mas inacessível para aqueles na Terra-média. "
        }
    }

}

function mudanca(resposta) {
    if (contador == 1) {
        if (resposta == 1) {
            respostas.push('SM4')
        }
        else if (resposta == 2) {
            respostas.push('AD5')
        }
        else if (resposta == 3) {
            respostas.push('AK5')
        }
        else if (resposta == 4) {
            respostas.push('AN3')
        }

        Pergunta.innerHTML = 'Quando se trata da criação de coisas você se considera?'
        card1.style.backgroundImage = 'url("./ASSETS/primoroso.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/pratico.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/exigente.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/mestre.jpg")';
        card1.innerHTML = 'Primoroso';
        card2.innerHTML = 'Prático';
        card3.innerHTML = 'Exigente';
        card4.innerHTML = 'Mestre';
        contador++

    }

    else if (contador == 2) {
        if (resposta == 1) {
            respostas.push('SL3')
        }
        else if (resposta == 2) {
            respostas.push('AD4')
        }
        else if (resposta == 3) {
            respostas.push('AK1')
        }
        else if (resposta == 4) {
            respostas.push('AN5')
        }

        Pergunta.innerHTML = 'Cada um dos seres de arda possui suas próprias culturas, proficiências e habilidades, escolha um dentre eles'
        card1.style.backgroundImage = 'url("./ASSETS/elfo.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/anao.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/humano.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/hobbit.jpg")';
        card1.innerHTML = 'Elfo';
        card2.innerHTML = 'Anão';
        card3.innerHTML = 'Humano';
        card4.innerHTML = 'Hobbit';
        contador++
    }

    else if (contador == 3) {
        if (resposta == 1) {
            respostas.push('SL1')
        }
        else if (resposta == 2) {
            respostas.push('AK4')
        }
        else if (resposta == 3) {
            respostas.push('AD1')
        }
        else if (resposta == 4) {
            respostas.push('AN2')

        }

        Pergunta.innerHTML = 'Existem batalhas internas que ocorrem dentro de nós, qual destes é o seu maior inimigo nessa batalha?'
        card1.style.backgroundImage = 'url("./ASSETS/euMesmo.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/ganancia.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/orgulho.png")';
        card4.style.backgroundImage = 'url("./ASSETS/outros.jpg")';
        card1.innerHTML = 'Eu Mesmo';
        card2.innerHTML = 'Ganância';
        card3.innerHTML = 'Orgulho';
        card4.innerHTML = 'Outros';
        contador++
    }

    else if (contador == 4) {
        if (resposta == 1) {
            respostas.push('SL2')
        }
        else if (resposta == 2) {
            respostas.push('AK3')
        }
        else if (resposta == 3) {
            respostas.push('AN4')
        }
        else if (resposta == 4) {
            respostas.push('AD2')

        }

        Pergunta.innerHTML = 'Existem dezenas de Ainur por Arda, entre os mais forte estão o valar, Escolha um entre estes 4'
        card1.style.backgroundImage = 'url("./ASSETS/varda.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/aule.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/manwe.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/melkor.jpeg")';
        card1.innerHTML = 'Varda';
        card2.innerHTML = 'Aule';
        card3.innerHTML = 'Manwe';
        card4.innerHTML = 'Melkor';
        contador++
    }

    else if (contador == 5) {
        if (resposta == 1) {
            respostas.push('SL5')
        }
        else if (resposta == 2) {
            respostas.push('AK2')
        }
        else if (resposta == 3) {
            respostas.push('AD3')
        }
        else if (resposta == 4) {
            respostas.push('AN1')
        }

        containerCards.style.display = 'none'
        containerPerguntas.style.display = 'none'
        sumir.style.display = 'block'
        banner.style.height = "85vh"
        banner.style.alignItems = 'center'
        titulo.innerHTML = 'Descubra Qual o seu Artefato de Arda'
        subtitulo.innerHTML = '';
        btn.innerHTML = 'Descobrir';

        for (i = 0; i < respostas.length; i++) {

            //SILMARIL
            if (respostas[i] == 'SL1') {
                silmarils++
            }
            else if (respostas[i] == 'SL2') {
                silmarils = silmarils + 2
            }
            else if (respostas[i] == 'SL3') {
                silmarils = silmarils + 3
            }
            else if (respostas[i] == 'SL4') {
                silmarils = silmarils + 4
            }
            else if (respostas[i] == 'SL5') {
                silmarils = silmarils + 5
            }

            //ARKEN
            else if (respostas[i] == 'AK1') {
                PedraArken++
            }
            else if (respostas[i] == 'AK2') {
                PedraArken = PedraArken + 3
            }
            else if (respostas[i] == 'AK3') {
                PedraArken = PedraArken + 4
            }
            else if (respostas[i] == 'AK4') {
                PedraArken = PedraArken + 5
            }
            else if (respostas[i] == 'AK5') {
                PedraArken = PedraArken + 5
            }

            //ANDURIL
            else if (respostas[i] == 'AD1') {
                Anduril++
            }
            else if (respostas[i] == 'AD2') {
                Anduril = Anduril + 3
            }
            else if (respostas[i] == 'AD3') {
                Anduril = Anduril + 4
            }
            else if (respostas[i] == 'AD4') {
                Anduril = Anduril + 5
            }
            else if (respostas[i] == 'AD5') {
                Anduril = Anduril + 5
            }

            //ANEL
            else if (respostas[i] == 'AN1') {
                anel++
            }
            else if (respostas[i] == 'AN2') {
                anel = anel + 3
            }
            else if (respostas[i] == 'AN3') {
                anel = anel + 4
            }
            else if (respostas[i] == 'AN4') {
                anel = anel + 5
            }
            else if (respostas[i] == 'AN5') {
                anel = anel + 5
            }

        }

    }

}







