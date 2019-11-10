function getPosTop(i,j){
	return 20 + i*120;
}

function getPosLeft(i,j){
	return 20 + j*120;
}

// 设置不同数值的背景色
function getNumberBackgroundColor(number){
	switch(number){
		case 2:return "#eee4da";break;
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;
		default: return "black"
	}
}


// 设置不同数值的字的颜色
function getNumberColor(number){
	if(number <= 4){
		return "#776e65";
	}else{
		return "white";
	}
}

// 判断棋盘格上是否还有空间
function nospace(board){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j] == 0){
				return false;//还有空间
			}
		}
	}

	return true;
}




// 判断是否有障碍物   判断左右的
function noBlockHorizontal(row,col1,col2,board){
	for(var m= col1+1;m <col2;m++ ){ //m表示的是列
		if(board[row][m] != 0){ //此时该位置有数字，即有障碍物
			return false;
		}
	}

	return true;//一定要放到for循环外面
}

// 判断上下的 判断是否有障碍物   
function noBlockTop(cel,row1,row2,board){
	for(var n= row1+1;n <row2;n++ ){ //n表示的是行
		if(board[n][cel] != 0){ //此时该位置有数字，即有障碍物
			return false;
		}
	}

	return true;//一定要放到for循环外面
}


// 判断数字是否能向左移动
function canMoveLeft(board){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j] != 0){
				if(board[i][j-1] == 0 || board[i][j-1] == board[i][j]){
					return true;
				}	
			}
		}
	}
	return false;
}

// 判断数字是否能向右移动
function canMoveRight(board){
	for(var i=0;i<4;i++){
		for(var j=0;j<3;j++){
			if(board[i][j] != 0){
				if(board[i][j+1] == 0 || board[i][j+1] == board[i][j]){
					return true;
				}	
			}
		}
	}
	return false;
}


// 判断数字是否能向上移动
function canMoveTop(board){
	for(var i=1;i<4;i++){  //行数从索引为1即第二行开始
		for(var j=0;j<4;j++){
			if(board[i][j] != 0){  //同列上一行为空，或相等则可以移动
				if(board[i-1][j] == 0 || board[i-1][j] == board[i][j]){
					return true;
				}	
			}
		}
	}
	return false;
}


// 判断数字是否能向下移动
function canMoveDown(board){
	for(var i=0;i<3;i++){  //行数只到第三行
		for(var j=0;j<4;j++){
			if(board[i][j] != 0){  //同列下一行为空，或相等则可以移动
				if(board[i+1][j] == 0 || board[i+1][j] == board[i][j]){
					return true;
				}	
			}
		}
	}
	return false;
}


// 判断是否还能移动
function nomove(board){
	if(canMoveLeft(board) || canMoveRight(board) || canMoveTop(board) || canMoveDown(board)){
		return false;
	}
	return true
}

// 判断相加之后，显示分数
function upDateScore(score){
	$("#score").text(score);
}
