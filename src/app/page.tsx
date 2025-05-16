import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 dark:from-gray-900 dark:to-gray-800 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="heading-1">
                Merhaba, ben <span className="text-primary-600 dark:text-primary-400">Ahmet</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Frontend geliştirici ve UI/UX tasarımcı olarak modern ve kullanıcı dostu web deneyimleri oluşturuyorum.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link href="/projeler" className="btn btn-primary">
                  Projelerimi Gör
                </Link>
                <Link href="/iletisim" className="btn btn-outline">
                  İletişime Geç
                </Link>
              </div>
            </div>
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80 lg:h-96 lg:w-96">
              <div className="h-full w-full rounded-full bg-primary-100 dark:bg-primary-900/20"></div>
              {/* Burada profil fotoğrafı yer alabilir */}
              {/* <Image src="/images/profile.jpg" alt="Ahmet Karabacak" fill className="object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımda Bölümü */}
      <section className="py-16 md:py-24" id="hakkimda">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 mb-6">Hakkımda</h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              5 yıllık deneyimim ile modern web teknolojilerini kullanarak kullanıcı odaklı ve performanslı 
              dijital deneyimler oluşturuyorum. React, Next.js ve TypeScript konularında uzmanlık sahibiyim.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="card p-6 text-center">
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</h3>
                <p className="text-gray-600 dark:text-gray-400">Yıl Deneyim</p>
              </div>
              <div className="card p-6 text-center">
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</h3>
                <p className="text-gray-600 dark:text-gray-400">Proje</p>
              </div>
              <div className="card p-6 text-center">
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">30+</h3>
                <p className="text-gray-600 dark:text-gray-400">Mutlu Müşteri</p>
              </div>
              <div className="card p-6 text-center">
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</h3>
                <p className="text-gray-600 dark:text-gray-400">Teknoloji</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yetenekler Bölümü */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="container">
          <h2 className="heading-2 mb-12 text-center">Yeteneklerim</h2>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {[
              "HTML5 & CSS3",
              "JavaScript (ES6+)",
              "TypeScript",
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Figma",
              "Responsive Design",
              "Git & GitHub",
              "API Integration",
              "Performance Optimization"
            ].map((skill) => (
              <div key={skill} className="card flex items-center p-4">
                <div className="h-3 w-3 rounded-full bg-primary-500"></div>
                <span className="ml-3 font-medium text-gray-800 dark:text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projeler Bölümü */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between space-y-4 md:flex-row md:items-end md:space-y-0">
            <div>
              <h2 className="heading-2">Öne Çıkan Projeler</h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                Geliştirdiğim bazı özel projeler
              </p>
            </div>
            <Link href="/projeler" className="btn btn-outline">
              Tüm Projeleri Gör
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div key={project} className="card group overflow-hidden">
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  {/* <Image src={`/images/project-${project}.jpg`} alt={`Proje ${project}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" /> */}
                </div>
                <div className="p-6">
                  <h3 className="heading-3 mb-2">Proje Başlığı {project}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Bu projede modern web teknolojileri kullanarak etkileyici bir kullanıcı deneyimi oluşturdum.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                      React
                    </span>
                    <span className="rounded-full bg-secondary-100 px-3 py-1 text-xs font-medium text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 mb-6">İletişime Geçin</h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Bir proje fikriniz mi var? Birlikte çalışmak ister misiniz? Aşağıdaki iletişim bilgilerini kullanarak benimle iletişime geçebilirsiniz.
            </p>
            
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/iletisim" className="btn btn-primary">
                İletişim Formu
              </Link>
              <a href="mailto:info@ahmetkarabacak.com" className="btn btn-outline">
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 