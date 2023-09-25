const getStoredDonationItem = () => {
    const storedDonation = localStorage.getItem('donation');
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return []
}
const saveDonationItem = (idInt) => {
    const storedDonation = getStoredDonationItem();
    const exists = storedDonation.find(donationId => donationId === idInt)
    if(!exists) {
        storedDonation.push(idInt)
        localStorage.setItem('donation', JSON.stringify(storedDonation));
    }
}
export {getStoredDonationItem,saveDonationItem}