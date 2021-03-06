const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  is_equal: (input1, input2) => {
    if (input1 === input2) {
      return true;
    } else {
      return false;
    }
  },
  format_date: (date) => {
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(date).toLocaleString("en-US", options);
  }
};
