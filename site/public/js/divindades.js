var contador = 1
var respostas = []
var manwe = 0
var melkor = 0
var ulmo = 0
var aule = 0
var varda = 0
var yavanna = 0
var vana = 0
var vaire = 0
var ax_maior = -9999
var valarDefinido

function voltar(){
    window.location = 'QuizDivindades.html'
}

function iniciarDivindade() {
    if (contador == 1) {
        sumir.style.display = 'none';
        containerPerguntas.style.display = 'block';
        containerCards.style.display = 'block';
        banner.style.alignItems = "flex-start";
        banner.style.height = "auto";

        card1.style.backgroundImage = 'url("./ASSETS/taniquetil.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/starfield.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/lothlorien.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/sea.jpg")';

    }

    else if (contador == 10) {
        containerValar.style.display = 'block';
        banner.style.alignItems = "flex-start";
        banner.style.height = "auto";
        sumir.style.display = 'none'

        for (var i = 0; i <= 16; i++) {

            if (Number(manwe) > ax_maior) {
                ax_maior = Number(manwe);
                valarDefinido = 'manwe';
            }
            else if (Number(varda) > ax_maior) {
                ax_maior = Number(varda);
                valarDefinido = 'varda';
            }
            else if (Number(yavanna) > ax_maior) {
                ax_maior = Number(yavanna);
                valarDefinido = 'yavanna';
            }
            else if (Number(ulmo) > ax_maior) {
                ax_maior = Number(ulmo);
                valarDefinido = 'ulmo';
            }
            else if (Number(melkor) > ax_maior) {
                ax_maior = Number(melkor);
                valarDefinido = 'melkor';
            }
            else if (Number(vaire) > ax_maior) {
                ax_maior = Number(vaire);
                valarDefinido = 'vaire';
            }
            else if (Number(aule) > ax_maior) {
                ax_maior = Number(aule);
                valarDefinido = 'aule';
            }
            else if (Number(vana) > ax_maior) {
                ax_maior = Number(vana);
                valarDefinido = 'vana';
            }
        }

        if (valarDefinido == 'yavanna') 
        {
            Valar.innerHTML = 'YAVANNA';
            Valar.style.backgroundImage = 'url("./ASSETS/yavanna.jpg")';
            Descricao.innerHTML = " <b> Yavanna  <br> (Provedora de Frutos, Rainha Da Terra) </b> <br>  Yavanna era respons??vel pelo crescimento de todas as frutas e coisas crescentes de Arda. ela tamb??m foi chamada Kement??ri, Ivon . Ela residia nos Pastos de Yavanna, no sul de Valinor. Ela tamb??m ?? irm?? mais velha de V??na. A partir dos Anos das L??mpadas durante a Primavera de Arda, ela plantou e fez crescer as primeiras coisas crescentes do mundo (??rvores e plantas), que ela havia preparado h?? muito tempo. Em primeiro lugar, assim como todas as outras coisas do mundo que os Valar nutriam e cuidavam, essas coisas prosperaram e prosperaram por um tempo. Melkor, no entanto, teve seus pr??prios planos e eles envolveram tirar o mundo de seus irm??os e govern??-lo para si mesmo. De sua grande fortaleza de Utumno, no extremo norte, enviou seus venenos para as veias do mundo destruindo a Primavera de Arda. Ent??o, as coisas de Yavanna ficaram doentes e apodrecidas e logo ap??s Melkor assaltou e destruiu as Duas L??mpadas, quebrando o mundo. ";

        }
        else if( valarDefinido == 'manwe') 
        {
            Valar.innerHTML = 'MANW??';
            Valar.style.backgroundImage = 'url("./ASSETS/manwe.jpg")';
            Descricao.innerHTML = " <b> Manwe  <br> (O Aben??oado, Rei de Arda) </b> <br>  Manw?? foi o l??der dos Ainur, um dos Aratar, o Rei dos Valar, o marido de Varda, o Irm??o do Senhor das Trevas Melkor e o Rei da Arda. Ele tamb??m era conhecido como S??limo, M??nawen??z ou Valahiru e vive no Monte Taniquetil em Valinor, a montanha mais alta do mundo. Os ventos e os ares s??o seus servos. Ele era o maior em autoridade, mas n??o no poder, de todos os Valar, sendo Melkor mais poderoso. Ele foi, no entanto, o maior dos Aratar, entre os quais Melkor n??o foi contado.Manw?? era (com Melkor) o mais velho dos Ainur, e aquele que melhor entendia a vontade de Eru. Quando Melkor criou a disc??rdia na M??sica do Ainur, o Segundo Tema de Eru que se levantou para combater a disc??rdia, usou Manw?? como seu principal instrumento. Quando Arda foi formada, Manw?? foi nomeado Governante de Arda, da?? o seu t??tulo mais comum, o Rei mais velho."
        }
        else if( valarDefinido == 'melkor') 
        {
            Valar.innerHTML = 'MELKOR';
            Valar.style.backgroundImage = 'url("./ASSETS/melkor.jpeg")';
            Descricao.innerHTML = " <b> Melkor  <br> (Morgoth Bauglir) </b> <br>  Melkor, mais tarde conhecido como Morgoth, era o mais poderoso e mais s??bio Valar. Por causa de seu orgulho e seu desejo de dominar os outros, ele caiu na escurid??o, e se tornou o primeiro Senhor do Escuro. Morgoth eventualmente foi derrotado no fim da Guerra de Ira, mas o seu tenente Sauron continuou a guerra na Terra-M??dia por milhares de anos. A profecia ?? de que ele ir?? retornar no fim dos tempos para lutar e ser?? derrotado e Arda finalmente ficar?? livre de todos os males. Nas primeiras eras de Arda melkor foi o respons??vel pela destrui????o das fontes de luz do mundo, primeiro destruindo as lamparinas de varda, depois as arvores de yavanna, al??m de corromper os elfos e criaturas a fim de criar seres mal??ficos como orcs e feras."
        }
        else if( valarDefinido == 'ulmo') 
        {
            Valar.innerHTML = 'ULMO';
            Valar.style.backgroundImage = 'url("./ASSETS/ulmo.jpg")';
            Descricao.innerHTML = " <b> Ulmo  <br> (Rei dos Mares, Senhor das ??guas) </b> <br>  Ulmo - tamb??m conhecido como Ulub??z ou Ullub??z - era um Ainu, um dos Aratar, e o Vala respons??vel pelo controle dos oceanos de Arda. Amante da ??gua, Ulmo foi um dos principais arquitetos do Arda e sempre teve uma estreita amizade com Manw??. Ele sempre desconfiou de Melkor, e o Senhor do Escuro temia o Mar quase tanto quanto ele temia Varda, isso porque o mar n??o podia ser dobrado e dominado por suas for??as. Ulmo n??o tinha habita????o em Valinor nem nenhuma habita????o permanente em terra, pois preferia as profundezas dos mares e dos rios. Seu pal??cio, no sop?? de Vaiya, chamava-se Ulmonan.Ulmo raramente ia aos Conselhos de M??hanaxar, apenas quando em grande necessidade. Ele preferia ficar em Arda, n??o andando na terra, pois sua forma encheria qualquer um de grande pavor e medo. Todas as ??guas estavam sob seu governo: ba??as, rios e at?? as ??guas sob a terra. Onde o poder de Morgoth era forte, entretanto, o pr??prio poder de Ulmo seria minado das ??guas pr??ximas ?? corrup????o de Morgoth. Foi pelos rios que ele manteve contato com Arda, e assim sabia mais sobre os acontecimentos com os Filhos de Il??vatar do que at?? mesmo o pr??prio Manw??, pois dessa forma ele vivia nas pr??prias veias do mundo."
        }
        else if( valarDefinido == 'vaire') 
        {
            Valar.innerHTML = 'VAIR??';
            Valar.style.backgroundImage = 'url("./ASSETS/vaire.jpg")';
            Descricao.innerHTML = " <b> Vair??  <br> (A Tecel??, Dama dos Espir??tos) </b> <br>  Vair??, a Tecel??, era um dos Ainur, esposa de Mandos, e a Vali?? respons??vel por tecer e registrar as hist??rias de Arda. Vair?? ?? contada entre as Rainhas dos Valar, embora n??o tivesse grande poder e prest??gio entre eles. A tape??aria produzida por ela enfeitava os Sal??es de Mandos, onde presumidamente ela tamb??m morava. Conforme o tempo passava, mais longa se tornava a tape??aria contando os feitos e hist??rias dos habitantes do mundo e dizem que antes do fim dos tempos ela cobrir?? todo o sal??o dos mortos. Ap??s a morte de Finw??, M??riel retornou ?? vida e passou a morar com Vair?? e servi-la. A M??riel foi dada a tarefa de registrar os feitos de todos os descendentes da Casa de Finw??. Vair?? tamb??m era a respons??vel pelo luto do mundo, suas lagrimas foram as respons??veis por dar o ultimo suspiro de vida as arvores de valinor para que assim fossem criados o sol e a lua."
        }
        else if( valarDefinido == 'vana') 
        {
            Valar.innerHTML = 'V??NA';
            Valar.style.backgroundImage = 'url("./ASSETS/vana.jpg")';
            Descricao.innerHTML = " <b> V??na   <br> (A Sempre Jovem, Rainha Das Flores) </b> <br>  V??na era um dos Ainur e a Vali?? respons??vel pela preserva????o de tudo que foi feito em Arda. Entre as sete Valier, V??na ficava em sexto lugar como Rainha dos Valar e era conhecida como V??na, a Sempre-jovem. V??na era irm?? ca??ula de Yavanna e esposa de Orom??. Sua morada era repleta de flores douradas; e com frequ??ncia ela visitava a floresta de Orom??. Da mesma forma que sua irm??, V??na amava a natureza e tudo que nela crescia. V??na teve grande influ??ncia na cria????o da fauna e flora de Yavanna e sua maior paix??o era pelas flores. V??na tamb??m preserva a liberdade dos filhos de eru, e era fortemente ligada as emo????es de alegria e felicidade dos seres de arda."
        }
        else if( valarDefinido == 'aule') 
        {
            Valar.innerHTML = 'AUL??';
            Valar.style.backgroundImage = 'url("./ASSETS/aule.jpg")';
            Descricao.innerHTML = " <b> Aul??  <br> (O Ferreiro do Mundo, N??vatar) </b> <br>  Aul?? era um Ainur, um dos Aratar e um Valar, que era respons??vel pela fabrica????o e elabora????o de subst??ncias das quais, Arda, o mundo, era composta. Ele tamb??m foi chamado de Mahal ou N??vatar e se delicia na natureza das subst??ncias e nas obras de habilidade, mas n??o preocupado com a posse ou o dom??nio. Al??m da forma????o de Arda, as maiores obras de Aul?? foram as Duas L??mpadas dos Valar, os vasos do Sol e da Lua, e os An??es, que ele criou por impaci??ncia da espera dos Filhos de Il??vatar. Ele tamb??m criou Angainor (a corrente de Melkor). Desesperado por alunos em quem ele poderia passar seu conhecimento e n??o querendo esperar pelo surgimento dos Filhos de Il??vatar, Aul?? criou sua pr??pria ra??a de seres, os an??es. No entanto, ele n??o tinha uma ideia clara de como seriam os Filhos de Il??vatar e, devido ?? presen??a do caos causado por Melkor, Aul?? tornou os An??es fortes e inflex??veis e n??o estava disposto a suportar o dom??nio dos outros, tamb??m incorporou alguns de seus valores e desejos para a Terra-M??dia. No entanto, Aul?? n??o tinha o poder de dar vida independente ??s suas cria????es, eles s?? podiam agir quando seu pensamento estava sobre eles. Il??vatar aceitou os An??es como seus filhos adotivos, no entanto, como foi ordenado que os elfos fossem a ra??a primog??nita, Il??vatar colocou os An??es para dormir at?? depois do Despertar dos Elfos. "
        }
        else if( valarDefinido == 'varda') 
        {
            Valar.innerHTML = 'VARDA';
            Valar.style.backgroundImage = 'url("./ASSETS/varda.jpg")';
            Descricao.innerHTML = " <b> Varda  <br> (Rainha de Arda, Senhora das Estrelas) </b> <br>  Varda ?? uma Ainu, uma dos Aratar e uma Vala respons??vel pelo contorno das estrelas nos c??us acima de Arda. ?? a esposa de Manw??, com quem mora em Ilmarin, no cume de Taniquetil, em Aman. Varda ?? a mais bonita de todos os Valar, e dizia-se que sua beleza estava al??m da descri????o de Homens e Elfos, pois seu rosto irradia a luz de Eru Il??vatar. Sem surpresa, a prov??ncia sobre a qual ela governava era leve, na medida em que se dizia que 'na luz est?? seu poder e sua alegria'. Mesmo antes de Melkor come??ar a criar sua disc??rdia, Varda conhecia bem sua mente e o rejeitou por causa disso, e sempre foi seu inimigo a partir daquele momento. Como resultado disso, Melkor tamb??m odiava Varda ao m??ximo dos Valar e a temia mais do que todos os outros que Eru havia criado.Ela fez as estrelas, encheu as l??mpadas dos Valar de luz, recolheu o orvalho das Duas ??rvores em seus po??os, formou as estrelas e constela????es mais recentes em prepara????o para o Despertar dos Elfos, santificou os Silmarils, estabeleceu os cursos da Lua e Sol, e p??s a Estrela de E??rendil no c??u. Por causa de sua cria????o das estrelas, os Elfos da Terra-m??dia reverenciam e amam-na o m??ximo dos Valar. Eles at?? deram a ela o nome de 'Elbereth', a invocaram nos momentos em que precisavam de ajuda e cantaram seus louvores sempre que as estrelas se erguiam."
        }
    }

}

