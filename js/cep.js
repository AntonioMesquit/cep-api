export async function cep() {
    try {
      const sentence = await fetch(`https://cdn.apicep.com/file/apicep/60420-520.json`);
      
      if (sentence.status === 200) {
        let data = await sentence.json();
        let state = data.state;
        let address = data.address;
        let city = data.city;
        let district = data.district;
        console.log(address)
        console.log(state)
        console.log(city)
        console.log(district)







        
      } else {

        
      }
    } catch (error) {
      
      
    }
  }
  