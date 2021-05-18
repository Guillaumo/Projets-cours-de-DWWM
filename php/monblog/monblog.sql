-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 18 mai 2021 à 20:58
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `monblog`
--

-- --------------------------------------------------------

--
-- Structure de la table `node`
--

DROP TABLE IF EXISTS `node`;
CREATE TABLE IF NOT EXISTS `node` (
  `nid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` varchar(32) CHARACTER SET ascii NOT NULL DEFAULT 'article' COMMENT 'The type of the node.',
  `title` varchar(255) NOT NULL,
  `summary` longtext,
  `seo_title` varchar(255) DEFAULT NULL,
  `body` longtext,
  `image` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nid`),
  UNIQUE KEY `path` (`path`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COMMENT='The base table for node.';

--
-- Déchargement des données de la table `node`
--

INSERT INTO `node` (`nid`, `type`, `title`, `summary`, `seo_title`, `body`, `image`, `path`) VALUES
(1, 'accueil', 'Le blog de mes hobbies : Kung fu, théâtre, jardinage', 'Ce site web ou blog est un exercice php/css/html pour la mise en place d\'un back-office qui permet, en s\'inspirant d\'une architecture MVC, d\'ajouter, de supprimer et de modifier des informations (node) ayant pour champ : type, titre, résumé, corps, titre pour le seo, une image et éventuellement un chemin unique.', 'Accueil | Le blog de mes hobbies', 'Les rubriques listent les nodes qui ont le même \"type\" (Kung fu, Théâtre, Jardinage).\r\nLe click sur le titre d\'un élément de liste permet d\'ouvrir le node et voir l\'intégralité d son contenu (corps).\r\nPour ceux qui sont avancés : utilisez le champ \"path\" pour faire en sorte qu\'une url du type node/123 se transforme en /rubrique/kungfu par exemple.', 'hobby.png', 'accueil'),
(2, 'rubrique', 'Kung fu', 'Aussi appelé Gong fu, le kung fu est une appellation générique longtemps utilisée à tort en Occident pour désigner cet art dit \"martial\".\r\n\r\nVous y verrez quel est son étymologie, son histoire et ses légendes, ainsi que ses différences\r\n', 'Kung fu | Le blog de mes hobbies', '', 'kung_fu.jpg', 'kung_fu'),
(3, 'rubrique', 'Theatre', 'Le théâtre est à la fois l\'art de la représentation d\'un drame ou d\'une comédie, un genre littéraire particulier, et l\'édifice dans lequel se déroulent les spectacles de théâtre. On parle aussi de genre dramatique.', 'Théâtre | Le blog de mes hobbies', '', 'theatre.jpg', 'theatre'),
(4, 'rubrique', 'Jardinage', 'Le jardinage est la pratique, et parfois l\'art, de semer, planter, maintenir des végétaux composant un jardin dans des conditions idéales pour leur développement. Cette pratique répond à un besoin d’esthétique et/ou alimentaire.\r\n\r\nLe terme « jardinage » est employé surtout pour les activités de loisir, d\'ornement et d\'autoconsommation alimentaire pratiquée par les particuliers et les entités l\'exerçant sans but lucratif direct, tandis que les termes maraîchage, horticulture, arboriculture, floriculture... désignent les activités professionnelles qui visent à produire et vendre fruits, fleurs, légumes, arbres fruitiers et d\'ornements ainsi que divers autres produits végétaux.\r\n\r\nLes méthodes de jardinage dans le monde varient selon le climat, le sol, les usages et les ressources dont dispose le jardinier.', 'Jardinage | Le blog de mes hobbies', '', 'jardin-grand.png', 'jardinage'),
(6, 'Kung fu', 'Qu\'est ce que le kung fu ?', 'Quand on parle de Kung fu, on pense surtout aux films d\'arts martiaux avec Bruce Lee, Jackie Chan et autres.\r\nEn fait Kung fu a un sens beaucoup plus vaste que l\'on pourrait croire...', 'Kung fu étymologie | Le blog de mes hobbies', 'Kung-fu est en Occident le nom généralement donné aux arts martiaux chinois externes comme internes, bien que l\'on utilise rarement ce terme pour désigner le tai-chi-chuan.\r\n\r\nCe terme, transcription de 功夫 (gung1fu1 en jyutping cantonais, gōngfu en mandarin Écouter) a été introduit en Europe dans les années 1970 pour désigner les films chinois d\'arts martiaux. C\'est la lecture cantonaise de ce mot, Hong Kong ayant été la source majeure de films chinois dans ces années-là. Les termes « kung 功 » et « fu 夫 » traduits littéralement et séparément ont une tout autre signification que « arts martiaux » chinois. « Kung » désigne la « maîtrise », le « perfectionnement », la « possession d\'un métier » ou une action en laquelle beaucoup de temps a été consacré (coup utilisant nominatif granitique). Le terme est à rapprocher d\'un point de vue sémantique de la notion d\'artisan tel qu\'il était usité en Europe au xixe siècle : ce terme désignait l\'homme de métier qui par un apprentissage auprès d\'un maître acquérait cultures, techniques et savoir-faire. Fu désigne les techniques en tant que contenu, soit l\'énergie qui a été investie dans l\'acquisition des techniques les plus efficaces pour une possibilité accrue de fluidité. On peut ainsi dire de quelqu\'un qu\'il possède le kung fu en gastronomie, le kung fu en peinture, le kung fu en musique ou le kung fu en informatique.', 'Kung_Fu_(功夫).jpg', 'etymologie'),
(7, 'Kung fu', 'Histoire et légendes du kung fu', 'Le Kung fu remonte si loin dans le temps que l\'histoire et les légendes se confondent.\r\nL\'origine de cet art ancestral est pluriel.', 'Kung fu histoire et légendes | Le blog de mes hobbies', 'L’origine des arts martiaux est attribuée à des nécessités d\'auto-défense, des activités de chasse et à la formation militaire dans l\'ancienne Chine. Le combat au corps à corps et la pratique des armes ont été importants dans la formation des soldats chinois. Les arts martiaux chinois intégrèrent à leur pratique différentes philosophies et notions, s\'élargissant, au-delà de la seule auto-défense, à l\'entretien physique pour finalement devenir une méthode d’éducation personnelle. L\'influence des idéaux martiaux dans la société civile se propagea ultérieurement dans la poésie, la fiction littéraire, puis à notre époque dans les films.\r\n\r\nSelon la légende, le mythique Empereur Jaune aurait présenté les premiers systèmes de lutte chinois1. Célèbre général avant de devenir empereur de Chine, il aurait écrit de longs traités sur la médecine, l\'astrologie et les arts martiaux.\r\n\r\nLe shǒubó (手搏, attesté au moins dès le iiie siècle av. J.-C.), et le xiang bo (similaire au sanda) dans les années 600 av. J.-C.2, ne sont que deux exemples d\'anciens arts martiaux chinois. En 509 av. J.-C., Confucius aurait suggéré au duc Ding de Lu que les gens devraient pratiquer les arts littéraires autant que les arts martiaux2 : ainsi les arts martiaux commencèrent à être pratiqués par des citoyens ordinaires, et plus seulement par des militaires et des sectes religieuses. Un système de lutte appelé juélì ou jiǎolì (角力) est mentionné dans le Classique des rites (Li King)3 au ier siècle av. J.-C. Ce système de combat inclut notamment des techniques de frappe, de projection, de manipulation articulaire, et des attaques des points vitaux. Le jiao di est devenu un sport durant la dynastie Qin (221-207 av. J.-C.). Le Livre des Han (206-8 av. J.-C.) mentionne que pendant la dynastie Han (206 av - 8 CE) existait une distinction entre un combat sans arme intitulé shǒubó (手 搏), pour lequel des guides d’apprentissage avaient déjà été écrits, et la lutte sportive, alors connue comme juélì ou jiǎolì (角力). \"Six Chapitres de Combat à main nue\" étaient mentionnés à la même époque dans le Han Shu I Wen Chih (Livre Han des arts), mais ces chapitres furent perdus au cours des siècles suivants4.\r\n\r\nLa lutte est également documentée dans les Mémoires du Grand Historien de Sima Qian (env. 100 av. J.-C.)5.\r\n\r\nUne théorie de combat à main nue, incluant la présentation des notions de « techniques dures » et « douces » serait exposée dans l\'histoire de « la jeune fille de Yue », dans les Annales des Printemps et des Automnes de l’État de Lu (ve siècle av. J.-C.).\r\n\r\nSous la dynastie des Tang, des descriptions de danses d\'épée ont été immortalisées dans les poèmes de Li Bai. Sous les dynasties Song et Yuan, des compétitions de xiangpu (un prédécesseur du sumo) étaient parrainées par les cours impériales. Les concepts modernes d’arts martiaux ont été entièrement développés par les dynasties des Ming et des Qing.\r\n\r\nLes concepts associés aux arts martiaux chinois ont changé avec l\'évolution de la société chinoise et ont acquis au fil du temps une base philosophique. Des passages dans le Tchouang-tseu, un texte taoïste, ont trait à la psychologie et la pratique des arts martiaux. Tchouang-tseu, son auteur éponyme, a sans doute vécu au ive siècle av. J.-C. Le Tao Te Ching, souvent attribué à Lao Tseu, est un autre texte taoïste qui contient des principes applicables aux arts martiaux. Selon l\'un des textes classiques du confucianisme, Zhou Li (周礼), le tir à l\'arc et la conduite des chars faisaient partie des « six arts » (六艺, liu yi) de la dynastie Zhou (1122-256 av. J.-C.), avec les rites, la musique, la calligraphie et les mathématiques. L’Art de la guerre, écrit au vie siècle av. J.-C. par Sun Tzu, traite de la guerre militaire, mais contient des idées reprises dans les arts martiaux chinois.', 'Liji.jpg', 'kung_fu-histoire'),
(8, 'Kung fu', 'Les différents styles de kung fu', 'Que ce soit du nord ou du sud de la Chine, de l\'interne ou de l\'externe, ou bien d\'une religion ou d\'une philosophie, la pratique du Kung fu présente de nombreuses variétés.', 'Kung fu et ses différents styles | Le blog de mes hobbies', 'Styles du Nord et styles du Sud\r\n\r\nLes styles du nord de kung-fu utilisent plus les jambes et ceux du sud plus les poings. Cela se reflète dans l’expression chinoise Mandarin Nan Quan Bei Tui (chinois : 南拳北腿)qui veut dire « poings dans le sud et jambes dans le nord » et renvoie aux différences (et parfois les oppositions) existant depuis des siècles) entre le Nord et le Sud de la Chine, et ce tant au niveau culturel que des mentalités ou du climat… Pour ce qui est du wushu, on dit également que la topographie du Nord, avec ses vastes étendues, permettant l’utilisation sans contrainte des jambes lors des assauts, a favorisé un style de combat à longue distance, tandis que, les pieds dans les rizières, les maîtres d\'arts martiaux du Sud de la Chine, ont tout logiquement mis l\'accent sur les techniques de poings (appropriées lors de combats plus rapprochés). La réalité est évidemment plus subtile qu’une expression générale réifiante (par exemple, les styles Choy-gar et Mok-gar, du sud, utilisent largement les coups de pied14) et il s\'agit donc plutôt d’indiquer une tendance aux degrés très variés. Généralement, ceux qui pratiquent le style du nord sont plutôt grands et minces, ce qui leur permet de faire les mouvements plus facilement. À l\'inverse, les pratiquants du kung fu du sud sont plus petits et plus musclés.\r\n\r\nStyle externes et styles internes\r\n\r\nCette section ne cite pas suffisamment ses sources (août 2009). \r\nL\'origine de cette distinction remonte à une épitaphe datant de 1669 et rédigée par l\'historien Huang Zongxi en l\'honneur d\'un certain Wang Zhengnan15. L\'auteur souligne la supériorité technique de l\'école « interne » mais dissimule sans doute des visées politiques, soutenant ainsi les Ming (partisan du taoïsme) face aux Qing (Mandchous, partisans du bouddhisme, principalement tibétain).\r\n\r\nSa construction fut poursuivie en Chine à la fin du xixe siècle et s\'inscrit d\'une manière générale dans la confrontation entre les conceptions occidentales du corps (médical, anthropologique, biomécanique, etc.) et les conceptions énergétiques (taoïste et bouddhiste) de la médecine chinoise traditionnelle.\r\n\r\nEn Europe, cette distinction interne/externe consiste à considérer que les styles externes utilisent la force physique et la vitesse comme principes d\'entraînement et les styles internes la maîtrise de la respiration, la décontraction, des coups fouettés et l’entraînement en lenteur pour guider le qi. On dit aussi souvent que, dans les styles externes, l\'adversaire est autrui tandis que dans les styles internes, l\'adversaire est soi-même. Cette conception repose sur une connaissance des styles internes que sont le taiji quan (dont le style yang fût popularisé en Chine après 1956 (notamment pour sa fonction thérapeutique), ou d\'autres tels que les Shunshi quan, xingyi quan, Bagua zhang, liuhebafa quan, baji quan et aux dimensions martiales de ces styles. Le qi gong est également différent entre arts internes (respiration ventrale allant jusqu\'à utiliser le périnée et arts externes où la respiration est principalement pulmonaire.\r\n\r\nL\'examen des applications martiales des styles externes et des styles internes montre que de nombreux principes de base sont identiques et que seules les pratiques diffèrent.\r\n\r\nDistinctions philosophiques et religieuses\r\n\r\nLes arts martiaux chinois ont également été influencés par les diverses écoles de pensée et religions de Chine. De nombreux styles ont été fondés par des groupes de pratiquants influencés par une des trois principales religions de Chine développant des arts martiaux à main nues : bouddhisme, taoïsme et islam.\r\n\r\nstyles bouddhistes de Shaolin\r\nstyles bouddhistes tibétains\r\nstyles bouddhistes autres\r\nstyles taoïstes\r\nLes Mongols, Mandchous et coréens de Chine pratiquent également des formes de lutte d\'influence chamaniste et assez proches, sous la dynastie Qing, des luttes amicales avaient fréquemment lieu entre dignitaires de ces cultures. Voir Lutte mongole, buku (mandchoue) et Ssireum (coréenne). Le Shuai jiao en est sa variante han.', 'Yang-single.jpg', 'styles'),
(9, 'Theatre', 'Histoire du théâtre', 'Dès les débuts de l\'humanité, le « théâtre » désignait l\'acteur qui racontait, qui revivait une expérience de chasse, de conflit, pour la partager avec son groupe. Dans la civilisation occidentale on considère les cortèges en l\'honneur du dieu grec Dionysos comme les premières représentations théâtrales, bien avant le vie siècle av. J.-C.5. C\'est en effet d\'abord à l\'époque grecque antique qu\'apparaît le Theatron (θέατρον, qui vient de θεάομαι : regarder, contempler). Le terme désigne alors l\'hémicycle destiné aux spectateurs. Un théâtre est donc à l\'origine un lieu d\'où le public observe un spectacle. À la Renaissance, la signification s\'étend non seulement à l\'ensemble de l\'édifice de spectacle, scène comprise, mais également à l\'art dramatique. Ce n\'est qu\'après la période du théâtre classique que le terme devient par antonomase le texte qu\'il soit lu ou joué.', 'Théâtre histoire | Le blog de mes hobbies', 'Le théâtre est né en Grèce, où des concours tragiques existent depuis le vie siècle av. J.-C.. Il est apparu à Rome à la fin du iiie siècle av. J.-C. Les représentations font partie des « jeux » (ludi), fêtes officielles de la cité. À Rome, on édifie d\'abord des théâtres en bois, où seuls les spectateurs des premiers rangs sont assis, puis des théâtres en pierre : théâtre de Pompée en 55 av. J.-C., de Balbus en 13 av. J.-C., de Marcellus en 12 ou 11 av. J.-C. En Campanie, par exemple à Pompéi, on construit des théâtres en pierre dès le iiie siècle. À l\'époque impériale, chaque ville romaine a son théâtre, comme Ostie en Italie, Orange en Gaule ou Sabratha en Afrique.\r\n\r\nDans le théâtre romain, plus anciennement dans le théâtre grec, les acteurs portaient un masque : cet accessoire leur permettait d\'être mieux vus des spectateurs assis sur les gradins parfois éloignés et d\'en être mieux entendus, leur voix étant amplifiée comme par des porte-voix. Il y avait des masques tragiques (un visage triste) ou comiques (un visage fendu d\'un large rire) ainsi que des masques doubles (un côté tragique, un côté comique) ; les acteurs qui se servaient de ces derniers devaient jouer de profil. L\'acteur, exclusivement masculin, porte aussi des vêtements aux rembourrages voyants et cloturaux ainsi qu\'une coiffure très haute, censés évoquer le gigantisme des dieux et des héros qu\'il incarne.\r\n\r\nAu Moyen Âge, des troupes itinérantes jouent des pièces de genre dites des « Miracles », des \"Mystères\" et des « drames liturgiques », d\'abord dans les églises puis dans leurs porches, sur leurs parvis et sur les places publiques. Elles ont pour vocation de raconter la vie des Saints mais sont très longues, alors pour maintenir le spectateur éveillé on y glissait en intermède quelques petites farces.\r\n\r\nAu xve siècle, on redécouvre les tragédies de Térence et de Sénèque.\r\n\r\nÀ la Renaissance, les formes principales de la fin du Moyen Âge subsistent, mais en 1548, la représentation des mystères est interdite, seules des pièces « profanes, honnêtes et licites »10 peuvent être créées. Apparaît un théâtre nouveau qui, tout en rompant avec les traditions littéraires, renoue avec l’Antiquité.\r\n\r\nÀ partir du moment où la division religieuse s’instaure avec la réforme protestante, au xvie siècle, les mystères religieux disparaissent. L\'Église oscille alors selon les époques, les volontés du prince (ainsi l\'édit de Louis XIII le 16 avril 1641 semble lever l\'opprobre frappant les comédiens) ou l\'évolution socio-culturelle entre tolérance (tel Georges de Scudéry, proche du cardinal de Richelieu dans son Apologie du Théâtre en 1639) ou interdiction (tel André Rivet dans son Instruction chrestienne touchant les spectacles publics des Comœdies et Tragœdies en 1639 ou la traduction en 1664 du Traité contre les danses et les comédies de Charles Borromée qui incite certains évêques français à excommunier temporairement les comédiens11) contre les spectacles religieux. Le concile de Soissons ne lèvera l\'excommunication mineure qu\'en 184912. L\'esthétique du théâtre classique s\'impose en France, avec pour principaux représentants Pierre Corneille, son frère Thomas Corneille, Jean de Rotrou, Tristan L\'Hermite, Paul Scarron, Molière, Jean Racine ou encore Philippe Quinault. Cela se déroulait dans des salles de théâtre créées pour l\'occasion. Au XVIIe siècle, les théâtres annoncent leur spectacle à 14h et les représentations débutaient après 16h13,14.\r\n\r\nEn Angleterre, la victoire des puritains porte un coup fatal au théâtre élisabéthain qui s\'était développé depuis le milieu du siècle précédent : les théâtres sont fermés par Olivier Cromwell en 1642. Les dramaturges Ben Jonson, Christopher Marlowe, et surtout William Shakespeare en avaient été les principaux représentants.\r\n\r\nEn Espagne, le « Siècle d\'or » est contemporain des œuvres dramatiques de Lope de Vega, Tirso de Molina ou Calderón, qui élaborent une dramaturgie s\'éloignant des canons aristotéliciens, notamment en ce qui concerne la distinction entre les genres comique et tragique.\r\n\r\nAu début du xviiie siècle, l’influence des grands dramaturges du siècle de Louis XIV persiste sur la scène de la Comédie-Française. La comédie issue de Molière se voit admirablement prolongée par un auteur comme Jean-François Regnard. La Tragédie, au-delà des imitations raciniennes que l\'on perçoit chez Antoine Houdar de La Motte, se tourne vers la mise au théâtre de scènes d\'horreur à la limite de la malséance chez Prosper Jolyot de Crébillon.\r\n\r\nNéanmoins, des renouvellements plus profonds apparaissent avec les tragédies de Voltaire (1694-1778) qui introduit des sujets modernes en gardant la structure classique et l’alexandrin (Zaïre, Mahomet) et qui obtient de grands succès. La censure est toujours active comme en témoignent, sous Louis XVI, les difficultés de Beaumarchais pour publier son Mariage de Figaro.\r\n\r\nLa libération des mœurs de la Régence apporte un autre renouvellement du théâtre avec le retour, dès 1716, des Comédiens italiens chassés par Louis XIV et le début d’une très grande vogue du spectacle théâtral : on se presse pour admirer Lélio, Flaminia, Silvia… et rire des lazzis et du dynamisme des personnages issus de la commedia dell’arte comme Arlequin, Colombine ou Pantalon. C’est dans cette lignée que trouve place Marivaux (1688-1763) et ses comédies qui associent la finesse de l’analyse du sentiment amoureux et la subtilité verbale du marivaudage aux problèmes de société en exploitant le thème emblématique du couple maître-valet. les Fausses Confidences, le Jeu de l\'amour et du hasard ou l\'Île des esclaves constituent quelques-unes de ses œuvres majeures.\r\n\r\nPar l\'ordonnance du 19 janvier 1802 Napoléon Bonaparte réglemente la police extérieure et intérieure des salles de spectacles en ce qui concerne la responsabilité des entrepreneurs et directeurs sur la sécurité des personnes, les règles de sécurité incendie, la bonne gestion de l’arrivée des voitures, la fermeture des accès entre salle et scène pendant le spectacle, l’interdiction de revendre des billets ailleurs que dans le théâtre, d\'y circuler pendant les représentations et de porter des chapeaux dans la salle, etc. Ami de l\'acteur François-Joseph Talma et grand amateur de théâtre, au point de se faire accompagner d’une troupe de comédien lors de ses campagnes jusqu\'en Russie, où il modifie, par le décret de Moscou, les statuts de la Comédie-Française, il va, dès 1806, se préoccuper du sort des salles parisiennes et décide d’en limiter le nombre à huit, conscient que de nombreuses salles édifiées à la hâte dans la tourmente révolutionnaire ne parviennent pas à assumer leurs frais d’exploitation. En 1807, par le Décret sur les théâtres, il rétablit le « Privilège », qui devient impérial, pour quatre théâtres subventionnés (Théâtre de l\'Académie impériale de Musique (Opéra), Théâtre de l’Impératrice (Odéon), Opéra comique, Théâtre Français (Comédie française)) et quatre privés (Théâtres du Vaudeville, des Variétés, de la Porte Saint-Martin, de la Gaîté), soit un théâtre pour cent mille habitants.\r\n\r\nLa Restauration va de nouveau libéraliser le théâtre. Le privilège, redevenu royal avec le retour des Bourbons, est de moins en moins rigoureux et sa réglementation va s\'alléger. On verra bientôt réapparaître certaines des salles précédemment supprimées et cette période va rendre plus célèbres encore deux lieux essentiels de la capitale : les Grands Boulevards et le Boulevard du Temple, ce dernier tirant son surnom de Boulevard du Crime du répertoire particulièrement violent des mélodrames qui se jouent dans un groupe d\'une dizaine de théâtres contigus, qui disparaîtront à partie de 1854 avec l\'aménagement de l\'actuelle place de la République (Théâtre historique (Théâtre Lyrique), Cirque-Olympique (Théâtre-National), Théâtre des Folies-Dramatiques, Théâtre de la Gaîté, Théâtre des Funambules, Théâtre des Délassements-Comiques, Théâtres de Mme Saqui, des Pygmées et du Petit Lazari, outre de nombreux cabarets et café-concerts).\r\n\r\n', 'Depart_Comediens_italiens.jpg', 'theatre-histoire'),
(10, 'Theatre', 'Les genres du théâtre', 'Un genre théâtral est le résultat d\'une création comique correspondant à une forme particulière : le spectateur, connaissant un genre donné, sait à quoi s\'attendre, et selon la présentation de l\'œuvre (tragédie, comédie…), il a une vision stéréotypique de l\'œuvre.\r\n\r\nLe genre est donc, avant tout, une convention qui donne un cadre, une forme précise. C\'est un premier échange implicite entre l\'artiste et le spectateur. Il inclut diverses formes théâtrales dont la farce, la comédie, la pantomime, la tragédie, le drame romantique, le drame bourgeois, la tragédie lyrique, le vaudeville, le mélodrame, les mystères médiévaux, le théâtre de marionnettes, le théâtre forum, le théâtre d\'improvisation, le théâtre en plein air, le théâtre de rue, le théâtre expérimental, le théâtre installation performance, la danse-théâtre (ou théâtre-danse), le web-théâtre avec les expérimentations d\'e-toile, le café-théâtre d\'improvisation, le théâtre de l\'absurde, le conte, la revue.', 'Théâtre genres | le blog de mes hobbies', 'La comédie\r\nLa comédie musicale\r\nLa commedia dell\'arte\r\nLe drame\r\nLa farce\r\nLa féerie\r\nLe mélodrame\r\nLes mystères médiévaux\r\nL\'opéra\r\nL\'opérette\r\nLa pantomime\r\nLa romance\r\nLe théâtre de boulevard\r\nLa tragédie\r\nLa tragi-comédie\r\nLa tragédie lyrique\r\nLe théâtre de marionnettes\r\nLe théâtre de masques\r\nLe vaudeville\r\nLe théâtre d\'improvisation\r\nL\'installation performance\r\nLe théâtre de rue', 'SAND_Maurice_Masques_et_bouffons_11', 'genres'),
(11, 'Theatre', 'Le théâtre amateur', 'Jusqu\'à la fin du xxe siècle, les troupes de théâtre amateur présentaient des pièces destinées au théâtre professionnel. En effet, à l\'époque ces pièces contenaient souvent jusqu\'à 8-9 personnages, nombre idéal pour les troupes associatives amateur. Cependant, au fil des années, les théâtres professionnels ne pouvant plus indemniser autant de comédiens, elles ont fini par jouer des pièces avec de moins en moins de personnages, privilégiant une faible distribution entourant un rôle principal figurant en tête d\'affiche. En province, les troupes amateurs avaient donc besoin de nouvelles pièces, avec un nombre de personnages suffisant, pour pouvoir les mettre en scène. C\'est ainsi que des amateurs ont commencé à écrire des pièces pour leur propre troupe et pour les autres troupes amateurs. Ce phénomène s\'est rapidement développé et il existe maintenant toute une panoplie d\'auteurs de pièces de théâtre amateur, destinées exclusivement à cette catégorie de troupes.', 'Théâtre amateur | Le blog de mes hobbies', 'En 1907 a été créée en France la Fédération nationale des compagnies de théâtre amateur (FNCTA).\r\n\r\nCertains établissements scolaires proposent des options \"théâtre\", dans lesquelles le professeur dédié (il s\'agit souvent de professeurs de français) met en scène les élèves, pour jouer ensuite devant les parents d\'élèves. Les pièces jouées sont souvent puisées dans le répertoire classique (Molière,...).\r\n\r\nAujourd\'hui, il existe des milliers de troupes amateurs en France, qui rencontrent la plupart du temps un franc succès. 2 Un phénomène de grande ampleur dans certains départements comme les Deux-Sèvres notamment, dont une étude réalisée en 2018 en montre l\'importance (174 troupes et 100.000 spectateurs par an).\r\n\r\nSouvent, les pièces destinées aux amateurs reprennent les codes du théâtre de boulevard, et ont pour principal objectif de divertir le public de façon conviviale. Certaines pièces ont également pour fonction de faire passer un message, mais ce n\'est pas une généralité.\r\n\r\nLes représentations sont effectuées par les troupes amateurs dans une période comprenant la fin de l\'automne ainsi que l\'hiver. Les associations jouent généralement le week-end, dans la salle des fêtes de leur commune, et font des séances plus ou moins nombreuses selon leurs succès et leurs moyens (en moyenne 5 séances par saison).\r\n\r\nIl y a souvent 2 groupes jouant chacun une pièce : un groupe \"enfants/ados\" et un groupe \"adultes\".\r\n\r\nLes séances sont coupées en leur milieu par un entracte durant une vingtaine de minutes et pendant laquelle les spectateurs peuvent converser autour de mets et de boissons. Cela permet de mettre en valeur les spécialités locales.\r\n\r\nCertaines troupes, en plus de jouer dans leur commune natale, font une petite \'\'tournée\'\' en se déplaçant dans quelques communes environnantes.\r\n\r\nVéritable rendez-vous pour les habitants, il est un réel moment de partage entre les comédiens et le public. Il y a parfois même des jeux de bourriche, une visite de l\'envers du décor, un moment d\'échange avec les comédiens... De nombreuses troupes le choix de reverser une partie de leurs bénéfices au profit d\'associations caritatives.\r\n\r\nLes décors sont entièrement réalisés par les membres des associations, de la mise en place des panneaux à la peinture. Les accessoires sont souvent puisés parmi les objets personnels des comédiens.\r\n\r\nIl existe en France plusieurs festivals de Théâtre Amateur dans lesquels des troupes amateurs sont invitées à jouer dans des salles habituellement réservées au Théâtre professionnel (Bressuire, Thouars, Bréteil, Meyrargues,....).\r\n\r\nComme dans le théâtre professionnel, les membres d\'une troupe amateur se partagent les tâches : il y a les comédiens, les souffleurs, les machinistes, un metteur en scène,...\r\n\r\nLes troupes reçoivent parfois l\'intervention de professionnels pour leurs mises en scènes.', 'Theatre amateur.jpg', 'amateur'),
(12, 'Jardinage', 'Histoire du jardinage', 'Le terme « jardin », attesté au xiie siècle, semble provenir du composé latino-germanique hortus gardinus, qui signifie littéralement « jardin entouré d\'une clôture », du latin hortus, jardin et du francique gart ou gardo, « clôture ». Cette étymologie suggère que le jardin doit se défendre contre le bétail, la volaille, le gibier et la sauvagine quand ils sont présents.', 'Le jardinage et son histoire | Le blog de mes hobbies', 'Le terme « jardinage » est employé dès la fin du xiiie siècle. En 1599, l\'agronome Olivier de Serres écrit Le Théâtre d\'Agriculture et Mesnage des Champs (...) dans lequel est représenté tout ce qui est requis et nécessaire pour bien dresser, gouverner, enrichir et embellir la Maison Rustique. Il s\'agit d\'un manuel agricole destiné au gestionnaire d\'un domaine rural (le domaine du Pradel que possède O. de Serres couvre cent cinquante hectares), cet ouvrage complet comporte un chapitre intitulé « DES JARDINAGES » qui est sous-titré ainsi : « Pour avoir des Herbes et Fruicts Potagers : des Herbes et Fleurs odorantes : des Herbes médicinales : des Fruicts des Arbres : du Saffran, du Lin, du Chanvre, du Guesde, de la Garance, des Chardons-à-draps, des Rozeaux : en suite, la Manière de faire les Cloisons pour la conservation des Fruicts en général ». En 1709, le traité intitulé Théorie et pratique du jardinage est publié pour la première fois. Il est écrit par Dezallier d’Argenville, avocat et secrétaire du Roi, mais surtout grand amateur de jardins. Il fait la synthèse des connaissances du « Grand Siècle » à la fois pour l\'art de concevoir des jardins et pour les techniques horticoles.', 'jardinage histoire', 'jardinage-histoire'),
(13, 'Jardinage', 'Le jardin potager', 'Un jardin potager, ou plus simplement potager, est un jardin ou une partie de jardin où se pratique la culture vivrière de plantes potagères destinées à la consommation familiale, soit principalement des légumes, des fruits non cultivables en verger et des plantes aromatiques. Le jardin potager, en plus de ses fonctions utilitaire et ornementale, peut avoir une vocation éducative, constituer une activité de loisir et contribuer au maintien de la biodiversité animale et végétale. Il peut être agrémenté d\'accessoires utiles comme un hôtel à insectes pour l\'osmiculture ou d\'autres plus culturels comme l\'épouvantail.', 'Le jardinage et le potager | le blog de mes hobbies', 'Différents types de jardins potagers peuvent être distingués :\r\n\r\njardin potager privatif en zone rurale, en zone urbaine,\r\njardin familial ou collectif situé dans un ensemble de jardins, autrefois dénommé «jardin ouvrier»,\r\njardin partagé, communautaire ou associatif,\r\njardin potager situé dans un environnement paysager tel qu\'un château, parc,\r\njardin potager pédagogique,\r\njardin d\'insertion\r\n\r\nUn jardin potager peut accueillir :\r\n\r\ndifférents types de légumes, dont notamment :\r\nles légumes graines utilisés en frais ou en sec : haricots blancs, rouges, fèves, petits pois, maïs doux…\r\nles légumes fruits : aubergines, poivrons, tomates, cucurbitacées (courges, courgettes, citrouilles, potirons, concombres, cornichons), les gousses des légumineuses récoltées avant maturité (haricots verts, petits pois mangetout)…\r\nles légumes feuilles : salades (laitues, mâches et chicorées), choux, épinards, fenouil, livèche, oseille, roquette, céleris, bettes, cardons…\r\nles légumes tiges : avec turion comme les asperges ; avec bulbe (ail, échalotes, oignons, poireaux), chou rave…\r\nles légumes fleurs : artichauts, choux-fleurs, brocolis, gingembre japonais\r\nles légumes racines : betteraves, carottes, céleri-rave, navets, panais, radis, radis noirs, salsifis, scorsonères…\r\nles tubercules : pommes de terre, topinambours, patate douce, poire de terre, capucine tubéreuse…\r\ndes fruits non cultivables en verger : cucurbitacées tels les melons et pastèques et fruits rouges tels les fraisiers, framboisiers, groseilliers, cassissiers, mûres cultivées, mûres de Logan.\r\ndes fines herbes, des plantes aromatiques et condimentaires : aneth, basilic, cerfeuil, ciboulette, fenouil, persil, menthe, romarin, sarriette, sauge, thym, etc.\r\nDes plantes non consommées peuvent servir:\r\nd\'engrais verts peuvent être mises en place : moutarde, phacélie, luzerne…\r\nd\'embellissement: fleurs, etc.\r\nde haies;\r\nd\'ombrages.\r\nUn jardin potager peut être agencé de différentes manières. Le travail peut être facilité si sa forme est assez régulière :\r\n\r\nPar exemple :\r\n\r\nUn jardin carré partagé en quatre parties égales par deux allées en croix de 1 m. de large;\r\nun jardin de forme allongée divisé en trois bandes de deux allées parallèles si sa longueur suit la ligne Est-Ouest, en deux moitiés par une allée centrale si sa longueur est dirigée Nord-Sud.\r\nLes planches de légumes peuvent autant que possible avoir leur plus grande dimension dans l\'axe Est-Ouest. Toutefois, s\'il s\'agit d\'un terrain incliné, il est conseillé de créer des planches dont la plus grande dimension sera perpendiculaire à la pente de façon à éviter le ravinement produit par les eaux de pluie. Si la pente est forte, il est préférable de créer des terrasses.\r\n\r\nAfin de faciliter la circulation pour les différents travaux de semis, de plantation et d\'entretien (désherbage, arrosage, etc.), il est préférable de faire des plates-bandes d\'une largeur inférieure à 1,30 m — ce qui permet d\'exécuter tous les travaux sans piétiner le sol de la planche —, séparées par des allées, dont certaines assez larges pour permettre le passage d\'une brouette. Ces allées permettent aussi un meilleur ensoleillement des différentes plates-bandes. Une possibilité est de réaliser les plates-bandes en ados plutôt plats2 orientés nord-sud. Il est également possible de créer des potagers surélevés, dont certains assez hauts pour être accessibles notamment aux personnes en fauteuil roulant ou à celles ayant des difficultés à se baisser.\r\n\r\nLe passepied, à aménager entre chaque planche, aura environ 40 cm de large (la largeur d\'un râteau). La longueur à donner aux planches dépend de la dimension de la parcelle. Les allées et les planches peuvent se tracer au cordeau et à l\'aide du râteau ou de la serfouette.\r\nCertains légumes se développant sur plusieurs mètres au sol (cucurbitacées) ou en hauteur (haricots, tomates), il faut anticiper ce type de croissance dans la conception initiale du jardin pour éviter que les plantes ne se recouvrent ou se fassent de l\'ombre l\'une l\'autre.', 'Jardin_potager.jpg', 'potager'),
(14, 'Jardinage', 'La permaculture', 'La permaculture est un concept systémique et global qui vise à créer des écosystèmes respectant la biodiversité. L\'inspiration vient de la nature et de son fonctionnement (qui se nomme aussi biomimétisme ou écomimétisme). C\'est une science appliquée de conception de cultures, de lieux de vie, et de systèmes agricoles humains utilisant des principes d\'écologie et le savoir des sociétés traditionnelles pour reproduire la diversité, la stabilité et la résilience des écosystèmes naturels.', 'Le jardinage et la permaculture | Le blog de mes hobbies', 'À l\'origine c’est un concept agricole inspiré par le modèle d\'agriculture naturelle de l\'agriculteur japonais Masanobu Fukuoka (1913-2008). Ce concept a été théorisé dans les années 1970 par les Australiens Bill Mollison (biologiste) et David Holmgren (essayiste). Le terme « permaculture » signifiait initialement « culture permanente » (de l\'anglais « permanent agriculture ») ; puis avec le temps il a été étendu pour signifier « culture de ce qui est permanent dans le sens (sociologique) de pérenne ou viable ». En effet, les aspects sociaux font partie intégrante d\'un système véritablement durable. Cette dernière signification est toutefois sujette à polémique.\r\n\r\nAvec ce sens étendu, la permaculture forme des individus à une éthique ainsi qu\'à un ensemble de principes. L\'objectif étant de permettre à ces individus de concevoir leur propre environnement, et ainsi de créer des habitats humains plus autonomes, durables et résilients, en s\'inspirant des fonctionnements naturels locaux. L\'idée est d\'atteindre une société moins dépendante des systèmes industriels de production et de distribution (identifiés par Bill Mollison comme le fondement de la destruction systématique des écosystèmes).\r\n\r\nLa permaculture utilise entre autres des notions d\'écologie8, de paysage, d\'agriculture biologique, d\'agroécologie, de biomimétisme, d\'éthique, de philosophie et de pédologie. La permaculture invite à mettre ces aspects théoriques en relation avec les observations réalisées sur le terrain de façon harmonieuse.', 'Jardin_en_permaculture.jpg', 'permaculture'),
(15, 'Kung fu', 'Test titre Kung fu', 'Test résumé Kung fu', 'Test titre SEO Kung fu', 'Test corps Kung fu', '', 'test_kung_fu'),
(16, 'rubrique', 'Essai', 'Rubrique pour différents tests', 'rubrique de tests', '', '', 'rubrique-tests'),
(17, 'Essai', 'Titre article 1 essai', '1er article de la rubrique essai', 'Titre article 1 | Essai', 'Ceci est le corps du 1er article de la rubrique Essai', '', 'essai_article1'),
(18, 'Essai', 'Titre article 2 Essai', '', '', '', '', 'essai-article2'),
(20, 'Essai', 'Titre article 2 Essai', 'VSVVsv', 'gegZv', 'adefregtrjtkiloio!,bvdscqscsvbd', '', 'essai_article2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;