function Collection() {
    //class for creating collections of sprites

    //create the count property
    this.count = 0;
    //create the collection
    this.collection = {};

    //create the add method
    this.add = function (item) {
        //get the next available key value 
        var key = this.count;
        //add the item to the collection
        this.collection[key] = item;
        //update the count of items
        return ++this.count
    }

    //crate the remove method
    this.remove = function (key) {
        //delete the item specified by the parameter key
        delete this.collection[key]
        //update the count of items
        return --this.count
    }

    //allow access to items in the collection based on the key parameter
    this.item = function (key) {
        //return the object at position "key"
        return this.collection[key];
    }

    this.length = function (count) {
        return count;
    }
}