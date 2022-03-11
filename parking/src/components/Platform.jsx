import { Parkinglot } from "./ParkingLots";
import "./style.css"

export const Platform=()=>{
    let arr=[1,2,3,4];
    let car=[10,20,30,40];
    let bus=[13,57,30,45];
    let bike=[23,45,67,12];
    return <div>
        <h1>Platform</h1>

        <div>
            
        </div>

        <div className="platformbox">
            {
                arr.map((e)=>
                <Parkinglot key={e} cars={car[e-1]} buses={bus[e-1]} bikes={bike[e-1]}/>
                )
            }
        </div>
    </div>
}