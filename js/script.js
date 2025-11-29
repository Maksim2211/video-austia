document.addEventListener("DOMContentLoaded", () => {
    // Current language
    let currentLang = "en";

    // Translation dictionary
    const i18n = {
        en: {
            "nav.title": "Journey around Cherkasy",
            "nav.authors": "Created by Yan Yanchyshen & Maksym Martynenko",

            "hero.badge": "Interactive city mini-guide",
            "hero.title": "Most interesting places in Cherkasy",
            "hero.subtitle": "This website is an online wrapper for the presentation “Journey around Cherkasy places”. Here you can calmly reread the stories of each location and see where their names come from.",
            "hero.primaryButton": "Go to places",
            "hero.secondaryButton": "Tip: open this site on your phone during a walk",

            "hero.sideTitle": "What will you find here?",
            "hero.sideText": "Short descriptions in English and Ukrainian, history of the places and explanations of their names. A small city guide for guests and friends.",
            "hero.pill1": "City guide",
            "hero.pill2": "Cherkasy",
            "hero.pill3": "History & names",
            "hero.pill4": "Presentation add-on",

            "section.kicker": "Cherkasy spots from the presentation",
            "section.title": "Places we talked about",
            "section.subtitle": "Choose a card to read a short story about a place and see where its name comes from.",

            "place.ploshcha-700.titleMain": "700th Anniversary Square",
            "place.ploshcha-700.titleSub": "Ploshcha 700-richchya Cherkas",
            "place.ploshcha-700.tag": "Transport hub • Square • Green area",
            "place.ploshcha-700.textShort": "An important transport junction and public space of Cherkasy, created in 1986 where Shevchenko Boulevard meets Sinna Street. There is a green square officially recognised as a landscape monument.",
            "place.ploshcha-700.moreBtn": "More details + photos",

            "place.naberezhna.titleMain": "Embankment",
            "place.naberezhna.titleSub": "Naberezhna Street (Embankment)",
            "place.naberezhna.tag": "Dnipro • Walks • Cafés • Beaches",
            "place.naberezhna.textShort": "The Embankment stretches along the Kremenchuk Reservoir (“Cherkasy Sea”), part of the Dnipro. Once it was an area for trade and fishing; today it is a favourite place for walks, green zones, cafés and access to the beaches.",
            "place.naberezhna.moreBtn": "More details + photos",

            "place.druzhba-narodiv.titleMain": "Druzhba Narodiv Street",
            "place.druzhba-narodiv.titleSub": "Friendship of Peoples Street",
            "place.druzhba-narodiv.tag": "Residential area • Soviet period",
            "place.druzhba-narodiv.textShort": "A street that connects residential blocks and local infrastructure: shops, schools and bus stops. Its development is linked to the expansion of Cherkasy during the Soviet era, when many apartment buildings were built.",
            "place.druzhba-narodiv.moreBtn": "More details + photos",

            "place.soborna-ploshcha.titleMain": "Soborna Square",
            "place.soborna-ploshcha.titleSub": "Soborna Ploshcha (Cathedral Square)",
            "place.soborna-ploshcha.tag": "Historic centre • Administrative hub",
            "place.soborna-ploshcha.textShort": "The historical and political heart of Cherkasy. In the 19th century this was a Market Square with St Nicholas Cathedral; after World War II the area was rebuilt and for a long time it was called Lenin Square.",
            "place.soborna-ploshcha.moreBtn": "More details + photos",

            "place.dolina-pagorb.titleMain": "Rose Valley & Hill of Glory",
            "place.dolina-pagorb.titleSub": "Dolina Troyand & Pagorb Slavy",
            "place.dolina-pagorb.tag": "Park • Memorial • Dnipro view",
            "place.dolina-pagorb.textShort": "One of the key recreational and memorial complexes on the high bank of the Dnipro. The Hill of Glory is a WWII memorial, and below it lies Rose Valley – a terraced park with flowerbeds and recreation zones.",
            "place.dolina-pagorb.moreBtn": "More details + photos",

            "place.sosnivskyi-park.titleMain": "Sosnivskyi Park",
            "place.sosnivskyi-park.titleSub": "Sosnivskyi Park (Pine Park)",
            "place.sosnivskyi-park.tag": "Forest • Walks • Running • Family rest",
            "place.sosnivskyi-park.textShort": "One of the largest and oldest park areas of Cherkasy located in the Sosnivskyi district. It grew out of natural pine forests around the city and gradually became an official city park.",
            "place.sosnivskyi-park.moreBtn": "More details + photos",

            "footer.title": "Journey around Cherkasy places",
            "footer.link.places": "Back to list of places",
            "footer.link.email": "Email the authors", // ЗМІНА: Спрощений текст

            "tip.walk": "Idea: open this site on your phone, go for a walk in Cherkasy and find all the places from the cards!"
        },
        uk: {
            "nav.title": "Подорож Черкасами",
            "nav.authors": "Створено Яном Янчишеним та Максимом Мартиненком",

            "hero.badge": "Інтерактивний міський міні-гід",
            "hero.title": "Найцікавіші місця Черкас",
            "hero.subtitle": "Цей сайт — онлайн-доповнення до презентації “Journey around Cherkasy places”. Тут можна спокійно перечитати історію кожної локації й зрозуміти, чому вони мають саме такі назви.",
            "hero.primaryButton": "Перейти до місць",
            "hero.secondaryButton": "Порада: відкрий сайт на телефоні під час прогулянки",

            "hero.sideTitle": "Що ви знайдете тут?",
            "hero.sideText": "Короткі описи англійською та українською, історія місць і пояснення їхніх назв. Невеликий міський гід для гостей і друзів.",
            "hero.pill1": "Міський гід",
            "hero.pill2": "Черкаси",
            "hero.pill3": "Історія та назви",
            "hero.pill4": "Додаток до презентації",

            "section.kicker": "Місця з презентації про Черкаси",
            "section.title": "Місця, про які ми розповідали",
            "section.subtitle": "Оберіть картку, щоб прочитати коротку історію місця та дізнатися, звідки взялася його назва.",

            "place.ploshcha-700.titleMain": "Площа 700-річчя",
            "place.ploshcha-700.titleSub": "Площа 700-річчя Черкас",
            "place.ploshcha-700.tag": "Транспортний вузол • Площа • Зелена зона",
            "place.ploshcha-700.textShort": "Важливий транспортний вузол і публічний простір Черкас, створений у 1986 році на перетині бульвару Шевченка та вулиці Сінної. Тут є зелений сквер, офіційно визнаний памʼяткою ландшафтного мистецтва.",
            "place.ploshcha-700.moreBtn": "Детальніше + фото",

            "place.naberezhna.titleMain": "Набережна",
            "place.naberezhna.titleSub": "Вулиця Набережна",
            "place.naberezhna.tag": "Дніпро • Прогулянки • Кафе • Пляжі",
            "place.naberezhna.textShort": "Набережна тягнеться вздовж Кременчуцького водосховища (“Черкаське море”). Колись це була зона торгівлі та рибальства, а сьогодні — улюблене місце для прогулянок, відпочинку, кафе та виходу до пляжів.",
            "place.naberezhna.moreBtn": "Детальніше + фото",

            "place.druzhba-narodiv.titleMain": "Вулиця Дружба народів",
            "place.druzhba-narodiv.titleSub": "Druzhba Narodiv",
            "place.druzhba-narodiv.tag": "Житловий район • Радянський період",
            "place.druzhba-narodiv.textShort": "Вулиця, що поєднує житлові квартали та інфраструктуру: магазини, школи, зупинки транспорту. Її розвиток повʼязаний із розширенням Черкас у радянський час, коли активно будували багатоповерхівки.",
            "place.druzhba-narodiv.moreBtn": "Детальніше + фото",

            "place.soborna-ploshcha.titleMain": "Соборна площа",
            "place.soborna-ploshcha.titleSub": "Центральна площа міста",
            "place.soborna-ploshcha.tag": "Історичний центр • Адміністративний вузол",
            "place.soborna-ploshcha.textShort": "Історичне та політичне серце Черкас. У ХІХ столітті тут була Базарна площа з Собором святого Миколая; після Другої світової війни територію перебудували, і довгий час площа носила назву площі Леніна.",
            "place.soborna-ploshcha.moreBtn": "Детальніше + фото",

            "place.dolina-pagorb.titleMain": "Долина троянд та Пагорб Слави",
            "place.dolina-pagorb.titleSub": "Dolina Troyand & Pagorb Slavy",
            "place.dolina-pagorb.tag": "Парк • Меморіал • Вид на Дніпро",
            "place.dolina-pagorb.textShort": "Один із головних рекреаційних і меморіальних комплексів на високому березі Дніпра. Пагорб Слави — меморіал Другої світової війни, нижче розташована Долина троянд — терасований парк з клумбами та зонами відпочинку.",
            "place.dolina-pagorb.moreBtn": "Детальніше + фото",

            "place.sosnivskyi-park.titleMain": "Соснівський парк",
            "place.sosnivskyi-park.titleSub": "Сосновий парк",
            "place.sosnivskyi-park.tag": "Ліс • Прогулянки • Біг • Сімейний відпочинок",
            "place.sosnivskyi-park.textShort": "Один із найбільших і найстаріших паркових масивів Черкас у Соснівському районі. Виріс із природних соснових лісів навколо міста і поступово став офіційним міським парком.",
            "place.sosnivskyi-park.moreBtn": "Детальніше + фото",

            "footer.title": "Journey around Cherkasy places",
            "footer.link.places": "До списку місць",
            "footer.link.email": "Написати авторам", // ЗМІНА: Спрощений текст

            "tip.walk": "Ідея: відкрий цей сайт на телефоні, вийди на прогулянку Черкасами й знайди всі місця з карток!"
        }
    };

    const applyTranslations = (lang) => {
        const dict = i18n[lang];
        if (!dict) return;

        document.documentElement.lang = lang === "uk" ? "uk" : "en";

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const text = dict[key];
            if (typeof text === "string") {
                el.textContent = text;
            }
        });
    };

    // Initial translations (English by default)
    applyTranslations(currentLang);

    // Smooth scroll to places section
    const scrollBtn = document.querySelector('[data-scroll="places"]');
    const placesSection = document.querySelector("#places");

    if (scrollBtn && placesSection) {
        scrollBtn.addEventListener("click", (event) => {
            event.preventDefault();
            placesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    // Footer year
    const yearSpan = document.querySelector("[data-year]");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Tip button
    const walkTipBtn = document.getElementById("walk-tip");
    if (walkTipBtn) {
        walkTipBtn.addEventListener("click", () => {
            const text = i18n[currentLang]?.["tip.walk"] || i18n.en["tip.walk"];
            alert(text);
        });
    }

    // Language toggle
    const langButtons = document.querySelectorAll(".lang-toggle__button");
    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            if (!lang || !i18n[lang] || lang === currentLang) return;

            currentLang = lang;
            applyTranslations(lang);

            langButtons.forEach((b) => {
                b.classList.toggle(
                    "lang-toggle__button--active",
                    b === btn
                );
            });
        });
    });

    // Modal content per place (EN + UK)
    const PLACE_DETAILS = {
        "ploshcha-700": {
            photos: [
                { src: "pictures/700.png", alt: "700th Anniversary Square in Cherkasy, main view" },
                { src: "pictures/700-2.png", alt: "Monument on 700th Anniversary Square" },
                { src: "pictures/700-3.png", alt: "Roshen factory building near the square" }
            ],
           en: {
                title: "700th Anniversary Square",
                subtitle: "The Northern Gateway: From Industrial Roots to the City's 'Sweetest' Heart",
                textMain:
                    "700th Anniversary Square is far more than just a transport interchange; it is a monumental urban marker established in September 1986. Its creation was the culmination of massive celebrations dedicated to the 700th anniversary of Cherkasy—a date determined by historians based on the city's founding around 1286. Geographically, this square serves as the symbolic 'Northern Gate' of the city center. It marks the dramatic transition where the historic and aristocratic Shevchenko Boulevard ends, giving way to the powerful industrial rhythm of the Khimikiv district. Before the square took its current form, this area was known as the 'Sugar Refinery' district (Tsukrovyk), marking the old boundary where the urban developments met the industrial outskirts.",
                textExtra:
                    "Today, the square is a place of contrasts and vibrant energy. Locals affectionately call it the 'sweetest' location in Cherkasy. This is literally true: the massive confectionery factory (now Roshen, formerly the 'Svit Lasoshchiv' factory) stands right here. Depending on the wind direction, the square is enveloped in thick aromas of vanilla, caramel, or fresh biscuits, creating a unique olfactory landmark. The square's pulse is also defined by the Cherkasy State Technological University (ChDTU). The constant flow of thousands of students brings a youthful dynamism that balances the austere Soviet-era architecture. In the center stands a memorial composition commemorating the city's jubilee—a stone reminder that behind the modern facade of this industrial hub lies a history spanning over seven centuries."
            },
            uk: {
                title: "Площа 700-річчя",
                subtitle: "Північні ворота: від промислових околиць до «найсолодшого» серця міста",
                textMain:
                    "Площа 700-річчя — це набагато більше, ніж просто транспортна розв'язка; це монументальний міський орієнтир, що офіційно з'явився на мапі у вересні 1986 року. Її відкриття стало кульмінацією грандіозних святкувань 700-річного ювілею Черкас — дати, яку історики пов'язали із заснуванням міста близько 1286 року. Географічно площа слугує символічними «Північними воротами» центру. Саме тут історичний бульвар Шевченка завершується, поступаючись місцем потужному індустріальному ритму мікрорайону Хімселище. Історично ця територія була відома як район рафінадного заводу («Цукровик»), і довгий час саме тут проходила межа між міською забудовою та промисловими околицями, доки місто не поглинуло ці території.",
                textExtra:
                    "Сьогодні площа є місцем контрастів та живої енергії. Містяни часто називають цю локацію «найсолодшою» у Черкасах, і це не метафора. Впритул до площі розташовані потужності відомої кондитерської фабрики (нині «Roshen», у минулому — Черкаська бісквітна фабрика та комбінат «Світ ласощів»). Залежно від напрямку вітру, простір тут наповнюється густими пахощами ванілі, карамелі або свіжого печива, створюючи неповторний атмосферний маркер району. Пульс площі також задає Черкаський державний технологічний університет (ЧДТУ). Постійний потік тисяч студентів додає молодіжної динаміки, що врівноважує сувору архітектуру радянського модернізму. У центрі встановлено пам'ятний знак на честь ювілею — кам'яне нагадування про те, що за сучасним фасадом цього індустріального вузла стоїть історія глибиною у понад сім століть."
            }
        },
        "naberezhna": {
            photos: [
                { src: "pictures/n1.jpg", alt: "Cherkasy Embankment over the Dnipro" },
                { src: "pictures/n2.jpg", alt: "River Station building" },
                { src: "pictures/n3.jpg", alt: "View from the embankment" },
                { src: "pictures/n4.jpg", alt: "View from the embankment" }
            ],
           en: {
                title: "The Cherkasy Embankment",
                subtitle: "The Stone Shield of Mytnytsia and the Horizon of the 'Cherkasy Sea'",
                textMain:
                    "The Cherkasy Embankment is a monumental engineering feat that fundamentally changed the city's geography in the second half of the 20th century. It is not merely a walking street but a complex hydraulic defense system separating the urban landscape from the colossal expanse of the Kremenchuk Reservoir. Known locally as the 'Cherkasy Sea,' this body of water stretches up to 13 kilometers in width here, making it the largest man-made sea in Ukraine. The history of this location is dramatic: before the early 1960s, this area was a network of floodplains and old settlements. With the construction of the Kremenchuk Hydroelectric Power Plant, the old coastline vanished under water. The current embankment was created alongside the massive project of reclaiming land for the 'Mytnytsia' district, literally building a new city section on alluvial sand taken from the riverbed.",
                textExtra:
                    "The embankment's crown jewel is the River Station (Richkovyi Vokzal), a striking example of late Soviet modernism that resembles a futuristic spaceship or a 'flying saucer' docked permanently at the shore. Once, this was a buzzing transport hub where legendary 'Meteor' and 'Rocket' hydrofoils departed every few minutes, connecting Cherkasy with Kyiv and Kherson. Today, the embankment has evolved into the city's recreational spine, often cited as the longest continuous riverfront in Ukraine. It offers a unique resort-like microclimate: the air here is always fresher, and the horizon is so distant that one can see the curvature of the earth. With its long concrete pier jutting into the waves, renewed promenades, and bike paths, it serves as the meeting point where the industrial city finally embraces its river soul."
            },
            uk: {
                title: "Черкаська набережна",
                subtitle: "Кам'яний щит Митниці та горизонт «Черкаського моря»",
                textMain:
                    "Черкаська набережна — це грандіозна інженерна споруда, яка у другій половині XX століття докорінно змінила географію міста. Це не просто прогулянкова зона, а складна гідротехнічна захисна система, що відділяє мегаполіс від велетнських просторів Кременчуцького водосховища. Місцеві називають цю акваторію «Черкаським морем» не для красного слівця: ширина водної гладі тут сягає 13 кілометрів, що робить її найбільшою штучною водоймою в Україні. Історія цього місця драматична: до початку 1960-х років ландшафт тут складався з заплавних луків та історичних поселень. З будівництвом ГЕС стара берегова лінія назавжди зникла під водою. Нинішня набережна виникла як необхідний бар'єр під час масштабного проекту намиву піску для будівництва мікрорайону Митниця, фактично відвоювавши сушу у Дніпра.",
                textExtra:
                    "Архітектурною домінантою узбережжя залишається будівля Річкового вокзалу — яскравий приклад пізнього радянського модернізму. Його силует нагадує футуристичний корабель або «літаючу тарілку», що пришвартувалася біля берега. Колись це був надпотужний транспортний вузол, звідки кожні кілька хвилин стартували легендарні «Ракети» та «Метеори» до Києва чи Херсона. Сьогодні набережна трансформувалася у головну рекреаційну артерію, яку часто називають найдовшою безперервною береговою лінією в Україні. Тут панує унікальний мікроклімат курортного міста: довгий бетонний пірс, оновлені велодоріжки та безкрайній горизонт, де в ясну погоду можна розгледіти знамениту черкаську дамбу, створюють атмосферу, де індустріальне місто нарешті знаходить гармонію зі своєю річковою душею."
            }
        },
        "druzhba-narodiv": {
            photos: [
                { src: "pictures/d1.png", alt: "Druzhba Narodiv Street in Cherkasy" },
                { src: "pictures/d2.jpg", alt: "Typical panel houses on the street" },
                { src: "pictures/d3.jpg", alt: "South-West residential area" },
                { src: "pictures/d4.jpg", alt: "South-West residential area" }
            ],
            en: {
                title: "Druzhba Narodiv Street",
                subtitle: "The Spine of the South-West: A City Within a City",
                textMain:
                    "Druzhba Narodiv Street is not merely a thoroughfare; it is the central artery of the youngest and most populous district in Cherkasy—the South-West (Pivdenno-Zahidnyi). Its history is inextricably linked to the 'Big Chemistry' era of the 1960s and 70s. Before this period, the area consisted of open steppe and collective farm fields. With the construction of the industrial giant 'Azot,' the city faced an urgent need to house tens of thousands of workers. In record time, a 'city within a city' emerged here. Unlike the historic center with its grid layout, this street was designed according to late Soviet urban planning principles: wide avenues, massive scale, and a focus on high-density living. It represents the peak of the industrial expansion that transformed Cherkasy from a provincial town into a regional powerhouse.",
                textExtra:
                    "Architecturally, the street is a museum of late 20th-century standard housing, dominated by 9-story prefabricated panel buildings ('panelky'). While often criticized for uniformity, this design followed the concept of the 'integrated micro-district.' The idea was that residents of Druzhba Narodiv shouldn't need to travel to the center for daily needs—schools, kindergartens, and grocery stores were built inside the residential courtyards, protected from the noise of the main road. The street's name ('Friendship of Peoples') is a classic Soviet ideological marker, yet for locals, it simply signifies 'home' in the bustling 'PZ' district. Today, the street is undergoing a renaissance: ground floors are converting into modern retail spaces, and the once-grey facades are being insulated and colorfully renovated, marking the transition from a dormitory suburb to a vibrant, self-sufficient urban hub."
            },
            uk: {
                title: "Вулиця Дружби Народів",
                subtitle: "Хребет Південно-Західного: історія «міста в місті»",
                textMain:
                    "Вулиця Дружби Народів — це не просто транспортна магістраль, це центральна артерія наймолодшого та найбільш густонаселеного району Черкас — Південно-Західного. Її поява нерозривно пов'язана з епохою «Великої хімії» 1960–70-х років. До цього моменту тут пролягали відкриті степи та колгоспні поля. Із запуском промислового гіганта «Азот» перед містом постало нагальне завдання: поселити десятки тисяч нових працівників. У рекордні терміни тут виросло справжнє «місто в місті». На відміну від історичного центру з його квартальною забудовою, ця вулиця спроектована за канонами пізнього радянського модернізму: широкі проспекти, масштабність та орієнтація на висотну забудову. Вона символізує пік індустріальної експансії, що перетворила Черкаси з провінційного містечка на потужний обласний центр.",
                textExtra:
                    "Архітектурно вулиця є заповідником типового житлобудування кінця XX століття, де домінують 9-поверхові панельні будинки. Хоча цей стиль часто критикують за одноманітність, він реалізовував прогресивну на той час концепцію «інтегрованого мікрорайону». Ідея полягала в тому, щоб мешканці вулиці не мали потреби їхати в центр за побутовими послугами: школи, дитсадки та гастрономи проектувалися всередині дворів, захищені від шуму дороги житловими «стінами». Сама назва вулиці — класичний ідеологічний маркер радянської доби, проте для черкасців вона означає просто «дім» у ритмічному районі «ПЗ». Сьогодні вулиця переживає ренесанс: перші поверхи перетворюються на сучасні бізнеси, а сірі фасади утеплюються та змінюють колір, перетворюючи «спальний район» на повноцінний, живий урбаністичний простір."
            }
        },
        "soborna-ploshcha": {
            photos: [
                { src: "pictures/sb1.jpg", alt: "Soborna Square in the centre of Cherkasy" },
                { src: "pictures/sb2.jpg", alt: "View of the Regional State Administration" },
                { src: "pictures/sb3.jpg", alt: "Fountain area on Soborna Square" },
                { src: "pictures/sb4.jpg", alt: "Fountain area on Soborna Square" }
            ],
            en: {
                title: "Soborna Square",
                subtitle: "From Market Stalls and Sacred Domes to the Heart of Statehood",
                textMain:
                    "Soborna Square is the administrative and cultural heart of Cherkasy, located at the strategic intersection of Shevchenko Boulevard and Bayda Vyshnevetsky Street. Its history serves as a dramatic mirror of Ukraine's turbulent past. In the mid-19th century, this area was known as 'Starobazarna' (Old Market) Square. It was a chaotic, noisy trading hub where merchants from across the province sold grain, livestock, and timber. The square's sacred transformation began in 1864 with the consecration of the stone St. Nicholas Cathedral. This architectural masterpiece, with its golden domes, became the city's spiritual dominant and gave the square its current name—Soborna (Cathedral). However, the Soviet era brought a brutal rewriting of history. In 1945, using the pretext of war damage, the authorities deliberately blew up the cathedral to erase the city's 'religious past.' In its place, on the very foundations of the destroyed church, rose the monumental 'House of Soviets' (now the Regional State Administration)—a strict example of Soviet brutalism designed to demonstrate the power of the state over the spirit.",
                textExtra:
                    " The modern chapter of the square is defined by its struggle for identity. For decades, it bore the name of Lenin, dominated by a massive bronze monument to the Soviet leader. Its removal in 2008 became a historic turning point for Cherkasy, symbolizing a final break from totalitarianism—years before the nationwide decommunization wave. In 2011, the square underwent a complete reconstruction: the gray Soviet asphalt was replaced with patterned paving stones, and two modern pedestrian fountains were installed, bringing lightness to the severe architecture. Today, having reclaimed its historic name, Soborna Square is a dual-purpose space. By day, it is the center of political decision-making; by evening and on holidays, it transforms into a vibrant festival venue, hosting the famous Cherkasy Book Festival, Christmas markets, and open-air concerts."
            },
            uk: {
                title: "Соборна площа",
                subtitle: "Від ярмаркового галасу та зруйнованого храму до серця державності",
                textMain:
                    "Соборна площа — це адміністративне та культурне серце Черкас, розташоване на стратегічному перетині бульвару Шевченка та вулиці Байди Вишневецького. Її історія — це драматичне дзеркало бурхливого минулого всієї України. У середині ХІХ століття ця територія була відома як площа «Старобазарна». Це був хаотичний, гучний торговий вузол, де купці з усієї губернії торгували збіжжям, худобою та лісом. Сакральна трансформація площі відбулася у 1864 році з освяченням кам'яного Свято-Миколаївського собору. Цей архітектурний шедевр із золотими банями став духовною домінантою міста і дав площі назву — Соборна. Однак радянська епоха принесла жорстоке переписування історії. У 1945 році, використавши як привід пошкодження часів війни, влада свідомо підірвала собор, щоб стерти «релігійне минуле». На його місці, фактично на фундаменті знищеного храму, виросла монументальна будівля Будинку Рад (нині Облдержадміністрація) — суворий зразок радянського монументалізму, покликаний демонструвати владу держави над духом.",
                textExtra:
                    " Новітня сторінка історії площі позначена боротьбою за ідентичність. Десятиліттями вона носила ім'я Леніна, а простір домінував масивний бронзовий монумент радянському вождю. Його демонтаж у 2008 році став історичним прецедентом для Черкас, символізуючи розрив із тоталітарним минулим ще задовго до всеукраїнського «ленінопаду». У 2011 році площа пережила грандіозну реконструкцію: сірий радянський асфальт замінили на візерункову бруківку, встановили лави та запустили два сучасні пішохідні фонтани, що додали легкості суворій архітектурі. Сьогодні, повернувши історичну назву, Соборна площа є простором подвійного призначення. Вдень це центр прийняття політичних рішень, а вечорами та у свята — головна фестивальна сцена міста, де проходить Черкаський книжковий фестиваль, Різдвяні ярмарки та велелюдні концерти."
            }
        },
        "dolina-pagorb": {
            photos: [
                { src: "pictures/dt1.jpg", alt: "Rose Valley and Hill of Glory with view over the Dnipro" },
                { src: "pictures/dt2.jpg", alt: "Rose Valley sundial" },
                { src: "pictures/dt3.jpg", alt: "View of the Dnipro from the Hill of Glory" },
                { src: "pictures/dt4.jpg", alt: "Rose Valley" },
            ],
            en: {
                title: "Rose Valley & Hill of Glory",
                subtitle: "Where Ancient History Meets Modern Leisure",
                textMain:
                    "The Hill of Glory is the spiritual and historical crown of Cherkasy. Long before the memorial was built, this site was known as 'Castle Hill'—the very place where the city began. For centuries, a mighty fortress stood here, defending the land from raids. In 1977, the landscape was dramatically transformed: an artificial mound was raised by 10 meters to create a pedestal for the majestic 'Motherland' monument. The bronze statue of a woman holding a golden bowl of Eternal Fire towers over the Dnipro, honoring the heroes of World War II. From the top, visitors can enjoy the most breathtaking panoramic view of the Kremenchuk Reservoir and the infinite left bank.",
                textExtra:
                    "Descending from the memorial, you enter the Rose Valley—a vibrant landscape park that serves as a bridge between the city center and the river. Its unique landmark is a massive sundial designed in the shape of a crane bird, with a diameter of 15 meters. While the hill above is a place of solemn silence and memory, the valley below is full of life. It is the city's favorite venue for open-air jazz festivals, food markets, and evening strolls along the fountains. The contrast between the monumental history above and the blooming gardens below creates a unique atmosphere found only in Cherkasy."
            },
            uk: {
                title: "Долина троянд та Пагорб Слави",
                subtitle: "Місце, де зустрічаються давня історія та сучасний відпочинок",
                textMain:
                    "Пагорб Слави — це духовна та історична вершина Черкас. Задовго до створення меморіалу це місце називалося Замковою горою — саме тут зародилося місто. Століттями тут стояла могутня дерев'яна фортеця, що захищала край від набігів. У 1977 році ландшафт кардинально змінили: пагорб штучно підняли на 10 метрів, щоб створити п'єдестал для величного монумента «Батьківщина-мати». Бронзова фігура жінки, що тримає золоту чашу з Вічним вогнем, височіє над Дніпром, вшановуючи пам'ять героїв Другої світової війни. З вершини пагорба відкривається найбільш захоплива панорама на Кременчуцьке водосховище та безкрайній лівий берег.",
                textExtra:
                    "Спускаючись від меморіалу, ви потрапляєте в Долину троянд — ландшафтний парк, що слугує містком між центром міста та річкою. Його унікальною візитівкою є велетенський сонячний годинник у формі птаха журавля, діаметром 15 метрів. Якщо на пагорбі панує урочиста тиша і пам'ять, то долина внизу сповнена життя. Це улюблене місце міста для джазових фестивалів просто неба, фуд-кортів та вечірніх прогулянок біля фонтанів. Контраст між монументальною історією зверху та квітучими садами внизу створює неповторну атмосферу, яку можна відчути лише в Черкасах."
}
        },
        "sosnivskyi-park": {
            photos: [
                { src: "pictures/sosb1.jpg", alt: "Pine trees in Sosnivskyi Park in Cherkasy" },
                { src: "pictures/sosb2.jpg", alt: "Bridge of Love in Sosnivskyi Park" },
                { src: "pictures/sosb3.jpg", alt: "The park's cascade of lakes" },
                { src: "pictures/sosb4.jpg", alt: "The park" },
                { src: "pictures/sosb5.jpg", alt: "The park" },
                { src: "pictures/sosb6.jpg", alt: "The park" }
            ],
           en: {
                title: "Sosnivskyi Park",
                subtitle: "The Green Lungs of Cherkasy and the Romantic 'Bridge of Love'",
                textMain:
                    "Sosnivskyi Park (officially known as 'Sosnovy Bir') is a masterpiece of landscape art located on the high terraces of the Dnipro River. Historically, this area was a prestigious health resort zone due to its unique microclimate. The park grew out of ancient pine forests that naturally covered the northern part of Cherkasy. Today, it is a massive complex featuring cascades of lakes, majestic century-old trees, and winding paths that lead down to the river beaches. The air here is filled with the healing scent of pine needles, making it a natural inhaler for the city.",
                textExtra:
                    "The park's most famous landmark is the 'Bridge of Love'—a soaring arched bridge suspended high above a ravine, offering breathtaking views of the Kremenchuk Reservoir. It is a favorite spot for couples to leave padlocks as a symbol of eternal feelings. Beyond the bridge, visitors can explore the mysterious stone sculptures from the 'Dyvosvit' festival or simply enjoy the tranquility. While the city center is always rushing, Sosnivskyi Park remains a sanctuary of peace where the urban landscape seamlessly dissolves into the wild forest."
            },
            uk: {
                title: "Соснівський парк",
                subtitle: "Зелені легені Черкас та романтичний «Міст кохання»",
                textMain:
                    "Соснівський парк (офіційна назва — парк «Сосновий Бір») — це шедевр садово-паркового мистецтва, розташований на високих терасах Дніпра. Історично ця територія була престижною курортною зоною завдяки своєму унікальному мікроклімату. Парк вироси з прадавніх соснових лісів, що природним чином вкривали північну частину Черкас. Сьогодні це масштабний комплекс із каскадами ставків, віковими деревами та звивистими стежками, що ведуть униз до річкових пляжів. Повітря тут насичене цілющим ароматом хвої, що робить парк природним інгалятором для міста.",
                textExtra:
                    "Головною візитівкою парку є знаменитий «Міст кохання» — високий арочний міст, що завис над глибоким яром і відкриває захопливі краєвиди на Кременчуцьке водосховище. Це улюблене місце закоханих, які залишають тут замки як символ вічних почуттів. Окрім мосту, відвідувачі можуть дослідити загадкові кам'яні скульптури фестивалю «Дивосвіт» або просто насолодитися тишею. Якщо центр міста завжди поспішає, то Соснівський парк залишається оазою спокою, де міський ландшафт плавно розчиняється у дикому лісі."
            }
        }
    };
    
    // ГЛОБАЛЬНИЙ СТАН ДЛЯ МОДАЛЬНОГО ВІКНА
    let currentPlaceKey = null;
    let currentImageIndex = 0;

    // Modal elements
    const modalBackdrop = document.querySelector("[data-modal-backdrop]");
    const modalImage = document.querySelector("[data-modal-image]");
    const modalImageLink = document.querySelector("[data-modal-image-link]"); // Елемент <a> для повноекранного режиму
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalSubtitle = document.querySelector("[data-modal-subtitle]");
    const modalTextMain = document.querySelector("[data-modal-text-main]");
    const modalTextExtra = document.querySelector("[data-modal-text-extra]");
    const modalCloseBtn = document.querySelector("[data-modal-close]");
    // Елементи навігації
    const modalPrevBtn = document.querySelector(".modal-image-nav--prev");
    const modalNextBtn = document.querySelector(".modal-image-nav--next");
    const modalCounter = document.querySelector("[data-modal-counter]");
    const modalImageWrap = document.querySelector(".modal-image-wrap");


    /**
     * Оновлює вміст модального вікна (текст, заголовок)
     * і викликає оновлення зображення.
     */
    const updateModalContent = (placeKey) => {
        const place = PLACE_DETAILS[placeKey];
        const langData = place[currentLang] || place.en;
        
        // Оновлення тексту
        if (modalTitle) modalTitle.textContent = langData.title || "";
        if (modalSubtitle) modalSubtitle.textContent = langData.subtitle || "";
        if (modalTextMain) modalTextMain.textContent = langData.textMain || "";
        if (modalTextExtra) modalTextExtra.textContent = langData.textExtra || "";
        
        // Оновлення зображення
        changeImage(0);
    };

    /**
     * Перемикає зображення в модальному вікні та оновлює посилання.
     * @param {number} step - Крок перемикання: 1 для наступного, -1 для попереднього.
     */
    const changeImage = (step) => {
        if (!currentPlaceKey) return;
        const place = PLACE_DETAILS[currentPlaceKey];
        const photos = place.photos;

        if (!photos || photos.length === 0) {
             if (modalImageWrap) modalImageWrap.style.display = "none";
             return;
        }

        if (modalImageWrap) modalImageWrap.style.display = "";

        // Розрахунок нового індексу
        let newIndex = currentImageIndex + step;

        // Циклічне перемикання
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        } else if (newIndex >= photos.length) {
            newIndex = 0;
        }

        currentImageIndex = newIndex;
        const currentPhoto = photos[currentImageIndex];

        if (modalImage) {
            modalImage.src = currentPhoto.src;
            modalImage.alt = currentPhoto.alt || modalTitle.textContent || "";
        }
        
        // ЛОГІКА ПОВНОГО ЕКРАНУ: Оновлення посилання на повноекранне зображення
        if (modalImageLink) {
            modalImageLink.href = currentPhoto.src;
        }

        if (modalCounter) {
            modalCounter.textContent = `${currentImageIndex + 1}/${photos.length}`;
        }

        // Керування кнопками
        const isGallery = photos.length > 1;
        if (modalPrevBtn) modalPrevBtn.style.display = isGallery ? "" : "none";
        if (modalNextBtn) modalNextBtn.style.display = isGallery ? "" : "none";
        if (modalCounter) modalCounter.style.display = isGallery ? "" : "none";
    };


    const openModal = (placeKey) => {
        if (!modalBackdrop || !PLACE_DETAILS[placeKey]) return;
        
        // Встановлення глобального стану
        currentPlaceKey = placeKey;
        currentImageIndex = 0;

        // Оновлення контенту
        updateModalContent(placeKey);

        modalBackdrop.classList.add("modal-backdrop--visible");
    };

    const closeModal = () => {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove("modal-backdrop--visible");
        
        // Очищення глобального стану
        currentPlaceKey = null;
        currentImageIndex = 0;
    };

    // Open modal from cards
    document.querySelectorAll(".more-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-place");
            if (key) {
                openModal(key);
            }
        });
    });

    // Close modal
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", (event) => {
            if (event.target === modalBackdrop) {
                closeModal();
            }
        });
    }

    // Обробка клавіш
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        } 
        // Навігація клавішами Left/Right
        if (currentPlaceKey) {
            if (event.key === "ArrowLeft") {
                changeImage(-1);
            } else if (event.key === "ArrowRight") {
                changeImage(1);
            }
        }
    });
    
    // Обробники кнопок "Previous" та "Next"
    if (modalPrevBtn) {
        modalPrevBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Запобігаємо переходу по посиланню
            changeImage(-1);
        });
    }

    if (modalNextBtn) {
        modalNextBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Запобігаємо переходу по посиланню
            changeImage(1);
        });
    }
    
    // Примітка: Клік на зображення тепер відкриє його в новій вкладці завдяки тегу <a> в HTML.


    // ------------------------------------------------------------------
    // БЛОК ЗМІН. Видалено непрацюючий код updateModalImage
    // Зображення тепер повністю контролюється CSS-правилами object-fit: cover,
    // які були додані до CSS у попередніх кроках.
    // ------------------------------------------------------------------
});