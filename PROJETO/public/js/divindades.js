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
            Descricao.innerHTML = " <b> Yavanna  <br> (Provedora de Frutos, Rainha Da Terra) </b> <br>  Yavanna era responsável pelo crescimento de todas as frutas e coisas crescentes de Arda. ela também foi chamada Kementári, Ivon . Ela residia nos Pastos de Yavanna, no sul de Valinor. Ela também é irmã mais velha de Vána. A partir dos Anos das Lâmpadas durante a Primavera de Arda, ela plantou e fez crescer as primeiras coisas crescentes do mundo (árvores e plantas), que ela havia preparado há muito tempo. Em primeiro lugar, assim como todas as outras coisas do mundo que os Valar nutriam e cuidavam, essas coisas prosperaram e prosperaram por um tempo. Melkor, no entanto, teve seus próprios planos e eles envolveram tirar o mundo de seus irmãos e governá-lo para si mesmo. De sua grande fortaleza de Utumno, no extremo norte, enviou seus venenos para as veias do mundo destruindo a Primavera de Arda. Então, as coisas de Yavanna ficaram doentes e apodrecidas e logo após Melkor assaltou e destruiu as Duas Lâmpadas, quebrando o mundo. ";

        }
        else if( valarDefinido == 'manwe') 
        {
            Valar.innerHTML = 'MANWË';
            Valar.style.backgroundImage = 'url("./ASSETS/manwe.jpg")';
            Descricao.innerHTML = " <b> Manwe  <br> (O Abençoado, Rei de Arda) </b> <br>  Manwë foi o líder dos Ainur, um dos Aratar, o Rei dos Valar, o marido de Varda, o Irmão do Senhor das Trevas Melkor e o Rei da Arda. Ele também era conhecido como Súlimo, Mânawenûz ou Valahiru e vive no Monte Taniquetil em Valinor, a montanha mais alta do mundo. Os ventos e os ares são seus servos. Ele era o maior em autoridade, mas não no poder, de todos os Valar, sendo Melkor mais poderoso. Ele foi, no entanto, o maior dos Aratar, entre os quais Melkor não foi contado.Manwë era (com Melkor) o mais velho dos Ainur, e aquele que melhor entendia a vontade de Eru. Quando Melkor criou a discórdia na Música do Ainur, o Segundo Tema de Eru que se levantou para combater a discórdia, usou Manwë como seu principal instrumento. Quando Arda foi formada, Manwë foi nomeado Governante de Arda, daí o seu título mais comum, o Rei mais velho."
        }
        else if( valarDefinido == 'melkor') 
        {
            Valar.innerHTML = 'MELKOR';
            Valar.style.backgroundImage = 'url("./ASSETS/melkor.jpeg")';
            Descricao.innerHTML = " <b> Melkor  <br> (Morgoth Bauglir) </b> <br>  Melkor, mais tarde conhecido como Morgoth, era o mais poderoso e mais sábio Valar. Por causa de seu orgulho e seu desejo de dominar os outros, ele caiu na escuridão, e se tornou o primeiro Senhor do Escuro. Morgoth eventualmente foi derrotado no fim da Guerra de Ira, mas o seu tenente Sauron continuou a guerra na Terra-Média por milhares de anos. A profecia é de que ele irá retornar no fim dos tempos para lutar e será derrotado e Arda finalmente ficará livre de todos os males. Nas primeiras eras de Arda melkor foi o responsável pela destruição das fontes de luz do mundo, primeiro destruindo as lamparinas de varda, depois as arvores de yavanna, além de corromper os elfos e criaturas a fim de criar seres maléficos como orcs e feras."
        }
        else if( valarDefinido == 'ulmo') 
        {
            Valar.innerHTML = 'ULMO';
            Valar.style.backgroundImage = 'url("./ASSETS/ulmo.jpg")';
            Descricao.innerHTML = " <b> Ulmo  <br> (Rei dos Mares, Senhor das Águas) </b> <br>  Ulmo - também conhecido como Ulubôz ou Ullubôz - era um Ainu, um dos Aratar, e o Vala responsável pelo controle dos oceanos de Arda. Amante da água, Ulmo foi um dos principais arquitetos do Arda e sempre teve uma estreita amizade com Manwë. Ele sempre desconfiou de Melkor, e o Senhor do Escuro temia o Mar quase tanto quanto ele temia Varda, isso porque o mar não podia ser dobrado e dominado por suas forças. Ulmo não tinha habitação em Valinor nem nenhuma habitação permanente em terra, pois preferia as profundezas dos mares e dos rios. Seu palácio, no sopé de Vaiya, chamava-se Ulmonan.Ulmo raramente ia aos Conselhos de Máhanaxar, apenas quando em grande necessidade. Ele preferia ficar em Arda, não andando na terra, pois sua forma encheria qualquer um de grande pavor e medo. Todas as águas estavam sob seu governo: baías, rios e até as águas sob a terra. Onde o poder de Morgoth era forte, entretanto, o próprio poder de Ulmo seria minado das águas próximas à corrupção de Morgoth. Foi pelos rios que ele manteve contato com Arda, e assim sabia mais sobre os acontecimentos com os Filhos de Ilúvatar do que até mesmo o próprio Manwë, pois dessa forma ele vivia nas próprias veias do mundo."
        }
        else if( valarDefinido == 'vaire') 
        {
            Valar.innerHTML = 'VAIRË';
            Valar.style.backgroundImage = 'url("./ASSETS/vaire.jpg")';
            Descricao.innerHTML = " <b> Vairë  <br> (A Tecelã, Dama dos Espirítos) </b> <br>  Vairë, a Tecelã, era um dos Ainur, esposa de Mandos, e a Valië responsável por tecer e registrar as histórias de Arda. Vairë é contada entre as Rainhas dos Valar, embora não tivesse grande poder e prestígio entre eles. A tapeçaria produzida por ela enfeitava os Salões de Mandos, onde presumidamente ela também morava. Conforme o tempo passava, mais longa se tornava a tapeçaria contando os feitos e histórias dos habitantes do mundo e dizem que antes do fim dos tempos ela cobrirá todo o salão dos mortos. Após a morte de Finwë, Míriel retornou à vida e passou a morar com Vairë e servi-la. A Míriel foi dada a tarefa de registrar os feitos de todos os descendentes da Casa de Finwë. Vairë também era a responsável pelo luto do mundo, suas lagrimas foram as responsáveis por dar o ultimo suspiro de vida as arvores de valinor para que assim fossem criados o sol e a lua."
        }
        else if( valarDefinido == 'vana') 
        {
            Valar.innerHTML = 'VÁNA';
            Valar.style.backgroundImage = 'url("./ASSETS/vana.jpg")';
            Descricao.innerHTML = " <b> Vána   <br> (A Sempre Jovem, Rainha Das Flores) </b> <br>  Vána era um dos Ainur e a Valië responsável pela preservação de tudo que foi feito em Arda. Entre as sete Valier, Vána ficava em sexto lugar como Rainha dos Valar e era conhecida como Vána, a Sempre-jovem. Vána era irmã caçula de Yavanna e esposa de Oromë. Sua morada era repleta de flores douradas; e com frequência ela visitava a floresta de Oromë. Da mesma forma que sua irmã, Vána amava a natureza e tudo que nela crescia. Vána teve grande influência na criação da fauna e flora de Yavanna e sua maior paixão era pelas flores. Vána também preserva a liberdade dos filhos de eru, e era fortemente ligada as emoções de alegria e felicidade dos seres de arda."
        }
        else if( valarDefinido == 'aule') 
        {
            Valar.innerHTML = 'AULË';
            Valar.style.backgroundImage = 'url("./ASSETS/aule.jpg")';
            Descricao.innerHTML = " <b> Aulë  <br> (O Ferreiro do Mundo, Návatar) </b> <br>  Aulë era um Ainur, um dos Aratar e um Valar, que era responsável pela fabricação e elaboração de substâncias das quais, Arda, o mundo, era composta. Ele também foi chamado de Mahal ou Návatar e se delicia na natureza das substâncias e nas obras de habilidade, mas não preocupado com a posse ou o domínio. Além da formação de Arda, as maiores obras de Aulë foram as Duas Lâmpadas dos Valar, os vasos do Sol e da Lua, e os Anões, que ele criou por impaciência da espera dos Filhos de Ilúvatar. Ele também criou Angainor (a corrente de Melkor). Desesperado por alunos em quem ele poderia passar seu conhecimento e não querendo esperar pelo surgimento dos Filhos de Ilúvatar, Aulë criou sua própria raça de seres, os anões. No entanto, ele não tinha uma ideia clara de como seriam os Filhos de Ilúvatar e, devido à presença do caos causado por Melkor, Aulë tornou os Anões fortes e inflexíveis e não estava disposto a suportar o domínio dos outros, também incorporou alguns de seus valores e desejos para a Terra-Média. No entanto, Aulë não tinha o poder de dar vida independente às suas criações, eles só podiam agir quando seu pensamento estava sobre eles. Ilúvatar aceitou os Anões como seus filhos adotivos, no entanto, como foi ordenado que os elfos fossem a raça primogênita, Ilúvatar colocou os Anões para dormir até depois do Despertar dos Elfos. "
        }
        else if( valarDefinido == 'varda') 
        {
            Valar.innerHTML = 'VARDA';
            Valar.style.backgroundImage = 'url("./ASSETS/varda.jpg")';
            Descricao.innerHTML = " <b> Varda  <br> (Rainha de Arda, Senhora das Estrelas) </b> <br>  Varda é uma Ainu, uma dos Aratar e uma Vala responsável pelo contorno das estrelas nos céus acima de Arda. é a esposa de Manwë, com quem mora em Ilmarin, no cume de Taniquetil, em Aman. Varda é a mais bonita de todos os Valar, e dizia-se que sua beleza estava além da descrição de Homens e Elfos, pois seu rosto irradia a luz de Eru Ilúvatar. Sem surpresa, a província sobre a qual ela governava era leve, na medida em que se dizia que 'na luz está seu poder e sua alegria'. Mesmo antes de Melkor começar a criar sua discórdia, Varda conhecia bem sua mente e o rejeitou por causa disso, e sempre foi seu inimigo a partir daquele momento. Como resultado disso, Melkor também odiava Varda ao máximo dos Valar e a temia mais do que todos os outros que Eru havia criado.Ela fez as estrelas, encheu as lâmpadas dos Valar de luz, recolheu o orvalho das Duas Árvores em seus poços, formou as estrelas e constelações mais recentes em preparação para o Despertar dos Elfos, santificou os Silmarils, estabeleceu os cursos da Lua e Sol, e pôs a Estrela de Eärendil no céu. Por causa de sua criação das estrelas, os Elfos da Terra-média reverenciam e amam-na o máximo dos Valar. Eles até deram a ela o nome de 'Elbereth', a invocaram nos momentos em que precisavam de ajuda e cantaram seus louvores sempre que as estrelas se erguiam."
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

        Pergunta.innerHTML = 'Um sabio senhor te oferece presentes de incriveis objetos mágicos, você pode escolher apenas 1, qual deles você escolhe'
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
            respostas.push('MK3')
        }
        else if (resposta == 4) {
            respostas.push('UL4')

        }

        Pergunta.innerHTML = 'Você tem a escolha de explorar um lugar cheio de segredos, mistérios e belezas, qual deles você escolhe?'
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

        Pergunta.innerHTML = 'Você está encurralado por um dragão e não sabe como fugir, você observa em seu canto armas, qual delas você pega?'
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
            respostas.push('MW1')
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

        Pergunta.innerHTML = 'Você tem a chande de conseguir um poder único do próprio Criador, qual deses você escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/controlePlantas.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/sabedoria.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/cura.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/agua.jpg")';
        card1.innerHTML = 'Controle Sobe as Plantas';
        card2.innerHTML = 'Sabedoria Infinita';
        card3.innerHTML = 'Cura';
        card4.innerHTML = 'Controle Sobe a Agua';
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

        Pergunta.innerHTML = 'Você foi chamado a Valinor para comparecer a comemoração de solsticio, para tocar um instrumento aos Valar, qual instrumento você escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/flauta.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/alaude.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/harpa2.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/trombeta.jpg")';
        card1.innerHTML = 'Flauta';
        card2.innerHTML = 'Alaúde';
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

        Pergunta.innerHTML = 'Você tem o poder de domar qualquer uma das seguintes criaturas que irá te acompanhar para sempre em sua jornada, qual delas você escolhe?'
        card1.style.backgroundImage = 'url("./ASSETS/ent.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/aranha.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/aguia.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/dragon.jpg")';
        card1.innerHTML = 'Ent';
        card2.innerHTML = 'Aranha';
        card3.innerHTML = 'Aguia';
        card4.innerHTML = 'Dragão';
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

        Pergunta.innerHTML = 'Até os seres mais poderosos tem medo de alguma coisa, qual dentre estes é o seu maior medo?'
        card1.style.backgroundImage = 'url("./ASSETS/fracasso.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/morte.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/perda.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/semMedo.jpg")';
        card1.innerHTML = 'Fracasso';
        card2.innerHTML = 'Morte';
        card3.innerHTML = 'Perda';
        card4.innerHTML = 'Não tenho Medo';
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

        Pergunta.innerHTML = 'Como ou pelo o que você gostaria de ser lembraido ao deixar o Mundo?'
        card1.style.backgroundImage = 'url("./ASSETS/desbravador.jpg")';
        card2.style.backgroundImage = 'url("./ASSETS/liberdade.jpg")';
        card3.style.backgroundImage = 'url("./ASSETS/conhecimento.jpg")';
        card4.style.backgroundImage = 'url("./ASSETS/relacoes.jpg")';
        card1.innerHTML = 'Explorador';
        card2.innerHTML = 'Liberdade';
        card3.innerHTML = 'Sabedoria';
        card4.innerHTML = 'Relações';
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







