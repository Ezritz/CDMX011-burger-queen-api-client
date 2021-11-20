import { useLogout } from '../hooks/useLogout';

export default function Orders() {
  const { logout } = useLogout();
  return(
    <div>
      <h2>Home</h2>
      <button onClick={logout}>Salir</button>
    </div>
  )
}