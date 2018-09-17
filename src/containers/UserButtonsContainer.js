import { connect } from "react-redux";
import { addUser, removeUser } from "../actions";
import UserButton from "../components/UserButtons";

function mapDispatchToProps(dispatch) {
  return {
    add: function(txt) {
      let action = addUser(txt);
      dispatch(action);
    },
    remove: function(txt) {
      let action = removeUser(txt);
      dispatch(action);
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(UserButton);
