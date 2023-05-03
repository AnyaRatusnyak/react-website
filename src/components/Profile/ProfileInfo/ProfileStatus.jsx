import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusF = (props) => {
  debugger;
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    debugger;
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const deactivateEditMod = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const activateEditMod = () => {
    setEditMode(true);
  };

  return (
    <>
      <div>
        {!editMode && (
          <div>
            <span onDoubleClick={activateEditMod}>
              {props.status || "----"}
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMod}
              value={status}
            ></input>
          </div>
        )}
      </div>
    </>
  );
};

/*class ProfileStatus extends React.Component {
  state = { editMode: false, status: this.props.statu };

  activateEditMod = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMod = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <>
        <div>
          {!this.state.editMode && (
            <div>
              <span onDoubleClick={activateEditMod}>
                {this.props.status || "----"}
              </span>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={deactivateEditMod}
                value={status}
              ></input>
            </div>
          )}
        </div>
      </>
    );
  }
}*/
export default ProfileStatusF;
