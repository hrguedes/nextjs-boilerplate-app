import useAuth from '../hooks/useAuth'

const Home = () => {
  // Autenticado
  const isAutenticated = useAuth(true);

  return (
    <div>
      <h1> Dashboard </h1>
    </div>
  )
}

export default Home;