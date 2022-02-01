let map = document.getElementsByClassName('map')[0] // getElementsByClassName은 배열을 리턴
let kitchenBlock = document.getElementsByClassName('kitchen-block')

// showTitle 함수를 완성해 주세요.
function showTitle(e) {
	const title = e.target.dataset.title;
	if (title != null) {
		
		if (title == "none") {
			return;
		}
		if (e.target.firstElementChild == undefined) {
			return;
		}
		if (e.target.firstElementChild != null) {
			e.target.firstElementChild.innerHTML = `<span class="title">${title}</span>`
		} else {
			e.target.innerHTML = `<span class="title">${title}</span>`
		}
		
	} else {
		return;
	}
}


map.addEventListener('click', switchTitle);

function switchTitle (e) {

	let removeTarget = e.target.firstElementChild;

	if (removeTarget.innerText != "") {
		console.log(removeTarget.innerText, ": 삭제실행")
		removeTarget.innerText = ""
	} else {
		console.log("생성실행")
		showTitle(e)
	} 

}



