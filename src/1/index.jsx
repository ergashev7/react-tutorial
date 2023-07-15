import React from "react";

class Navbar extends React.Component {
  render() {
    const { data, children } = this.props;
    return (
      <div>
        <div className="menu">
          {/* <h3>{this.props.data[0]}</h3>
          <h3>{this.props.data[1]}</h3>
          <h3>{this.props.data[2]}</h3>
          <h3>{this.props.data[3]}</h3>
          <h3>{this.props.data[4]}</h3> */}
          {data.map((item) => {
            return <h3>{item}</h3>;
          })}
        </div>
        {children}
        {/* <h1>{name}</h1>
        <h1>{surName}</h1> */}
      </div>
    );
  }
}
export default Navbar;
