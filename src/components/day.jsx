import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
class Day extends Component {
  state = {
    categories: {
      Holiday: { backgroundColor: "#8d8de3" },
      Birthday: { backgroundColor: "#ad3ab5" },
      Busy: { backgroundColor: "#a82c2c" },
      Anniversary: { backgroundColor: "#a7ebcb" }
    },
    category: "",
    show: false
  };

  render() {
    const { date } = this.props;
    return (
      <td style={this.state.categories[this.state.category]}>
        <div className="date-cell" onClick={this.handleModalShow}>
          {date > 0 ? date : ""}
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleModalClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.month} {this.props.date}, {this.props.year}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                type="radio"
                id="none"
                value=""
                checked={this.state.category === ""}
                onChange={this.handleCategoryChange}
              />
              <label htmlFor="none">No category</label>
            </div>
            {Object.keys(this.state.categories).map(cat => {
              return (
                <div key={cat}>
                  <input
                    type="radio"
                    id={cat}
                    value={cat}
                    checked={this.state.category === cat}
                    onChange={this.handleCategoryChange}
                  />
                  <label htmlFor={cat}>{cat}</label>
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </td>
    );
  }
  handleModalClose = () => this.setState({ show: false });
  handleModalShow = () => this.setState({ show: true });
  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };
}

export default Day;
