## Mentor AI — Frontend

Ứng dụng frontend của dự án "Mentor AI" — nền tảng hỗ trợ kết nối, chat, và các tính năng hỗ trợ tuyển dụng/định hướng nghề nghiệp.

### Tính năng chính

- Giao diện người dùng React hiện đại (Vite + React).
- Hệ thống chat, quản lý cuộc trò chuyện.
- Module CV Matching: upload và so khớp CV/JD.
- Quản lý roadmap và pipeline cho người dùng.
- Sử dụng Redux Toolkit cho quản lý trạng thái.

### Yêu cầu trước khi cài

- Node.js (khuyến nghị >= 16)
- `yarn` hoặc `npm`

### Cài đặt nhanh

Clone repo:

```bash
git clone https://github.com/DucwTran/mentor-ai-fe.git
cd mentor-ai-fe
```

Cài dependencies:

```bash
yarn
# hoặc
npm install
```

Chạy ở chế độ development:

```bash
yarn dev
# hoặc
npm run dev
```


Lint và format:

```bash
yarn lint
yarn lint:fix
yarn prettier
yarn prettier:fix
```


### Cấu trúc thư mục chính

```
├── public
│   └── vite.svg
├── src
│   ├── apis
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AllRoute
│   │   │   ├── AllRoute.jsx
│   │   │   └── index.jsx
│   │   ├── CV-Matching
│   │   │   ├── ProcessUpload.jsx
│   │   │   ├── ResultMatching.jsx
│   │   │   ├── UploadCV.jsx
│   │   │   └── UploadJD.jsx
│   │   ├── Chats
│   │   │   ├── Message.jsx
│   │   │   └── UserChat.jsx
│   │   ├── FooterRegister
│   │   │   ├── FooterRegister.jsx
│   │   │   └── index.jsx
│   │   ├── Header
│   │   │   ├── Header.jsx
│   │   │   └── index.jsx
│   │   ├── HeaderRegister
│   │   │   ├── HeaderRegister.jsx
│   │   │   └── index.jsx
│   │   ├── Login
│   │   │   └── Input
│   │   │       ├── Input.jsx
│   │   │       └── index.jsx
│   │   ├── PrivateRoutes
│   │   │   ├── PrivateRoutes.jsx
│   │   │   └── index.jsx
│   │   └── Roadmap
│   │       ├── RoadmapForm.jsx
│   │       └── RoadmapPipeline.jsx
│   ├── customHooks
│   │   ├── useBoolean.js
│   │   ├── useDebounce.js
│   │   └── useThrottle.js
│   ├── layouts
│   │   ├── MainLayout
│   │   │   ├── MainLayout.jsx
│   │   │   ├── SideBar.jsx
│   │   │   └── index.jsx
│   │   └── RegisterLayout
│   │       ├── RegisterLayout.jsx
│   │       └── index.jsx
│   ├── pages
│   │   ├── Chat
│   │   │   ├── Chat.jsx
│   │   │   ├── ChatBox.jsx
│   │   │   ├── ListChat.jsx
│   │   │   └── index.jsx
│   │   ├── Cv-matching
│   │   │   ├── CVMatching.jsx
│   │   │   ├── MainContentCVMatching.jsx
│   │   │   └── index.jsx
│   │   ├── Home
│   │   │   ├── Home.jsx
│   │   │   ├── MainContentHome.jsx
│   │   │   └── index.jsx
│   │   ├── Login
│   │   │   ├── Login.jsx
│   │   │   └── index.jsx
│   │   ├── Logout
│   │   │   ├── Logout.jsx
│   │   │   └── index.jsx
│   │   ├── Regsiter
│   │   │   ├── Register.jsx
│   │   │   └── index.jsx
│   │   ├── Roadmap
│   │   │   ├── MainContentRoadmap.jsx
│   │   │   ├── Roadmap.jsx
│   │   │   └── index.jsx
│   │   └── Setting
│   │       ├── MainContentSetting.jsx
│   │       ├── Setting.jsx
│   │       ├── index.jsx
│   │       └── logoutAccount.jsx
│   ├── redux
│   ├── routes
│   │   └── index.jsx
│   ├── utils
│   │   ├── authorizeAxios.js
│   │   ├── getRamdomQuotes.js
│   │   └── quotes.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .editorconfig
├── .gitignore
├── .prettierignore
├── .prettierrc
├── README.md
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── vite.config.js
└── yarn.lock
```

