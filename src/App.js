import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        textInput: '',
        items: [],
        editInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      textInput: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.textInput],
      textInput: ''
    });
  }

  // Separating Edit to prevent conflicts in the state

  handleChangeEdit = (event) => {
    this.setState({
      editInput: event.target.value
    });
  }

  handleClick2Edit = (i) => {
    this.setState(this.state.items.splice(i, 1, this.state.editInput));
    this.setState({editInput: ''});
  }

  handleDelete = (i) => {
    this.setState(this.state.items.splice(i, 1));
  }

  
  render(){
    return (
      <div>
        <div className='rounded shadow' style={{
        maxWidth: '700px',
        minWidth: '385px',
        minHeight: '500px',
        marginLeft: 'auto',
        marginRight:'auto',
        marginTop:'10%',
        marginBottom: '50px',
        backgroundColor:'#28559A',
        paddingBottom:'20px'
        }}>
          <h1 style={{textAlign: 'center', paddingTop:'20px', paddingBottom:'20px', color:'white', textShadow:'2px 2px 4px #000000'}}>React Todo List</h1>
          <p style={{textAlign: 'center', paddingBottom:'10px', color:'white', textShadow:'2px 2px 4px #000000'}}>By: <a rel='noreferrer' href="https://github.com/irfanadi1209" target='_blank' style={{color:'white'}}>Irfan Adi</a></p>
          <form onSubmit={this.handleSubmit}
            className='input-group shadow'
            style={{
              width:'80%',
              marginLeft:'auto',
              marginRight:'auto',
              marginBottom:'20px'
            }}>
            <input
              required
              type="text"
              value={this.state.textInput}
              onChange={this.handleChange}
              className='form-control'
              style={{
                width:'80%'
              }}
              placeholder='Masukkan tugas anda disini!'
            />
            <button className='btn btn-success' type='submit'>Enter</button>
          </form>
          <div className="card-todo">
            <ul>
              {
                this.state.items.map((item, index) => {
                  const idCardModal = `modalCard${index}`;
                  const modalTarget = `#${idCardModal}`;
                  const modalLabel = `${idCardModal}Label`;

                  return (
                  <li style={{listStyle:'none'}} key={index}>
                        {/* Card and Trigger Modal */}
                        <div style={{marginBottom:'10px', marginRight: '25px', cursor:'pointer'}} >
                          <div className="col">
                            <div className="card shadow" style={{backgroundColor:'#3778C2', color:'white'}} data-bs-toggle='modal' data-bs-target={modalTarget}>
                              <div className="card-body ">
                                <h5 className="card-title">Tugas ke - {index+1}</h5>
                                <h2 className="card-text">{item}</h2>
                                <sub>Click for edit.</sub>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Modal */}
                        <div className="modal fade" id={idCardModal} tabindex="-1" aria-labelledby={modalLabel} aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id={modalLabel}>Edit Tugas ke - {index+1}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <input type='text' placeholder={item} onChange={this.handleChangeEdit}/>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type='button' className='btn btn-danger' onClick={()=>{this.handleDelete(index)}} data-bs-dismiss="modal">Delete</button>
                                <button type="button" className="btn btn-warning" onClick={()=>{this.handleClick2Edit(index)}} data-bs-dismiss="modal">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                  </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;