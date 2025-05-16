# Sistem Desenleri: Ahmet Karabacak Kişisel Web Sitesi

## Sistem Mimarisi

### Genel Mimari Yaklaşım
Ahmet Karabacak'ın kişisel web sitesi, modern web standartlarına uygun, hızlı performans ve kolay bakım sağlayan bir mimari kullanılarak geliştirilmektedir. Tercih edilen yaklaşım, JAMstack (JavaScript, API ve Markup) mimarisidir. Bu, statik site oluşturma ile dinamik içerik entegrasyonunu birleştiren bir yaklaşımdır.

### Mimari Bileşenler
1. **Frontend Framework:** Next.js - React tabanlı, SEO dostu statik site oluşturma ve sunucu tarafı işleme yetenekleri
2. **Styling Çözümü:** Tailwind CSS - Hızlı geliştirme ve tutarlı tasarım için utility-first CSS framework
3. **İçerik Yönetimi:** Yerel markdown dosyaları veya gerekirse headless CMS entegrasyonu
4. **Barındırma:** Vercel - Next.js entegrasyonu için optimize edilmiş hosting çözümü
5. **Domain Yönetimi:** DNS ile entegre edilecek özel alan adı

### Mimari Kararlar
- **Statik Site Jeneratörü Kullanımı:** Hızlı yükleme süreleri, SEO optimizasyonu ve güvenlik avantajları için statik site yaklaşımı tercih edildi
- **Client-Side Rendering (CSR) vs Server-Side Rendering (SSR):** En iyi SEO sonuçları için SSR ve statik sayfa oluşturma kullanımı
- **Progressive Web App (PWA) Özellikleri:** İlerleyen aşamalarda hızlı yükleme ve çevrimdışı kullanım için PWA özelliklerinin eklenmesi planlanıyor

## Bileşen Diyagramları

### Sayfa Yapısı
```
Web Sitesi
│
├── Ortak Bileşenler
│   ├── Navigasyon
│   ├── Footer
│   └── SEO Bileşeni
│
├── Sayfalar
│   ├── Ana Sayfa
│   │   ├── Hero Bölümü
│   │   ├── Beceri Vitrini
│   │   └── Öne Çıkan Projeler
│   │
│   ├── Portföy
│   │   ├── Proje Listesi
│   │   └── Proje Detay Sayfaları
│   │
│   ├── Hakkında / Özgeçmiş
│   │   ├── Kişisel Bilgiler
│   │   ├── Deneyim Zaman Çizelgesi
│   │   └── Eğitim Geçmişi
│   │
│   ├── Blog (Opsiyonel)
│   │   ├── Blog Listesi
│   │   └── Blog Detay Sayfaları
│   │
│   └── İletişim
│       ├── İletişim Formu
│       └── Sosyal Bağlantılar
│
└── Yardımcı Bileşenler
    ├── UI Bileşenleri
    │   ├── Butonlar
    │   ├── Kartlar
    │   └── Bölümler
    │
    └── Fonksiyonel Bileşenler
        ├── Form Validasyonu
        ├── Animasyonlar
        └── Meta Bilgi Yönetimi
```

### Veri Akışı
```
Kullanıcı Etkileşimi
    │
    ▼
Web Sayfası (Next.js) ◄─────┐
    │                       │
    │                       │
    ▼                       │
Client-Side İşleme          │ Statik Üretim
    │                       │ (Build Time)
    │                       │
    ▼                       │
API Çağrıları (Gerekirse)   │
    │                       │
    ▼                       │
Veriler / İçerik ──────────┘
```

## Kullanılan Tasarım Desenleri

### 1. Bileşen Tabanlı Mimari
- **Açıklama:** UI, yeniden kullanılabilir ve bakımı kolay bileşenlere ayrılmıştır
- **Avantajlar:** Kod tekrarını önler, tutarlı UI, kolay bakım
- **Uygulama:** Her UI elementi (navigasyon, kartlar, bölümler) ayrı bir bileşen olarak geliştirilecek

