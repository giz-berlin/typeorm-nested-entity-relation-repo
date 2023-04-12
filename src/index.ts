import { AppDataSource } from "./data-source"
import { A } from "./entity/A"
import { B } from "./entity/B"
import { C } from "./entity/C"


const f = () => {
    AppDataSource.initialize().then(async () => {
        debugger
        const aEntity = new A()
        aEntity.b = new B()
        aEntity.b.cs = [ new C() ]
        await AppDataSource.manager.save(aEntity)
        console.log('successfully saved entity')
    
        const fetchedA = await AppDataSource.manager.find(A);
        console.log(fetchedA)
    }).catch(error => console.log(error))
}

setTimeout(f, 5000);
