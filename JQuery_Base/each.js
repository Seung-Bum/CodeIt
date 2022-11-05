// 객체을 선언
/*
var arr= [
    {title : 'daum', url : 'http://daum.net'},
    {title : 'naver', url : 'http://naver.com'}
];

// $.each() 메서드의 첫번째 매겨변수로 위에서 선언한 배열은 전달
$.each(arr, function (index, item) {
    // 두 번째 매개변수로는 콜백함수인데 콜백함수의 매개변수 중
    // 첫 번째 index는 배열의 인덱스 또는 객체의 키를 의미하고
    // 두 번째 매개 변수 item은 해당 인덱스나 키가 가진 값을 의미합니다.

    let result = '';
    result += index +' : ' + item.title + ', ' + item.url;

    // console.log(result);
    // 0 : 다음, http://daum.net
    // 1 : 네이버, http://naver.com
})
*/

var arr1= [
    {   
        title : 'daum', 
        url : 'http://daum.net',
        category : {topic : '정치', url : 'https://news.daum.net/politics#1'}
    },
    {   
        title : 'naver', 
        url : 'http://naver.com',
        category : {topic : '사회', url : 'https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%A0%95%EC%B9%https://search.naver.com/search.naver?sm=tab_hty.top&where=news&query=%EC%82%AC%ED%9A%8C&oquery=%EC%A0%95%EC%B9%98&tqi=h2TDNwp0J14ss7Cp9ANsssssspd-512147'}
    }
];

// 꼭 인자를 index와 item으로 할 필요는 없음
// category의 topic과 url의 value 가져오기
$.each(arr1, function (index, item) {
    let result = '';
    result += index +' : ' + item.title + ', ' + item.url;
    console.log(result);
    // 0 : daum, http://daum.net, [object Object]
    // 1 : naver, http://naver.com, [object Object]

    $.each(item.category, function(index, item) {
        // index에는 key 값이 들어간다고 생각하자
        let result1 = '';
        result1 += index +' : ' + item;
        console.log(result1);
    })
})
// 0 : daum, http://daum.net
// topic : 정치
// url : https://news.daum.net/politics#1

// 1 : naver, http://naver.com
// topic : 사회
// url : https://search.naver.com/search.naver?where=news&sm=tab_
// jum&query=%EC%A0%95%EC%B9%https://search.naver.com/search.naver?sm=tab_hty.
// top&where=news&query=%EC%82%AC%ED%9A%8C&oquery=%EC%A0%95%EC%B9%98&tqi=h2TDNwp0J14ss7Cp9ANsssssspd-512147