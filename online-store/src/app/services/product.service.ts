import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Skincare' },
    { id: 2, name: 'Haircare' },
    { id: 3, name: 'Cosmetics' },
    { id: 4, name: 'Manicure' }
  ];

  products: Product[] = [
   
    {
      id: 1,
      name: 'Dr. Althea крем 345 Relief для лица 50 мл',
      description: 'Восстанавливающий крем с ниацинамидом 345 Relief Cream - инновационное средство для ухода за кожей с постакне. Его уникальная формула, обогащенная ниацинамидом, пантенолом и экстрактом стеблей опунции, подарит вашей коже всесторонний уход.',
      price: 3999,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Bioderma крем Sebium Hydra для лица 40 мл',
      description: 'Увлажняющий крем с гиалуроновой кислотой и экстрактом листьев бамбука. Помогает увлажнить кожу и уменьшить проявления воспаления.',
      price: 7600,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p0a/83177267.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/bioderma-krem-sebium-hydra-dlja-litsa-40-ml-115616910/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Dr. Althea крем Resveratrol 345 NA Intensive Repair для лица 50 мл',
      description: 'Dr. Althea 345 Relief Cream —восстанавливающий и успокаивающий крем сокращает выраженность мимических морщин и заметно разглаживает кожные заломы, помогает эффективно бороться с несовершенствами кожи: акне, постакне, покраснениями на лице, а также поддерживает восстановление кожного барьера и увлажнение кожи лица. Это инновационное средство для ухода за поврежденной кожей.',
      price: 4299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/haf/hf9/86626930917406.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dr-althea-krem-resveratrol-345-na-intensive-repair-dlja-litsa-50-ml-115616911/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'AXIS-Y сыворотка Dark Spot Correcting Glow для лица 50 мл',
      description: 'Корректирующая сыворотка Dark Spot Correcting Glow Serum против нарушения пигментации зарядит вашу кожу энергией, тонизирует кожу изнутри, а также выравнивает тон лица. Сыворотка имеет полупрозрачную гелевую текстуру, которая прекрасно впитывается, не оставляя ощущения липкости.',
      price: 877,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p1e/57519040.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-115616912/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Round Lab 1025 Dokdo пенка 150 мл',
      description: 'Очищающая пенка на основе морской воды мягко и бережно удаляет остатки макияжа и микропыль, которая незаметно оседает на нашем теле, обеспечивая нежное увлажнение, кожа приобретает чистый, здоровый и сияющий вид.В продуктах Round Lab серии 1025 Dokdo Line используется специально обработанная глубокая морская вода из Ulleungdo, содержащая 74 вида безопасных природных минералов, таких как магний, кальций и цинк.',
      price: 1249,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pca/p77/25826932.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/round-lab-1025-dokdo-penka-150-ml-105850453/?c=750000000',
      likes: 0,
      categoryId: 1
    },
   
    {
      id: 6,
      name: 'Kirkland Minoxidil 5% набор пипетка лосьон 60 мл',
      description: 'Комплект для ухода за волосами с миноксидилом 5%.',
      price: 3990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h91/86178554937374.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kirkland-minoxidil-5-nabor-pipetka-los-on-60-ml-104961778/?c=750000000',
      likes: 0,
      categoryId: 2
    },
     {
      id: 7,
      name: 'Ollin Professional Perfect Hair 15 in 1 крем-спрей 100 мл',
      description: 'Крем-спрей для ухода за волосами с 15 в 1 комплексом.',
      price: 2990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p31/13352464.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-in-1-krem-sprei-100-ml-108359816/?c=750000000',
      likes: 0,
      categoryId: 2
    }, {
      id: 8,
      name: 'Заколка краб 9 шт',
      description: 'Набор заколок краб. Отлично держат хвост, пучок, идеальны как для тонких волос, так и для объемных. Крабик станет идеальным украшением в повседневной жизни, на работу или учебу, а так же станет прекрасным украшением для вечерней прически.',
      price: 879,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h99/80296739766302.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/zakolka-krab-9-sht-109989625/?c=750000000',
      likes: 0,
      categoryId: 2
    }, {
      id: 9,
      name: 'Tashe Liquid Silk масло 100 мл',
      description: 'Масло для ухода за волосами с 100 мл.',
      price: 2000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/p90/72811509.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/tashe-liquid-silk-maslo-100-ml-117503489/?c=750000000',
      likes: 0,
      categoryId: 2
    }, {
      id: 10,
      name: 'Cotton Joy резинка 20 шт, черный',
      description: 'Резинки для волос Cotton Joy. Отлично держат хвост, пучок, идеальны как для тонких волос, так и для объемных. Резинки Cotton Joy станут идеальным украшением в повседневной жизни, на работу или учебу.',
      price: 239,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p1e/57519040.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/cotton-joy-rezinka-20-sht-chernyi-106083927/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    
    {
      id: 11,
      name: 'MISS TAIS Mauve карандаш 765',
      description: 'Сочетание идеальной гипоаллергенной формулы и деревянного корпуса из калифорнийского кедра делает нанесение макияжа не только комфортным, но и предпочтительным для женщин, обладающих чувствительной кожей или, например, носящих контактные линзы',
      price: 139,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-765-100155528/?c=750000000',
      likes: 0,
      categoryId: 3
    },
     {
      id: 12,
      name: 'DMND спонж скошенный, спонж капля полиуретан 2 шт, розовый',
      description: 'Спонж для макияжа идеально наносит и растушёвывает косметическое средство, создавая идеальное покрытие. Прекрасно подходит для профессионального макияжа.',
      price:78,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8d/pfd/45125327.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-rozovyi-104557208/?c=750000000',
      likes: 0,
      categoryId: 3
    }, {
      id: 13,
name: 'Тушь для ресниц ALL ME Тушь для ресниц / Charisma Mascara для объема черный',
description: 'ALL ME CHARISMA Mascara — тушь нового поколения с «тюбинг»-эффектом: Никаких комочков и осыпаний в течение дня. Легкое снятие — смывается теплой водой «чулочками».',
      price: 3300,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4c/pf5/102197012.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/tush-dlja-resnits-all-me-tush-dlja-resnits-charisma-mascara-dlja-ob-ema-chernyi-144851724/?c=750000000',
      likes: 0,
      categoryId: 3
    }, {
      id: 14,
      name: 'Кисть для тонального крема серебряный 1',
      description: 'Кисть для тонального крема — ваш идеальный помощник для создания безупречного макияжа. Эта ультратонкая кисть обеспечивает лёгкое и равномерное нанесение, позволяя добиться естественного эффекта без следов.',
      price: 167,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h57/85429604253726.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kist-dlja-tonal-nogo-krema-serebrjanyi-1-117403333/?c=750000000',
      likes: 0,
      categoryId: 3
    }, {
      id: 15,
      name: 'Пудра Fit me рассыпчатая 1 прозрачный',
      description: 'Пудра Fit Me рассыпчатая 1 прозрачный — это идеальный выбор для создания матового эффекта на коже. Она подходит для всех типов кожи и предназначена для ежедневного применения. ',
      price: 639,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h5e/86574200455198.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/pudra-fit-me-rassypchataja-1-prozrachnyi-121613576/?c=750000000',
      likes: 0,
      categoryId: 3
    },
  

    {
      id: 16,
      name: 'Baibex терка педикюрная, пемза для ног Нано стекло 1 шт',
      description: 'Нано тёрка нового поколения — гладкие и ухоженные пяточки без усилий!',
      price: 630,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p83/p83/48679435.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/baibex-terka-pedikjurnaja-pemza-dlja-nog-nano-steklo-1-sht-141300757/?c=750000000',
      likes: 0,
      categoryId: 4
    },
     {
      id: 17,
      name: 'EYA набор маникюрных инструментов 5 см 21 шт',
      description: 'Многофункциональный, маникюрный набор идеален для комплексного домашнего или профессионального ухода. Набор долговечен, выполнен из высококачественного материала, лезвия изготовлены из нержавеющей стали',
      price: 1990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p51/58045005.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/eya-nabor-manikjurnyh-instrumentov-5-sm-21-sht-143939844/?c=750000000',
      likes: 0,
      categoryId: 4
    }, 
    {
      id: 18,
      name: 'Микробраши 7 100 шт',
      description: 'Микробраши деревянные (100 шт) — это незаменимый инструмент для профессионального ухода за ногтями. Эти маленькие, но мощные кисточки идеально подходят для точного нанесения геля, лака или других средств на ногти, обеспечивая безупречный результат и долговременный эффект.',
      price: 194,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h3f/69255834959902.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/mikrobrashi-7-100-sht-108997210/?c=750000000',
      likes: 0,
      categoryId: 4
    }, {
      id: 19,
      name: 'OPI маникюрная пилка Луна 100/180 грит 1 шт',
      description: 'Маникюрная пилка OPI Луна 100/180 грит — это высококачественный инструмент для профессионального ухода за ногтями. Пилка обеспечивает точное и аккуратное удаление кожи вокруг ногтя, позволяя добиться идеального результата.',
      price: 1290,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/ha0/64447968444446.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/opi-manikjurnaja-pilka-luna-100-180-grit-1-sht-106438035/?c=750000000',
      likes: 0,
      categoryId: 4
    }, {
      id: 20,
      name: 'ENIGMA нагреватель для геля 1 шт',
      description: 'Нагреватель для геля ENIGMA — это удобное устройство, которое обеспечивает равномерный нагрев геля для ногтей. Устройство легко использовать и подходит для домашнего и профессионального применения.',
      price: 1490,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p25/80210358.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/enigma-nagrevatel-dlja-gelja-1-sht-115253355/?c=750000000',
      likes: 0,
      categoryId: 4
    }
   
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}