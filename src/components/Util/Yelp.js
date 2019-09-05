const apiKey = "NYi00cyrkiOZJi795uojSc7Bd0PgmqixdMtESUDTLXzT16xdcvPLYEFDzGoP9NaDWQH0eHGHK_9MypznJUw8a2H9NfRhTCYd1V-owkZWvLL4FSdxVbwz3jy3yNAyXXYx";

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: { Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        adress: business.location.adress1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                })
            };
        });
    }
};

export default Yelp;