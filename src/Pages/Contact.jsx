const Contact = () => {
    function handleChange(e){
        e.preventDefault()
        alert("Your Response as been submitted ! We will Contact You shortly")
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-black">
      <div className="max-w-2xl w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-gray-300 text-center mb-6">
          Have questions or feedback? Wed love to hear from you! Reach out to us
          using the form below.
        </p>
        <div style={{margin:"auto", borderRadius:"5px",boxShadow:"0px 0px 10px grey", width:"400px", height:"450", padding:"20px"}}>
        <form onSubmit={handleChange} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 form-control rounded bg-gray-700 text-black border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 form-control rounded bg-gray-700 text-black border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Message</label>
            <textarea
              className="w-full p-3 rounded form-control bg-gray-700 text-black border border-gray-600 focus:outline-none focus:border-yellow-400"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button style={{marginLeft : "125px", marginTop:"20px", backgroundColor:"blue", border:"none"}} type="submit" className="w-full bg-yellow-500 text-white font-semibold py-3 rounded hover:bg-yellow-600 transition">
            Send Message
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
