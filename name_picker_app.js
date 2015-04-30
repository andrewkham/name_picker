NBAteams = ["Celtics", "Nets", "Knicks", "76ers", "Raptors", "Bulls", "Cavaliers", "Pistons", "Pacers", "Bucks", "Hawks", "Hornets", "Heat", "Magic", "Wizards", "Warriors", "Clippers", "Lakers", "Suns", "Kings", "Mavericks", "Rockets", "Grizzlies", "Pelicans", "Spurs", "Nuggets", "Timberwolves", "Thunder", "Blazers", "Jazz"]
function NBAteam (){
	var pick = Math.floor(Math.random() * NBAteams.length)
	var namePicker = NBAteams[pick];
	console.log(namePicker);
	}


