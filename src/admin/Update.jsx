import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../app/slice/productsSlice';
import { setPrice, setTitle, setCategory, setImage } from '../app/slice/updateSlice';

export default function Update() {


  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const {title, image, price, category} = useSelector((state) => state.update);

  const {id} =  useParams();
  const Navigate = useNavigate();

  const result = products.find((data) => data.id == id);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const updateProducts = products.map((pro) => {
      const upImage = image || pro.image;
      const upTitle = title || pro.title;
      const upCategory = category || pro.category;
      const upPrice = price || pro.price;
      if(pro.id == id) {
        return {
          ...products,
          id: pro.id,
          image: upImage,
          title: upTitle,
          price: upPrice,
          category: upCategory,
        }
      }else
      return pro;
    });
    dispatch(setProducts(updateProducts))
    Navigate('/products')
  }

  return (

    <form className='container' onSubmit={(e) => handleUpdate(e)}>
    <div className="mb-3">
      <input type="text" className="form-control" onChange={(e) => dispatch(setTitle(e.target.value))} placeholder={result.title}  />
    </div>

    <div className="mb-3">
      <input type="number" className="form-control" onChange={(e) => dispatch(setPrice(e.target.value))} placeholder={result.price}  />
    </div>

    <div className="mb-3">
      <input type="text" className="form-control" onChange={(e) => dispatch(setCategory(e.target.value))} placeholder={result.category} />
    </div>

    <div className="mb-3 d-flex ">
    <img src= {`.${result.image}`}  width={"140px"} />  
      <input type="text" className="form-control" onChange={(e) => dispatch(setImage(e.target.value))}  placeholder="Image url"  />
    </div>

    <button type="submit" className="btn btn-primary">ADD</button>
  </form>

  )
}
