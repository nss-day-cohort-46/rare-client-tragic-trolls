
import  React, { useContext, useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { CategoryContext } from "./CategoryProvider"


export const CategoryList = () => {
    const {categories, getAllCategories, addCategory, deleteCategory, updateCategory} = useContext(CategoryContext)
    const [showForm, setShowForm] = useState(false)
    const [category, setCategory] = useState({
        "id":0,
        "label":""
    })
    const [categoryId, setCategoryId] = useState(0)
    const [deleteCheck, setDeleteCheck] = useState(false)
    useEffect(()=>{
        getAllCategories()
    },[])
    const editCategory = (id,label) => {
        setCategory({
            "id":id,
            "label":label
        })
        setShowForm(true)
    }
    const handleShowDeleteCheck = (e) => {
        setDeleteCheck(true)
        setCategoryId(e.target.value)
    }
    const handleCloseDeleteCheck = () => {
        setDeleteCheck(false)
        setCategoryId(0)
    }
    const handleShowForm = () => {
        setShowForm(true)
    }
    const handleCloseForm = () => {
        setShowForm(false)
        setCategory({
            "id":0,
            "label":""})
    }
    const saveCategory = () => {
        if(category.id === 0){
            addCategory(category).then(handleCloseForm)
        }
        else{
            updateCategory(category).then(handleCloseForm)
        }
    }
    const removeCategory = () => {
        deleteCategory(categoryId).then(handleCloseDeleteCheck)
    }
    const handleInputChange = (event) => {
        let tempCategory = {...category}
        tempCategory.label = event.target.value
        setCategory(tempCategory)
    }
    return(
        <>
        <h3>Categories</h3>
        <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="categoryForm">
                <label htmlFor="categoryLabel">label</label>
                <input type="text" id="label" onChange={handleInputChange} value={category.label}></input>
            </form>
        </Modal.Body>
        <Modal.Footer>
                <Button variant="primary" onClick={saveCategory}>
                    Save Category
                </Button>
          <Button variant="secondary" onClick={handleCloseForm}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
        <Modal show={deleteCheck} onHide={handleCloseDeleteCheck}>
            <Modal.Header>
                <Modal.Title>Are You Sure</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="primary" onClick={removeCategory}>yes</Button>
                <Button variant="secondary" onClick={handleCloseDeleteCheck}>no</Button>
            </Modal.Footer>
        </Modal>
    
        <Button variant="primary" onClick={handleShowForm}>Create Category</Button>
        
        <div className = "Categorys">
            {categories?.map(category => <div key={category.id}>{category.label}
                                <Button variant="secondary" value={category.id} onClick={handleShowDeleteCheck}>Delete</Button>
                                <Button variant="secondary" onClick={e=>editCategory(category.id,category.label)}>Edit</Button>
                            </div>)}
        </div>
        </>
    )
}