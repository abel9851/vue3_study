// 버튼을 누르면, 사용자가 입력한 값이 리스트에 추가된다.
// 그럴려면 쿼리 셀렉터로 엘레멘트를 선택해서 수정해야한다.
// 필요한 쿼리 셀렉터는 3개.
// button, input, ul
// 순서 정리
// 1. 쿼리 셀렉터 생성
// 2. 버튼의 이벤트 리스너로 클릭을 감지.
// 3. 클릭했을 때 DOM을 변화시키도록 한다.
// 4. 변화 내용으로는, 버튼을 누르면, 사용자의 값을 취득한다.
// 5. 취득한 사용자의 값을 ul 안에 리스트로 넣는다. 정렬 리스트다.
// 6. 그럴려면 리스트를 생성해야한다.
// 7. 생성한 리스트에 사용자가 입력한 값을 넣는다.
// 8. 사용자가 입력한 값을 텍스트다.
// 9. 리스트에 텍스트를 넣는다.
// 10. 넣은 리스트를 ul 안에 추가한다.
// 11. 입력한 사용자의 값을 초기화 한다.

buttonEl = document.querySelector('button');
inputEl = document.querySelector('input');
listEl = document.querySelector('ul');

function addGoal () {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value = "";
};

buttonEl.addEventListener('click', addGoal);