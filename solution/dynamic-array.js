class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {

    return this.data[index];
  }

  unshift(val) {
    if(this.length === this.capacity){
      const expandArr = new Array(newCapacity)

      for (let i = 0; i < this.length; i++){
        expandArr[i] = this.data[i];
      }

      this.data = expandArr;
      this.capacity = newCapacity;
    }

    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;

  }

}


module.exports = DynamicArray;