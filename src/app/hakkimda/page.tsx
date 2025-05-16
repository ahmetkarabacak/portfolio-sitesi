import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  // Örnek beceri verileri
  const skills = [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Tasarım", level: 80 },
  ];

  // Örnek eğitim verileri
  const education = [
    {
      degree: "Bilgisayar Mühendisliği Lisans",
      school: "İstanbul Teknik Üniversitesi",
      year: "2015 - 2019",
      description: "Bilgisayar bilimi temelleri, algoritma tasarımı, yazılım geliştirme ve veri yapıları üzerine kapsamlı eğitim aldım."
    },
    {
      degree: "Web Geliştirme ve Tasarım Sertifikası",
      school: "Udacity",
      year: "2018",
      description: "Modern web geliştirme teknolojileri, UI/UX prensipleri ve frontend uygulamaları konularında ileri düzey eğitim."
    }
  ];

  // Örnek deneyim verileri
  const experience = [
    {
      position: "Senior Frontend Developer",
      company: "XYZ Teknoloji",
      year: "2022 - Günümüz",
      description: "Kurumsal web uygulamalarının geliştirilmesi, UI/UX tasarımları, performans optimizasyonu ve teknik danışmanlık görevlerini yürütüyorum."
    },
    {
      position: "Frontend Developer",
      company: "ABC Dijital",
      year: "2019 - 2022",
      description: "E-ticaret platformları ve kurumsal web siteleri için modern, ölçeklenebilir ve kullanıcı dostu arayüzler tasarladım ve geliştirdim."
    },
    {
      position: "Web Geliştirme Stajyeri",
      company: "Tech Startup",
      year: "2018 - 2019",
      description: "Küçük ve orta ölçekli web projeleri geliştirerek pratik deneyim kazandım ve ekip çalışması becerilerimi geliştirdim."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="heading-1 mb-6">Hakkımda</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Frontend geliştirici ve UI/UX tasarımcı olarak, kullanıcı odaklı ve performanslı web deneyimleri oluşturmaya tutkuluyum. Modern teknolojileri kullanarak, kullanıcı beklentilerini aşan çözümler sunuyorum.
              </p>
            </div>
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80">
              <div className="h-full w-full rounded-full bg-primary-100 dark:bg-primary-900/20"></div>
              {/* Profil fotoğrafı ekleme yeri */}
              {/* <Image src="/images/profile.jpg" alt="Ahmet Karabacak" fill className="object-cover" /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2 mb-6">Merhaba, Ben Ahmet!</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>
                5 yıllık deneyimim ile frontend geliştirme ve UI/UX tasarım alanlarında uzmanlık sahibiyim. İstanbul Teknik Üniversitesi Bilgisayar Mühendisliği bölümünden mezun olduktan sonra, kariyerime çeşitli web projeleri geliştirerek başladım.
              </p>
              <p>
                React, Next.js ve TypeScript gibi modern teknolojileri kullanarak, performanslı, ölçeklenebilir ve kullanıcı dostu web uygulamaları geliştiriyorum. Temiz kod yazmaya, en iyi uygulamaları takip etmeye ve sürekli kendimi geliştirmeye özen gösteriyorum.
              </p>
              <p>
                Geliştirdiğim projelerde kullanıcı deneyimini merkeze alarak, hem görsel açıdan etkileyici hem de fonksiyonel açıdan güçlü arayüzler tasarlamaya önem veriyorum. Responsive tasarım, erişilebilirlik ve performans optimizasyonu her projemde odaklandığım temel konulardır.
              </p>
              <p>
                Boş zamanlarımda açık kaynak projelere katkıda bulunmayı, yeni teknolojileri öğrenmeyi ve web geliştirme topluluğu ile bilgi paylaşımında bulunmayı seviyorum. Ayrıca, fotoğrafçılık ve doğa yürüyüşleri ile ilgileniyorum.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="bg-gray-50 py-12 dark:bg-gray-800 md:py-24">
        <div className="container">
          <h2 className="heading-2 mb-12 text-center">Becerilerim</h2>
          
          <div className="mx-auto max-w-3xl space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div 
                    className="h-full rounded-full bg-primary-500 dark:bg-primary-400" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="heading-2 mb-12 text-center">İş Deneyimi</h2>
          
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200 before:content-[''] dark:before:bg-gray-700">
              {experience.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-0 mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-2.5 top-2.5 h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div className="ml-16 card p-6">
                    <div className="mb-2 flex flex-wrap items-center justify-between">
                      <h3 className="heading-4">{exp.position}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.year}</span>
                    </div>
                    <h4 className="mb-3 text-gray-700 dark:text-gray-300">{exp.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="bg-gray-50 py-12 dark:bg-gray-800 md:py-24">
        <div className="container">
          <h2 className="heading-2 mb-12 text-center">Eğitim</h2>
          
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200 before:content-[''] dark:before:bg-gray-700">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-0 mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-2.5 top-2.5 h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div className="ml-16 card p-6">
                    <div className="mb-2 flex flex-wrap items-center justify-between">
                      <h3 className="heading-4">{edu.degree}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</span>
                    </div>
                    <h4 className="mb-3 text-gray-700 dark:text-gray-300">{edu.school}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Interests Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="heading-2 mb-12 text-center">İlgi Alanlarım</h2>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="card p-6 text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mt-4 h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <h3 className="heading-4 mb-2">Fotoğrafçılık</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Doğa ve şehir manzaralarının fotoğraflarını çekmeyi seviyorum.
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mt-4 h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <h3 className="heading-4 mb-2">Seyahat</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yeni yerler keşfetmek ve farklı kültürleri tanımak benim için ilham kaynağı.
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mt-4 h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="heading-4 mb-2">Okumak</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bilim kurgu, teknik kitaplar ve kişisel gelişim kitapları okumayı seviyorum.
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mt-4 h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-.244l.943-1.32a1.125 1.125 0 00-.426-1.608L14.133 4.8a1.125 1.125 0 00-1.298-.21l-.153.076a1.125 1.125 0 01-1.006-.622l-.085-.171a1.125 1.125 0 010-1.591L13.178.309a1.125 1.125 0 011.591 0l.34.34c.21.21.497.33.795.33H16c.426 0 .815-.24 1.006-.622l.076-.153a1.125 1.125 0 01.21-1.298L17.75 2.245a1.125 1.125 0 011.591 0l.34.34a1.125 1.125 0 011.591 0l.34.34c.33.33.85.365 1.227.102l.34-.236a1.125 1.125 0 011.449.12l.12.12c.33.33.365.85.102 1.227l-.236.34a1.125 1.125 0 00.12 1.449l.12.12a1.125 1.125 0 011.591 0l.34.34a1.125 1.125 0 010 1.591l-.34.34a1.125 1.125 0 01-1.591 0l-.12-.12a1.125 1.125 0 00-1.227-.102l-.34.236a1.125 1.125 0 01-1.449-.12l-.12-.12a1.125 1.125 0 01-.102-1.227l.236-.34a1.125 1.125 0 00-.12-1.449l-.12-.12a1.125 1.125 0 00-1.591 0l-.34.34a1.125 1.125 0 01-1.591 0l-.34-.34a1.125 1.125 0 00-1.591 0l-.34.34a1.125 1.125 0 01-1.591 0zM4.5 5.775c0 .254.168.478.41.562l1.98.683a1.125 1.125 0 01.76 1.057v.37c0 .212-.034.378-.109.501a.96.96 0 01-.345.327l-.288.16c-.145.082-.24.248-.24.435v.512c0 .187.095.353.24.435l.29.16a.96.96 0 01.344.328c.075.123.109.288.109.5v.376c0 .54-.33 1.018-.76 1.056l-1.98.683a.562.562 0 01-.41-.562V5.775z" />
                  </svg>
                </div>
                <h3 className="heading-4 mb-2">Doğa Yürüyüşü</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Hafta sonları doğada yürüyüş yapmak ve kamp kurmak beni yeniliyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-primary-50 py-16 dark:bg-primary-900/10">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Benimle Çalışmak İster Misiniz?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Proje fikirlerinizi hayata geçirmek veya işbirliği yapmak için benimle iletişime geçebilirsiniz. Size yardımcı olmaktan mutluluk duyarım.
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