# QR 코드 생성기

간단한 QR 코드 생성 웹 앱입니다. 사용자가 입력한 텍스트 또는 URL을 QR 코드로 변환할 수 있습니다.

## 🚀 프로젝트 개요
- **기술 스택**: Node.js, Express, EJS, QRCode, Bootstrap
- **기능**
  - 사용자가 입력한 텍스트를 QR 코드로 변환
  - 생성된 QR 코드 다운로드
  - Express 기반의 QR 코드 생성 API 제공
  - Bootstrap을 활용한 UI 디자인

---

## 📌 설치 및 실행 방법

### 1️⃣ **프로젝트 클론**
```bash
git clone https://github.com/cosmicpotato2047/qr-generator.git
cd qr-generator
```

### 2️⃣ **필요한 패키지 설치**
```bash
npm install
```

### 3️⃣ **서버 실행**
```bash
node app.js
```
또는 개발 환경에서 자동 리로딩을 위해:
```bash
npx nodemon app.js
```

### 4️⃣ **웹 앱 접속**
브라우저에서 http://localhost:3000에 접속하면 QR 코드 생성기를 사용할 수 있습니다.

## 🛠 프로젝트 구조
```plaintext
qr-generator/
│── screenshots/   # UI 스크린샵샵
│── views/         # EJS 템플릿 파일
│── app.js         # Express 서버 설정
│── package.json   # 프로젝트 정보 및 의존성
│── README.md      # 프로젝트 설명
```
## 🎨 UI 미리보기
![UI 미리보기](./screenshots/screenshot01.png)

## 📡 API 사용법
서버에서 QR 코드를 생성하는 API도 제공합니다.

## 📌 QR 코드 생성 API
Endpoint: POST /generate

Request Body
```json
{
  "text": "https://example.com"
}
```
Response

성공 시:
```json
{
  "qrCodeURL": "data:image/png;base64,..."
}
```
오류 발생 시:
```json
{
  "error": "QR 코드 생성 중 오류가 발생했습니다."
}
```