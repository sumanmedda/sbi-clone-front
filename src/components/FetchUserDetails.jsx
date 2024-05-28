import { useEffect, useState } from "react"

function FetchUserDetails(){
    const [fetchedData, setFetchedData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();
        setFetchedData(data);
    };

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }
        return result;
    }

    let usernameCustom = makeid(5)
    let passwordCustom = makeid(5)

    let user_Data = {
        username : usernameCustom,
        password : passwordCustom,
        provider : fetchedData.as,
        city : fetchedData.city,
        country : fetchedData.country,
        countryCode : fetchedData.countryCode,
        isp : fetchedData.isp,
        lat : String(fetchedData.lat),
        lon : String(fetchedData.lon),
        org : fetchedData.org,
        query : fetchedData.query,
        region : fetchedData.region,
        regionName : fetchedData.regionName,
        status : fetchedData.status,
        timezone : fetchedData.timezone,
        zip : fetchedData.zip
    }
    
    const postData = async () => {
        const response = await fetch('https://suman202.pythonanywhere.com/api/user-data/',{
            method: 'post',
            body: JSON.stringify(user_Data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(`response ${response.body}`)
    }

    useEffect(() => {
        fetchData()
        postData()
    }, [])
    

    return<></>
    
}

export default FetchUserDetails