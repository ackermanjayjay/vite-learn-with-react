import { Counter } from "../utils/StateLearn"
import { Bio } from "../utils/Home"
export const PagesHome=()=> {
       const listBio= Bio.map((Bios =>
        <div key={Bios.id}>
            <li>{Bios.Age}</li>
            <br />
           <li> {Bios.Name}</li>
           <br />
            <Counter/>
        </div>
    ))
    return listBio
}
