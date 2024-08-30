function solution(park, routes) {
    let start = [];
    const maxH = park.length;
    const maxW = park[0].length;
  
    let curX = 0;
    let curY = 0;
  
    // 시작 위치 찾기
    for (let i = 0; i < maxH; i++) {
      for (let j = 0; j < maxW; j++) {
        if (park[i][j] === "S") {
          start = [i, j];
          curX = i;
          curY = j;
        }
      }
    }
  
    for (let i = 0; i < routes.length; i++) {
      const tmp = routes[i].split(" ");
      const direction = tmp[0];
      const distance = parseInt(tmp[1]);
      
      let oriX = curX;
      let oriY = curY;
      let valid = true;
  
      // 경로 미리 탐색
      for (let j = 0; j < distance; j++) {
        switch (direction) {
          case "N":
            oriX -= 1;
            break;
          case "S":
            oriX += 1;
            break;
          case "E":
            oriY += 1;
            break;
          case "W":
            oriY -= 1;
            break;
        }
  
        // 범위를 벗어나거나 장애물을 만날 경우
        if (oriX < 0 || oriX >= maxH || oriY < 0 || oriY >= maxW || park[oriX][oriY] === "X") {
          valid = false;
          break;
        }
      }
  
      // 경로가 유효하면 최종 위치 업데이트
      if (valid) {
        curX = oriX;
        curY = oriY;
      }
    }
  
    return [curX, curY];
  }
  