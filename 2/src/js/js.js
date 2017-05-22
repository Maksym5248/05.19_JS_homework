/*
 2. Написати клас ArrayWrapper.
 Це клас, який в конструктор приймає масив і надає наступні методи роботи з цим масивом:
 - generateRandom(itemsAmount) - генерує масив з випадкових чисел вказаної довжини
 - convertToString(delimeter) - обєднує всі елементи в строку розділені вказаним роздільником
 - getCount() - повертає кількість елементів
 - getSourceArray() - повертає копію масиву на базі якого він створений
 ? - initializeFrom(sourceArray) - !!!!!!!!!ініціалізується з переданого масиву!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 - remove(index) - видаляє елемент по індексу
 - add(item) - додає новий елемент
 - contains(target) - перевіряє чи такий елемедодає новий елементнт є
 - indexOf(item) - повертає індекс переданого елемента
 - getAllOccurences(item) - повертає масив індексів, під якими зустрічається переданий елемент

 */

function ArrayWrapper (arr){
    this.arr = arr;
    this.generateRandom = function (itemsAmount) {
            for (var i = 0; i < itemsAmount; i++ ){
               this.arr.push(Math.round(Math.random()*3));
            }
            return arr;
        };
    this.convertToString = function (delimeter) {
        var str;
        var sum = "";
        for (var i = 0; i < this.arr.length; i++ ){
            str = this.arr[i].toString();
            sum = sum + str + delimeter;
        }
        return sum;
    };
    this.getCount = function () {
        return this.arr.length;
    };
    this.getSourceArray = function(){
        return this.arr.slice();
    };
    ArrayWrapper.prototype.initializeFrom = function (sourceArray) {
        this.arr = sourceArray;
        return this.arr;
    };
    this.remove = function(index){
        return delete this.arr[index];
    };
    this.add = function(item){
        return this.arr.push(item);
    };
    this.contains = function(target){
        for (var i = 0; i <this.arr.length; i++){
            if (target){
                return true;
            } else {
                return false;
            }
        }
    };
    this.indexOf = function(item){
        return this.arr.lastIndexOf(item);
    };
    this.getAllOccurences = function(item){
        var index = this.arr.indexOf(item);
        var arr2 = [];

        while (index !== -1) {
            arr2.push(index);
            index = this.arr.indexOf(item, index + 1);
        }
        return arr2;
    };
}


var b = [];
var a = new ArrayWrapper(b);
