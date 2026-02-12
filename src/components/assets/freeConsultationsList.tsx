import { FreeItem01 } from "../ServicesComponents/FreeList/FreeItem01";

export type FreeConsultationsListType = {
  id: string;
  uk: { question: string; answer: BlockType[] };
  ru: { question: string; answer: BlockType[] };
  en: { question: string; answer: BlockType[] };
};
export type ParagraphContent = {
  type: "text";
  text: string | TextSegment[];
  gap?: boolean;
};

export type ListContent = {
  type: "list";
  list: (string | TextSegment[])[];
  gap?: boolean;
  numeric?: boolean;
};

export type ImageContent = {
  type: "image";
  gap?: boolean;
  maxH?: string;
  image: string;
};

export type ComponentContent = {
  type: "component";
  component: React.ReactNode;
  gap?: boolean;
};

export type TextType = ParagraphContent | ListContent | ImageContent | ComponentContent;

export type TextSegment = {
  value: string;
  bold?: boolean;
  subtitle?: boolean;
};

export type BlockType = {
  title?: string;
  text: TextType[];
};

export const freeConsultationsList: FreeConsultationsListType[] = [
  {
    id: "freeQuestion04",
    uk: {
      question: "Видворення іноземців з України: що потрібно знати у 2026 році",
      answer: [
        {
          text: [
            {
              gap: true,
              type: "text",
              text: "Для будь-якого іноземця примусовий виїзд з країни є вкрай небажаною подією. Він тягне за собою не лише припинення звичного способу життя та джерел доходу, а й розрив соціальних зв’язків, а також ризик довгострокової заборони повторного в’їзду в Україну.",
            },
            {
              type: "text",
              gap: true,
              text: [
                {
                  value:
                    "Водночас ухвалення відповідного рішення — не вирок. На практиці такі рішення нерідко скасовуються в судовому порядку. Проте, як адвокати, ми регулярно стикаємося з тим, що клієнти не до кінця розуміють: процедура видворення іноземних громадян з України може здійснюватися",
                },
                { value: " у двох різних формах", bold: true },
                {
                  value: ", які суттєво відрізняються між собою, а саме — ",
                },
                { value: "примусове повернення", bold: true },
                { value: " та " },
                { value: "примусове видворення", bold: true },
                { value: "." },
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Пропонуємо коротко розглянути ключові особливості кожної з цих процедур.",
            },
          ],
        },
        {
          title: "Примусове повернення vs. примусове видворення",
          text: [
            {
              type: "text",
              gap: true,
              text: "Законодавство України розмежовує ці процедури за ступенем жорсткості, органом, уповноваженим ухвалювати відповідне рішення, а також за правовими наслідками у разі його невиконання.",
            },
          ],
        },
        {
          title: "Примусове повернення",
          text: [
            {
              type: "text",
              gap: true,
              text: "Примусове повернення вважається так званим «м’якшим» заходом. Рішення про примусове повернення може бути прийняте Державною міграційною службою України, Службою безпеки України або органами Державної прикордонної служби України у разі, якщо під час оформлення матеріалів про адміністративне правопорушення у сфері законодавства про правовий статус іноземців та осіб без громадянства будуть встановлені відповідні підстави. Зокрема, йдеться про вчинення дій, що порушують прикордонний режим, суперечать інтересам національної безпеки або спрямовані на захист здоров’я, прав і законних інтересів громадян України.",
            },
            {
              type: "text",
              gap: true,
              text: "Як правило, іноземцю надається строк до 30 днів для самостійного виїзду з території України. При цьому рішення про примусове повернення може супроводжуватися забороною в’їзду в Україну строком до трьох років.",
            },
          ],
        },
        {
          title: "Примусове видворення",
          text: [
            {
              type: "text",
              gap: true,
              text: "Примусове видворення є крайньою мірою державного примусу. Зазвичай воно застосовується у випадках незаконного перетинання державного кордону України або невиконання іноземцем раніше прийнятого щодо нього рішення про примусове повернення.",
            },
            {
              type: "text",
              gap: true,
              text: "З метою забезпечення процедури видворення, виключно на підставі рішення суду, особа може бути примусово поміщена до пункту тимчасового перебування іноземців та осіб без громадянства на строк до 18 місяців. У такому разі виїзд за межі України здійснюється під контролем (супроводом) правоохоронних органів.",
            },
            {
              type: "text",
              gap: true,
              text: "Рішення про примусове видворення обов’язково супроводжується забороною в’їзду в Україну строком на п’ять років, яка підсумовується з раніше встановленою забороною на в’їзд, якщо така вже діяла.",
            },
          ],
        },
        {
          title: "Державна міграційна служба України: підстави для видворення",
          text: [
            {
              type: "text",
              gap: true,
              text: "Як свідчить наша практика упродовж 2024–2025 років, підставами для прийняття органами Державної міграційної служби України рішень про видворення іноземних громадян, зокрема, були:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "перевищення встановлених строків перебування за візою або відповідно до безвізового правила 90/180;",
                "проживання на території України за недійсними документами, зокрема з використанням простроченого паспорта або скасованого посвідки на проживання;",
                "міркування національної безпеки, як правило — на підставі звернень чи матеріалів, отриманих від правоохоронних органів;",
                "невиконання рішення про примусове повернення, коли іноземець раніше отримав припис про добровільний виїзд з України, однак проігнорував його.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Водночас у багатьох випадках процес видворення має формальний характер і фактично зводиться до прагнення посадових осіб виконати встановлені показники. Нерідко такі рішення приймаються без належної оцінки співмірності вчиненого адміністративного проступку та ступеня втручання у права особи, без всебічного аналізу обставин, у яких опинилася конкретна людина, а також без оцінки можливих наслідків для членів її сім’ї та інших пов’язаних осіб.",
            },
          ],
        },
        {
          title: "Процедура та строки оскарження",
          text: [
            {
              type: "text",
              gap: true,
              text: "Якщо щодо вас прийнято необґрунтоване рішення про примусове повернення або примусове видворення, ви маєте законне право на судовий захист.",
            },
          ],
        },
        {
          title: "Строк на оскарження",
          text: [
            {
              type: "text",
              gap: true,
              text: "Рекомендується звернутися до суду протягом 10 днів з моменту отримання відповідного рішення.",
            },
          ],
        },
        {
          title: "Куди подаються документи",
          text: [
            {
              type: "text",
              gap: true,
              text: "Адміністративний позов подається до місцевого загального суду, який діє як адміністративний суд, за місцезнаходженням органу, рішення якого оскаржується (за його юридичною адресою).",
            },
          ],
        },
        {
          title: "Правові наслідки подання позову",
          text: [
            {
              type: "text",
              gap: true,
              text: "Подання адміністративного позову зупиняє дію рішення про видворення до завершення судового розгляду. Це дає змогу виграти необхідний час та вибудувати ефективну стратегію захисту прав іноземця.",
            },
          ],
        },
        {
          title: "Чи можливо уникнути видворення",
          text: [
            {
              type: "text",
              gap: true,
              text: "Судове провадження у таких справах має змагальний характер. Хоча ми ніколи не надаємо 100% гарантії результату, у нашій практиці найбільш дієвими аргументами проти видворення часто є:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "наявність тісних соціальних і сімейних зв’язків в Україні (подружжя, діти, батьки, які постійно проживають на території держави);",
                "реальний ризик протиправного переслідування в країні походження з політичних, релігійних чи інших мотивів;",
                "процесуальні порушення, допущені органом влади під час оформлення матеріалів і прийняття оскаржуваного рішення.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Вирішальне значення для результату судового оскарження має також відсутність у іноземного громадянина історії раніше вчинених правопорушень та невиконаних зобов’язань, а також його належна процесуальна поведінка. Ухилення від взаємодії з органами Державної міграційної служби України або ігнорування прийнятих рішень негативно впливає на правову позицію особи та істотно обмежує можливості легалізації її статусу.",
            },
          ],
        },
      ],
    },
    ru: {
      question: "Выдворение иностранцев из Украины: что нужно знать в 2026 году",
      answer: [
        {
          text: [
            {
              gap: true,
              type: "text",
              text: "Для любого иностранца принудительный выезд из страны - очень нежелательное событие. Он влечёт за собой не только прекращение привычного образа жизни и источников дохода, но и разрыв социальных связей, а также риск долгосрочного запрета на повторный въезд в Украину.",
            },
            {
              type: "text",
              gap: true,
              text: [
                {
                  value:
                    "В то же время получение соответствующего решения - не приговор. На практике такие решения нередко отменяются в судебном порядке. Однако, как адвокаты, мы регулярно сталкиваемся с тем, что клиенты не до конца понимают: процедура выдворения иностранных граждан из Украины может осуществляться",
                },
                { value: " в двух разных формах", bold: true },
                {
                  value: ", которые существенно отличаются между собой, а именно — ",
                },
                { value: "принудительное возвращение", bold: true },
                { value: " и " },
                { value: "принудительное выдворение", bold: true },
                { value: "." },
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Предлагаем кратко разобраться в ключевых особенностях каждой из этих процедур.",
            },
          ],
        },
        {
          title: "Принудительное возвращение vs. принудительное выдворение",
          text: [
            {
              type: "text",
              gap: true,
              text: "Законодательство Украины разграничивает данные процедуры по степени жёсткости, органу, принимающему решение, а также по правовым последствиям в случае его невыполнения.",
            },
          ],
        },
        {
          title: "Принудительное возвращение",
          text: [
            {
              type: "text",
              gap: true,
              text: "Это так называемый «мягкий» вариант. Решение о принудительном возвращении принимается Государственной миграционной службой Украины, Службой безопасности Украины либо органами Государственной пограничной службы в случае, если при оформлении материалов об административном правонарушении в сфере законодательства о правовом статусе иностранцев и лиц без гражданства будут установлены соответствующие основания, в частности совершение действий, нарушающих пограничный режим, противоречащих интересам национальной безопасности либо направленных на защиту здоровья, прав и законных интересов граждан Украины.",
            },
            {
              type: "text",
              gap: true,
              text: "Как правило, иностранцу предоставляется срок до 30 дней для самостоятельного выезда с территории Украины. При этом решение о принудительном возвращении может сопровождаться запретом въезда в Украину сроком до трёх лет.",
            },
          ],
        },
        {
          title: "Принудительное выдворение",
          text: [
            {
              type: "text",
              gap: true,
              text: "Это крайняя мера государственного принуждения. Она применяется, как правило, в случае незаконного пересечения государственной границы Украины либо невыполнения иностранцем ранее принятого в отношении него решения о принудительном возвращении.",
            },
            {
              type: "text",
              gap: true,
              text: "С целью обеспечения процедуры выдворения, исключительно на основании решения суда, лицо может быть принудительно помещено в пункт временного пребывания иностранцев и лиц без гражданства на срок до 18 месяцев. В таком случае выезд за пределы Украины осуществляется под контролем (сопровождением) правоохранительных органов.",
            },
            {
              type: "text",
              gap: true,
              text: "Решение о принудительном выдворении обязательно сопровождается запретом въезда в Украину сроком на пять лет, который суммируется с ранее установленным запретом на въезд, если таковой уже имел место.",
            },
          ],
        },
        {
          title: "Государственная миграционная служба Украины: основания для выдворения.",
          text: [
            {
              type: "text",
              gap: true,
              text: "Как показывает наша практика, в течение 2024–2025 годов основаниями для принятия органами Государственной миграционной службы Украины решений о выдворении иностранных граждан, в частности, являлись:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "превышение установленных сроков пребывания по визе либо по правилу безвизовых поездок 90/180;",
                "проживание на территории Украины по недействительным документам, в том числе при использовании просроченного паспорта либо отменённого вида на жительство;",
                "соображения национальной безопасности, как правило - на основании обращений или полученных материалов от правоохранительных органов;",
                "невыполнение решения о принудительном возвращении, когда иностранец ранее получил предписание о добровольном выезде, однако проигнорировал его.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "При этом во многих случаях процесс выдворения носит формальный характер и фактически сводится к стремлению должностных лиц выполнить установленные показатели. Нередко такие решения принимаются без надлежащего анализа соразмерности допущенного лицом  административного проступка и степени вмешательства в его права, без всестороннего изучения обстоятельств, в которых оказался конкретный человек, а также без оценки возможных последствий для членов его семьи и иных связанных лиц.",
            },
          ],
        },
        {
          title: "Процедура и сроки обжалования",
          text: [
            {
              type: "text",
              gap: true,
              text: "Если в отношении вас принято необоснованное решение о принудительном возвращении либо принудительном выдворении, вы имеете законное право на судебную защиту.",
            },
          ],
        },
        {
          title: "Срок на обжалование",
          text: [
            {
              type: "text",
              gap: true,
              text: "Рекомендуется обратиться в суд в течение 10 дней с момента получения соответствующего решения.",
            },
          ],
        },
        {
          title: "Куда подаются документы",
          text: [
            {
              type: "text",
              gap: true,
              text: "Административный иск подается в местный общий суд, который действует как административный суд, по месту нахождения органа, решение которого обжалуется (юридическому адресу).",
            },
          ],
        },
        {
          title: "Правовые последствия подачи иска",
          text: [
            {
              type: "text",
              gap: true,
              text: "Подача административного иска приостанавливает действие решения о выдворении до окончания судебного разбирательства. Это позволяет выиграть необходимое время и выстроить эффективную стратегию защиты прав иностранца.",
            },
          ],
        },
        {
          title: "Можно ли избежать выдворения",
          text: [
            {
              type: "text",
              gap: true,
              text: "Судебное производство по таким делам носит состязательный характер. Хотя мы никогда не даем 100% гарантии результата, в нашей практике наиболее действенными аргументами против выдворения нередко становятся:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "наличие тесных социальных и семейных связей в Украине (супруги, дети, родители, которые постоянно проживают на территории страны);",
                "реальный риск противоправного преследования в стране происхождения по политическим, религиозным либо иным мотивам;",
                "процессуальные нарушения, допущенные органом власти при оформлении материалов и принятии обжалуемого решения.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Существенное значение для результата судебного обжалования имеет отсутствие у иностранного гражданина истории ранее совершенных правонарушений и неисполненных обязательств, а также его надлежащее процессуальное поведение. Уклонение от взаимодействия с органами Государственной миграционной службы Украины либо игнорирование принятых решений негативно отражается на правовой позиции и ограничивает возможности легализации статуса.",
            },
          ],
        },
      ],
    },
    en: {
      question:
        "Removal of Foreign Nationals from Ukraine: What You Need to Know in 2026",
      answer: [
        {
          text: [
            {
              type: "text",
              gap: true,
              text: "For any foreign national, forced departure from the country is an extremely undesirable event. It entails not only the disruption of an established way of life and sources of income, but also the severance of social ties, as well as the risk of a long-term ban on re-entry into Ukraine.",
            },
            {
              type: "text",
              gap: true,
              text: [
                {
                  value:
                    "At the same time, the issuance of such a decision is not a verdict. In practice, such decisions are often overturned by the courts. However, as attorneys, we regularly encounter the fact that clients do not fully understand that the procedure for the removal of foreign nationals from Ukraine may be carried out",
                },
                { value: " in two different forms", bold: true },
                {
                  value: ", which differ significantly from each other, namely: ",
                },
                { value: "forced return", bold: true },
                { value: " and " },
                { value: "forced expulsion", bold: true },
                { value: "." },
              ],
            },
            {
              type: "text",
              gap: true,
              text: "We propose to briefly review the key features of each of these procedures.",
            },
          ],
        },
        {
          title: "Forced Return vs. Forced Expulsion",
          text: [
            {
              type: "text",
              gap: true,
              text: "Ukrainian legislation differentiates these procedures based on the degree of severity, the authority empowered to issue the decision, as well as the legal consequences in case of non-compliance.",
            },
          ],
        },
        {
          title: "Forced Return",
          text: [
            {
              type: "text",
              gap: true,
              text: "Forced return is considered a “softer” measure.",
            },
            {
              type: "text",
              gap: true,
              text: "A decision on forced return may be adopted by the State Migration Service of Ukraine, the Security Service of Ukraine, or the State Border Guard Service, provided that, during the preparation of materials on an administrative offense in the field of legislation on the legal status of foreigners and stateless persons, relevant legal grounds are established. Such grounds may include, in particular, actions violating the border regime, actions contrary to the interests of national security, or measures aimed at protecting the health, rights, and legitimate interests of Ukrainian citizens.",
            },
            {
              type: "text",
              gap: true,
              text: "As a rule, a foreign national is granted up to 30 days to leave the territory of Ukraine voluntarily. At the same time, a decision on forced return may be accompanied by a ban on entry into Ukraine for a period of up to three years.",
            },
          ],
        },
        {
          title: "Forced Expulsion",
          text: [
            {
              type: "text",
              gap: true,
              text: "Forced expulsion is an extreme measure of state coercion.",
            },
            {
              type: "text",
              gap: true,
              text: "It is generally applied in cases of illegal crossing of the state border of Ukraine or failure by a foreign national to comply with a previously issued decision on forced return.",
            },
            {
              type: "text",
              gap: true,
              text: "For the purpose of ensuring the expulsion procedure, and exclusively on the basis of a court decision, a person may be forcibly placed in a temporary holding facility for foreigners and stateless persons for a period of up to 18 months. In such cases, departure from Ukraine is carried out under the supervision (escort) of law enforcement authorities.",
            },
            {
              type: "text",
              gap: true,
              text: "A decision on forced expulsion is mandatory accompanied by a ban on entry into Ukraine for a period of five years, which is cumulative with any previously imposed entry ban, if such a ban was already in effect.",
            },
          ],
        },
        {
          title: "State Migration Service of Ukraine: Grounds for Expulsion",
          text: [
            {
              type: "text",
              gap: true,
              text: "As demonstrated by our practice during 2024–2025, the grounds for decisions on the expulsion of foreign nationals adopted by the State Migration Service of Ukraine have included, in particular:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "exceeding the permitted period of stay under a visa or under the 90/180 visa-free rule;",
                "residence in Ukraine on the basis of invalid documents, including the use of an expired passport or a revoked residence permit;",
                "considerations of national security, typically based on requests or materials received from law enforcement authorities;",
                "failure to comply with a decision on forced return, where a foreign national previously received an order to leave Ukraine voluntarily but ignored it.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "In many cases, however, the expulsion process is of a purely formal nature and effectively reflects the desire of officials to meet established performance indicators. Decisions are often made without a proper assessment of the proportionality between the committed administrative offense and the degree of interference with the individual’s rights, without a comprehensive analysis of the circumstances in which the person found themselves, and without evaluating the potential consequences for family members and other related persons.",
            },
          ],
        },
        {
          title: "Appeal Procedure and Time Limits",
          text: [
            {
              type: "text",
              gap: true,
              text: "If an unfounded decision on forced return or forced expulsion has been issued against you, you have a legal right to judicial protection.",
            },
          ],
        },
        {
          title: "Time Limit for Appeal",
          text: [
            {
              type: "text",
              gap: true,
              text: "It is recommended to file a court appeal within 10 days from the date of receipt of the relevant decision.",
            },
          ],
        },
        {
          title: "Where to File",
          text: [
            {
              type: "text",
              gap: true,
              text: "An administrative claim is filed with the local general court acting as an administrative court, at the location (legal address) of the authority whose decision is being challenged.",
            },
          ],
        },
        {
          title: "Legal Consequences of Filing a Claim",
          text: [
            {
              type: "text",
              gap: true,
              text: "Filing an administrative claim suspends the enforcement of the expulsion decision until the completion of court proceedings. This allows the foreign national to gain necessary time and develop an effective legal defense strategy.",
            },
          ],
        },
        {
          title: "Is It Possible to Avoid Expulsion?",
          text: [
            {
              type: "text",
              gap: true,
              text: "Judicial proceedings in such cases are adversarial in nature. While we never provide a 100% guarantee of success, in our practice the most effective arguments against expulsion often include:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "the existence of strong social and family ties in Ukraine (spouses, children, parents permanently residing in the country);",
                "a real risk of unlawful persecution in the country of origin for political, religious, or other reasons;",
                "procedural violations committed by the public authority during the preparation of materials and adoption of the contested decision.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Of substantial importance to the outcome of judicial review is the absence of a history of prior offenses and unfulfilled obligations on the part of the foreign national, as well as their proper procedural conduct. Avoidance of interaction with the State Migration Service of Ukraine or disregard for issued decisions negatively affects the legal position of the foreign national and significantly limits the possibility of legalizing their status.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "freeQuestion01",
    uk: {
      question: "Як іноземцю отримати український паспорт",
      answer: [
        {
          title:
            "Український паспорт є офіційним документом, який підтверджує наявність громадянства України у особи. Громадянство України може бути набуте на підставах, визначених законодавством. Розглянемо основні з них:",
          text: [{ type: "component", component: <FreeItem01 /> }],
        },
        {
          title:
            "Законом передбачено й інші підстави для набуття громадянства України, зокрема:",
          text: [
            {
              type: "list",
              gap: true,
              list: [
                "поновлення у громадянстві;",
                "набуття громадянства у зв’язку з перебуванням у громадянстві України одного чи обох батьків дитини;",
                "та інші випадки, визначені законодавством.",
              ],
            },
          ],
        },
        {
          title:
            "Процедура набуття громадянства України безпосередньо пов’язана з дотриманням законності перебування особи на території України на момент подання заяви про набуття громадянства України, а також із прийняттям зобов’язання припинити у майбутньому іноземне громадянство.",
          text: [
            {
              type: "text",
              gap: true,
              text: "Залежно від встановленої процедури припинення попереднього громадянства, а також підтвердженої участі у військовому захисті держави, Україна може визнати достатнім підтвердженням припинення іноземного громадянства наступні документи:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "довідку про завершення процедури виходу з громадянства у державі попереднього громадянства;",
                "декларацію про відмову або зміну громадянства.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "До завершення процедури виходу з іноземного громадянства особа, яка набула громадянство України, має право користуватися лише тимчасовим посвідченням громадянина України.",
            },
          ],
        },
      ],
    },
    ru: {
      question: "Как иностранцу получить украинский паспорт",
      answer: [
        {
          title:
            "Украинский паспорт является официальным документом, подтверждающим наличие гражданства Украины у лица. Гражданство Украины может быть приобретено на основаниях, определённых законодательством. Рассмотрим основные из них:",
          text: [{ type: "component", component: <FreeItem01 /> }],
        },
        {
          title:
            "Законом предусмотрены и другие основания для приобретения гражданства Украины, в частности:",
          text: [
            {
              type: "list",
              gap: true,
              list: [
                "восстановление в гражданстве;",
                "приобретение гражданства в связи с наличием гражданства Украины у одного или обоих родителей ребёнка;",
                "и другие случаи, определённые законодательством.",
              ],
            },
          ],
        },
        {
          title:
            "Процедура приобретения гражданства Украины непосредственно связана с соблюдением законности пребывания лица на территории Украины на момент подачи заявления о приобретении гражданства Украины, а также с принятием обязательства прекратить в будущем иностранное гражданство.",
          text: [
            {
              type: "text",
              gap: true,
              text: "В зависимости от установленной процедуры прекращения предыдущего гражданства, а также подтверждённого участия в военной защите государства, Украина может признать достаточным подтверждением прекращения иностранного гражданства следующие документы:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "справку о завершении процедуры выхода из гражданства в государстве предыдущего гражданства;",
                "декларацию об отказе или изменении гражданства.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "До завершения процедуры выхода из иностранного гражданства лицо, получившее гражданство Украины, имеет право пользоваться только временным удостоверением гражданина Украины.",
            },
          ],
        },
      ],
    },
    en: {
      question: "How can a foreigner obtain a Ukrainian passport",
      answer: [
        {
          title:
            "A Ukrainian passport is an official document confirming a person's Ukrainian citizenship. Ukrainian citizenship can be acquired based on grounds defined by law. Let’s consider the main ones:",
          text: [{ type: "component", component: <FreeItem01 /> }],
        },
        {
          title:
            "The law also provides for other grounds for acquiring Ukrainian citizenship, including:",
          text: [
            {
              type: "list",
              gap: true,
              list: [
                "reinstatement of citizenship;",
                "acquisition of citizenship due to one or both parents holding Ukrainian citizenship;",
                "and other cases defined by law.",
              ],
            },
          ],
        },
        {
          title:
            "The procedure for acquiring Ukrainian citizenship is directly linked to the legality of a person’s stay in Ukraine at the time of applying for citizenship, as well as the commitment to renounce foreign citizenship in the future.",
          text: [
            {
              type: "text",
              gap: true,
              text: "Depending on the established procedure for renouncing previous citizenship, as well as confirmed participation in the military defense of the state, Ukraine may recognize the following documents as sufficient proof of renunciation of foreign citizenship:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "a certificate confirming the completion of the citizenship renunciation procedure in the previous country of citizenship;",
                "a declaration of renunciation or change of citizenship.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Until the process of renouncing foreign citizenship is completed, a person who has acquired Ukrainian citizenship has the right to use only a temporary Ukrainian citizen’s certificate.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "freeQuestion02",
    uk: {
      question:
        "Як отримати посвідку на проживання в Україні та в чому відмінність тимчасової від постійної",
      answer: [
        {
          text: [
            {
              type: "text",
              gap: true,
              text: [
                { value: "Посвідка на проживання в Україні", bold: true },
                {
                  value:
                    "є офіційним документом, що підтверджує право іноземців або осіб без громадянства на тимчасове чи постійне проживання в Україні. Посвідка на проживання буває постійною або тимчасовою.",
                },
              ],
            },
            {
              type: "text",
              gap: true,
              text: [
                { value: "Посвідка на постійне проживання", bold: true },
                {
                  value:
                    "оформлюється для осіб, які отримали дозвіл на імміграцію в Україну та надає особі необмежене працевлаштування поряд з іншими перевагами. Для отримання дозволу на імміграцію в Україну іноземець або особа без громадянства повинні звернутись до територіального органу (підрозділу) ДМС з відповідною заявою і пакетом документів, який підтверджує наявність підстав для його оформлення. Дозвіл на імміграцію не має строку та умов дійсності, а сама посвідка підлягає обміну кожні 10 років.",
                },
              ],
            },
            { type: "text", gap: true, text: "Дозвіл на імміграцію можуть отримати:" },
            {
              type: "list",
              gap: true,
              list: [
                "висококваліфіковані спеціалісти;",
                "чоловік та дружина громадянина України чи іммігранта;",
                "близькі родичі громадян України;",
                "інвестори;",
                "особи, які мають українське територіальне походження;",
                "військовослужбовці;",
                "представники інших категорій, визначених законодавством.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: [
                { value: "Посвідка на тимчасове проживання", bold: true },
                {
                  value:
                    "видається на визначений період, залежно від підстав її отримання. Нижче наведено найбільш поширені підстави:",
                },
              ],
            },
            {
              type: "list",
              gap: true,
              list: [
                "працевлаштування – на термін дії дозволу на застосування праці;",
                "шлюб із громадянином України – на 1 рік;",
                "навчання – на весь період навчання.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Варто зазначити, що права іноземців з тимчасовою посвідкою значно обмежені у порівнянні з мігрантами, які отримали право на постійне проживання.",
            },
          ],
        },
        {
          title: "Важливі вимоги для оформлення посвідки:",
          text: [
            {
              type: "list",
              list: [
                [
                  {
                    value:
                      "Громадянам країн з візовим режимом поїздок необхідно отримати ",
                  },
                  { value: "довгострокову візу", bold: true },
                  { value: "." },
                ],
                [
                  { value: "Документи на оформлення посвідки слід подавати " },
                  { value: "не пізніше ніж за 15 робочих днів ", bold: true },
                  { value: "до закінчення дозволеного строку перебування в Україні." },
                ],
              ],
            },
          ],
        },
      ],
    },
    ru: {
      question:
        "Как получить вид на жительство в Украине и в чем разница между временным и постоянным",
      answer: [
        {
          text: [
            {
              type: "text",
              gap: true,
              text: [
                { value: "Вид на жительство в Украине", bold: true },
                {
                  value:
                    " — это официальный документ, подтверждающий право иностранцев или лиц без гражданства на временное или постоянное проживание в Украине. Вид на жительство может быть постоянным или временным.",
                },
              ],
            },
            {
              type: "text",
              gap: true,
              text: [
                { value: "Постоянный вид на жительство", bold: true },
                {
                  value:
                    " оформляется для лиц, получивших разрешение на иммиграцию в Украину, и предоставляет неограниченное право на трудоустройство наряду с другими преимуществами. Для получения разрешения на иммиграцию в Украину иностранец или лицо без гражданства должны обратиться в территориальный орган (подразделение) ГМС с соответствующим заявлением и пакетом документов, подтверждающим наличие оснований для его оформления. Разрешение на иммиграцию не имеет срока и условий действия, а сам вид на жительство подлежит обмену каждые 10 лет.",
                },
              ],
            },
            { type: "text", gap: true, text: "Разрешение на иммиграцию могут получить:" },
            {
              type: "list",
              gap: true,
              list: [
                "высококвалифицированные специалисты;",
                "муж и жена гражданина Украины или иммигранта;",
                "близкие родственники граждан Украины;",
                "инвесторы;",
                "лица, имеющие украинское территориальное происхождение;",
                "военнослужащие;",
                "представители других категорий, определенных законодательством.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: [
                { value: "Временный вид на жительство", bold: true },
                {
                  value:
                    " выдается на определенный срок, в зависимости от оснований его получения. Ниже приведены наиболее распространенные основания:",
                },
              ],
            },
            {
              type: "list",
              gap: true,
              list: [
                "трудоустройство – на срок действия разрешения на применение труда;",
                "брак с гражданином Украины – на 1 год;",
                "обучение – на весь период обучения.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Стоит отметить, что права иностранцев с временным видом на жительство значительно ограничены по сравнению с мигрантами, получившими право на постоянное проживание.",
            },
          ],
        },
        {
          title: "Важные требования для оформления вида на жительство:",
          text: [
            {
              type: "list",
              list: [
                [
                  {
                    value:
                      "Гражданам стран с визовым режимом поездок необходимо получить",
                  },
                  { value: " долгосрочную визу", bold: true },
                  { value: "." },
                ],
                [
                  {
                    value: "Документы на оформление вида на жительство следует подавать",
                  },
                  { value: " не позднее чем за 15 рабочих дней ", bold: true },
                  { value: "до окончания разрешенного срока пребывания в Украине." },
                ],
              ],
            },
          ],
        },
      ],
    },
    en: {
      question:
        "How to obtain a residence permit in Ukraine and what is the difference between temporary and permanent residence",
      answer: [
        {
          text: [
            {
              type: "text",
              gap: true,
              text: [
                { value: "A residence permit in Ukraine", bold: true },
                {
                  value:
                    " is an official document confirming the right of foreigners or stateless persons to temporary or permanent residence in Ukraine. A residence permit can be either permanent or temporary.",
                },
              ],
            },
            {
              type: "text",
              gap: true,
              text: [
                { value: "A permanent residence permit", bold: true },
                {
                  value:
                    " is issued to individuals who have obtained immigration permission to Ukraine and grants them unlimited employment rights along with other benefits. To obtain immigration permission to Ukraine, a foreigner or stateless person must apply to the territorial office (department) of the State Migration Service with the relevant application and a set of documents confirming the grounds for its issuance. The immigration permit has no expiration date or validity conditions, while the residence permit itself must be renewed every 10 years.",
                },
              ],
            },
            {
              type: "text",
              gap: true,
              text: "Immigration permission can be granted to:",
            },
            {
              type: "list",
              gap: true,
              list: [
                "highly qualified specialists;",
                "a husband or wife of a Ukrainian citizen or immigrant;",
                "close relatives of Ukrainian citizens;",
                "investors;",
                "persons of Ukrainian territorial origin;",
                "military personnel;",
                "representatives of other categories defined by law.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: [
                { value: "A temporary residence permit", bold: true },
                {
                  value:
                    " is issued for a specified period, depending on the grounds for obtaining it. Below are the most common grounds:",
                },
              ],
            },
            {
              type: "list",
              gap: true,
              list: [
                "employment – for the duration of the work permit;",
                "marriage to a Ukrainian citizen – for 1 year;",
                "education – for the entire study period.",
              ],
            },
            {
              type: "text",
              gap: true,
              text: "It is worth noting that the rights of foreigners with a temporary residence permit are significantly limited compared to migrants who have obtained the right to permanent residence.",
            },
          ],
        },
        {
          title: "Important requirements for obtaining a residence permit:",
          text: [
            {
              type: "list",
              list: [
                [
                  { value: "Citizens of countries with a visa regime must obtain a " },
                  { value: "long-term visa", bold: true },
                  { value: "." },
                ],
                [
                  {
                    value:
                      "Documents for obtaining a residence permit must be submitted ",
                  },
                  { value: "no later than 15 working days", bold: true },
                  { value: " before the end of the allowed stay in Ukraine." },
                ],
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "freeQuestion03",
    uk: {
      question:
        "Порушення строків розгляду заяв про прийняття до громадянства України, а також виходу з громадянства Президентом України",
      answer: [
        {
          title: "Залишається лише чекати.",
          text: [
            {
              type: "text",
              gap: true,
              text: "Дійсно, з початку 2020 року спостерігається майже повне припинення видання Указів Президента України щодо питань громадянства, які раніше видавались (але не публікувались) приблизно раз на три місяці. Справи про прийняття до громадянства, що були позитивно розглянуті Державною міграційною службою України та Комісією при Президентові України з питань громадянства, залишаються без остаточного розгляду Президента протягом багатьох років.",
            },
            {
              type: "text",
              gap: true,
              text: "Слід зазначити, що така зупинка не є вибірковою за країною походження заявників чи підставами для набуття громадянства.",
            },
            {
              type: "text",
              gap: true,
              text: "Водночас окремі особи все ж були прийняті до громадянства в індивідуальному порядку впродовж останніх років. Це може свідчити про зміну політики Офісу Президента у сфері громадянства в бік її посилення.",
            },
            {
              type: "text",
              gap: true,
              text: "Адміністративні суди, розглядаючи спори з Офісом Президента України щодо питань громадянства, як правило, утримуються від втручання у дискреційні повноваження глави держави, залишаючи заявникам лише надію.",
            },
            {
              type: "text",
              gap: true,
              text: "Велика Палата Верховного Суду дійшла висновку, що невчинення Президентом України дій щодо видання указу про надання громадянства України наразі не має характеру протиправної бездіяльності та не може бути визнане такою.",
            },
          ],
        },
      ],
    },
    ru: {
      question:
        "Нарушение сроков рассмотрения заявлений о принятии в гражданство Украины, а также выходе из гражданства Президентом Украины",
      answer: [
        {
          title: "Остается только ждать.",
          text: [
            {
              type: "text",
              gap: true,
              text: "Действительно, с начала 2020 года наблюдается почти полное прекращение издания Указов Президента Украины по вопросам гражданства, ранее издававшихся (но не публиковавшихся) примерно раз в три месяца. Дела о принятии в гражданство, которые были положительно рассмотрены Государственной миграционной службой Украины и Комиссией при Президенте Украины по гражданству, остаются без окончательного рассмотрения Президентом на протяжении многих лет.",
            },
            {
              type: "text",
              gap: true,
              text: "Следует отметить, что такая остановка не является избирательной по стране происхождения заявителей или основаниями для гражданства.",
            },
            {
              type: "text",
              gap: true,
              text: "В то же время отдельные лица все же были приняты в гражданство в индивидуальном порядке на протяжении последних лет. Это может свидетельствовать об изменении политики Офиса Президента в сфере гражданства в направлении ее усиления.",
            },
            {
              type: "text",
              gap: true,
              text: "Административные суды, рассматривая споры с Офисом Президента Украины относительно гражданства, как правило, воздерживаются от вмешательства в дискреционные полномочия главы государства, оставляя заявителям только надежду.",
            },
            {
              type: "text",
              gap: true,
              text: "Большая Палата Верховного Суда пришла к выводу, что несовершение Президентом Украины действий по изданию указа о предоставлении гражданства Украины пока не имеет характера противоправного бездействия и не может быть признано таковым.",
            },
          ],
        },
      ],
    },
    en: {
      question:
        "Violation of the deadlines for considering applications for admission to citizenship of Ukraine, as well as renunciation of citizenship by the President of Ukraine",
      answer: [
        {
          title: "All that remains is to wait.",
          text: [
            {
              type: "text",
              gap: true,
              text: "Indeed, since the beginning of 2020, there has been an almost complete cessation of the issuance of Decrees of the President of Ukraine on citizenship issues, which were previously issued (but not published) approximately once every three months. Cases on admission to citizenship that were positively reviewed by the State Migration Service of Ukraine and the Commission under the President of Ukraine on Citizenship Issues have remained without final consideration by the President for many years.",
            },
            {
              type: "text",
              gap: true,
              text: "It should be noted that such a stop is not selective according to the country of origin of the applicants or the grounds for acquiring citizenship.",
            },
            {
              type: "text",
              gap: true,
              text: "At the same time, some individuals have nevertheless been admitted to citizenship on an individual basis in recent years. This may indicate a change in the policy of the Office of the President in the field of citizenship towards its strengthening.",
            },
            {
              type: "text",
              gap: true,
              text: "Administrative courts, when considering disputes with the Office of the President of Ukraine on citizenship issues, as a rule, refrain from interfering with the discretionary powers of the head of state, leaving the applicants only hope.",
            },
            {
              type: "text",
              gap: true,
              text: "The Grand Chamber of the Supreme Court concluded that the President of Ukraine’s failure to take action to issue a decree on granting Ukrainian citizenship does not currently have the character of unlawful inaction and cannot be recognized as such.",
            },
          ],
        },
      ],
    },
  },
];
