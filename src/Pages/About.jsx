
const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-black rounded-lg shadow-lg" style={{marginBottom:"60px"}}>
      <h1 className="text-3xl font-bold text-center mb-4">About Movie Hunt</h1>
      <p className="text-lg text-gray-300">
        Welcome to <span className="text-yellow-400">Movie Hunt</span>, your ultimate destination for discovering and tracking movies! Whether youre searching for the latest blockbusters, hidden gems, or your all-time favorites, Movie Hunt provides an intuitive and engaging experience for movie enthusiasts.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="text-gray-300">
        Our goal is to make movie exploration easier and more enjoyable. With a seamless browsing experience, detailed movie information, and personalized recommendations, we aim to connect you with films youll love.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
      <ul className="list-disc list-inside text-gray-300">
        <li>Search for movies by title, genre, or year.</li>
        <li>Get detailed information, ratings, and reviews.</li>
        <li>Create watchlists and track your favorite movies.</li>
        <li>Discover trending and top-rated films.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Join Us</h2>
      <p className="text-gray-300">
        Be part of the Movie Hunt community and never miss out on great films. Start exploring now and let the adventure begin!
      </p>
    </div>
  );
};

export default About;
