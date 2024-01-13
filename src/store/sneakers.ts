import { createSlice } from '@reduxjs/toolkit';

export interface ISneaker {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

const initialState: ISneaker[] = [
  {
    id: 1,
    image: '/adidas/forum_mid/',
    title: 'adidas Forum Mid',
    price: '9999',
    description:
      'Культовый силуэт кроссовок adidas Originals Forum Mid, выпущенный в 1983 году, готов стать частью коллекции заядлого сникерхеда. Современная адаптация баскетбольной модели позволяет носить ее и за пределами площадки. Завышенная форма отвечает за уверенную посадку стопы. Регулируемый ремешок на липучке позволяет с легкостью сделать пару более персонализированной и удобной. Подошва с брендированными протекторами обеспечивает эффективное сцепление с поверхностью, а стабилизационная вставка в пяточной зоне — надежную амортизацию.',
  },
  {
    id: 2,
    image: '/adidas/niteball/',
    title: 'adidas Niteball',
    price: '19999',
    description:
      'Архивный баскетбольный силуэт, который, кажется, обеспечил себе актуальность на все времена. Верх кроссовок adidas Niteball из натуральной кожи эффектно сочетается с яркими текстильными вставками, которые создают мягкость и комфорт. Дополнительные отверстия для шнуровки позволяют самостоятельно выбирать плотность посадки. Пена Lightstrike обеспечивает легкость и отличную амортизацию. Резиновая подметка с разнообразными протекторами отвечает за надежное сцепление с поверхностью и уверенность в каждом шаге.',
  },
  {
    id: 3,
    image: '/adidas/niteball_ll/',
    title: 'adidas Niteball ll',
    price: '19999',
    description:
      'Архивный баскетбольный силуэт, который, кажется, обеспечил себе актуальность на все времена. Верх кроссовок adidas Niteball из натуральной кожи эффектно сочетается с яркими текстильными вставками, которые создают мягкость и комфорт. Дополнительные отверстия для шнуровки позволяют самостоятельно выбирать плотность посадки. Пена Lightstrike обеспечивает легкость и отличную амортизацию. Резиновая подметка с разнообразными протекторами отвечает за надежное сцепление с поверхностью и уверенность в каждом шаге.',
  },
  {
    id: 4,
    image: '/adidas/ozelia/',
    title: 'adidas Ozelia',
    price: '14999',
    description:
      'Смелый силуэт кроссовок adidas Ozelia, вдохновленный бунтарскими 90-ми, идеально вписывается в современный гардероб. Верх пары создан из мягкого текстиля с кожаными вставками. Материал хорошо облегает стопу и пропускает воздух. Шнуровка с люверсами-петлями обеспечивает плотную посадку. Технология adiPRENE® отвечает за амортизацию, активно поглощая ударные нагрузки и придавая каждому шагу особый комфорт.',
  },
  {
    id: 5,
    image: '/adidas/ozweego/',
    title: 'adidas Ozweego',
    price: '12999',
    description:
      'Мужские кроссовки Ozweego от adidas представляют стиль конца 90-х — начала 2000-х в новом ключе, объединяя ретро-детали с футуристическим дизайном. Модель выполнена из сетки, замши и гладкого синтетического материала. Специальные вставки поддерживают переднюю часть стопы и пятку. Кроссовки ощущаются невероятно комфортно в течение всего дня. Из фирменного дизайна винтажной модели 1998 года Ozweego 3 позаимствованы прозрачные фиксирующие шнуры, промежуточная подошва узнаваемой формы и планка для шнуровки Вставка из сверхупругого материала Adiprene+ в передней части стопы обеспечивает мягкость шага и увеличивает силу отталкивания, а вставка в пяточной части обеспечит превосходную амортизацию при ударных нагрузках',
  },
  {
    id: 6,
    image: '/adidas/streetball/',
    title: 'adidas Streetball',
    price: '19999',
    description:
      'Множество деталей, объемная шнуровка и многослойный верх пары adidas Streetball отсылают к бунтарской и эксцентричной эпохи 90-х годов. Кожаные вставки создают дополнительную мягкость при ходьбе. Сетчатая ткань обеспечивает активную циркуляцию воздуха. Шнуровка с расширенными точками давления обеспечивает плотную посадку по стопе. Резиновая подошва дополнена разноформенными протекторами для большего сцепления с поверхностью.',
  },
  {
    id: 7,
    image: '/adidas/streetball_ll/',
    title: 'adidas Streetball ll',
    price: '15999',
    description:
      'Живешь и дышишь баскетболом? Мысли всегда на игровой площадке? Тогда у тебя обязательно должны быть эти кроссовки adidas Streetball, олицетворяющие энергию твоего любимого спорта. Сдержанный верх идет вразрез с объемной текстурной подошвой, отсылающей к стилю 90-х. Светоотражающие детали сделают образ заметным даже в темноте.',
  },
  {
    id: 9,
    image: '/adidas/zx_700/',
    title: 'adidas ZX 700',
    price: '8999',
    description:
      'Беговой стиль 80-х остается в авангарде современных модных тенденций. Кроссовки adidas ZX 700 изготовлены из натуральной гладкой кожи. Специальные мягкие вставки в зоне щиколотки создают особый комфорт. Технология Boost отвечает за уверенную амортизацию, а материал EVA облегчает каждый шаг, подстраиваясь под его динамику.',
  },
  {
    id: 10,
    image: '/puma/future_rider_displaced/',
    title: 'puma Future Rider Displaced',
    price: '13999',
    description:
      'Кроссовки PUMA Future Rider RE:Collection отличаются спортивным верхом из текстиля с замшевыми и кожаными вставками, яркими цветовыми акцентами и особым комфортом, который дарит промежуточная подошва IMEVA. Этот пеноматериал на 30% легче, чем EVA. Он сохраняет свою чувствительность, но при этом отлично поглощает ударные нагрузки и выдерживает давление.',
  },
  {
    id: 11,
    image: '/puma/prevail/',
    title: 'puma Prevail',
    price: '9999',
    description:
      'Кроссовки PUMA Prevail выполнены из сетчатого текстиля с кожаными вставками. Специальная пена SOFTFOAM+ с эффектом памяти обеспечивает мягкий и комфортный шаг. Благодаря технологии Trinomic в промежуточной подошве, пара надежно защищает стопы от ударных нагрузок, добавляя упругости и устойчивости во время ходьбы. Резиновая подошва с протекторами минимизирует скольжение и обеспечивает надежное сцепление с любой поверхностью.',
  },
  {
    id: 12,
    image: '/puma/rs-x_mid/',
    title: 'puma RS-X mid',
    price: '17999',
    description:
      'Кроссовки PUMA RS-X Mid со встроенной технологией Running System обеспечивают максимальную амортизацию при каждом шаге. Массивный завышенный силуэт прочно сидит на ноге, благодаря прямой шнуровке с дополнительными отверстиями. Верх из искусственной кожи отвечает за износостойкость и позволяет носить пару даже в непогоду. Подошва с протекторами разной формы отлично балансирует на любой поверхности и обеспечивает уверенное сцепление.',
  },
  {
    id: 13,
    image: '/puma/rs-x_winterized/',
    title: 'puma RS-X winterized',
    price: '16999',
    description:
      'Вдохновленные стилем 1980-х годов, кроссовки PUMA RS-X Winterized не теряют своей актуальности по сей день. Усовершенствованный дизайн соединяется с культовой технологией Running System, которая обеспечивает высокий уровень комфорта и стабилизации. Перфорация отвечает за циркуляцию воздуха, а вставки из искусственной кожи защищают пару от истирания и надолго сохраняют первоначальный вид. Резиновая подошва с протекторами обеспечивает надежное сцепление с любой поверхностью.',
  },
  {
    id: 14,
    image: '/puma/rs-z_reinvention/',
    title: 'puma RS-Z reinvention',
    price: '13999',
    description:
      'Смелый дизайн и инновационные технологии выделяют пару PUMA RS-Z Reinvention из всей коллекции. Верх модели изготовлен из замши и текстиля, что обеспечивает особый комфорт даже при ежедневной носке. Амортизационная технология Running System минимизирует ударные нагрузки и защищает суставы от их негативного воздействия. Подошва с протекторами отвечает за уверенное сцепление на поверхности.',
  },
  {
    id: 15,
    image: '/puma/suede_classic_xxl/',
    title: 'puma Suede Classic XXl',
    price: '9999',
    description:
      'Классическая модель 1968 года возвращается в современном исполнении. PUMA Suede Classic XXI Trainers изготовлены из натуральной замши, произведенной ответственным путем в рамках протокола Leather Working Group. Подкладка выполнена из искусственной кожи. Архивный брендинг PUMA на язычках, печатный логотип сбоку и на задниках, а также культовая полоса Formstrip по бокам. Прочная подошва из резины гарантирует оптимальный комфорт, а цепкий протектор отлично держится на любой поверхности. Одни из самых популярных кроссовок в истории PUMA, которые даже спустя полвека с момента первого издания выглядят актуально.',
  },
  {
    id: 16,
    image: '/puma/trc_blaze/',
    title: 'puma TRC Blaze',
    price: '15999',
    description:
      'Технология Trinomic сделала модель PUMA TRC Blaze культовой. В ее основе лежит улучшенная амортизация, гибкость и стабилизация, которые создают особый комфорт. Текстильный сетчатый верх и замшевые вставки делают кроссовки максимально мягкими и удобными. Продуманная система шнуровки с разными точками давления обеспечивает плотную посадку, а петля на заднике позволяет легко снимать и надевать обувь. Подошва со вставкой из ТПУ делает уверенным каждый шаг.',
  },
  {
    id: 17,
    image: '/puma/trc_blaze_hc/',
    title: 'puma TRC Blaze HC',
    price: '18999',
    description:
      'Технология Trinomic сделала модель PUMA TRC Blaze Court культовой. В ее основе лежит улучшенная амортизация, гибкость и стабилизация, которые создают особый комфорт. Текстильный верх делает кроссовки максимально мягкими и удобными. Прямая шнуровка обеспечивает плотную посадку. Подошва со вставкой из ТПУ делает уверенным каждый шаг.',
  },
  {
    id: 18,
    image: '/puma/wild_rider_mid/',
    title: 'puma Wild Rider Mid',
    price: '15999',
    description:
      'Линейка Wild Rider вдохновлена движением и динамикой городской жизни, а эта яркая модель средней высоты воплощает в себе урбанистическую атмосферу. Яркие цветные акценты, динамичный силуэт и многослойный верх из нескольких материалов сочетаются в этих ультрасовременных ботинках. Сверхпрочные детали из ударостойкого нейлона и кожи с промежуточной подошвой из IMEVA создают ощущение прочности, но при этом легкости, позволяя покорять улицы в привычном темпе.',
  },
  {
    id: 19,
    image: '/nike/',
    title: 'nike Air Huarache ',
    price: '12999',
    description:
      'Кроссовки Nike Air Huarache — это популярная уличная модель, обеспечивающая удобную посадку и комфорт.Верх из блестящего ультрадышащего материала, напоминающего неопрен, с элементами из мягкой кожи стильно дополнит любой образ.Низкопрофильный бортик и внутренняя часть создают изящный внешний вид.Культовый фиксатор пятки и частично стертый логотип сохранили эстетику начала 90-х.',
  },
];
const sneakers = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {},
});
export default sneakers.reducer;