# 📸 Asset Placement Guide — Buusha & Renuka Wedding Invite

Place your images in the correct folders under `public/assets/`.
The site works beautifully even without images (CSS fallbacks are built-in).
Images just make it even more stunning! ❤️

---

## 📁 Folder Structure

```
public/
├── assets/
│   ├── couple/          ← Real couple photos
│   ├── doodle/          ← Cartoon/illustration couple
│   ├── temple/          ← Temple / Gopuram images
│   ├── flowers/         ← Garlands & flowers
│   ├── banana/          ← Banana trees
│   ├── kolam/           ← Kolam patterns
│   └── backgrounds/     ← Wedding backgrounds & textures
└── audio/               ← Optional background music
```

---

## 🖼️ Image Mapping

### `/public/assets/couple/`
| File Name     | Which image from your collection         |
|---------------|------------------------------------------|
| `photo1.jpg`  | Couple photo in metro (orange saree)     |
| `photo2.jpg`  | Couple selfie at airport/mall            |
| `photo3.jpg`  | Outdoor photo (white shirt + blue dress) |

### `/public/assets/doodle/`
| File Name             | Which image                              |
|-----------------------|------------------------------------------|
| `couple-poses.png`    | 4-pose cartoon couple grid               |
| `couple-garland.png`  | Single cartoon couple with garlands      |

### `/public/assets/temple/`
| File Name                  | Which image                              |
|----------------------------|------------------------------------------|
| `temple-real.jpg`          | Real South Indian temple photo           |
| `temple-colorful.png`      | Colorful Gopuram illustration            |
| `temple-illustration.png`  | 3-panel temple illustration              |

### `/public/assets/flowers/`
| File Name              | Which image                              |
|------------------------|------------------------------------------|
| `garland-red-white.png`| Red & white jasmine garland              |
| `marigold-hanging.png` | Yellow marigold hanging strings          |

### `/public/assets/banana/`
| File Name          | Which image                              |
|--------------------|------------------------------------------|
| `banana-tree.png`  | Cartoon/illustration banana tree         |
| `banana-leaf.png`  | Banana leaf illustration (watercolor)    |

### `/public/assets/kolam/`
| File Name          | Which image                              |
|--------------------|------------------------------------------|
| `kolam-green.jpg`  | Green background kolam pattern           |
| `kolam-wall.jpg`   | Real wall kolam photograph               |

### `/public/assets/backgrounds/`
| File Name              | Which image                              |
|------------------------|------------------------------------------|
| `wedding-bg.jpg`       | South Indian wedding background          |
|                        | (mango leaves, bells, kolam pattern)     |
| `radha-krishna.jpg`    | Radha Krishna silhouette (pink/soft)     |

### `/public/audio/` (Optional)
| File Name          | Description                              |
|--------------------|------------------------------------------|
| `wedding-bg.mp3`   | Any soft Carnatic/wedding background     |
|                    | music. Site has a 🎵 toggle button.      |

---

## 🚀 How to Run

```bash
# Install (already done)
npm install

# Development server
npm run dev

# Visit: http://localhost:3000
# With guest name: http://localhost:3000?name=Arun

# Production build
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub → connect to Vercel → auto-deploy!

Share the link as: `https://your-site.vercel.app?name=Arun`

---

## 🎨 Customization

Edit `components/SaveDate.tsx` → change `May 2026` to actual month/year
Edit `components/LocationQR.tsx` → maps URL is already set
Edit any component → colors use Tailwind custom classes

---

Made with ❤️ for Buusha & Renuka
