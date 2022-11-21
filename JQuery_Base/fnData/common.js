$.fn.extend({

    // $.fn.extend
    // 아래 함수들은 단독사용이 안되는듯함
    // jQuery.fn.extend() 는 jQuery 를 확장 즉 커스터마이징 한다는 뜻이다.
    // jQuery 의 기본 함수에 추가하는 내가 쓰고자 하는 함수를 넣어서 확장시킬 수 있다.

    valid : function(tests) {

        var numInput = document.getElementById('num').value
        var charInput = document.getElementById('char').value
        var inputArr = [numInput, charInput]
        
        tests.forEach(function(test, index){       
            
            if (Array.isArray(test)) { // 배열이 맞다면
                var testTerm = test[0] // 정규식(data-valid)
                alert("정규식 : " + testTerm);

                var exceptionMessage = test[1] // 정규식이 틀릴 경우 보여줄 검증 실패 메시지
                
                // _.isRegExp(testTerm) 정규식인지 확인하는 부분이 안먹힘
                // 배열의 첫번째요소가 정규식이 아니거나 정규식 테스트 실패한 경우에
                // exception에 검증실패 메시지를 세팅한 후 throw한다.
                if( !(testTerm.test(inputArr[index])) ) { // 정규식 검증을 통과하지 못하면 false가 나온다.
                    alert(exceptionMessage);
                    throw {exceptionMessage : exceptionMessage};
                } else {
                    alert("입력값은 : " + inputArr[index] + " - 정상적으로 입력하셨습니다.");
                }
            
            } else {
                throw {exceptionMessage : "스크립트 오류 ", input :$input};
            }
        }, this);
    },
    

    // validFormNow 함수를 추가한듯함
    validFormNow : function() {
        var $this = $(this); // #searchForm
        $this.find(':input').each(function(idx, el){// input여러개임(숫자,문자)
            
            // eval
            // 문자로 표현된 JavaScript 코드를 실행
            var validData = eval($(el).data("valid"));

            console.log($(el).data("valid"));
            // [[/^[\d]{4,4}$/,'네자리 숫자를 입력해주세요']]
            // [[/^.{3,8}$/,'3글자에서 8글자사이로 입력해주세요']]

            if(validData != ""){
                try{
                    $this.valid.call(el, validDate); 
                    // valid 함수로 this 들어감??
                    
                } catch (e) {
                    //정규식 검증 실패한 경우 실패 메시지 alert
                    if(e.exceptionMessage){
                        alert(e.exceptionMessage);
                        $(el).focus();
                        return false;
                    }
                }
            }
        });
        return true;
    }
})