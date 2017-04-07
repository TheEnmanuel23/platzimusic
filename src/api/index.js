import config from './config'

const { apikey } = config

const URL= `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apikey}&format=json`

export default function getArtists(country) {
	const url = URL.replace(':country', country)
	return fetch(url)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}
