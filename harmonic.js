/* exported Harmonic */
/* global __HARMONIC */

// Note: `__HARMONIC` is not an actual identifer,
// it is the prefix of `harmonic build`'s substitution patterns.
// The substitution patterns look like a property access so that
// we can just whitelist `__HARMONIC` as a global identifier
// instead of having to whitelist every single substitution.

// TODO ESLint's `exported` directive seems to not be working correctly
// with the current version.
// We should probably `export` Harmonic using ES2015 module syntax and
// trash the `exported` directive.
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Harmonic = (function () {
    // eslint-disable-line no-unused-vars

    function Harmonic(name) {
        _classCallCheck(this, Harmonic);

        this.name = name;
    }

    _createClass(Harmonic, [{
        key: "getConfig",
        value: function getConfig() {
            return {"index_posts":999,"name":"Robson Júnior","title":"Robson Júnior","domain":"http://robsongajunior.github.io/","subtitle":"Orgulhosamente criado com Harmonic","author":"@robsongajunior","description":"Aqui conto o que acontece na minha carreira, o que estudo e tudo que venho aprontando no mundo developer.","bio":"Estudando de Análise e Desenvolvimento de Sistemas, Analísta e Developer na empresa Terra Networks e membro da organização JSRocks. Atualmente resido na imensidão da Weblandia","theme":"harmonic-theme-robsonjunior","preprocessor":"less","posts_permalink":":language/:year/:month/:title","pages_permalink":":language/pages/:title","header_tokens":["<!--","-->"],"i18n":{"default":"pt-br","languages":["pt-br"]}};
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            return {"pt-br":[{"layout":"post","title":"Retrospectiva 2016","date":"2016-12-25T17:01:27.029Z","comments":"true","published":"true","keywords":"","description":"2016 foi um um ano bom, mais tranquilos em alguns aspéctos e mais agitado em outros.","categories":["2016"," retrospectiva"],"cover":"http://www.guduxus.com.br/wp-content/uploads/2016/02/2016-predictions-930x527.jpg","coverAlt":"Capa Retrospectiva 2016","content":"<p>Faz muito tempo que não apareço por aqui,\nentão nada melhor do que fazer uma retrospectiva para refletir sobre todo meu ano.</p>\n<p>Eu nunca acreditei que quando um ano inicia um ciclo novo começa.</p>\n","file":"src/posts/retrospectiva-2016.md","filename":"retrospectiva-2016","link":"2016/12/retrospectiva-2016","lang":"pt-br","default_lang":false},{"layout":"post","title":"Retrospectiva 2015","date":"2015-12-30T23:26:27.029Z","comments":"true","published":"true","keywords":"","description":"2015 foi um ano incrível, e eu não poderia deixar de contar como foi tudo isso.","categories":["2015"," retrospectiva"],"cover":"/images/retrospectiva-2015/cover.jpg","coverAlt":"Capa Retrospectiva 2015","content":"<p>Quando 2015 começou, já tinha uma leve sensação que seria um ano diferente.\nOs planos para o trabalho, eventos gostaria de participar e \numa lista grande de coisas para estudar. </p>\n","file":"src/posts/retrospectiva-2015.md","filename":"retrospectiva-2015","link":"2015/12/retrospectiva-2015","lang":"pt-br","default_lang":false},{"layout":"post","title":"Sonho vs Mediocridade","date":"2015-09-02T05:36:34.148Z","comments":"true","published":"true","keywords":"","description":"","categories":["Motivação"],"cover":"/images/sonhos-vs-mediocridade/cover.jpg","coverAlt":"Sonhos vs Mediocridade","content":"<p>Resolvi escrever esse texto para poder descrever o que sinto em relação quando uma pessoa me pergunta algo sobre sucesso, carreira etc ...</p>\n<p>Sempre achei   isso uma pergunta idiota, afinal </p>\n","file":"src/posts/sonho-vs-mediocridade.md","filename":"sonho-vs-mediocridade","link":"2015/09/sonho-vs-mediocridade","lang":"pt-br","default_lang":false},{"layout":"post","title":"HackInPoa - 2015","date":"2015-04-22T02:07:17.842Z","comments":"true","published":"true","keywords":"","description":"Encontro promovido pela globo.com, com objetivo de Boas vindas ao seu novo escritórtio em Porto Alegre..","categories":["HackInPOA"," Globo.com"," Hackaton"],"cover":"/images/hackinpoa/cover.jpg","coverAlt":"HackInPoa - 2015","content":"<p><img src=\"/images/hackinpoa/hackinpoa.jpg\" alt=\"Banner HackInPOA\"></p>\n<p>Como <strong>boas vindas</strong> em Porto Alegre, nos dias 11 e 12 de abril, a <a href=\"http://www.globo.com/\">Globo.com</a> organizou um hackton para galera, mas não tinha só pessoas da capital fazendo barulho, o evento bombou </p>\n","file":"src/posts/hackinpoa.md","filename":"hackinpoa","link":"2015/04/hackinpoa","lang":"pt-br","default_lang":false},{"layout":"post","title":"Primeiro Senac Talks 2015","date":"2015-03-15T02:42:16.842Z","comments":"true","published":"true","keywords":"","description":"Encontro promovido pela Faculdade de Tecnologia SenacRS afim de discutir inovação, tecnologia e tendencias de mercado.","categories":["senacTalks"," senacRS"," eventos"],"cover":"/images/senac-talks-2015-1/cover.jpg","coverAlt":"Primeir Senac Talks 2015","content":"<p>Senac Talks é um evento promovido pela <a href=\"http://www.senacrs.com.br/\">Faculdade de Tecnologia Senac RS</a>, ele vem com a intenção de promover discuções sobre tecnologia, mercado de trabalho e o que </p>\n","file":"src/posts/primeiro-senac-talks-2015.md","filename":"primeiro-senac-talks-2015","link":"2015/03/primeiro-senac-talks-2015","lang":"pt-br","default_lang":false},{"layout":"post","title":"Retrospectiva 2014","date":"2014-12-21T22:44:52.194Z","comments":"true","published":"true","keywords":"","description":"2014 simplesmente foi um ano fantástico, me proporciou experiências que eu pensava que iria muitos anos para acontecer","categories":["retrospectiva-2014"," 2014"],"cover":"/images/retrospectiva-2014/cover.png","coverAlt":"Robson Júnior - Retrospectiva 2014","content":"<p>2014 simplesmente foi um ano fantástico, me proporciou experiências que eu pensava que iria muitos anos para acontecer, conheci pessoas que nunca pensei que poderia e vi coisas </p>\n","file":"src/posts/retrospectiva-2014.md","filename":"retrospectiva-2014","link":"2014/12/retrospectiva-2014","lang":"pt-br","default_lang":false},{"layout":"post","title":"TcheLinux","date":"2014-12-10T15:12:30.265Z","comments":"true","published":"true","keywords":"","description":"__TchêLinux__ caiu exatamente uma semana depois da __#JSCONFAR__, fui em um clima de um evento mais light para oficialmente fechar o ano.","categories":["Linux"," Unix"," TcheLinux"," TcheLinux2014"," 2014"],"cover":"/images/tchelinux-2014/tchelinux-cover.jpg","coverAlt":"Tche Linux 2014","content":"<p>O <strong>TchêLinux</strong> caiu exatamente uma semana depois da <strong>#JSCONFAR</strong>, fui em um clima de um evento mais light para oficialmente fechar o ano. Hoje posso falar que esse evento teve um gostinho </p>\n","file":"src/posts/tchelinux.md","filename":"tchelinux","link":"2014/12/tchelinux","lang":"pt-br","default_lang":false},{"layout":"post","title":"JSConfAR Épica","date":"2014-12-02T00:08:05.467Z","comments":"true","published":"true","keywords":"","description":"Toda essa ideia de ir para a JSConfAr surgiu em uma loucura quando saiu a grade das palestras.","categories":["eventos"," javascript"," jsconfar"],"cover":"/images/jsconfar-2014/jsconfar-cover.jpg","coverAlt":"JS Conf BS AS | Javascript","content":"<p>Toda essa ideia de ir para a JSConfAr surgiu em uma loucura quando saiu a grade das palestras, olhando vi que só palestrante que quebrariam a banca lá nos hermanos, logo</p>\n","file":"src/posts/jsconfar-epica.md","filename":"jsconfar-epica","link":"2014/12/jsconfar-epica","lang":"pt-br","default_lang":false},{"layout":"post","title":"O primeiro a gente nunca esquece","date":"2014-11-03T02:32:24.842Z","comments":"true","published":"true","keywords":"","description":"Sabe aquela primeira namorada, primeiro trabalho ou até mesmo aquele primeiro Hello World?","categories":["primeiro"," first"],"cover":"/images/o-primeiro-a-gente-nunca-esquece/main-banner.jpg","coverAlt":"Robson Junior Cover | Javascript","content":"<p>Sabe aquela primeira namorada, primeiro trabalho ou até mesmo aquele\nprimeiro Hello World?</p>\n<p>Pois é, a gente nunca esquece né?!</p>\n<p>Nesse caso o que vou falar nesse post é a mesma sensação. </p>\n","file":"src/posts/o-primeiro-a-gente-nunca-esquece.md","filename":"o-primeiro-a-gente-nunca-esquece","link":"2014/11/o-primeiro-a-gente-nunca-esquece","lang":"pt-br","default_lang":false}]};
        }
    }, {
        key: "getPages",
        value: function getPages() {
            return {"pt-br":[{"layout":"page","title":"Um pouco mais sobre o Robson Júnior","date":"2017-02-05T16:52:34.411Z","comments":"true","published":"true","keywords":"skill, profile","description":"Aqui podemos conhecer um pouco mais sobre meu lado pessoal e profissional assim como minhas skills.","categories":"skill, profile","content":"<!doctype html>\n<html lang=\"pt-br\">\n<head>\n    <meta charset=\"UTF-8\" />\n\n    <title>Um pouco mais sobre o Robson Júnior - Robson Júnior</title>\n\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    \n    <meta name=\"author\" content=\"@robsongajunior\">\n    <meta name=\"description\" content=\"Aqui conto o que acontece na minha carreira, o que estudo e tudo que venho aprontando no mundo developer.\">\n    <meta name=\"keywords\" content=\"Robson Júnior, carreira, palestras, JavaScript, JS, ECMAScript, ES6, Harmonic, front-end\">\n\n    \n    <meta property=\"og:description\" content=\"Aqui podemos conhecer um pouco mais sobre meu lado pessoal e profissional assim como minhas skills.\">\n    <meta property=\"og:image\" content=\"http://robsongajunior.github.io//images/share/profile-robsongajunior.jpg\">\n    <meta property=\"og:site_name\" content=\"robsonjunior\">\n    <meta property=\"og:title\" content=\"Robson Júnior - Um pouco mais sobre o Robson Júnior\">\n    <meta property=\"og:type\" content=\"website\">\n    <meta property=\"og:url\" content=\"http://robsongajunior.github.io/\">\n\n    <meta name=\"twitter:card\" content=\"summary_large_image\">\n    <meta name=\"twitter:site\" content=\"http://robsongajunior.github.io/\">\n    <meta name=\"twitter:creator\" content=\"@robsongajunior\">\n    <meta name=\"twitter:title\" content=\"Robson Júnior - Um pouco mais sobre o Robson Júnior\">\n    <meta name=\"twitter:description\" content=\"Aqui podemos conhecer um pouco mais sobre meu lado pessoal e profissional assim como minhas skills.\">\n    <meta name=\"twitter:image\" content=\"http://robsongajunior.github.io//images/profile-robsongajunior.jpg\">\n\n    \n    <link rel=\"canonical\" href=\"http://robsongajunior.github.io/\" />\n\n    \n    <link rel=\"stylesheet\" href=\"/css/main.css\" />\n    <link rel=\"stylesheet\" href=\"/css/vendor/prism.css\" />\n</head>\n<body>\n    <figure id=\"mainBanner\" class=\"main-banner internal-banner\" data-banner-src=\"../../images/main-banner.jpg\" data-banner-alt=\"Robson Junior Cover | Javascript\"></figure>\n\n\n    <main id=\"main\">\n        <div class=\"profile-bar\">\n\t<div class=\"wrap-content\">\n\t\t<picture class=\"picure-bar\"> <img class=\"img-bar\" src=\"/images/profile-robsongajunior.jpg\" alt=\"Robson Júnior\"> </picture>\n\t\t<cite class=\"cite-bar\">- Coffee in, code out!!</cite>\n\t</div>\n</div>\n\n\n\n\n        <section class=\"wrap-content content-job\">\n            <article class=\"content-right\">\n                <h2>#sobre</h2>\n                \n                <p>\n                    <a href=\"https://www.linkedin.com/in/robsongajunior\" target=\"_blank\"><strong>Robson Gomes de Araújo Júnior</strong></a>.\n                    Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> na <a href=\"http://www.senacrs.com.br/\" target=\"_blank\" title=\"Faculdade de Tecnologia SenacRS\"><strong>Faculdade de Tecnologia SenacRS</strong></a>, <u><i>solteiro</i></u>,\n                    membro da Organização <a href=\"https://github.com/JSRocksHQ\" target=\"_blank\" title=\"JSRocks\"><strong>JSRocks</strong></a>, <i>Analísta e Desenvolvedor Web</i> do <a href=\"https://www.terra.com.br/\" target=\"_blank\" title=\"Terra Networks\"><u>Terra Networks S/A</u></a>.\n                    Possui <strong>24</strong> anos de idade, atua na área há <strong>4 anos</strong> e atualmente reside na imensidão da Weblândia / <strong>Cidade Baixa - Porto Alegre</strong>.\n                </p>\n            </article>\n\n\n            <article class=\"content-left\">\n                <h2>#objetivo</h2>\n\n                <p>\n                    Seguir na jornada de migração que vem acontecendo, do <i><u>FrontEnd</u></i> para o <strong>BackEnd</strong>.\n                    Em alguns anos deseja ter conhecimento suficiente para poder defender a empresa\n                    junto com o time de <strong>SI</strong>.\n                </p>\n            </article>\n\n\n            <article class=\"content-right\">\n                <h2>#skills</h2>\n\n                <div id=\"skills\">\n                    <div id=\"sk-html\">\n                        <span class=\"skill-bar skill-bar-50\">HTML</span>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                    <div id=\"sk-css\">\n                        <span class=\"skill-bar skill-bar-60\">CSS/<i>pre-processadores</i></span>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                    <div id=\"sk-js\">\n                        <span class=\"skill-bar skill-bar-70\">JavaScript</span>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                    <div id=\"sk-py\">\n                        <span class=\"skill-bar skill-bar-20\">Python</span>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                    <div id=\"sk-bh\">\n                        <span class=\"skill-bar skill-bar-10\">Bash</span>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                    <div id=\"sk-linux\">\n                        <span class=\"skill-bar skill-bar-100\">Linux / <i>usário dia a dia (OS Default)</i></span>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                </div>\n            </article>\n            \n\n            <article class=\"content-left\">\n                <h2>#curriculum</h2>\n\n\n                <h3>\n                    <a href=\"https://www.terra.com.br/\" target=\"_blank\" title=\"Terra Networks S/A - Notícias\">Terra Networks</a> / <i>atualmente</i>\n                </h3>\n                \n                <p>\n                    <b>início:</b> 19.02.2014 - <b>cargo:</b> programador\n                    <br>\n                    <b>início:</b> 01.10.2015 - <b>cargo:</b> analísta desenvolvedor web\n                </p>\n        \n                <ul class=\"project-list\">\n                    <li class=\"project-item\">\n                        <b>Ozone Funcional Tests</b>: Escrito em Python e usando SeleniumWebdriver + Unittest, conseguimos ter ganhos de 30% menos problemas a cada deploy,\n                        integrado ao deploy automatizado conseguimos ter o controle do que está e não está funcionando antes de ir para produção.\n                        Arquiteura modularizada trabalhando com um remote selenium server. Para facilitar a vida dos frontenders, pude integrar ao grunt escrevendo uma task\n                        que dispara os testes remoto.\n                    </li>\n                    \n                    <li class=\"project-item\">\n                        <a href=\"https://correo.terra.com.ar\" target=\"_blank\" title=\"Terra Mail\">Ozone Webmail Latam</a>: Nova interface para o webmail do Terra,\n                        mais moderna com novas tecnologias FrontEnd, mudança na API de consumo voltada para performance, pudemos também separar a parte de renderização\n                        do backend além de trazermos o produto para o conceito Single Page Application,\n                        amenizando cargas no backend. Produto já em produção para Argentina, Colombia, Chile, Peru, Venezuela, EUA, México.\n                    </li>\n                    \n                    <li class=\"project-item\">\n                        <a href=\"chat.terra.com.br\" target=\"_blank\" title=\"\">Terra Chat</a>: Novo chat do Terra matando tecnologias como Servidor Ejabberd, protocolo XMPP e Erlang,\n                        trazendo para novas tecnologias como Firebase e alguns fluxos em Python. Trazendo uma redução enorme de custo para empresa e ganhos na autonomia\n                        do desenvolvimento separando frontend do backend.\n                    </li>\n                    \n                    <li class=\"project-item\">\n                        <a href=\"https://servicos.terra.com.br/\" target=\"_blank\" title=\"Serviços Terra\">Terra Serviços</a>: Reformulação do visual da vitrine virtual do Terra.\n                    </li>\n                \n                    <li class=\"project-item\">\n                        <a href=\"https://esportes.terra.com.br/sao-paulo/as-moscas-audax-faz-4-a-2-no-sao-paulo-e-impoe-primeira-derrota-de-ceni,8a5f987b855102a56387021a872fee7aydsvg7u1.html\" target=\"_blank\" title=\"StickAd\">StickAd</a>: Solução\n                        FontEnd voltado para aumento de visualização das publicidades, não podendo revelar o ganho mas um simples JavaScript teve ganhos significativos chegando a mais de 30% available.\n                    </li>\n                </ul>\n\n\n                <hr>\n\n\n                <h3>\n                    <a href=\"https://www.studiogt.com.br/\" target=\"_blank\" title=\"\">StudioGT</a>\n                </h3>\n                \n                <p>\n                    <b>início:</b> 01.10.2013 - <b>fim:</b> 12.02.2014 - <b>cargo:</b> frontend developer\n                </p>\n\n\n                <hr>\n\n\n                <h3>\n                    <a href=\"http://interative.cc/old/\" target=\"_blank\" title=\"Agência Digital Interative Studio\">Interative Studio</a>\n                </h3>\n                \n                <p>\n                    <b>início:</b> 13.01.2013 - <b>fim:</b> 28.09.2013 - <b>cargo:</b> frontend developer / <i>free-lancer</i>\n                </p>\n\n\n                <hr>\n\n\n                <h3>\n                    <a href=\"http://www.add.digital/\" target=\"_blank\" title=\"ADD - Agência Design Digital\">ADD</a>\n                </h3>\n\n                <p>\n                    <b>início:</b> 01.08.2012 - <b>fim:</b> 12.01.2013 - <b>cargo:</b> frontend developer\n                </p>\n            </article>\n\n            <article class=\"content-right\">\n                \n            </article>\n        </section>\n\n        <div class=\"clearfix\"></div>\n    </main>\n\n    <footer id=\"footer\">\n    <div class=\"wrap-content\">\n        <cite>\n            Orgulhosamente criado com <a href=\"https://github.com/es6rocks/harmonic/\" target=\"_blank\">Harmonic</a>.\n        </cite>\n    </div>\n</footer>\n\n\n<script type=\"text/javascript\" src=\"/js/main.js\" charset=\"utf-8\"></script>\n<script type=\"text/javascript\" src=\"/js/vendor/prism.js\" charset=\"utf-8\"></script>\n\n</body>\n</html>\n","file":"src/posts/curriculum.md","filename":"curriculum","link":"pages/curriculum","lang":"pt-br"}]};
        }
    }]);

    return Harmonic;
})();