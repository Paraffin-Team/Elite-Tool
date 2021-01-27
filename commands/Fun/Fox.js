const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
    const url = "https://some-random-api.ml/img/fox";
        const facts = "https://some-random-api.ml/facts/fox"

        let replies = [
            'برای ادرار کردن توله  روباه ، مادرش باید شکم او را با زبان گرم خود ماساژ دهد',
            '.اولین نقاشی از  روباه ها در غارها در جنوب اروپا مربوط به 20،000 سال قبل از میلاد است.            ',
            ' روباه ها سگ های نگهبان خوبی نیستند ، زیرا طبیعتا از افراد ناآشنا می ترسند و به جای پارس کردن به آن ها مخفی می شوند',
            'بیماری خود ایمنی، (SLE)، یا لوپوس، به معنای قرمزی  روباه است، زیرا در قرن هجدهم، پزشکان باور داشتند که این بیماری از گاز  روباه ها ناشی می شود.',
            ' روباه ها بزرگ ترین اعضای خانواده سگ سانان هستند که شامل سگ های خانگی، سگ های شکاری آفریقایی، بسیاری از انواع روباه ها و چندین نوع شغال هستند.',
            'توله  روباه ها معمولا بین ماه های مارس و می به دنیا می آیند.',
            '.چشم های توله  روباه ها در بدو تولد آبی و به تدریج از هشت ماهگی زرد می شوند.',
            ' روباه ها روی پنجه های خود می دوند که به آن ها کمک می کند به سرعت بایستند و به سرعت بچرخند .',
            ' روباه ها حدود 200 میلیون سلول بویایی دارند. انسان ها فقط 5 میلیون سلول دارند.  روباه ها می توانند حیوانات دیگر را از فاصله یک مایلی ( 1.6 کیلومتر ) بو کنند.',
            'در شرایط خاصی،  روباه ها می توانند صداها را تا 6 مایل دورتر از جنگل و ده مایل در فضای باز بشنوند.',
            'مدت زمان بارداری  روباه حدود 65 روز است. توله  روباه ها کر و کور به دنیا می آیند و فقط یک پوند وزن دارند.            ',
            'در بین  روباه های واقعی، دو گونه به رسمیت شناخته می شوند: روباه های خاکستری " که شامل 38 زیر گونه است مانند:خاکستری، الوار، قطبی، تندرا، لوبوس و  روباه های بوفالو دارند. دیگر گونه های شناخته شده  روباه قرمز هستند که کوچک تر و پاهای بلندتری دارند و موی کمتری نسبت به  روباه های دیگر دارند.',
            'قدرت زیادی در آرواره های  روباه متمرکز شده است. فک بزرگ و 42 دندان مخصوص برای خرد کردن دارند. آرواره هایشان همچنین بیشتر از سگ باز می شود.',
            'جمعیت  روباه های خاکستری در آمریکای شمالی در سال 1600 به 2 میلیون رسید. امروزه جمعیت آنها در آمریکای شمالی حدود 65،000 است. جمعیت  روباهها در جهان حدود 150000 است.',
            '. روباه گرسنه می تواند 20 پوند گوشت در یک وعده غذا بخورد که شبیه به یک انسانی است که صد همبرگر می خورد.',
            ' روباه ها از نظر تاریخی با شکار جنسی مرتبط بوده اند .',
            'با اینکه بسیاری از ماده ها در یک گروه قادر به بچه دار شدن هستند اما تنها چند نفر از آن ها در واقع جفت گیر هستند. اغلب تنها نر و ماده آلفا جفت خواهند شد و قوی ترین توله را می زایند',
            'یک  روباه به اندازه متوسط حدود 1.2 اینچ مکعب اسپرم تولید می کند.',
            ' روباه ها از حیوان باستانی به نامMesocyon تکامل یافتند که حدود 35 میلیون سال پیش زندگی می کردند. سگ ، کوچک اندام بود که پاهای کوتاه و بدن درازی داشت.',
            ' روباه ها می توانند تا مسافت 8 مایلی ( 13 کیلومتری ) را با کمک شبکه های کوچک بین انگشتان خود شنا کنند.',
            'در دهه 1600، ایرلند " سرزمین  روباهی " خوانده شد چون تعداد زیادی  روباه داشت. شکار  روباه ورزشی محبوب در میان اشراف بود . اولین رکورد ایرلندی در دوران رومی ها در سال 391 میلادی بود.',
            ' روباه ها یکی از معدود حیواناتی هستند که با استفاده از طیف وسیعی از حالات چهره ارتباط برقرار می کنند.'
        ]
        let result = Math.floor((Math.random() * replies.length));
        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
        .setTitle(`عکس رندوم به همراه یک دانستی درباره روباه ها`)
            .setColor(`#33908b`)
            .setDescription(`${replies[result]}`)
            .setImage(image.link)
            .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))

        await message.channel.send(embed)
    }

    module.exports.help = {
        name:"fox",
        aliases: ["fx"]
      }