/*1.  3. Написати клас Point, яка приймає в конструктор дві точки - "х" та "у".
 Цей клас повинен мати наступні методи:
 - add(otherPoint) - додає координати другої точки і повертає нову точку (наприклад, var a=  new Point(10, 10); var b = new Point(5, 5), то результатом виклику a.add(b) буде Point(15, 15))
 - subtract(otherPoint) - аналогічно до add, але робить відніманняvar a=  new Point(10, 10)
 - getX() - повертає X
 - getY() - повертає Y
 - equals(otherPoint) - повертає true, якщо дві точки мають одинакові координати (var a = new Point(10, 10); var b = new Point(10, 10) -> a.equals(b) === true)
 - toString() -> Point{x=10, y=10} - переопреділяє метод так, щоб вивід був, як в прикладі
 - valueOf - повертає суму двох точок
 */


function Point (x, y) {
    this.x = x;
    this.y = y;

    Point.prototype.add = function(otherPoint) {
            var x = this.x + otherPoint.x;
            var y = this.y + otherPoint.y;
        return new Point(x, y);
    };
    Point.prototype.subtract = function(otherPoint) {
        var x = this.x - otherPoint.x;
        var y = this.y - otherPoint.y;
        return new Point(x, y);
    };
    Point.prototype.getX = function() {
        return this.x;
    };
    Point.prototype.getY = function() {
        return this.y;
    };
    Point.prototype.equals = function(otherPoint) {
        if (this.x == otherPoint.x & this.y == otherPoint.y) {
            return true;
        } else return false;
    };
    Point.prototype.toString = function() {
        var a = "Point{x=" + this.x + ", y=" + this.y + "}";
        return a;
    };
    Point.prototype.valueOf = function() {
        var a = this.x + this.y;
        return a;
    };
}
