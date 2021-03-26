document.getElementById("getDest").addEventListener
      ('click', getDest);

    function getDest(){
      fetch("text/dest.json")
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2>Destinations</h2>';
        data.forEach(function(dest){
          output += `
            <ul>
              <li>Name: ${dest.name}</li>
              <li>Country: ${dest.country}</li>
              <li>Activities: ${dest.activities}</li>
            </ul> 
          `;
        });
        document.getElementById('output').innerHTML = output;
      })
    }