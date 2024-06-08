const search = document.getElementById("search");

search.addEventListener('keydown', function onEvent(event) {
    if (event.key === "Enter") {
        console.log("enter");
        const query = event.target.value;
        if (searchQuery.length <= 1) {
            return
        }
        try {
            const searchQuery = encodeURI(query);
            window.location.href = ("https://www.startpage.com/sp/search?query=" + searchQuery);
        } catch (e){

        }
    }
});