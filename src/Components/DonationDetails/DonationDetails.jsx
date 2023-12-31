import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { saveDonationItem } from '../Utility/localstorage';

const DonationDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = details.find(donationDetails => donationDetails.id === idInt)

    const handleDonationBtn = () => {
       saveDonationItem(idInt)
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your Donation was successful.',
          });
    }
    return (
        <div className="my-16 container mx-auto">

            <div className='relative'>
            <img className='rounded-lg lg:w-[1536px] lg:h-[750px]'  src={donation.picture} alt="" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black opacity-50 h-32 container mx-auto">
                
            </div>
            <button onClick={ handleDonationBtn} className="btn text-white absolute -mt-20 mx-10" style={{backgroundColor: `${donation.category_bg_color}`}}>Donation {donation.price} $</button>
            <h2 className="text-4xl font-bold mt-14 mb-6">{donation.title}</h2>
            <h2 className="text-lg text-[#0B0B0BB2] text-opacity-50">{donation.description}</h2>
       
        </div>
    );
};

export default DonationDetails;