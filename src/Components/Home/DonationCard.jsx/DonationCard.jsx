import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const DonationCard = ({donation}) => {
    
    const {id,picture,title,category} = donation

    return (
        <div>
            <Link to={`/donations/${id}`}>
            <div className={`card shadow-xl`}  style={{backgroundColor: `${donation.category_bg_color}40`, color: donation.category_bg_color}}>
                <img className="w-[370px] h-[194px] rounded-lg" src={picture}alt="Shoes" />
                <div className="card-body">
                    <div className="card-actions ">
                    <button className="btn" style={{ backgroundColor: `${donation.category_bg_color}40`, color: donation.category_bg_color}}>{category} </button>
                    </div>
                    <h2 className="card-title font-bold" >{title}</h2>
                    
                   
                </div>
            </div>
            </Link>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object
}

export default DonationCard;