const LinkedList=require('./LinkedList')
const SLL= new LinkedList()
function main(){
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('squirrel')
    SLL.insertAfter('Helo','Hi')
    console.log(SLL.insertAfter('Apollo','Hi'))
}
module.exports =main()