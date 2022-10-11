window.onload = pageLoad;
var start = false;
function pageLoad()
{
	var clickbutton = document.getElementById("start");
	clickbutton.onclick = startGame;
}

function startGame()
{
	if(start == false)
	{
		start = true;
		let inputbox = document.getElementById("numbox").value;
		if(inputbox != "") // มีค่าถึงเล่นได้
		{
			alert("Ready");
			addBox();
			timeStart();
		}
		else 
		{
			alert("Please input number");
			start=false;
		}
	}
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK) ; 
	
	function timeCount(){
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		var allbox = document.querySelectorAll("#game-layer div");
		x.innerHTML = second; //ดูจากค่าข้างบนจ้า
		second--; //ทำให้เวลานับถอยหลัง
		
		if(allbox.length > 0 && x.innerHTML === "-1")
		{
			alert("Loser");
			clearScreen();
			x.innerHTML = "";
			start = false;
			clearInterval(timer);
			timer = null;
			document.getElementById("numbox").value = "";
		}
		else if (allbox.length == 0 && second != -1)
		{
			alert("WIN!!")
			clearScreen();
			x.innerHTML = "";
			start = false;
			clearInterval(timer);
			timer = null;
			document.getElementById("numbox").value = "";

		}
		
	}
}

function addBox()
{
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value ;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color"); //สีกล่อง
	for (var i =0; i<numbox;i++) //ลูปสร้างกล่องเรื่อยๆ
	{	
		
		var tempbox = document.createElement("div") ; //div คล้ายๆการสร้าง create empthy ใน unityเพื่อยัดใน GameObject
		var colorbox = document.createElement("div");
		tempbox.className = "square" ;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox); //tempbox เป็นเบบี๋

		colorbox.className = colorDrop.value;
		document.getElementById(tempbox.id).appendChild(colorbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function()
	{
		document.getElementById(box.id).remove();
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.getElementById("game-layer");
	
	while(allbox.firstChild) //จะทำจนกว่าเงื่อนไขนั้นจนกว่าจะตรงเงื่อนไขถึงจะหยุด
	{
		allbox.removeChild(allbox.lastChild);//ต้องวนลูปรันทีละกล่อง โดยการเอาล่าสุดออกและก็ลูปไปเรื่อยๆจนกว่าจะหมด
	}
}




