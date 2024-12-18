const AlertReducer = (state, action) => {
  switch (action.type) {
    case "ALERT_ON":
      return action.payload;
    case "ALERT_OFF":
      return null;
    default:
      return null;
  }
};

export default AlertReducer;
