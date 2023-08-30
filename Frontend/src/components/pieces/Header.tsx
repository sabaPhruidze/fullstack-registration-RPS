import { Helmet } from "react-helmet"
import ICON from "../../assets/img/RPS.png"
function Header() {
  const DCONTENT = "This Website is for testing skills for backend and frontend and also it is first try making game with React" //description context
  const KCONTENT = "Rock,ROCKPAPERSCISSORS,Game,RPS,Fullstack"

  return (
    <Helmet>
      <link rel="icon" href={ICON} /> 
      <title>RPS</title>
      <meta name="description" content={DCONTENT} /> 
      <meta name="keywords" content={KCONTENT} /> {/* for searching */}
    </Helmet>
  )
}

export default Header