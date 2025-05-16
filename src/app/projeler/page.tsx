import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

// Örnek proje verileri
const projects = [
  {
    id: 1,
    title: "E-Ticaret Web Sitesi",
    description:
      "Modern bir e-ticaret platformu. Next.js, React ve Tailwind CSS kullanılarak oluşturuldu. Sepet, ödeme ve kullanıcı hesapları gibi özellikler içeriyor.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    demoUrl: "https://ecommerce-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolyo Websitesi",
    description:
      "Profesyonel bir portfolyo websitesi. Modern tasarım prensipleri, animasyonlar ve duyarlı tasarım ile oluşturuldu.",
    image: "/images/project-2.jpg",
    tags: ["React", "Framer Motion", "SCSS"],
    demoUrl: "https://portfolio-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/portfolio",
    featured: true,
  },
  {
    id: 3,
    title: "Blog Platformu",
    description:
      "İçerik yöneticileri için kişiselleştirilebilir bir blog platformu. Markdown desteği, kategoriler ve etiketleme sistemi içeriyor.",
    image: "/images/project-3.jpg",
    tags: ["Next.js", "MDX", "TailwindCSS"],
    demoUrl: "https://blog-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/blog-platform",
    featured: true,
  },
  {
    id: 4,
    title: "UI Bileşen Kütüphanesi",
    description:
      "React için özel tasarlanmış, erişilebilir ve yeniden kullanılabilir UI bileşenleri kütüphanesi.",
    image: "/images/project-4.jpg",
    tags: ["React", "TypeScript", "Storybook", "Jest"],
    demoUrl: "https://ui-components-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/ui-components",
    featured: false,
  },
  {
    id: 5,
    title: "Task Yönetim Uygulaması",
    description:
      "Ekipler için geliştirilmiş task ve proje yönetim uygulaması. Gerçek zamanlı işbirliği özellikleri içerir.",
    image: "/images/project-5.jpg",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    demoUrl: "https://task-management-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/task-manager",
    featured: false,
  },
  {
    id: 6,
    title: "Hava Durumu Uygulaması",
    description:
      "Hava durumu verilerini gösteren modern bir web uygulaması. Konuma göre hava durumu tahminleri sunar.",
    image: "/images/project-6.jpg",
    tags: ["React", "API Integration", "CSS Modules"],
    demoUrl: "https://weather-app-demo.com",
    codeUrl: "https://github.com/ahmetkarabacak/weather-app",
    featured: false,
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="container text-center">
          <h1 className="heading-1 mb-6">Projelerim</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Modern web teknolojileri kullanarak geliştirdiğim çeşitli projeler. Her proje, farklı becerilerimi ve yaklaşımlarımı sergiliyor.
          </p>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="card group overflow-hidden">
                <div className="relative h-56 bg-gray-200 dark:bg-gray-700">
                  {/* Görsel eklenmesi gerekiyor - şimdilik gri alan gösteriliyor */}
                  {/* <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105" 
                  /> */}
                </div>
                <div className="p-6">
                  <h3 className="heading-3 mb-2">
                    <Link href={`/projeler/${project.id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Demo
                    </a>
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      Kod
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-primary-50 py-16 dark:bg-primary-900/10">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Bir Proje Fikriniz mi Var?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Proje fikirlerinizi hayata geçirmek için birlikte çalışmak isterim. Benimle iletişime geçin ve fikrinizi gerçeğe dönüştürelim.
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