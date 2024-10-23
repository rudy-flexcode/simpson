import "./App.css";
import Avatar from "./MyTitle";

function App ()  {
  const bart = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  };

  const homer = {
    image:"https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png" ,
    firstName: "Homer",
    lastName: "Simpson"
  };

  return(
    <div>
      <Avatar image={bart.image}
              firstName={bart.firstName}
              lastName={bart.lastName}/>

      <Avatar image={homer.image}
              firstName={homer.firstName}
              lastName={homer.lastName}/>




    </div>
  )
}
export default App; 