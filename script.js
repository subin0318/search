function update() {
    const selectElement = document.getElementById("search_select");
    const selectedValue = selectElement.value; // 선택된 값 가져오기
    const outputElement = document.getElementById("output");
    const changimg = document.getElementById("serchimg"); // 이미지 요소 가져오기
    // 선택된 값에 따라 텍스트 랑 이미지 변경
    switch (selectedValue) {
        case "google":
            outputElement.innerText = "구글";
            changimg.src="./serchimg/google.png"
            changimg.width= 150;
            changimg.height= 40;
            changimg.style.position = "relative"; // Set position to absolute
            changimg.style.left = "690px"; // Set the left position
            changimg.style.top = "175px";  // Set the top position
          
            break;
        case "naver":
            outputElement.innerText = "네이버";
            changimg.src="./serchimg/naver.png"
    
            break;
        
        case "youtube":
            outputElement.innerText = "유튜브";
            changimg.src="./serchimg/youtube.png"
            changimg.width= 130;
            changimg.height= 55;
       
            break;
        case "daum":
            outputElement.innerText = "다음";
            changimg.src="./serchimg/daum.png"
           
            break;
        case "coupang":
            outputElement.innerText = "쿠팡";
            changimg.src="./serchimg/coupang.png"
  
            break;
        default:
            outputElement.innerText = "업데이트";
            break;

         
            
    }
}

      // 폼 제출 이벤트 처리
      document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault(); // 기본 폼 제출 동작 방지
        
        // 검색어 가져오기
        const query = document.getElementById("search-input").value;
        const selectedValue = document.getElementById("search_select").value;
        
        // 구글
        if (query.trim() !== ""  &&  selectedValue === "google") {
            // 구글 검색 URL로 새 탭에서 열기
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank'); // 새 탭에서 URL 열기
        } 
        
        // 네이버
        else if (query.trim() !== ""  &&  selectedValue === "naver") {
            // 구글 검색 URL로 새 탭에서 열기
            const searchUrl = `https://search.naver.com/search.naver?query=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank'); // 새 탭에서 URL 열기
        }
  
        // 유튜브
        else if (query.trim() !== ""  &&  selectedValue === "youtube") {
            // 구글 검색 URL로 새 탭에서 열기
            const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank'); // 새 탭에서 URL 열기
        }
        
        // 다음
        else if (query.trim() !== ""  &&  selectedValue === "daum") {
            // 구글 검색 URL로 새 탭에서 열기
            const searchUrl = `https://search.daum.net/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank'); // 새 탭에서 URL 열기
        }
        
        // 쿠팡
        else if (query.trim() !== ""  &&  selectedValue === "coupang") {
            // 구글 검색 URL로 새 탭에서 열기
            const searchUrl = `https://www.coupang.com/np/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank'); // 새 탭에서 URL 열기
        }
        
        
        else {
            alert("검색어를 입력하세요!");
        }
    });