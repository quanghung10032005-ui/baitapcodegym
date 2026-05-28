class Student{
    constructor (name,age){
        this.name=name;
        this.age=age;
        this.math=0;
        this.physics=0;
        this.chemistry=0;
    }
    setPoint(math,physics,chemistry){
        this.math=math;
        this.physics=physics;
        this.chemistry=chemistry;
    }
    getSum(){
        return this.math+this.physics+this.chemistry;
    }
}