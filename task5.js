const menu = {

    dishes:[],
    
    addDish(dishId,dishName,dishPrice){
        for(let i=0;i<this.dishes.length;i++){
            if(this.dishes[i].id===dishId){
                this.dishes[i].count++;
                return;
            }
        }
        this.dishes.push({id:dishId,name:dishName,price:dishPrice,count:1});
    },
    removeDish(dishId){
        for(let i=0;i<this.dishes.length;i++){
            if(this.dishes[i].id===dishId){
                if(this.dishes[i].count>1){
                    this.dishes[i].count--;
                }
                else{
                    this.dishes.splice(i,1);
                }
            }
            
        }

    },
    listDishes(){
        this.dishes.forEach(dish=>{
            console.log(`id:${dish.id} name:${dish.name} price:${dish.price} count:${dish.count}`);
        })
    }
}

