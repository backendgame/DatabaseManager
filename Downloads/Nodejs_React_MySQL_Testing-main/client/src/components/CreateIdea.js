import React from 'react'
import { useState } from 'react'
import handleSubmit from '../services/handleSumit';

const CreateIdea = () => {
    const initialideaState = {
        id: null,
        task: "",
        status: "",
        created_at: ""
      };
      const [idea, setidea] = useState(initialideaState);
      const [submitted, setSubmitted] = useState(false);
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setidea({ ...idea, [name]: value });
      };
    
      const saveidea = () => {
        var data = {
          id: idea.id,
          task: idea.task,
          status: idea.status,
          created_at: idea.created_at
        };
    
        handleSubmit.create(data)
          .then(response => {
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      const newidea = () => {
        setidea(initialideaState);
        setSubmitted(false);
      };
      return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newidea}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="id">id</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  required
                  value={idea.id || ''}
                  onChange={handleInputChange}
                  name="id"
                />
              </div>
              <div className="form-group">
                <label htmlFor="id">task</label>
                <input
                  type="text"
                  className="form-control"
                  id="task"
                  required
                  value={idea.task || ''}
                  onChange={handleInputChange}
                  name="task"
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">id</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  required
                  value={idea.status || ''}
                  onChange={handleInputChange}
                  name="status"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="status">status</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="created_at"
                  required
                  value={idea.created_at || ''}
                  onChange={handleInputChange}
                  name="created_at"
                />
              </div>
    
              <button onClick={saveidea} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    
}
export default CreateIdea;
