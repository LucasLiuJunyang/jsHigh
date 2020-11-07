var that;
class Tab{
    constructor(id) {
        that=this
        this.tab = document.querySelector(id)
        this.lis = this.tab.querySelectorAll('li')
        this.secition = this.tab.querySelectorAll('secition')
        this.init()
    }
    init() {
        for (var i = 1; i < this.lis.length; i++){
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
        }
    }
    toggleTab() {
        for (var i = 0; i < that.lis.length; i++){
            that.lis[i].className = ''
            that.secitions[i].className = ''     
        }
        this.className = 'liactive'
        that.secitions[this.index].className='conactive'
    }
}
new Tab('#tab')