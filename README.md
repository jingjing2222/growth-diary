# Growth Diary

당신의 성장과 학습 과정을 기록하는 간단한 다이어리 웹사이트입니다.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)

## 프로젝트 구조

```
.
├── public/              # Static assets (favicons, etc)
├── src/
│   ├── assets/         # Images and other assets
│   └── content/
│       └── docs/       # Markdown/MDX pages
├── astro.config.mjs    # Astro configuration
├── package.json
└── tsconfig.json
```

## 명령어

| 명령어 | 설명 |
| :--- | :--- |
| `pnpm install` | 의존성 설치 |
| `pnpm dev` | 개발 서버 시작 (`localhost:4321`) |
| `pnpm build` | 프로덕션 빌드 (`./dist/`) |
| `pnpm preview` | 빌드된 사이트 미리보기 |

## 시작하기

1. 새로운 `.md` 또는 `.mdx` 파일을 `src/content/docs/`에 추가합니다.
2. `astro.config.mjs`의 `sidebar`에서 네비게이션을 관리합니다.
3. 이미지는 `src/assets/`에 추가하고 Markdown에서 상대 경로로 참조합니다.
