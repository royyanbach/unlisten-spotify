import { login, logout } from '../libs/auth';

const Hero = () => (
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">UN-LISTEN</h1>
        <p className="py-6">Time to declutter. Clear up your liked songs from spotify.</p>
        <button className="btn btn-primary mr-2" onClick={login}>Login</button>
        <button className="btn btn-secondary" onClick={logout}>Logout</button>
      </div>
    </div>
  </div>
);

export default Hero;
