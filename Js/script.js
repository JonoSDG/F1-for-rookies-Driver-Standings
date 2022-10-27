var Crequest = new XMLHttpRequest();

    Crequest.open('Get', 'http://ergast.com/api/f1/current/driverStandings.json');
    Crequest.onload = function () {
        for(var x = 0 ;x<20;x++){
            var Cresponse = Crequest.response;
            var CparsedData = JSON.parse(Cresponse);
            var Standing = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].position;
            var Wins = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].wins;
            var Points = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].points;
            var pNum = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Driver.permanentNumber;
            var gName = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Driver.givenName;
            var fName = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Driver.familyName;
            var Bday = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Driver.dateOfBirth;
            var Wiki = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Driver.url;
            var tName = CparsedData.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Constructors[0].name;
            
            if(Standing <=20){
                console.log(Standing); 
                console.log(pNum); 
                console.log(gName); 
                console.log(fName); 
                console.log(Wins); 
                console.log(Points);
                console.log(Bday);
                console.log(Wiki);

                document.getElementById("script").innerHTML +=
                `
                <table class="Drivertb">
                    <tr class="Drivertb darken">
                        <th class="layt">
                            <h3>${Standing}</h3>
                        </th>
                        <th class="layt">
                            <h3>${Points}pts</h3>
                        </th>
                        <th class="darken">
                        </th>
                    </tr>
                    <tr >
                        <td class="darken">
                            <img class="Driverimg" " src="images/${pNum}driver.png" alt="${fName}-pic">
                        </td>
                        <td class="Drivertb">
                            <h4 class="Perma-num">${pNum}</h4>
                            <h4 class="Drivername">${fName}, <br>${gName}<br> </h4>
                            <h4 class="team">${tName}<h4>
                            
                            <a class="LearnM" href="${Wiki}">learn more...</a>
                        </td>
                        <td >
                            <img class="Pinfo" src="images/${pNum}flag.png"alt="${fName}-country"> 
                            <h4 class="birthday">${Bday}</h4>
                        </td>
                    </tr>
                    <br>
                </table>
                `

            }
        }
    }
    Crequest.send();