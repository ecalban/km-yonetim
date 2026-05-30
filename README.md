# Payitaht Akademisi

React + Vite + TypeScript ile hazırlanmış, tamamen tarayıcıda çalışan KPSS Osmanlı Kültür ve Medeniyeti öğrenme oyunu.

## Kurulum

```bash
npm install
```

## Çalıştırma

```bash
npm run dev
```

Vite çıktısında görünen yerel adresi tarayıcıda açın. Varsayılan adres genellikle `http://localhost:5173` olur.
GitHub Pages yolu tanımlı olduğu için uygulama yerelde genellikle şu adreste açılır:

```text
http://localhost:5173/km-yonetim/
```

## Build

```bash
npm run build
```

## GitHub Pages

Bu proje `https://ecalban.github.io/km-yonetim/` adresinde çalışacak şekilde ayarlanmıştır.

1. GitHub deposunda `Settings > Pages` bölümüne girin.
2. `Build and deployment` kaynağını `GitHub Actions` yapın. Bu ayar ilk deploy'dan önce yapılmazsa workflow `Setup Pages` adımında durur.
3. Projeyi `main` branch'e push edin.
4. Deploy bitince uygulama iPhone'dan şu adreste açılır:

```text
https://ecalban.github.io/km-yonetim/
```

## Not Kaynağı

Oyun verileri `notes/osmanli-devlet-yonetimi.txt` dosyasındaki notlardan türetilmiştir. Uygulama backend kullanmaz; ilerleme, yanlışlar, XP ve streak bilgileri tarayıcı `localStorage` alanında saklanır.
