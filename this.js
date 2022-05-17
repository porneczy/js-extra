console.log(this)

const user = {
    name: "néév",
    getName: function(){
        console.log(this.name);
        (function(){
            console.dir(this)
            
        })()
        const af = () => {
            console.dir(this.name)
        }
        af()
    }
}
const ugn = user.getName 
ugn()