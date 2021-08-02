function mergeArray(arr, arr1){
    var result = [];
    var i = 0;
    var k = 0;
    while(i < arr.length && k < arr1.length){
        if(arr[i] < arr1[k]){
            result.push(arr[i]);
            i += 1;
        } else {
            result.push(arr1[k]);
            k += 1;
        };
    };
    while(i < arr.length){
        result.push(arr[i]);
        i += 1;
    }
    while(k < arr.length){
        result.push(arr1[k]);
        k += 1;
    }
    return result;
};

function returnMax(arra){
    if (arra.length <= 1) return arra;
    var middle = Math.floor(arra.length / 2);
    var left = returnMax(arra.slice(0, middle));
    var right = returnMax(arra.slice(middle), Math.floor(arra.length));
    console.log(left);
    console.log(right);
    return mergeArray(left, right);
};

function sortItems(array) {
	let swapped = true;
	do {
		swapped = false;
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return array;
}

function returnSomething(array){
    var list = sortItems(array);
    var number1 = list[0]
    var number2 = list[1]
    if((number2*2) > number1){
        return -1
    } else {
        return 3
    }
}

class Node {
    constructor(Value){
        this.Value = Value;
        this.next = null;
    };
};
class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    push(value){
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length +=1;
        return this.length;
    };
    pop(){
        if(this.length === 0){
            console.error("The length is: 0")
            return this.length;
        }else {
            if(this.length === 1){
                this.head = null;
                this.tail = null;
                this.length -=1;
                return this.length
            } else {
                var pre = this.head;
                var newTail = pre;
                while(pre.next){
                    newTail = pre;
                    pre = pre.next;
                };
                this.tail = newTail;
                this.tail.next = null;
                this.length -=1;
                return this.length;
            }
        }
    }
    FindMultipleValue(){
        var inserted = [];
        var toReturn = [];
        if(this.length === 0 ){
            return "HEAD IS NULL!!!"
        } else {
            if(this.length === 1){
                return this.head.Value;
            } else {
                var pre = this.head;
                var newTail = pre;
                while(pre.next){
                    newTail = pre;
                    pre = pre.next;
                    if(inserted.find(value=>this.VAlue===this.Value)){

                    } else {
                        toReturn.push(newTail.Value)
                        inserted.push(newTail.Value)
                    }
                };
                
            }
            if(this.length === 1){
                return this.head.Value;
            } else {
                var pre = this.head;
                var newTail = pre;
                if(inserted.find(newTail.Value)){

                } else {
                    toReturn.push(newTail.Value);
                    inserted.push(newTail.Value);
                    newTail = pre;
                    pre = pre.next;
                }
            }
        }
        return toReturn;
    }
    ReturnWithReverse(){
        var toReturn = []
        console.log(this.head.Value)
        if(this.length === 0){
            console.error("The length is: 0")
            return this.head.Value;
        }else {
            if(this.length === 1){
                return this.head.Value
            } else {
                var pre = this.head;
                var newTail = pre;
                while(pre.next){
                    newTail = pre;
                    pre = pre.next;
                    toReturn.push(newTail.Value)
                };
                
            }
        }
        return toReturn.reverse();
    }
};

var linkedList = new SinglyLinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)