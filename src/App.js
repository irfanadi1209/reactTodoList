import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        textInput: '',
        items: []
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



  render(){

    return (
      <div className='rounded' style={{
        width: '50%',
        marginLeft: 'auto',
        marginRight:'auto',
        marginTop:'10%',
        marginBottom: '50px',
        backgroundColor:'gray',
        paddingBottom:'20px'
        }}>
        <h1 style={{textAlign: 'center', paddingTop:'20px', paddingBottom:'20px'}}>React Todo List</h1>
        <form onSubmit={this.handleSubmit}
          className='input-group'
          style={{
            width:'80%',
            marginLeft:'auto',
            marginRight:'auto',
            marginBottom:'20px'
          }}>
          <input
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
                      <div style={{marginBottom:'10px', marginRight: '25px', cursor:'pointer'}}>
                        <div className="col">
                          <div className="card" data-bs-toggle='modal' data-bs-target={modalTarget}>
                            <div className="card-body">
                              <h5 className="card-title">Tugas ke - {index+1}</h5>
                              <p className="card-text">{item}</p>
                              <sub>Click for details.</sub>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Modal */}
                      <div className="modal fade" id={idCardModal} tabindex="-1" aria-labelledby={modalLabel} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id={modalLabel}>Detail Tugas ke - {index+1}</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <input type='text' value={item}/>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type='button' className='btn btn-danger'>Delete</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
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
    );
  }
}

export default Home;