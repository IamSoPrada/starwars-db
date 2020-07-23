export default class SwapiSrvice {
	_apibase = "https://swapi.dev/api"
	async getResource(url){
	const res = await fetch(`${this._apibase}${url}`);
	if(!res.ok){
		throw new Error(`Could not fetch, recieved ${res.status}`)
	}
	return await res.json();
	}

	async getAllPeople(){
		const res = await this.getResource(`/people/`);
		return res.results;
	}
	async getPerson(id){
		return await this.getResource(`/people/${id}`);
	}
	async getAllPlanets(){
		const res = await this.getResource(`/planets/`);
		return res.results;
	}
	async getPlanet(id){
		return await this.getResource(`/planets/${id}`);
	}
	async getAllStarShips(){
		const res = await this.getResource(`/starships/`);
		return res.results;
	}
	async getStarShip(id){
		return await this.getResource(`/starships/${id}`);
	}
}

const swapi = new SwapiSrvice();

swapi.getAllPeople()
	.then((people) =>{
		people.forEach(p => {
			console.log(p.name)
		});
		
	})

swapi.getPerson(6)
	.then((p)=>{
		console.log(p.name);
	})

