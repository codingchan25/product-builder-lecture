// 추천할 점심 메뉴 리스트
const menus = [
    '김치찌개', '된장찌개', '돈까스', '제육볶음', '짜장면',
    '짬뽕', '햄버거', '초밥', '냉면', '순대국밥',
    '비빔밥', '마라탕', '샐러드', '우동', '떡볶이',
    '샌드위치', '피자', '파스타', '뼈해장국', '칼국수',
    '쌀국수', '카레', '육회비빔밥', '찜닭', '부대찌개'
];

function recommendMenu() {
    const resultDiv = document.getElementById('result');
    
    // 살짝 고민하는 듯한 효과 주기
    resultDiv.style.color = '#7f8c8d';
    resultDiv.innerText = '음... 고민 중... 💭';
    
    // 0.6초 뒤에 결과 보여주기
    setTimeout(() => {
        // 0부터 메뉴 개수 사이의 랜덤한 숫자 생성
        const randomIndex = Math.floor(Math.random() * menus.length);
        
        // 결과 화면에 출력
        resultDiv.style.color = '#e74c3c';
        resultDiv.innerText = `"${menus[randomIndex]}" 어때요? 😋`;
    }, 600); 
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 테마 변경 버튼 클릭 이벤트
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // 테마 설정 저장
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

// 페이지 로드 시 저장된 테마 설정 불러오기
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
});
