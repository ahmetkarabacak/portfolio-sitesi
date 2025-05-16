import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Örnek proje verileri (gerçek uygulamada veritabanı veya API'den alınabilir)
const projects = [
  {
    id: 1,
    title: "E-Ticaret Web Sitesi",
    description:
      "Modern bir e-ticaret platformu. Next.js, React ve Tailwind CSS kullanılarak oluşturuldu. Sepet, ödeme ve kullanıcı hesapları gibi özellikler içeriyor.",
    fullDescription: `
      Bu e-ticaret platformu, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir alışveriş deneyimi sunuyor.
      
      ## Özellikler
      
      - Kullanıcı hesapları ve kimlik doğrulama
      - Ürün arama ve filtreleme
      - Sepet ve ödeme işlemleri
      - Sipariş geçmişi ve takibi
      - Responsive tasarım
      - Admin paneli ve ürün yönetimi
      
      ## Teknik Detaylar
      
      Proje, Next.js framework'ü üzerine inşa edildi ve TypeScript ile geliştirildi. Veritabanı olarak MongoDB kullanıldı ve Stripe ile ödeme entegrasyonu sağlandı. Önyüz tasarımı Tailwind CSS ile oluşturuldu ve Framer Motion ile animasyonlar eklendi.
      
      Bu projenin en zorlu kısmı, sepet sistemini ve ödeme işlemlerini sorunsuz bir şekilde entegre etmekti. Stripe API'sini kullanarak güvenli ödeme işlemleri sağlandı ve kullanıcı deneyimini en üst düzeye çıkarmak için hızlı yükleme süreleri elde edildi.
    `,
    image: "/images/project-1.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    demoUrl: "https://ecommerce-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/ecommerce",
    featured: true,
    screenshots: [
      "/images/project-1-screenshot-1.jpg",
      "/images/project-1-screenshot-2.jpg",
      "/images/project-1-screenshot-3.jpg",
    ],
    completionDate: "Ocak 2023",
    client: "XYZ Alışveriş",
  },
  {
    id: 2,
    title: "Portfolyo Websitesi",
    description:
      "Profesyonel bir portfolyo websitesi. Modern tasarım prensipleri, animasyonlar ve duyarlı tasarım ile oluşturuldu.",
    fullDescription: `
      Kişisel portfolyo web sitesi, modern ve şık bir tasarımla profesyonel çalışmaları sergilemek için tasarlandı.
      
      ## Özellikler
      
      - Etkileyici animasyonlar ve geçişler
      - Proje galerisi ve filtreleme
      - İletişim formu
      - Blog bölümü
      - Responsive tasarım
      
      ## Teknik Detaylar
      
      Bu portfolyo, React ile geliştirildi ve Framer Motion kullanılarak akıcı animasyonlar eklendi. SCSS ile özel bir tasarım sistemi oluşturuldu ve her ekran boyutunda mükemmel görünmesi sağlandı.
      
      Projenin en dikkat çeken özelliği, scroll tabanlı animasyonlar ve sayfa geçişlerindeki akıcı efektlerdir. Görsel odaklı bir yaklaşımla, ziyaretçilerin dikkatini çekmek ve profesyonel bir izlenim bırakmak hedeflendi.
    `,
    image: "/images/project-2.jpg",
    tags: ["React", "Framer Motion", "SCSS"],
    demoUrl: "https://portfolio-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/portfolio",
    featured: true,
    screenshots: [
      "/images/project-2-screenshot-1.jpg",
      "/images/project-2-screenshot-2.jpg",
      "/images/project-2-screenshot-3.jpg",
    ],
    completionDate: "Mart 2023",
    client: "Kişisel Proje",
  },
  {
    id: 3,
    title: "Blog Platformu",
    description:
      "İçerik yöneticileri için kişiselleştirilebilir bir blog platformu. Markdown desteği, kategoriler ve etiketleme sistemi içeriyor.",
    fullDescription: `
      Bu blog platformu, içerik oluşturucular için kolay kullanımlı ve özelleştirilebilir bir çözüm sunuyor.
      
      ## Özellikler
      
      - Markdown ve zengin metin editörü
      - Kategori ve etiket sistemi
      - SEO optimizasyonu
      - İstatistikler ve analitikler
      - Yorumlar ve etkileşim
      
      ## Teknik Detaylar
      
      Platform, Next.js kullanılarak geliştirildi ve MDX ile zengin içerik desteği sağlandı. Tailwind CSS ile modern ve temiz bir arayüz tasarlandı. İçerik yönetimi için özel bir CMS entegrasyonu eklendi.
      
      Projenin odak noktası, içerik oluşturucular için kullanımı kolay ama güçlü bir platform sağlamaktı. SEO odaklı yaklaşım ve performans optimizasyonları ile yüksek arama motoru görünürlüğü hedeflendi.
    `,
    image: "/images/project-3.jpg",
    tags: ["Next.js", "MDX", "TailwindCSS"],
    demoUrl: "https://blog-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/blog-platform",
    featured: true,
    screenshots: [
      "/images/project-3-screenshot-1.jpg",
      "/images/project-3-screenshot-2.jpg",
      "/images/project-3-screenshot-3.jpg",
    ],
    completionDate: "Haziran 2023",
    client: "ABC Medya",
  },
  {
    id: 4,
    title: "UI Bileşen Kütüphanesi",
    description:
      "React için özel tasarlanmış, erişilebilir ve yeniden kullanılabilir UI bileşenleri kütüphanesi.",
    fullDescription: `
      Bu UI bileşen kütüphanesi, modern web uygulamaları için erişilebilir ve estetik bileşenler sunar.
      
      ## Özellikler
      
      - 30+ yeniden kullanılabilir bileşen
      - Erişilebilirlik odaklı tasarım
      - Tema özelleştirme seçenekleri
      - Kapsamlı dokümantasyon
      - Test kapsamı
      
      ## Teknik Detaylar
      
      Kütüphane, React ve TypeScript kullanılarak geliştirildi. Bileşenlerin görsel testleri için Storybook entegre edildi ve Jest ile birim testleri yazıldı. Tüm bileşenler WCAG erişilebilirlik standartlarına uygun olarak tasarlandı.
      
      Bu proje, bileşen tabanlı mimarinin ve yeniden kullanılabilir kod yazmanın önemini vurguluyor. Geliştirme sürecinde, farklı projelerde kullanılabilecek tutarlı ve güvenilir bir bileşen seti oluşturmak amaçlandı.
    `,
    image: "/images/project-4.jpg",
    tags: ["React", "TypeScript", "Storybook", "Jest"],
    demoUrl: "https://ui-components-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/ui-components",
    featured: false,
    screenshots: [
      "/images/project-4-screenshot-1.jpg",
      "/images/project-4-screenshot-2.jpg",
      "/images/project-4-screenshot-3.jpg",
    ],
    completionDate: "Ağustos 2023",
    client: "Açık Kaynak Proje",
  },
  {
    id: 5,
    title: "Task Yönetim Uygulaması",
    description:
      "Ekipler için geliştirilmiş task ve proje yönetim uygulaması. Gerçek zamanlı işbirliği özellikleri içerir.",
    fullDescription: `
      Bu task yönetim uygulaması, ekiplerin projelerini verimli bir şekilde yönetmelerine yardımcı olmak için tasarlandı.
      
      ## Özellikler
      
      - Sürükle-bırak görev yönetimi
      - Gerçek zamanlı işbirliği
      - Zaman takibi ve raporlama
      - Kullanıcı ve izin yönetimi
      - Bildirimler ve hatırlatıcılar
      
      ## Teknik Detaylar
      
      Uygulama, React frontend ve Node.js backend kullanılarak geliştirildi. Durum yönetimi için Redux kullanıldı ve veriler MongoDB'de saklandı. Gerçek zamanlı iletişim için Socket.io entegre edildi.
      
      Bu projenin en zorlu kısmı, farklı kullanıcılar tarafından aynı anda yapılan değişiklikleri senkronize etmekti. Optimistik UI güncellemeleri ve çakışma çözümü mekanizmaları ile akıcı bir kullanıcı deneyimi sağlandı.
    `,
    image: "/images/project-5.jpg",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    demoUrl: "https://task-management-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/task-manager",
    featured: false,
    screenshots: [
      "/images/project-5-screenshot-1.jpg",
      "/images/project-5-screenshot-2.jpg",
      "/images/project-5-screenshot-3.jpg",
    ],
    completionDate: "Ekim 2023",
    client: "DEF Teknoloji",
  },
  {
    id: 6,
    title: "Hava Durumu Uygulaması",
    description:
      "Hava durumu verilerini gösteren modern bir web uygulaması. Konuma göre hava durumu tahminleri sunar.",
    fullDescription: `
      Bu hava durumu uygulaması, kullanıcılara güncel ve doğru hava durumu bilgileri sağlamak için tasarlandı.
      
      ## Özellikler
      
      - Konum tabanlı hava durumu
      - 7 günlük tahminler
      - Detaylı meteorolojik veriler
      - Animasyonlu hava durumu ikonları
      - Konum arama
      
      ## Teknik Detaylar
      
      Uygulama, React kullanılarak geliştirildi ve açık kaynaklı bir hava durumu API'si ile entegre edildi. CSS Modules kullanılarak modüler bir stil yapısı oluşturuldu. Geolocation API ile kullanıcının konumu algılanarak otomatik hava durumu güncellemeleri sağlandı.
      
      Bu basit ama etkili uygulama, API entegrasyonu ve veri görselleştirme becerilerini sergilemek için tasarlandı. Kullanıcı deneyimine odaklanarak, karmaşık verileri anlaşılır ve çekici bir şekilde sunmak amaçlandı.
    `,
    image: "/images/project-6.jpg",
    tags: ["React", "API Integration", "CSS Modules"],
    demoUrl: "https://weather-app-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/weather-app",
    featured: false,
    screenshots: [
      "/images/project-6-screenshot-1.jpg",
      "/images/project-6-screenshot-2.jpg",
      "/images/project-6-screenshot-3.jpg",
    ],
    completionDate: "Aralık 2023",
    client: "Kişisel Proje",
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);
  
  if (!project) {
    notFound();
  }
  
  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="mb-8 flex items-center space-x-2">
            <Link href="/projeler" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              <span>Projeler</span>
            </Link>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <span className="text-gray-800 dark:text-gray-200">{project.title}</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h1 className="heading-1 mb-4">{project.title}</h1>
              <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Demo Görüntüle
                </a>
                <a 
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Kaynak Kodu
                </a>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 md:h-80">
              {/* <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover" 
              /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="heading-4 mb-2">Müşteri</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
            </div>
            <div className="card p-6">
              <h3 className="heading-4 mb-2">Tamamlanma Tarihi</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.completionDate}</p>
            </div>
            <div className="card p-6">
              <h3 className="heading-4 mb-2">Proje Tipi</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.tags[0]}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="heading-2 mb-6">Proje Açıklaması</h2>
              <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="heading-2 mb-6">Proje Detayları</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="heading-4 mb-2">Kullanılan Teknolojiler</h3>
                  <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="heading-4 mb-2">Proje Bağlantıları</h3>
                  <div className="space-y-1 text-gray-600 dark:text-gray-400">
                    <p>
                      <strong>Demo URL:</strong>{" "}
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400"
                      >
                        {project.demoUrl}
                      </a>
                    </p>
                    <p>
                      <strong>Git Deposu:</strong>{" "}
                      <a 
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400"
                      >
                        GitHub
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Screenshots */}
      <section className="bg-gray-50 py-12 dark:bg-gray-800 md:py-16">
        <div className="container">
          <h2 className="heading-2 mb-8 text-center">Proje Görselleri</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                {/* <Image 
                  src={screenshot} 
                  alt={`${project.title} ekran görüntüsü ${index + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-300 hover:scale-105" 
                /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Next/Prev Projects */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="heading-2 mb-8 text-center">Diğer Projeler</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map(relatedProject => (
                <div key={relatedProject.id} className="card group overflow-hidden">
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                    {/* <Image 
                      src={relatedProject.image} 
                      alt={relatedProject.title} 
                      fill 
                      className="object-cover transition-transform duration-300 group-hover:scale-105" 
                    /> */}
                  </div>
                  <div className="p-6">
                    <h3 className="heading-3 mb-2">
                      <Link href={`/projeler/${relatedProject.id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                        {relatedProject.title}
                      </Link>
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      {relatedProject.description}
                    </p>
                    <Link 
                      href={`/projeler/${relatedProject.id}`}
                      className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      Detayları Gör
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-primary-50 py-16 dark:bg-primary-900/10">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Benzer Bir Proje Hayaliniz Var Mı?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Fikrinizi gerçeğe dönüştürmek için birlikte çalışabiliriz. Bana ulaşın ve projenizi hayata geçirelim.
          </p>
          <Link href="/iletisim" className="btn btn-primary">
            İletişime Geç
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
} 