const { jsPDF } = require("jspdf");
var doc = new jsPDF();

exports.createPDf = (req, res) => {
  doc.text(100, 80, "sagar");
  doc.text(100, 97, "guardian");
  doc.text(100, 114, "addres");
  doc.text(100, 131, "city");
  doc.text(100, 148, "district");
  doc.text(100, 165, "state");
  doc.text(100, 182, "pincode");
  doc.text(100, 199, "mnumber");
  doc.text(100, 216, "email");
  doc.text(100, 230, "dfb");
  doc.text(100, 247, "gender");
  doc.text(100, 264, "username");
  doc.text(100, 275, "national");
  doc.save("test.pdf");
};
