fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(person => {
            console.log(getFullName(person));
            console.log(initials(person));
            console.log(rarityOfEyes(person));
        });
    })
    .catch(error => {
        console.error(error);
    });
    function getFullName(person) {
       return `${person.Fname} ${person.Lname}`;
    }
    function initials(person) {
        return`${person.Fname}'s initials are: ${person.Fname.substring(0,1)}${person.Lname.substring(0,1)} `
    }
    function rarityOfEyes(person) {
        switch(person.eyes){
            case "Brown":
                return `${person.Fname}'s eyes are the most common at 45% of the population.`
                break;
            case "Blue":
                return `${person.Fname}'s eyes are pretty rare at 27% of the population.`
                break;
            case "Hazel":
                return `${person.Fname}'s eyes are very rare at 18% of the population.`
                break;
            case "Green":
                return `${person.Fname}'s eyes are the rarest at 9% of the population.`
                break;
            default:
                return `${person.Fname} is wearing collered contacts.`
        }
    }