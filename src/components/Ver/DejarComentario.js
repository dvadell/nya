import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postCommentAction } from '../../actions'

const mapStateToProps = state => {
    return {
        gatos: state.requestGatos.gatos,
        isPending: state.requestGatos.isPending,
        message: state.requestGatos.message,
        error: state.requestGatos.error
    }
}

const mapDispatchToProps = dispatch  => {
    return { 
        postComment: (c)       => dispatch(postCommentAction(c))  
    }
}

class DejarComentario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comentario: ''
        }
    }

    handleComment = (event) => this.setState({comentario: event.target.value});

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postComment({ _id: this.props._id, comentario: this.state.comentario })
        this.setState({ comentario: '' })
    }

    render() { 
        return (
            <div>
                <form className="pa4 black-80">
                    <label className="f6 b db mb2">
                        Dejá un comentario <br/>
                        <textarea onChange={this.handleComment} 
                                style={{width: "100%", height: "200px"}}
                                value={this.state.comentario} ></textarea>
                        <button type="submit" onClick={this.handleSubmit}>Enviar comentario</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DejarComentario);