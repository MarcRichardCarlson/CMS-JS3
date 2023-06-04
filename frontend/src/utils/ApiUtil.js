import axios from "axios";
import {storageRead, storageSave} from './StorageUtil'
import {Storage} from "../const/storage";
import jwt_decode from "jwt-decode";

export const loginUser = async (formEmail, formPassword) => {
    return await axios({
        method: 'post',
        url: 'http://localhost:8080/api/users/login',
        data: {
            email: formEmail,
            password: formPassword
        }
    }).then((res) => { // Save token from logged in user
        storageSave(Storage.token, res.data.token)

        return res
    }).catch((err) => {
        console.log(err)
    })
}

/*GET ALL*/
export const getAllProduct = async () => {
    const token = storageRead(Storage.token)
    return await axios({
        method: 'get',
        url: 'http://localhost:8080/api/products',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        storageSave(Storage.products, JSON.stringify(res.data))
        return res.data
    })
}


/*GET ONE*/
export const getById = async (id) => {
    const token = storageRead(Storage.token)
    return await axios({
        method: 'get',
        url: `http://localhost:8080/api/products/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        return res.data
    })
};

/*REMOVE*/
export const deleteById = async (id) => {
    const token = storageRead(Storage.token)
    return await axios({
        method: 'delete',
        url: `http://localhost:8080/api/products/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        getAllProduct()
        return res.data
    }).catch((err) => {
        console.log(err)
    })
};

/*PUT*/
export const putById = async (id, updatedProduct) => {
    const token = storageRead(Storage.token)
    return await axios({
        method: 'put',
        url: `http://localhost:8080/api/products/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            name: updatedProduct.name,
            price: updatedProduct.price,
            description: updatedProduct.description,
            category: updatedProduct.category,
        }
    }).then((res) => {
        getAllProduct()
        return res.data
    })
};

/*ADD*/
export const postProduct = async (newProduct) => {
    const token = storageRead(Storage.token)
    return await axios({
        method: 'post',
        url: `http://localhost:8080/api/products`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            name: newProduct.name,
            price: newProduct.price,
            description: newProduct.description,
            category: newProduct.category,
            image: newProduct.image
        }
    }).then(() => {
        return getAllProduct()
    })
};

export const registerUser = async (email, password, confirmPassword) => {

    if (!email || !password) {
        return;
      }
  
      if (password !== confirmPassword) {
        return;
        
      } else {
        try {
          const res = await fetch("http://localhost:8080/api/users/register", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
  
          const { token } = await res.json();
       
          const user = jwt_decode(token);
          return user;
        
        } catch (err) {
          console.log(err)
        }
      }
}