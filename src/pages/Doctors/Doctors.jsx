import DoctorCard from './../../components/Doctors/DoctorCard';
import {doctors} from'./../../assets/data/doctors';
import { Link } from 'react-router-dom';

const Doctors =()=> {

return(

<>

<section className="bg-[#fff] flex items-center">


<div className="flex items-center mx-auto ">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>


</section>



<section>
<div className="container">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">


{doctors.map((doctor,index)=> (

<DoctorCard key={doctor.id} doctor={doctor} id={doctor.id} />
))}
</div>

</div>


</section>
<section>
  
</section>
</>
);
};



export default Doctors;