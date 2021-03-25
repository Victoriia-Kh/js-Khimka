/*
    1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, 
    в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя 
    значения его координат, и повторно вызавая метод GetQuadrant.
*/

var Point = {
    x : 0,
    y: 0,
    GetQuadrant() {
        var qua = 'Точка 0; 0'
        if(this.x > 0 && this.y > 0){
            qua = 'I';
        }else if(this.x > 0 && this.y < 0){
            qua = 'IV';
        }else if(this.x < 0 && this.y < 0){
            qua = 'III';
        }else if(this.x < 0 && this.y > 0){
            qua = 'II';
        }
        alert(qua);
    }
};



// test 1
Point.x = 1;
Point.y = 1;

Point.GetQuadrant()

// test 2
Point.x = -1;
Point.y = 1;

Point.GetQuadrant()

// test 3
Point.x = -1;
Point.y = -1;

Point.GetQuadrant()

// test 4
Point.x = 1;
Point.y = -1;

Point.GetQuadrant()

// test 5
Point.x = 0;
Point.y = 0;

Point.GetQuadrant()