### 2. Atomic Design Metodolojisi
- **Açıklama:** UI bileşenleri atomlar, moleküller, organizmalar, şablonlar ve sayfalar olarak hiyerarşik şekilde yapılandırılır
- **Avantajlar:** Tutarlı tasarım sistemi, ölçeklenebilir bileşen kütüphanesi
- **Uygulama:** Butonlar ve giriş alanları gibi temel atomlardan başlayarak daha karmaşık bileşenlere doğru yapılandırma

### 3. Container/Presentational Desen
- **Açıklama:** Veri işleme mantığı (container bileşenleri) görsel sunum bileşenlerinden (presentational) ayrılır
- **Avantajlar:** İlgilerin ayrılması, daha temiz kod, kolay test edilebilirlik
- **Uygulama:** Portföy projelerinin listelenmesi ve filtrelenmesi için kullanılacak

### 4. Responsive Design Deseni
- **Açıklama:** Web sitesi, farklı ekran boyutlarında ve cihazlarda düzgün çalışacak şekilde tasarlanır
- **Avantajlar:** Evrensel erişilebilirlik, daha geniş kullanıcı kitlesi
- **Uygulama:** Tailwind CSS ile mobile-first yaklaşım ve duyarlı tasarım prensipleri

## Entegrasyon Noktaları

### 1. Sosyal Medya Entegrasyonu
- **Amaç:** Profesyonel sosyal ağlarla bağlantı
- **Yöntem:** Doğrudan bağlantılar ve API entegrasyonu (GitHub, LinkedIn, Twitter)
- **Kapsam:** Profil linkleri, aktivite beslemeleri, paylaşım özellikleri

### 2. İletişim Formu İşleme
- **Amaç:** Ziyaretçilerden iletişim talebi almak
- **Yöntem:** Serverless fonksiyonlar veya form servisi (Formspree, Netlify Forms)
- **Kapsam:** Form validasyonu, spam koruması, e-posta bildirimleri

### 3. Analytics Entegrasyonu
- **Amaç:** Ziyaretçi davranışlarını izlemek ve analiz etmek
- **Yöntem:** Google Analytics veya Plausible gibi gizlilik odaklı analitik
- **Kapsam:** Sayfa görüntülemeleri, ziyaretçi demografisi, trafik kaynakları

### 4. Içerik Yönetim Sistemi (Opsiyonel)
- **Amaç:** İçerik güncellemelerini kolaylaştırmak
- **Yöntem:** Markdown dosyaları veya headless CMS (Contentful, Sanity)
- **Kapsam:** Portföy projeleri, blog yazıları, kişisel bilgiler

## Veri Akışı

### Statik Sayfa Oluşturma
1. İçerik kaynağından (markdown, CMS) veri alınır
2. Build sırasında sayfa şablonları ile birleştirilir
3. Optimize edilmiş statik HTML, CSS ve JS üretilir
4. Vercel gibi CDN üzerinden dağıtılır

### Dinamik İçerik İşleme
1. Client-side JavaScript veri gerektiğinde API'leri çağırır
2. Veri alınır ve client tarafında işlenir
3. React bileşenleri yeni verilerle yeniden render edilir
4. Kullanıcı arayüzü güncellenir

### Form İşleme
1. Kullanıcı form verisini girer
2. Client-side validasyon gerçekleştirilir
3. Veri API'ye gönderilir (serverless fonksiyon)
4. Sunucu yanıtı client'a döndürülür ve kullanıcıya bildirilir

### Blog/İçerik İşleme (Opsiyonel)
1. CMS'de içerik oluşturulur veya güncellenir
2. Build hook tetiklenir veya düzenli aralıklarla kontrol edilir
3. Yeni içerik ile site yeniden oluşturulur
4. Yeni statik sayfalar CDN üzerinden dağıtılır