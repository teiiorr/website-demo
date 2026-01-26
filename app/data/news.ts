// app/data/news.ts

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string[];
};

export const news: NewsItem[] = [
  {
    id: "n-001",
    slug: "ijodkorlar-forumi-2026",
    title: "Ijodkorlar forumi",
    date: "2026-03-02",
    excerpt:
      "Uyushma tomonidan tashkil etilgan forumda mentorlar, maktablar va media hamkorlar ishtirok etdi.",
    coverImage: "/assets/images/sample-1.jpg",
    content: [
      "Forumda bolalar ijodini qo‘llab-quvvatlash bo‘yicha yangi hamkorlik yo‘nalishlari muhokama qilindi.",
      "Dastur doirasida master-klasslar, taqdimotlar va ochiq muloqotlar o‘tkazildi.",
      "Natijada 2026 yil uchun hamkorlik rejalari va amaliy yo‘nalishlar kelishib olindi.",
    ],
  },
  {
    id: "n-002",
    slug: "kitobxonlik-mukofoti",
    title: "Kitobxonlik",
    date: "2026-02-10",
    excerpt:
      "Eng faol o‘quvchilar taqdirlandi, yangi o‘quv resurslari va tavsiyalar e’lon qilindi.",
    coverImage: "/assets/images/sample-2.jpg",
    content: [
      "Yil davomida o‘tkazilgan kitobxonlik aksiyalari yakunlariga ko‘ra eng faol maktablar taqdirlandi.",
      "Kutubxonalar bilan hamkorlikda yangi tavsiya ro‘yxati tayyorlandi.",
      "Keyingi bosqichda hududiy uchrashuvlar va onlayn sessiyalar rejalashtirildi.",
    ],
  },
  {
    id: "n-003",
    slug: "media-laboratoriya-starti",
    title: "Media laboratoriya",
    date: "2026-01-18",
    excerpt:
      "Laboratoriya dasturida media savodxonligi, montaj va kontent",
    coverImage: "/assets/images/sample-3.jpg",
    content: [
      "Laboratoriya dasturida media savodxonligi, montaj va kontent rejalash bo‘yicha bloklar mavjud.",
      "Ishtirokchilar uchun mentorlik sessiyalari va portfoliolarni shakllantirish topshiriqlari berildi.",
      "Yakunda eng yaxshi ishlar ommaviy ko‘rgazmada namoyish etiladi.",
    ],
  },
];
