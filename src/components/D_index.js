import { PDFDocument, rgb } from 'pdf-lib'

export const generatePDF = async (name) => {

    const existingPdfBytes = await fetch("./certificate.pdf").then((res) =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    // pdfDoc.registerFontkit(fontkit);

    const fontBytes = await fetch("./Sanchez-Regular.ttf").then((res) =>
    res.arrayBuffer()
  );
  

  // pdfDoc.registerFontkit(fontkit);
  const SanChezFont = await pdfDoc.embedFont(fontBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a string of text diagonally across the first page
  firstPage.drawText(name, {
    x: 300,
    y: 270,
    size: 25,
    font: SanChezFont,
    color: rgb(0.0, 0.0, 0.0),
  });

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  document.querySelector("#mypdf").src = uri;
  const pdfBytes = await pdfDoc.save()
} ;


const userName = document.getElementById("user_name");
const submitBtn = document.getElementById("submitBtn");


const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

submitBtn.addEventListener("click", () => {
  const val = capitalize(userName.value);

  //check if the text is empty or not
  if (val.trim() !== "" && userName.checkValidity()) {
    // console.log(val);
    generatePDF(val);
  } else {
    userName.reportValidity();
  }
});