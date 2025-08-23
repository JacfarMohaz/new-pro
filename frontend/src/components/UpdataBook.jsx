import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function UpdateBookForm() {
      const [title,setTitle] = useState()
      const [image,SetImage] = useState()
      const [author,setAuthor] = useState()
      const [description,setDescription] = useState()
      const [price,setPrice] = useState()

      const params = useParams()

      const navigate = useNavigate()

      const handleSingleData = () => {
        axios.get(`http://localhost:7000/readSingle/book/${params.id}`).then((res) => {
            setTitle(res.data.title),
            setAuthor(res.data.author),
            setDescription(res.data.description),
            setPrice(res.data.price)
            SetImage(res.data.image)
        })
      }


      const formData = new FormData()

      formData.append("title", title)
      formData.append("author", author)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("img", image)

      const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:7000/update/book/${params.id}`, formData).then(() => {
          alert("success Update")
          navigate("/dash/books")
        })
      }

      useEffect(() => {
        handleSingleData()
      }, [])
      

      
  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
        Update Book
      </h2>

      <div>
        <label className="block mb-1 font-medium">Book Name</label>
        <input
          type="text"
          name="bookName"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Author</label>
        <input
          type="text"
          name="author"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <input
          type="text"
          name="category"
          className="w-full border border-gray-300 rounded p-2"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Price ($)</label>
        <input
          type="number"
          name="price"
          className="w-full border border-gray-300 rounded p-2"
          required
              value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full border border-gray-300 rounded p-2"
          onChange={(e) =>  SetImage(e.target.files[0])}
        />
        <img className="w-60" src={`http://localhost:7000/allDocs/${image}`} alt="" />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
        onClick={handleUpdate}
      >
        Update Book
      </button>
    </form>
  );
}

export default UpdateBookForm;
