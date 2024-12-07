document.addEventListener('DOMContentLoaded', function () {
    const pdfPath = '/assets/pdfs/smith.pdf'; // Use absolute path to ensure correctness
    console.log('PDF Path:', pdfPath); // Log to verify the path
    const pdfContainer = document.getElementById('pdf-container');

    // Check if the device is a phone
    const isPhone = window.matchMedia("(max-width: 768px)").matches;

    // Check if the browser supports embedded PDFs
    const supportsPDF = !!document.createElement('object').constructor;

    console.log('isPhone:', isPhone);
    console.log('supportsPDF:', supportsPDF);

    if (supportsPDF && !isPhone) {
      const pdfObject = document.createElement('object');
      pdfObject.data = pdfPath;
      pdfObject.type = 'application/pdf';
      pdfObject.style.width = '100%';
      pdfObject.style.height = '600px';

      const fallbackMessage = document.createElement('p');
      fallbackMessage.className = 'text-muted';
      fallbackMessage.innerHTML = `
        Your browser does not support PDFs. Please 
        <a href="${pdfPath}" class="text-primary" download>download the PDF</a> to view it.
      `;
      pdfObject.appendChild(fallbackMessage);
      pdfContainer.appendChild(pdfObject);
    } else {
      const downloadButton = document.createElement('a');
      downloadButton.href = pdfPath;
      downloadButton.className = 'btn btn-primary';
      downloadButton.textContent = 'Download PDF';
      downloadButton.setAttribute('download', 'smith.pdf'); // Add download attribute to force download
      pdfContainer.appendChild(downloadButton);
    }
  });