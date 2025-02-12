const express = require('express');
const qr = require('qrcode');

const app = express();
const port = 3000;

//EJS 설정
app.set('view engine', 'ejs');
app.set('views', './views');

//정적 파일 제공 (Bootstrap 활용)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//홈 페이지
app.get('/', (req, res) => {
    res.render('index', { qrCodeURL: null });
});

//QR 코드 생성 API
app.post('/generate', async (req, res) => {
    const {text} = req.body;
    if (!text) return res.redirect('/');

    try {
        const qrCodeURL = await qr.toDataURL(text);
        res.render('index', { qrCodeURL });
    } catch (err) {
        console.error(err);
        res.send('QR 코드 생성 중 오류가 발생했습니다.');
    }
});

//서버 실행
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});