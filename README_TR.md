# Goktug Parlak — Kişisel Portfolio

Bu klasör GitHub Pages'e doğrudan yayınlanabilen, harici paket veya ücretli servis gerektirmeyen kişisel portfolio web sitesidir. Site İngilizcedir. Kod: HTML + CSS + JavaScript.

## 1. Siteyi bilgisayarında görüntüle

Bu ZIP dosyasını çıkar. `index.html` dosyasına çift tıkla. Site tarayıcında açılır. Filtreleri, menüyü ve bütün proje bağlantılarını dene. Visual Studio Code kullanıyorsan klasörü VS Code ile açıp `index.html`, `styles.css` ve `script.js` dosyalarını düzenleyebilirsin.

## 2. Yeni GitHub repository oluştur

1. https://github.com/new adresine gir.
2. Repository name alanına **tam olarak** `goktugparlak.github.io` yaz.
3. **Public** seç.
4. İstersen README eklemeden oluştur; bu ZIP içinde ayrı bir Türkçe talimat dosyası var.
5. **Create repository** butonuna bas.

ÖNEMLİ: Repository adın GitHub kullanıcı adına özel bu isim olmalı; bu isim site adresini belirler.

## 3. Siteyi GitHub'a yükle (komutsuz yöntem)

1. Oluşturduğun repository'yi aç.
2. `Add file` → `Upload files` seç. Boş repository'de `uploading an existing file` seçeneği görünebilir.
3. ZIP dosyasını değil, ZIP'ten çıkardığın klasörün içindeki `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README_TR.md` ve `assets` klasöründeki dosyaları yükle. Dizin yapısı korunmalı: `assets/favicon.svg` ve `assets/social-preview.png`.
4. Sayfanın sonunda **Commit changes** butonuna bas. GitHub'ın yükleyicisi gizli `.nojekyll` dosyasını atlıyorsa sorun değil, bu site yine çalışır.

İpucu: `assets` klasörü GitHub'a yüklenirken dizin yolu korunmuyorsa önce ana dosyaları yükleyip, ayrı olarak `assets` klasörünü Web arayüzünde doğru yola ekleyebilirsin. Git komutlarıyla yüklemek daha garantilidir (aşağıdaki alternatif).

## 4. GitHub Pages'i aktif et

1. Repo > **Settings** > sol menü **Pages**.
2. **Build and deployment** > **Source**: `Deploy from a branch`.
3. **Branch**: `main`; folder: `/(root)`.
4. **Save**.
5. Yayınlandıktan sonra site: https://goktugparlak.github.io/

Github'a yükledikten sonra sitenin yayına girmesi birkaç dakika sürebilir. GitHub Pages ayarında "Visit site" düğmesini göreceksin.

## Git komutlarıyla yükleme (isteğe bağlı)

Git yüklüyse, bu klasörün içinde terminal aç:

```bash
git init
git branch -M main
git add .
git commit -m "Launch personal portfolio"
git remote add origin https://github.com/goktugparlak/goktugparlak.github.io.git
git push -u origin main
```

Repository'yi boş oluşturduysan bu yöntem sorunsuz çalışır. Repo önceden README dosyasıyla oluşturulmuşsa önce uzak repoyu klonlamak veya değişiklikleri birleştirmek gerekebilir. GitHub giriş/kimlik doğrulaması isteyebilir.

## 5. Başvuru formuna yazılacak link

Siten yayına girdikten ve açıldığını kontrol ettikten sonra:

`https://goktugparlak.github.io/`

**Site daha yayınlanmadan bu URL'yi aktif bir portfolio gibi paylaşma.**

## 6. Daha da güçlendirmek için

- Gerçek projelerden **kendi ekran görüntülerini** ekle. İlk tasarımda yer alan diyagramlar gerçek uygulama ekran görüntüsü iddiası taşımayan açıklayıcı tasarımlardır.
- Profesyonel fotoğraf kullanmak istersen kendi izin verdiğin fotoğrafı ekleyebiliriz.
- Onayladığın e-posta adresini Contact bölümüne `mailto:` linki olarak ekle.
- Mevcut güncel CV'ni `assets/resume.pdf` olarak eklersen sayfaya gerçek bir Download CV linki konabilir.
- Bir projeyi canlı olarak sunmak için o projenin backend'ini ayrıca host etmen gerekebilir. Buradaki GitHub Pages yalnızca **portfolionun statik sitesini** host eder; AI agent veya weather backend'ini çalıştırmaz.
- Eğitim bilgilerini ve proje sonuçlarını başvurmadan önce kontrol et.

## Dosyalar

- `index.html`: içerik, projeler, linkler, SEO
- `styles.css`: tasarım, responsive mobil/desktop görünüm
- `script.js`: proje filtreleri, mobil menü, sayfa ilerleme çizgisi
- `assets/favicon.svg`: sekme ikonu
- `assets/social-preview.png`: sosyal medyada link önizlemesi
- `.nojekyll`: GitHub Pages'in Jekyll işlemesini kapatır

## Kaynak projeler

- https://github.com/goktugparlak/ai-coding-agent
- https://github.com/goktugparlak/computer-vision-image-classifier
- https://github.com/goktugparlak/weather-dashboard
- https://github.com/goktugparlak/ai-tiktok-generator
- https://github.com/goktugparlak/study-task-tracker
