import Apartment from '../models/apartment';

export async function getApartmentsAsync(priceMin, priceMax, rentType = []) {
<<<<<<< HEAD
    let url = 'https://ak.api.onliner.by/search/apartments?currency=usd&bounds%5Blb%5D%5Blat%5D=53.77793497204605&bounds%5Blb%5D%5Blong%5D=27.38754272460938&bounds%5Brt%5D%5Blat%5D=54.0239066230473&bounds%5Brt%5D%5Blong%5D=27.73086547851563&page=1&_=0.9482241707756398';
    url += `&price%5Bmin%5D=${priceMin}`;
    url += `&price%5Bmax%5D=${priceMax}`;

    for (let room of rentType) {
        url += `&rent_type%5B%5D=${room}`;
    }

    const response = await fetch(url);
    const responseJson = await response.json();

    return responseJson.data.apartments.map(item => new Apartment(item));
=======
	let url = 'https://ak.api.onliner.by/search/apartments?currency=usd&bounds%5Blb%5D%5Blat%5D=53.77793497204605&bounds%5Blb%5D%5Blong%5D=27.38754272460938&bounds%5Brt%5D%5Blat%5D=54.0239066230473&bounds%5Brt%5D%5Blong%5D=27.73086547851563&page=1&_=0.9482241707756398';
	url += `&price%5Bmin%5D=${priceMin}`;
	url += `&price%5Bmax%5D=${priceMax}`;

	for (let room of rentType) {
		url += `&rent_type%5B%5D=${room}`;
	}

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	const responseJson = await response.json();
	return responseJson.apartments.map(item => new Apartment(item));
>>>>>>> 5a1397563379196182fd84533bb36e01d9c573a1
}