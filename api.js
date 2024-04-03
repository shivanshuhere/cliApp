async function getIplInfo() {
    const url = "https://cricket-live-data.p.rapidapi.com/match/2432999";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "1cdfd6132cmsh3ab29ddae38ebe0p12e617jsn2d846241b7e3",
            "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const res = await response.text();
        const result = JSON.parse(res);
        console.log(
            `${result.results.fixture.match_title}\n${result.results.live_details.match_summary.toss}\n${result.results.live_details.match_summary.status}`
        );
    } catch (error) {
        console.error(error);
    }
}

export default getIplInfo;
