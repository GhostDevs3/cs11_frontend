async function FetchOfferData() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("accessToken")
                ? sessionStorage.getItem("accessToken")
                : localStorage.getItem("token"),
        },
    };
    const getOfferData = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/job/job-single/${sessionStorage.getItem("_id")}`,
                requestOptions
            );
            const data = await response.json();
            return data.data;
        } catch (error) {
         console.log(error.message);  
        }       
    };

    let offersData = await getOfferData();

    return offersData;
}

export default FetchOfferData;