function mudanca(resposta) {
    if (contador == 1) {
        if (resposta == 1) {
            respostas.push('MW3')
        }
        else if (resposta == 2) {
            respostas.push('VR3')
        }
        else if (resposta == 3) {
            respostas.push('YV5')
        }
        else if (resposta == 4) {
            respostas.push('UL5')
        }

        Pergunta.innerHTML = 'Um sabio senhor te oferece presentes de incriveis objetos m??gicos, voc?? pode escolher apenas 1, qual deles voc?? escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/magicFlower.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/blackSword.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/harpa.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/frasco.jpg")';
        card1.innerHTML = 'Flor';
        card2.innerHTML = 'Espada';
        card3.innerHTML = 'Harpa';
        card4.innerHTML = 'Frasco De Luz';
        contador++

    }

    else if (contador == 2) {
        if (resposta == 1) {
            respostas.push('VN2')
        }
        else if (resposta == 2) {
            respostas.push('MK2')
        }
        else if (resposta == 3) {
            respostas.push('VI2')
        }
        else if (resposta == 4) {
            respostas.push('AL3')
        }

        Pergunta.innerHTML = 'Qual destas palavras melhor te Descreve?'
        card1.style.backgroundImage = 'url("./ASSETS/florFeliz.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/livre.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/ambicioso.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/aventureiro.jpg")';
        card1.innerHTML = 'Alegre';
        card2.innerHTML = 'Livre';
        card3.innerHTML = 'Ambicioso';
        card4.innerHTML = 'Aventureiro';
        contador++
    }

    else if (contador == 3) {
        if (resposta == 1) {
            respostas.push('VN3')
        }
        else if (resposta == 2) {
            respostas.push('MW5')
        }
        else if (resposta == 3) {
            respostas.push('MK5')
        }
        else if (resposta == 4) {
            respostas.push('UL4')

        }

        Pergunta.innerHTML = 'Voc?? tem a escolha de explorar um lugar cheio de segredos, mist??rios e belezas, qual deles voc?? escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/gondolin.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/sobeArvores.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/forja.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/florestinha.jpg")';
        card1.innerHTML = 'Reino Antigo';
        card2.innerHTML = 'Arvores De Luz';
        card3.innerHTML = 'Forja Magica';
        card4.innerHTML = 'Reino na Floresta';
        contador++
    }

    else if (contador == 4) {
        if (resposta == 1) {
            respostas.push('VI3')
        }
        else if (resposta == 2) {
            respostas.push('VR1')
        }
        else if (resposta == 3) {
            respostas.push('AL5')
        }
        else if (resposta == 4) {
            respostas.push('YV1')

        }

        Pergunta.innerHTML = 'Voc?? est?? encurralado por um drag??o e n??o sabe como fugir, voc?? observa em seu canto armas, qual delas voc?? pega?'
        card1.style.backgroundImage = 'url("./ASSETS/cajado.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/Espada.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/adagas.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/fuga.jpg")';
        card1.innerHTML = 'Cajado';
        card2.innerHTML = 'Espada Elfica';
        card3.innerHTML = 'Adagas';
        card4.innerHTML = 'Tentar Fugir';
        contador++
    }

    else if (contador == 5) {
        if (resposta == 1) {
            respostas.push('MW2')
        }
        else if (resposta == 2) {
            respostas.push('AL2')
        }
        else if (resposta == 3) {
            respostas.push('VR2')
        }
        else if (resposta == 4) {
            respostas.push('VI5')
        }

        Pergunta.innerHTML = 'Voc?? tem a chande de conseguir um poder ??nico do pr??prio Criador, qual deles voc?? escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/controlePlantas.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/sabedoria.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/cura.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/agua.jpg")';
        card1.innerHTML = 'Dom??nio Das Plantas';
        card2.innerHTML = 'Sabedoria Infinita';
        card3.innerHTML = 'Poder de Cura';
        card4.innerHTML = 'Dom??nio Da ??gua';
        contador++
    }

    else if (contador == 6) {
        if (resposta == 1) {
            respostas.push('YV4')
        }
        else if (resposta == 2) {
            respostas.push('MK3')

        }
        else if (resposta == 3) {
            respostas.push('VI3')
        }
        else if (resposta == 4) {
            respostas.push('UL3')
        }

        Pergunta.innerHTML = 'Voc?? foi chamado a Valinor para comparecer a comemora????o de solsticio, para tocar um instrumento aos Valar, qual instrumento voc?? escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/flauta.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/alaude.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/harpa2.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/trombeta.jpg")';
        card1.innerHTML = 'Flauta';
        card2.innerHTML = 'Ala??de';
        card3.innerHTML = 'Harpa';
        card4.innerHTML = 'Trombeta';
        contador++
    }

    else if (contador == 7) {
        if (resposta == 1) {
            respostas.push('VN4')
        }
        else if (resposta == 2) {
            respostas.push('MW1')
        }
        else if (resposta == 3) {
            respostas.push('AL1')
        }
        else if (resposta == 4) {
            respostas.push('MK1')
        }

        Pergunta.innerHTML = 'Voc?? tem o poder de domar qualquer uma das seguintes criaturas que ir?? te acompanhar para sempre em sua jornada, qual delas voc?? escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/ent.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/aranha.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/aguia.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/dragon.jpg")';
        card1.innerHTML = 'Ent';
        card2.innerHTML = 'Aranha';
        card3.innerHTML = 'Aguia';
        card4.innerHTML = 'Drag??o';
        contador++
    }

    else if (contador == 8) {
        if (resposta == 1) {
            respostas.push('VN1')
        }
        else if (resposta == 2) {
            respostas.push('UL1')
        }
        else if (resposta == 3) {
            respostas.push('MW4')
        }
        else if (resposta == 4) {
            respostas.push('VR4')
        }

        Pergunta.innerHTML = 'At?? os seres mais poderosos tem medo de alguma coisa, qual dentre estes ?? o seu maior medo?'
        card1.style.backgroundImage = 'url("./ASSETS/fracasso.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/morte.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/perda.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/semMedo.jpg")';
        card1.innerHTML = 'Fracasso';
        card2.innerHTML = 'Morte';
        card3.innerHTML = 'Perda';
        card4.innerHTML = 'N??o tenho Medo';
        contador++
    }

    else if (contador == 9) {
        if (resposta == 1) {
            respostas.push('AL4')
        }
        else if (resposta == 2) {
            respostas.push('YV2')
        }
        else if (resposta == 3) {
            respostas.push('VR5')
        }
        else if (resposta == 4) {
            respostas.push('MK4')
        }

        Pergunta.innerHTML = 'Como ou pelo o que voc?? gostaria de ser lembrado ao deixar o Mundo?'
        card1.style.backgroundImage = 'url("./ASSETS/desbravador.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/liberdade.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/conhecimento.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/relacoes.jpg")';
        card1.innerHTML = 'Explorador';
        card2.innerHTML = 'Liberdade';
        card3.innerHTML = 'Sabedoria';
        card4.innerHTML = 'Rela????es';
        contador++
    }

    else if (contador == 10) {
        if (resposta == 1) {
            respostas.push('UL2')
        }
        else if (resposta == 2) {
            respostas.push('YV3')
        }
        else if (resposta == 3) {
            respostas.push('VI4')
        }
        else if (resposta == 4) {
            respostas.push('VN5')
        }

        containerCards.style.display = 'none'
        containerPerguntas.style.display = 'none'
        sumir.style.display = 'block'
        banner.style.height = "85vh"
        banner.style.alignItems = 'center'
        titulo.innerHTML = 'Descubra Qual o seu Valar'
        subtitulo.innerHTML = '';
        btn.innerHTML = 'Descobrir';

        for (i = 0; i < respostas.length; i++) {

            //MANWE
            if (respostas[i] == 'MW1') {
                manwe++
            }
            else if (respostas[i] == 'MW2') {
                manwe = manwe + 2
            }
            else if (respostas[i] == 'MW3') {
                manwe = manwe + 3
            }
            else if (respostas[i] == 'MW4') {
                manwe = manwe + 4
            }
            else if (respostas[i] == 'MW5') {
                manwe = manwe + 5
            }

            //VARDA
            else if (respostas[i] == 'VR1') {
                varda++
            }
            else if (respostas[i] == 'VR2') {
                varda = varda + 3
            }
            else if (respostas[i] == 'VR3') {
                varda = varda + 4
            }
            else if (respostas[i] == 'VR4') {
                varda = varda + 5
            }
            else if (respostas[i] == 'VR5') {
                varda = varda + 5
            }

            //YAVANNA
            else if (respostas[i] == 'YV1') {
                yavanna++
            }
            else if (respostas[i] == 'YV2') {
                yavanna = yavanna + 3
            }
            else if (respostas[i] == 'YV3') {
                yavanna = yavanna + 4
            }
            else if (respostas[i] == 'YV4') {
                yavanna = yavanna + 5
            }
            else if (respostas[i] == 'YV5') {
                yavanna = yavanna + 5
            }

            //ULMO
            else if (respostas[i] == 'UL1') {
                ulmo++
            }
            else if (respostas[i] == 'UL2') {
                ulmo = ulmo + 3
            }
            else if (respostas[i] == 'UL3') {
                ulmo = ulmo + 4
            }
            else if (respostas[i] == 'UL4') {
                ulmo = ulmo + 5
            }
            else if (respostas[i] == 'UL5') {
                ulmo = ulmo + 5
            }

            //MELKOR
            else if (respostas[i] == 'MK1') {
                melkor++
            }
            else if (respostas[i] == 'MK2') {
                melkor = melkor + 3
            }
            else if (respostas[i] == 'MK3') {
                melkor = melkor + 4
            }
            else if (respostas[i] == 'MK4') {
                melkor = melkor + 5
            }
            else if (respostas[i] == 'MK5') {
                melkor = melkor + 5
            }

            //VAIRE
            else if (respostas[i] == 'VI1') {
                vaire++
            }
            else if (respostas[i] == 'VI2') {
                vaire = vaire + 3
            }
            else if (respostas[i] == 'VI3') {
                vaire = vaire + 4
            }
            else if (respostas[i] == 'VI4') {
                vaire = vaire + 5
            }
            else if (respostas[i] == 'VI5') {
                vaire = vaire + 5
            }

            //AULE
            else if (respostas[i] == 'AL1') {
                aule++
            }
            else if (respostas[i] == 'AL2') {
                aule = aule + 3
            }
            else if (respostas[i] == 'AL3') {
                aule = aule + 4
            }
            else if (respostas[i] == 'AL4') {
                aule = aule + 5
            }
            else if (respostas[i] == 'AL5') {
                aule = aule + 5
            }

            //VANA
            else if (respostas[i] == 'VN1') {
                vana++
            }
            else if (respostas[i] == 'VN2') {
                vana = vana + 3
            }
            else if (respostas[i] == 'VN3') {
                vana = vana + 4
            }
            else if (respostas[i] == 'VN4') {
                vana = vana + 5
            }
            else if (respostas[i] == 'VN5') {
                vana = vana + 5
            }

        }

    }

}







