import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const reviews = [
    {
        "first_name": "Frederik",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/maximsorokin/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-24T08:00:00.000Z",
        "review_text": "Occaecati ipsam quia. Laudantium voluptas sunt molestiae ad nihil blanditiis dolorem. Nobis ut eveniet deserunt in sunt. Ut ea unde repudiandae autem provident aliquam dicta modi.",
        "review_is_english": 0,
        "review_text_eng": "Veniam quis sapiente. Omnis nihil delectus. Ea eius commodi quis sit ipsam facere. Temporibus similique quasi aliquam magnam.",
        "has_host_response": 1,
        "host_reply_text": "Nemo ut tempora officiis voluptate doloremque aut. Blanditiis voluptatem et distinctio voluptas hic odio ipsam aut debitis. Ducimus dolorem nam qui suscipit sed et est dolorem."
    },
    {
        "first_name": "Carmelo",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/cyril_gaillard/128.jpg",
        "room_id": 50,
        "review_date": "2018-05-31T07:00:00.000Z",
        "review_text": "Id sit modi. Natus in id quibusdam. Dignissimos veritatis tempora id voluptate. Ratione eos et tempore vel ipsum aliquam aut dignissimos. Rem dolor laudantium deleniti quos maxime asperiores ullam non. Voluptatem porro cumque.",
        "review_is_english": 1,
        "review_text_eng": "Tempora adipisci animi sit quis quidem rerum vel. Nesciunt sunt a sint inventore. Quos veniam quidem molestiae animi in sed. Officiis fugit iusto quidem et voluptatum.",
        "has_host_response": 1,
        "host_reply_text": "Dolores adipisci dolorem at a laborum natus non ab deserunt. Sapiente aut modi facilis vitae ipsa dolor ratione et. Ipsa voluptate dolor. Qui et fugiat sit quia ea sapiente eligendi omnis fugiat. Nam laborum facilis sit debitis quo numquam ullam aut. Nam doloribus corrupti voluptatum vel ipsam."
    },
    {
        "first_name": "Elfrieda",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/grahamkennery/128.jpg",
        "room_id": 50,
        "review_date": "2018-02-07T08:00:00.000Z",
        "review_text": "Ea tempora quia repellat animi. Voluptatem odio eum est autem. Blanditiis et quos quod sapiente et quas itaque veritatis quibusdam. Fugit asperiores dolores voluptatibus molestias id consequuntur et doloremque. Unde dolorem illo est quas voluptas ut. Nihil perferendis ducimus aut blanditiis quia sint in.",
        "review_is_english": 1,
        "review_text_eng": "Ab debitis totam doloremque expedita molestiae ea voluptatum sit neque. Ullam blanditiis illum error repellat deleniti. Porro et dolore eum quo omnis. Quia est quia minima alias quam dolorum. Quo deserunt autem qui quia eligendi. Tenetur minima doloribus.",
        "has_host_response": 1,
        "host_reply_text": "Sit laborum ut non nihil sed. Assumenda vero sed. Tenetur aut rem error quaerat nihil culpa at. Sint perspiciatis sunt sapiente dolorem consectetur veritatis dolorem enim. Consectetur molestiae amet veniam qui et quam tempore soluta sint."
    },
    {
        "first_name": "Iva",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-06T08:00:00.000Z",
        "review_text": "Et voluptatem quia neque eum consequuntur unde sit necessitatibus. Nisi id dicta consectetur labore temporibus est quisquam. Est optio ducimus atque itaque fugiat. Rerum porro id temporibus earum in dolores est. Iure hic ab illo qui odit numquam quis inventore maiores. Ea sunt est.",
        "review_is_english": 0,
        "review_text_eng": "In velit voluptatem exercitationem et rem. Ipsa est sed sint totam molestiae facere voluptatum dolor nam. Enim rem beatae. Reiciendis est fugiat laudantium voluptatem optio placeat sed. Voluptatem et doloremque aut possimus. Consequatur dicta dolorem qui.",
        "has_host_response": 0,
        "host_reply_text": "Earum ut aut nam temporibus libero aut dolor. Fugiat quia impedit sequi. Natus voluptas ut non eum veniam quas et explicabo debitis. Minima similique commodi velit iste. Beatae veritatis magni earum sed omnis deserunt et ullam."
    },
    {
        "first_name": "Arnaldo",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/vickyshits/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-02T07:00:00.000Z",
        "review_text": "Repellat quidem officiis itaque recusandae neque. Est ratione maxime hic repellendus. Facere et et consectetur.",
        "review_is_english": 0,
        "review_text_eng": "Assumenda quae consequuntur quisquam et magni est deserunt. Necessitatibus adipisci rerum est magnam quo et hic eius. Dolores quisquam dolor voluptatum sint et. Voluptatum voluptates et minus. Et repudiandae qui unde quia porro.",
        "has_host_response": 1,
        "host_reply_text": "Enim eum nesciunt at aut. Ipsam cumque quo dolorem saepe quisquam nobis reprehenderit adipisci officiis. In expedita facilis et nisi quisquam fuga quis. Beatae est debitis qui voluptatibus consequuntur."
    },
    {
        "first_name": "Ova",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/noxdzine/128.jpg",
        "room_id": 50,
        "review_date": "2018-01-03T08:00:00.000Z",
        "review_text": "Natus consequuntur nostrum sunt cupiditate magni aut non rem. Fuga qui fuga et reprehenderit rem voluptate voluptatem aut. Necessitatibus doloribus tempora enim accusantium. Repudiandae molestiae rerum.",
        "review_is_english": 0,
        "review_text_eng": "Similique delectus quia consequuntur. At ipsa enim quis magnam quis placeat. Laudantium et quaerat ipsa nihil. Quisquam facere soluta et at neque ad. Sit voluptas qui nam ipsum mollitia. Ullam provident voluptatem.",
        "has_host_response": 1,
        "host_reply_text": "Itaque sunt eos voluptate et. Aliquid quo reprehenderit et exercitationem et molestias sequi est accusamus. Eos ad animi in. Cumque necessitatibus est ratione quia et a ipsum. Voluptatem autem recusandae maxime numquam laboriosam non. Et ad dolores et alias culpa dolores et recusandae."
    },
    {
        "first_name": "Alize",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg",
        "room_id": 50,
        "review_date": "2018-02-14T08:00:00.000Z",
        "review_text": "Aut quis earum fugiat consequatur neque. Officia ut atque nisi et aperiam soluta. Sed quisquam nisi. Porro earum consequatur totam possimus ullam dolore consequuntur impedit. Reprehenderit error iusto soluta omnis.",
        "review_is_english": 1,
        "review_text_eng": "Nesciunt sed quia totam aut. Quae esse ut sit eum quasi. Voluptatem perspiciatis et magni labore autem repellat similique soluta. Nostrum porro nihil odit dolores vel et beatae similique autem.",
        "has_host_response": 1,
        "host_reply_text": "Veritatis aperiam autem repellendus ratione dignissimos vel exercitationem dolorum. Nam molestiae et non odit voluptas fugit et debitis. Repudiandae ut voluptatibus explicabo. Consequatur est voluptas incidunt possimus reiciendis enim. Sunt natus velit ut ipsum. Facilis delectus dolores esse aut quos optio quam voluptatum id."
    },
    {
        "first_name": "Chaim",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/koridhandy/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-15T08:00:00.000Z",
        "review_text": "Et consequatur est consequatur repellat vitae unde dicta quia. Provident corporis quisquam ut culpa voluptatem sapiente officiis facilis. Sed ipsa accusamus quia. Deleniti ea quo consequatur eaque aliquam officiis aut quia.",
        "review_is_english": 1,
        "review_text_eng": "Incidunt magnam at enim harum eligendi dolores corrupti excepturi. Illo cum modi debitis totam asperiores eius dolor ea nam. Amet voluptatibus quisquam qui tempora fugiat ea doloribus eius consequatur. Consectetur quasi qui ut quam et. Et minus architecto culpa eligendi vitae praesentium hic quam aliquam.",
        "has_host_response": 0,
        "host_reply_text": "Officia voluptates iusto perspiciatis vero perspiciatis. Repudiandae cupiditate sequi rem consequatur. Rerum fugit corrupti praesentium."
    },
    {
        "first_name": "Hank",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/linkibol/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-20T08:00:00.000Z",
        "review_text": "Illo eligendi iure. Non ipsa suscipit reiciendis. Velit harum quasi laboriosam officia in iste vero. Architecto autem quia ipsa delectus quaerat autem eius sed modi.",
        "review_is_english": 0,
        "review_text_eng": "Id ut quam neque. Autem molestiae repellendus odit. Quos sunt ab. Ab repudiandae numquam et. Quis consectetur in dolore dolor dignissimos non velit dolore. Dolorum nemo maxime maiores.",
        "has_host_response": 0,
        "host_reply_text": "Dolorem ad harum ut. Ut non itaque rerum. Commodi quasi voluptas dolor qui qui. Corrupti illum eveniet sit aut et consequuntur officiis. Ut aut quam ut deleniti sit. Est illo itaque."
    },
    {
        "first_name": "Micah",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/lebinoclard/128.jpg",
        "room_id": 50,
        "review_date": "2018-02-10T08:00:00.000Z",
        "review_text": "Accusamus laborum laboriosam incidunt sunt illum quia tempora odio eos. Nulla nostrum aut dolores nesciunt soluta neque consequatur dolor. In consectetur hic fugit sed molestiae illum dolorum voluptas. Ipsam adipisci laborum esse. Sequi qui fuga possimus. Veniam magnam vel harum et dolores.",
        "review_is_english": 1,
        "review_text_eng": "Sunt doloribus unde rerum sed modi. Expedita tempore ab ex natus nostrum iusto numquam id. Est enim et dolor. Dolorem sint explicabo delectus est est cumque.",
        "has_host_response": 1,
        "host_reply_text": "Enim fuga illo provident et consectetur qui illo consequuntur atque. Voluptas dicta aut maxime amet. Tempora iure voluptatem aspernatur ipsum. Ad excepturi veritatis et voluptatem quo aut qui. Illo iusto iusto eum tenetur excepturi quaerat autem. Excepturi quasi ea expedita hic voluptatem omnis qui quos."
    },
    {
        "first_name": "Damion",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/hsinyo23/128.jpg",
        "room_id": 50,
        "review_date": "2018-04-13T07:00:00.000Z",
        "review_text": "Accusamus vel earum dicta quia nisi accusantium. Voluptates voluptatem ut ullam dolores rerum vero. Voluptates mollitia ipsum omnis et. Eius atque doloribus suscipit unde ut ducimus.",
        "review_is_english": 0,
        "review_text_eng": "Labore sed pariatur ea. Consequatur est inventore facere rem. Velit non non natus ut. Quisquam animi corporis laudantium nostrum dolor.",
        "has_host_response": 1,
        "host_reply_text": "Rem quo ea at provident veniam saepe sequi voluptas. Vitae voluptatum ut id est quos maxime adipisci quidem voluptatem. Dolor ipsa facilis eveniet cupiditate maxime blanditiis itaque est."
    },
    {
        "first_name": "Jessy",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/harry_sistalam/128.jpg",
        "room_id": 50,
        "review_date": "2018-03-16T07:00:00.000Z",
        "review_text": "Reiciendis rerum corrupti quibusdam. Sint officiis ullam qui voluptas qui. Non dolorem dolorum aut debitis ipsum consequatur non impedit. Distinctio incidunt ut. Reprehenderit et recusandae nesciunt incidunt et. Corrupti dolorem repellat.",
        "review_is_english": 1,
        "review_text_eng": "Amet est beatae quaerat animi voluptatem. Qui quasi vel vitae ad voluptatibus non aut explicabo minima. Nihil numquam nostrum consequatur quis iure repellat exercitationem. Possimus libero eveniet quis non dolor quae quasi sed. Dolores quod qui. Eligendi dolorum ea et beatae quos.",
        "has_host_response": 1,
        "host_reply_text": "Perspiciatis sequi hic odit qui modi non magni voluptas. Ad temporibus qui velit. Eos eum aliquam illum similique vel."
    },
    {
        "first_name": "Terrance",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/mrebay007/128.jpg",
        "room_id": 50,
        "review_date": "2018-01-23T08:00:00.000Z",
        "review_text": "Vel fugit enim provident eius autem voluptatem reiciendis. Libero sunt sunt necessitatibus vel natus tenetur. Natus et fugit et dolorum et. Accusantium sapiente assumenda quas laborum. Pariatur asperiores asperiores earum et. Assumenda consequuntur sapiente.",
        "review_is_english": 1,
        "review_text_eng": "Non debitis vero non cupiditate aspernatur autem. Quasi sunt itaque nihil corrupti labore nulla ad neque corporis. Architecto hic autem.",
        "has_host_response": 0,
        "host_reply_text": "Optio repellendus consequatur nemo qui dolorum. Harum ipsa qui. Alias perspiciatis voluptatibus eos et autem consectetur est dolor eum."
    },
    {
        "first_name": "Jairo",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/andrewarrow/128.jpg",
        "room_id": 50,
        "review_date": "2018-09-03T07:00:00.000Z",
        "review_text": "Impedit eos eum officia perspiciatis voluptatem voluptatem deserunt hic alias. Animi sunt quis explicabo quia repudiandae optio occaecati. Praesentium velit sint ut voluptatibus voluptas autem eligendi consequuntur temporibus.",
        "review_is_english": 0,
        "review_text_eng": "Asperiores aut voluptates ullam aspernatur doloribus. Cumque nihil repellat dolorem ea et. Ut et et possimus ut ratione magni.",
        "has_host_response": 0,
        "host_reply_text": "Quisquam quod quibusdam facilis qui. Ex quasi repellendus enim aut nemo natus. Quam dolores fuga iste. Qui qui quod est dolorum sit accusantium deleniti quos minima."
    },
    {
        "first_name": "Fiona",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/sulaqo/128.jpg",
        "room_id": 50,
        "review_date": "2018-08-10T07:00:00.000Z",
        "review_text": "Iure molestiae pariatur praesentium blanditiis. In cupiditate assumenda eaque. Ut ducimus excepturi labore natus eaque. Repellat error voluptatem animi. Totam delectus sit aliquid et.",
        "review_is_english": 0,
        "review_text_eng": "Est officiis impedit tempore ea quia quidem totam. Est quam et aut praesentium vel. Praesentium ut velit sint suscipit quod et sed. Quaerat expedita et tempore sunt et et. Ratione expedita non et assumenda a et laudantium. Culpa et et minus similique qui molestiae atque.",
        "has_host_response": 1,
        "host_reply_text": "Dolore exercitationem explicabo culpa culpa voluptatibus aut totam nesciunt. Autem id quam dolor. Porro dolorem laboriosam eum dolorem nihil. Autem ad vitae suscipit officiis. Molestiae quibusdam quo harum voluptas labore veritatis nulla."
    },
    {
        "first_name": "Irma",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/shesgared/128.jpg",
        "room_id": 50,
        "review_date": "2018-04-21T07:00:00.000Z",
        "review_text": "Porro sunt pariatur quo id ut esse quo ut incidunt. Placeat quia magni minima numquam quis quo cum impedit aut. Optio magnam quaerat vitae est et nobis. Eveniet deleniti sed nulla. Quo laboriosam labore assumenda nihil ipsum illum alias velit.",
        "review_is_english": 0,
        "review_text_eng": "Et et ut nemo dicta quam et cupiditate eaque. Vero non modi vel odit. Soluta nam necessitatibus dolores consequatur voluptatem accusamus molestias sit ut.",
        "has_host_response": 1,
        "host_reply_text": "Ad nihil aut at consectetur voluptatem ut. Quaerat minima autem quae omnis nulla est a et. Esse quo deleniti veritatis omnis sit aspernatur et enim. Eos rem vel quis sequi fugiat nesciunt similique officia accusantium."
    },
    {
        "first_name": "Cheyanne",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/allfordesign/128.jpg",
        "room_id": 50,
        "review_date": "2018-05-05T07:00:00.000Z",
        "review_text": "Doloremque corporis ad dicta blanditiis aut eum dolores rerum quo. Doloremque reprehenderit deleniti aperiam. Rerum placeat qui corrupti qui doloremque vero omnis aut.",
        "review_is_english": 1,
        "review_text_eng": "Ratione soluta laboriosam quidem magni harum quam deserunt saepe magnam. Omnis in inventore cumque et. Veritatis explicabo voluptate est.",
        "has_host_response": 0,
        "host_reply_text": "Voluptatum quam ea saepe facilis. Earum cupiditate doloribus officia quia. Officia rerum praesentium sit dolorem."
    },
    {
        "first_name": "Ivah",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/designervzm/128.jpg",
        "room_id": 50,
        "review_date": "2018-09-11T07:00:00.000Z",
        "review_text": "Fugit dolorem quas vitae ea nihil. Excepturi necessitatibus qui. Iure dolorem quia aut sed possimus placeat.",
        "review_is_english": 0,
        "review_text_eng": "Sunt minima eius incidunt voluptatum cumque culpa et modi. Nesciunt assumenda labore a. Excepturi repudiandae dolorem totam alias. Unde ad dicta cupiditate omnis.",
        "has_host_response": 1,
        "host_reply_text": "Porro repellat quia aut suscipit consectetur maxime sint nesciunt consequatur. Ea tenetur in iste aspernatur mollitia animi. Consequuntur eum possimus sit et laborum fuga nostrum. Quam ut excepturi voluptas dolorem id omnis. Nam ullam ex."
    },
    {
        "first_name": "Audie",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/adityasutomo/128.jpg",
        "room_id": 50,
        "review_date": "2017-12-30T08:00:00.000Z",
        "review_text": "At occaecati laudantium quia dignissimos perspiciatis cupiditate deleniti. Ipsum consequatur qui sint rem et. Quia aut non aut et labore dignissimos amet soluta molestiae. Magni qui aut eaque corrupti deserunt.",
        "review_is_english": 1,
        "review_text_eng": "Error non voluptatum tenetur est velit expedita eos delectus ut. Sed ut necessitatibus dolore itaque nesciunt dolores dolorem autem blanditiis. Rerum quia rerum sint dolor voluptatum doloribus dolor quis consequatur.",
        "has_host_response": 1,
        "host_reply_text": "Nulla non sequi ipsa modi minus voluptas. Aperiam beatae quia in eum rem. Est ut minus optio sunt eum vero est laudantium. Accusantium incidunt voluptatem reiciendis odio et aut mollitia."
    },
    {
        "first_name": "Julius",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg",
        "room_id": 50,
        "review_date": "2018-12-03T08:00:00.000Z",
        "review_text": "Dignissimos accusamus voluptates velit molestiae laboriosam. Dolorem sit voluptatibus nostrum quia deleniti sint ipsa. Magni aut accusamus distinctio atque dignissimos eveniet aspernatur. Qui doloremque optio. Accusantium quod enim iusto.",
        "review_is_english": 0,
        "review_text_eng": "Quae molestiae non voluptate et eos aliquid explicabo voluptatem quisquam. Quidem et ad quis. Aut autem odit sint rerum aut officiis autem assumenda voluptatem.",
        "has_host_response": 1,
        "host_reply_text": "Nesciunt ratione neque ducimus blanditiis quaerat adipisci quia odit. Rerum autem ipsa minima. Non molestiae saepe nobis blanditiis et omnis."
    },
    {
        "first_name": "Kory",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/ahmadajmi/128.jpg",
        "room_id": 50,
        "review_date": "2018-07-21T07:00:00.000Z",
        "review_text": "A id ut neque dicta ab aut aut. Ut ut repellendus provident. Labore ipsa ut dolores cumque. Tempora vero eum tenetur et quia cum est nostrum.",
        "review_is_english": 1,
        "review_text_eng": "Eos voluptatem aut. Sit aut qui autem aut. Voluptatem aut qui veniam quasi eum voluptatem. Exercitationem et deleniti fugit rem tempora dolorem est accusamus voluptas. Qui qui porro eos enim.",
        "has_host_response": 0,
        "host_reply_text": "Excepturi et voluptatem eligendi quisquam. Animi voluptas corporis. Aut impedit ut ex. Eius molestias quaerat vel et. Molestias eum eos est illo. Quaerat nostrum repudiandae et."
    },
    {
        "first_name": "Friedrich",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/jydesign/128.jpg",
        "room_id": 50,
        "review_date": "2018-05-17T07:00:00.000Z",
        "review_text": "Earum atque adipisci doloribus ut. Ut eum quo debitis enim id aut. Quos ipsum possimus recusandae ex nihil. Optio ut voluptatem omnis molestiae ea sint. Earum laboriosam nihil temporibus quae ut libero provident beatae reiciendis. Quis quibusdam hic.",
        "review_is_english": 0,
        "review_text_eng": "Odio expedita sed ea sed ipsam officia. Placeat rerum eum ex iste quibusdam laborum quis. Nulla doloribus nihil corporis. Enim recusandae quas ex dignissimos qui dolorem saepe. Voluptatibus possimus commodi ipsa recusandae dignissimos molestias dolores quibusdam.",
        "has_host_response": 1,
        "host_reply_text": "Perspiciatis cumque velit dolor vel est. Dolores deleniti qui voluptatibus id. Vel commodi sit nobis modi laborum dolorem possimus ea. Sapiente pariatur voluptatem. Occaecati commodi asperiores iure at consectetur ad quis. Temporibus voluptas ut quibusdam sunt quis aut debitis rerum qui."
    },
    {
        "first_name": "Guy",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/charlesrpratt/128.jpg",
        "room_id": 50,
        "review_date": "2018-10-29T07:00:00.000Z",
        "review_text": "Voluptatem consequatur aut nam laborum eum eos velit. Harum porro quis soluta molestiae odio facere ea praesentium vero. Ut dignissimos in perspiciatis delectus. Veritatis at pariatur magnam vel ut.",
        "review_is_english": 0,
        "review_text_eng": "Omnis quia et accusamus. Et vel voluptatem fuga delectus optio illo in in. Ut perferendis provident eos. Accusantium pariatur vel aperiam quia. Laborum sit temporibus dignissimos ad.",
        "has_host_response": 0,
        "host_reply_text": "Iure harum molestiae modi aut eum quia. Quam provident laboriosam possimus dignissimos. Aperiam rerum et eum dolorum. Dolorum beatae culpa eum ut incidunt. Molestiae delectus rerum laborum. Sint cum quis eos doloremque ratione voluptatem."
    },
    {
        "first_name": "Isac",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg",
        "room_id": 50,
        "review_date": "2018-12-08T08:00:00.000Z",
        "review_text": "Voluptates ut similique est tempora consequuntur. Eligendi sed ut ut tempore. Qui laboriosam reiciendis rem eum consequuntur corporis. Aspernatur modi occaecati enim saepe dolores incidunt enim quia qui. Rerum accusamus molestiae eos.",
        "review_is_english": 1,
        "review_text_eng": "Sit molestiae non et itaque quia rem blanditiis. Nihil quis officia rerum reprehenderit a ullam voluptates. Alias et doloremque amet qui et praesentium. Rerum fugiat perspiciatis ut non quo. Non debitis ducimus.",
        "has_host_response": 1,
        "host_reply_text": "Quis est nisi. Cupiditate beatae voluptatem aut. Cumque qui quis rerum id eum quibusdam corrupti illo est. Rem quo minima ea rerum omnis vel non recusandae. Expedita neque exercitationem labore rerum."
    },
    {
        "first_name": "Mekhi",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg",
        "room_id": 50,
        "review_date": "2018-05-01T07:00:00.000Z",
        "review_text": "Ut laudantium est consequatur. Pariatur quod molestias vel ipsum asperiores est veniam sunt. Sit iusto voluptas ipsam consequatur quia voluptas rerum. Quasi omnis consequatur sequi dolor soluta ea. Ex illo eius natus non exercitationem ea facere molestias commodi.",
        "review_is_english": 1,
        "review_text_eng": "Ipsa eveniet rerum omnis occaecati. Facilis voluptas ipsam consequatur id et illum. Amet sint aliquam iure nihil totam magni praesentium.",
        "has_host_response": 0,
        "host_reply_text": "Dolorem est eos nesciunt voluptas dolore sint ut est. Sapiente nulla esse. Quo asperiores omnis voluptatum quia explicabo quos. Qui nam vel maiores."
    },
    {
        "first_name": "Jedediah",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/kaspernordkvist/128.jpg",
        "room_id": 50,
        "review_date": "2018-12-10T08:00:00.000Z",
        "review_text": "Qui quas ut voluptates. Accusantium aspernatur voluptates. Error sint non velit porro est libero. Odit sed non nemo.",
        "review_is_english": 1,
        "review_text_eng": "Ducimus quasi debitis odio non qui commodi in. Vel eum quidem omnis. Assumenda et eum est tempore neque laudantium expedita. Voluptatem ipsum delectus aut voluptates et non. Repellendus doloremque ipsam aliquid possimus. Et dolore officiis.",
        "has_host_response": 1,
        "host_reply_text": "Similique explicabo omnis rerum quis totam autem. Ipsam cupiditate dolores sit repellendus reprehenderit voluptatibus. Eveniet dolores praesentium et molestiae et dignissimos est tempore omnis. Libero similique cupiditate molestiae ut et autem aut ea et. Officiis velit voluptatibus et vel."
    },
    {
        "first_name": "Rusty",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/maximseshuk/128.jpg",
        "room_id": 50,
        "review_date": "2018-01-14T08:00:00.000Z",
        "review_text": "Sunt quo facilis dignissimos dolorem sit cupiditate saepe unde qui. Aut unde eveniet. Cum facere esse sit explicabo est et. Ut similique perferendis impedit autem.",
        "review_is_english": 1,
        "review_text_eng": "Facilis odit error eius aut non aut odio ea nostrum. Et accusantium praesentium eligendi est natus omnis asperiores voluptatum fugiat. Eveniet ratione natus corrupti consequatur blanditiis sint. Ea rerum dicta et aspernatur omnis.",
        "has_host_response": 1,
        "host_reply_text": "Enim error enim ullam maxime qui. Doloremque doloremque aperiam veritatis excepturi. Consequuntur officia rem illo."
    },
    {
        "first_name": "Garrick",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/sergeysafonov/128.jpg",
        "room_id": 50,
        "review_date": "2017-12-28T08:00:00.000Z",
        "review_text": "Est corrupti recusandae officia. Voluptatum dolorem eos. Et natus quia ipsum ut labore et laboriosam non. Fugiat magnam eveniet rerum soluta voluptates. Ullam nihil aliquam sunt excepturi animi natus.",
        "review_is_english": 0,
        "review_text_eng": "Dolore et autem dolor consectetur corporis. Rem et quis numquam et voluptatem aut facere dolor. Doloremque in omnis soluta nemo.",
        "has_host_response": 0,
        "host_reply_text": "Perferendis commodi voluptatum accusantium. Repudiandae et explicabo ex. Qui nobis voluptates."
    },
    {
        "first_name": "Ray",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/koridhandy/128.jpg",
        "room_id": 50,
        "review_date": "2018-07-05T07:00:00.000Z",
        "review_text": "Ea et est velit vel. Et adipisci molestiae libero. Voluptatem aut et provident. Consequatur inventore earum corrupti fugit nostrum. Qui vel et aliquam aut ut corporis ut. Omnis aliquid eaque est aut voluptas corporis.",
        "review_is_english": 1,
        "review_text_eng": "Vel possimus qui reiciendis. Suscipit omnis et commodi dolore et a enim aut aliquam. Enim sequi quidem at neque quas. Reprehenderit et et consequatur aut consequatur. Culpa quasi qui porro ab ratione aut maxime consequatur.",
        "has_host_response": 1,
        "host_reply_text": "Vel similique adipisci tempore inventore eveniet. Odio praesentium dolor amet delectus. Dolorem corrupti molestiae. Pariatur ut accusantium sed qui ullam inventore culpa eum. Est id esse tenetur voluptatibus rerum unde debitis quia. Sed in minima fuga adipisci reprehenderit corporis."
    },
    {
        "first_name": "Kira",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/carlosjgsousa/128.jpg",
        "room_id": 50,
        "review_date": "2018-03-04T08:00:00.000Z",
        "review_text": "Totam numquam eum error. Ducimus autem qui est error. Et fugit numquam ut at asperiores asperiores ex aut. Consequuntur aut et quia sunt quos. Animi dolorum non occaecati nisi. Aliquid nisi consequatur rerum impedit praesentium odit totam facilis.",
        "review_is_english": 1,
        "review_text_eng": "Eos quis est dolorum pariatur quae. Architecto ut ipsa quis dolorem et fugit iure molestiae. Quasi aut facilis sint facere ducimus recusandae dolore sint. Porro natus ad. Sunt perspiciatis consequatur.",
        "has_host_response": 1,
        "host_reply_text": "Ullam cupiditate nesciunt quam ducimus nihil incidunt et natus. Molestiae quibusdam eum mollitia quasi iste iste eligendi voluptates. Vitae quia saepe accusantium praesentium nisi excepturi aspernatur vel at."
    }
];

const stars = [
    {
        "accuracy": 2.3667,
        "location": 1.9333,
        "communication": 1.6333,
        "check_in": 2.0333,
        "cleanliness": 1.9333,
        "value": 1.7
    }
];

ReactDOM.render(<App reviews={reviews} stars={stars[0]} />, document.getElementById('reviews-root'));
