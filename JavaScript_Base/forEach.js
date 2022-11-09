// JavaScript Debug Terminal로 확인가능 
// 현재 파일의 위치에서 node 파일이름으로 실행

const food = ['🍖', '🍜', '🥡', '🍔', '🎂'];
food.forEach(function(ele, index) {
    console.log(ele, index);
});
/*
결과
🍖 0
🍜 1
🥡 2
🍔 3
🎂 4
*/

food.forEach((ele) => console.log(ele));
/*
🍖
🍜
🥡
🍔
🎂
*/

food.forEach((item, index, arr) => console.log(index + " : " + arr[index])); // 인자의 자리를 확인하자
/*
0 : 🍖
1 : 🍜
2 : 🥡
3 : 🍔
4 : 🎂
*/

// set에서 순회
// set 객체는 중복되지 않는 유일한 값들의 집합이다
// 동일한 값을 중복하여 포함할수 없다
// 요소 순서에 의미가 없다
// 인덱스로 요소에 접근할 수 없다
const set = new Set([1, 2, 3]);
set.forEach((item) => console.log(item)); // 1 2 3

// 이터러블인 Set 객체는 for...of 문으로 순회할 수 있다.
for (const value of set) {
    console.log(value); // 1 2 3
}

// map에서 순회
// map 객체는 키와 값의 쌍으로 이루어진 컬렉션이다.
// map은 객체를 포함한 모든 값을 키로 사용할 수 있다.
// 객체는 이터러블이 아니지만 map은 이터러블이다.
// 객체는 요소의 개수를 length로, map은 size메서드로 확인할 수 있다.
let map = new Map();
map.set('beer', '🍺');
map.set('wine', '🍷');

map.forEach ((value, key) => console.log("key: " + key + ", value: " + value));