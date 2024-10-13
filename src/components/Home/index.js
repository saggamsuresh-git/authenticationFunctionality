import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="home-page">
    <Header />
    <div className="home">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
