import React, { useContext, useEffect, useState } from "react"
import { ReactionContext } from "./ReactionProvider"
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

export const ReactionList = () => {
  const {reactions, getReactions, createReaction} = useContext(ReactionContext)
  const [showForm, setShowForm] = useState(false)
  const [reaction, setReaction] = useState({
    "id": 0,
    "label": "",
    "image_url": ""
  })
  
  useEffect(() => {
    getReactions()
  }, [])
  
  const handleShowForm = () => {
    setShowForm(true)
  }
  const handleCloseForm = () => {
    setShowForm(false)
    setReaction({
      "id": 0,
      "label": "",
      "image_url": ""
    })
  }
  const saveReaction = () => {
    if(reaction.id === 0){
      createReaction(reaction)
      .then(handleCloseForm)
    }
  }
  const handleInputChange = (event) => {
    let tempReaction = {...reaction}
    tempReaction[event.target.id] = event.target.value
    setReaction(tempReaction)
  }
  return(
    <>
    <h3>Reactions</h3>
    <Modal isOpen={showForm}>
      <ModalHeader>Create Reaction</ModalHeader>
      <ModalBody>
        <form className="reactionForm">
          <label htmlFor="reactionLabel">Label: </label>
          <input type="text" id="label" onChange={handleInputChange} value={reaction.label}></input><br></br>
          <label htmlFor="reactionImage">Image URL: </label>
          <input type="text" id="image_url" onChange={handleInputChange} value={reaction.image_url}></input>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary" onClick={saveReaction}>
          Save Reaction
        </Button>
        <Button variant="secondary" onClick={handleCloseForm}>
          Close
        </Button>
      </ModalFooter>
    </Modal>

    <Button variant="primary" onClick={handleShowForm}>Create Reaction</Button>

    <div className="reactions">
      {reactions?.map(reaction => {
        return <div key={reaction.id}>
          <img src={reaction.image_url} alt={reaction.label} width="20vh" height="20vh" />
          {reaction.label}
          </div>
      })}
    </div>
    </>
  )
}