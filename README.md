# Furnace Builder — Печной калькулятор

Приложение для проектирования кирпичной кладки печей. Позволяет рисовать ряды кирпичей в 2D-редакторе и просматривать результат в 3D.

![screenshot](screenshot.png)

## Возможности

- 2D-редактор рядов с сеткой (1 кирпич = 4 ячейки)
- Типы кирпичей: Ложок, Тычок, 3/4, 1/2, Отверстие, На ребро
- 3D-просмотр с тенями и имитацией цементных швов
- Горячие клавиши: стрелки для следующего кирпича, Right Ctrl — Ложок ↔ Тычок
- Подсчёт расхода кирпичей по типам
- Экспорт каждого ряда в PNG
- Сохранение/загрузка проекта в JSON

---

## Запуск на Linux (веб-версия)

### Требования

- [Node.js](https://nodejs.org) 18+
- npm

### Установка и запуск

```bash
git clone https://github.com/Korsakaa/furnace-builder.git
cd furnace-builder
npm install
npm run dev
```

Открыть в браузере: **http://localhost:5173**

### Сборка статических файлов

```bash
npm run build
```

Готовые файлы появятся в папке `dist/` — можно открыть напрямую или положить на любой веб-сервер.

---

## Сборка под Windows (.exe)

### Вариант 1 — автоматически через GitHub Actions

При каждом `git push` в ветку `main` GitHub автоматически собирает Windows-установщик.

1. Внести изменения в код
2. Запушить:
   ```bash
   git add .
   git commit -m "описание изменений"
   git push
   ```
3. Зайти на вкладку **Actions** на GitHub
4. Дождаться завершения билда (5–7 минут)
5. Скачать артефакт **furnace-builder-windows** → внутри `.exe` установщик

### Вариант 2 — вручную на Windows-машине

#### Требования

- [Node.js](https://nodejs.org) 18+ (LTS)
- [Rust](https://rustup.rs) (stable)
- Microsoft C++ Build Tools (Visual Studio Installer → «Desktop development with C++»)
- Windows 10/11 (WebView2 встроен)

#### Сборка

```cmd
git clone https://github.com/Korsakaa/furnace-builder.git
cd furnace-builder
npm install
npm run tauri:build
```

Установщик будет в:
```
src-tauri\target\release\bundle\nsis\furnace-builder_0.1.0_x64-setup.exe
```

---

## Горячие клавиши

| Клавиша | Действие |
|---------|----------|
| `→` `←` `↑` `↓` | Поставить следующий кирпич в направлении |
| `Right Ctrl` | Переключить Ложок ↔ Тычок |
| `ПКМ` (правая кнопка мыши) | Стереть кирпич |

---

## Структура проекта

```
furnace-builder/
├── src/
│   ├── app.ts          # главный контроллер
│   ├── model.ts        # модель данных
│   ├── gridEditor.ts   # 2D-редактор
│   ├── renderer3d.ts   # 3D-рендерер (Three.js)
│   └── main.ts         # точка входа
├── src-tauri/          # Tauri (десктоп-обёртка)
├── index.html
└── package.json
```

## Технологии

- [Vite](https://vitejs.dev) + TypeScript
- [Three.js](https://threejs.org) — 3D-рендеринг
- [Tauri 2](https://tauri.app) — десктоп-сборка для Windows
