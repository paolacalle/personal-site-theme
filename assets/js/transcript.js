
document.addEventListener('DOMContentLoaded', function () {
    const pdfPath = '{{ "/assets/pdfs/smith.pdf" | relative_url }}';
    const pdfContainer = document.getElementById('pdf-container');

    // Check if the device is a phone
    const isPhone = window.matchMedia("(max-width: 768px)").matches;

    // Check if the browser supports embedded PDFs
    const supportsPDF = !!document.createElement('object').constructor;

    if (supportsPDF && !isPhone) {
        // Display the PDF in an object element for desktops and tablets
        const pdfObject = document.createElement('object');
        pdfObject.data = pdfPath;
        pdfObject.type = 'application/pdf';
        pdfObject.style.width = '100%';
        pdfObject.style.height = '600px';

        // Fallback message if object fails
        const fallbackMessage = document.createElement('p');
        fallbackMessage.className = 'text-muted';
        fallbackMessage.innerHTML = `
        Your browser does not support PDFs. Please 
        <a href="${pdfPath}" class="text-primary">download the PDF</a> to view it.
        `;
        pdfObject.appendChild(fallbackMessage);

        pdfContainer.appendChild(pdfObject);
    } else {
        // Show a button to download the PDF for phones or unsupported browsers
        const downloadButton = document.createElement('a');
        downloadButton.href = pdfPath;
        downloadButton.className = 'btn btn-primary';
        downloadButton.textContent = 'Download PDF';

        pdfContainer.appendChild(downloadButton);
    }
});