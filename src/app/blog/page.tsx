import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

// Örnek blog yazıları
const blogPosts = [
  {
    id: 1,
    title: "Modern Frontend Geliştirmenin İncelikleri",
    slug: "modern-frontend-gelistirmenin-incelikleri",
    excerpt:
      "Günümüz web geliştirme dünyasında frontend teknolojilerinin evrimi ve modern yaklaşımlar hakkında kapsamlı bir inceleme.",
    date: "15 Ocak 2024",
    author: "Ahmet Karabacak",
    category: "Web Geliştirme",
    tags: ["React", "Frontend", "Web Geliştirme", "JavaScript"],
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "UI/UX Tasarımında Minimalist Yaklaşımlar",
    slug: "ui-ux-tasariminda-minimalist-yaklasimlar",
    excerpt:
      "Daha az ile daha fazlasını nasıl yapabilirsiniz? Minimalist tasarım prensiplerinin modern web sitelerindeki uygulamaları.",
    date: "28 Ocak 2024",
    author: "Ahmet Karabacak",
    category: "Tasarım",
    tags: ["UI", "UX", "Tasarım", "Minimalizm"],
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "Next.js ile Yüksek Performanslı Web Uygulamaları",
    slug: "nextjs-ile-yuksek-performansli-web-uygulamalari",
    excerpt:
      "Next.js'in sunduğu özellikler ve performans optimizasyonları ile web uygulamalarınızı nasıl hızlandırabilirsiniz?",
    date: "10 Şubat 2024",
    author: "Ahmet Karabacak",
    category: "Web Geliştirme",
    tags: ["Next.js", "React", "Performans", "SSR"],
    image: "/images/blog-3.jpg",
  },
  {
    id: 4,
    title: "Tailwind CSS ile Hızlı ve Etkili Web Tasarımı",
    slug: "tailwind-css-ile-hizli-ve-etkili-web-tasarimi",
    excerpt:
      "Utility-first CSS yaklaşımıyla Tailwind CSS'in web tasarımı süreçlerini nasıl hızlandırdığını ve verimliliği artırdığını keşfedin.",
    date: "22 Şubat 2024",
    author: "Ahmet Karabacak",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Tasarım", "Frontend"],
    image: "/images/blog-4.jpg",
  },
  {
    id: 5,
    title: "TypeScript ile Güvenli Frontend Geliştirme",
    slug: "typescript-ile-guvenli-frontend-gelistirme",
    excerpt:
      "TypeScript'in JavaScript projelerinize nasıl değer katabileceğini ve hata oranlarını nasıl azaltabileceğini öğrenin.",
    date: "5 Mart 2024",
    author: "Ahmet Karabacak",
    category: "JavaScript",
    tags: ["TypeScript", "JavaScript", "Frontend", "Güvenlik"],
    image: "/images/blog-5.jpg",
  },
  {
    id: 6,
    title: "Responsive Web Tasarımı: En İyi Uygulamalar",
    slug: "responsive-web-tasarimi-en-iyi-uygulamalar",
    excerpt:
      "Farklı ekran boyutlarında mükemmel görünen web siteleri oluşturmak için responsive tasarım teknikleri ve stratejileri.",
    date: "18 Mart 2024",
    author: "Ahmet Karabacak",
    category: "Tasarım",
    tags: ["Responsive", "CSS", "Mobil", "Tasarım"],
    image: "/images/blog-6.jpg",
  },
];

// Kategorileri çıkar
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function Blog() {
  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="container text-center">
          <h1 className="heading-1 mb-6">Blog</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Frontend geliştirme, tasarım ve web teknolojileri hakkında düşüncelerim, öğrendiklerim ve paylaşmak istediklerim.
          </p>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Blog Posts */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-12">
                {blogPosts.map((post) => (
                  <article key={post.id} className="card overflow-hidden">
                    <div className="relative h-56 bg-gray-200 dark:bg-gray-700">
                      {/* <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover" 
                      /> */}
                    </div>
                    <div className="p-6">
                      <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.category}</span>
                      </div>
                      <h2 className="heading-3 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mb-4 text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        Devamını Oku
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Search */}
              <div className="card mb-8 p-6">
                <h3 className="heading-4 mb-4">Arama</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Blog yazılarında ara..." 
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-primary-400 dark:focus:ring-primary-400" 
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="card mb-8 p-6">
                <h3 className="heading-4 mb-4">Kategoriler</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link 
                        href={`/blog/kategori/${category.toLowerCase()}`}
                        className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="card mb-8 p-6">
                <h3 className="heading-4 mb-4">Son Yazılar</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="flex items-start space-x-3">
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-md bg-gray-200 dark:bg-gray-700">
                        {/* <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="rounded-md object-cover" 
                        /> */}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">
                          <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                            {post.title}
                          </Link>
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="card p-6">
                <h3 className="heading-4 mb-4">Etiketler</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                    <Link 
                      key={tag} 
                      href={`/blog/etiket/${tag.toLowerCase()}`}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-primary-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/30 dark:hover:text-primary-300"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-primary-50 py-16 dark:bg-primary-900/10">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Bültenime Abone Olun</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Web geliştirme, tasarım ve güncel teknolojiler hakkındaki yazılarımdan haberdar olmak için e-posta bültenime kaydolun.
          </p>
          <div className="mx-auto flex max-w-md flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-primary-400 dark:focus:ring-primary-400" 
            />
            <button className="btn btn-primary">Abone Ol</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}