import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"


function BookForm() {
  const [title,setTitle] = useState("")
  const [image,SetImage] = useState(null)
  const [author,setAuthor] = useState("")
  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")

  const formData = new FormData()

  formData.append("title", title)
  formData.append("author", author)
  formData.append("description", description)
  formData.append("price", price)
  formData.append("img", image)
  


  const hanldePost = (e) => {
    e.preventDefault()
    axios.post("http://localhost:7000/create/book", formData).then(() => {
      toast.success("Success register", {
        position: "top-right",
        autoClose: true,
      })
    })
  }


  return (
    <form
      action="/submit-book"
      method="POST"
      encType="multipart/form-data"
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
        Register a Book
      </h2>

      <div>
        <label className="block mb-1 font-medium">Book Name</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="bookName"
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Author</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <input
          type="text"
          name="category"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Price ($)</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          
          onChange={(e) =>  SetImage(e.target.files[0])}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <button
      onClick={hanldePost}
        type="submit"
        className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
      >
        Register Book
      </button>
    </form>
  );
}

export default BookForm;
