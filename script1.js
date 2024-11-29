const fileList = document.querySelector(".file-list");
const fileBrowseButton = document.querySelector(".file-browse-button");
const fileBrowseInput = document.querySelector(".file-browse-input");
const fileUploadBox = document.querySelector(".file-upload-box");
const fileCompletedText = document.querySelector(".file-completed");

let totalFiles = 0;
let completedFiles = 0;

const updateFileCompletedText = () => {
    fileCompletedText.innerText = `${completedFiles}/${totalFiles} file${totalFiles > 1 ? 's' : ''} completed`;
};

const createFileItemHTML = (file, index) => {
    const { name, size } = file;
    const extension = name.split(".").pop();

    return `<li class="file-item" data-index="${index}">
                <div class="file-extension">${extension}</div>
                <div class="file-content-wrapper">
                    <div class="file-content">
                        <div class="file-details">
                            <h5 class="file-name">${name}</h5>
                            <div class="file-info">
                                <small class="file-size">${(size / (1024 * 1024)).toFixed(2)}MB</small>
                                <small class="file-divider">~</small>
                                <small class="file-status">Uploading...</small>
                            </div>
                        </div>
                        <button class="cancel-button">
                            <i class="bx bx-x">x</i>
                        </button>
                    </div>
                    <div class="file-progress-bar">
                        <div class="file-progress" style="width: 0%;"></div>
                    </div>
                </div>
            </li>`;
};

const uploadFile = (file, progressElement, statusElement, index, cancelToken) => {
    return new Promise((resolve, reject) => {
        const uploadDuration = Math.random() * 2000 + 1000; // Random upload duration between 1 and 3 seconds
        let progress = 0;

        const updateProgress = () => {
            if (cancelToken.isCanceled) {
                statusElement.innerText = 'Canceled';
                progressElement.style.width = '0%';
                reject(new Error('Upload canceled'));
                return;
            }

            progress += 10;
            progressElement.style.width = `${progress}%`;

            if (progress < 100) {
                setTimeout(updateProgress, uploadDuration / 10);
            } else {
                resolve();
            }
        };

        // Start updating progress
        setTimeout(updateProgress, uploadDuration / 10);

        // Simulate completion or failure
        setTimeout(() => {
            if (cancelToken.isCanceled) {
                statusElement.innerText = 'Canceled';
                progressElement.style.width = '0%';
                reject(new Error('Upload canceled'));
            } else if (Math.random() > 0.2) { // 80% chance of success
                statusElement.innerText = 'Completed';
                resolve();
            } else {
                statusElement.innerText = 'Failed';
                reject(new Error('Upload failed'));
            }
        }, uploadDuration);
    });
};

const handleSelectFiles = (files) => {
    if (files.length === 0) return;

    totalFiles += files.length;
    updateFileCompletedText();

    [...files].forEach((file, index) => {
        const fileItemHTML = createFileItemHTML(file, index);
        fileList.insertAdjacentHTML("afterbegin", fileItemHTML);

        const fileItemElement = fileList.querySelector(`.file-item[data-index="${index}"]`);
        const progressElement = fileItemElement.querySelector('.file-progress');
        const statusElement = fileItemElement.querySelector('.file-status');
        const cancelButton = fileItemElement.querySelector('.cancel-button');
        const cancelToken = { isCanceled: false };

        cancelButton.addEventListener('click', () => {
            cancelToken.isCanceled = true;
        });

        uploadFile(file, progressElement, statusElement, index, cancelToken)
            .then(() => {
                if (!cancelToken.isCanceled) {
                    completedFiles++;
                    updateFileCompletedText();
                    statusElement.innerText = 'Completed';
                }
            })
            .catch((error) => {
                if (error.message !== 'Upload canceled') {
                    statusElement.innerText = 'Failed';
                }
            });
    });
};

fileUploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    handleSelectFiles(e.dataTransfer.files);
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});

fileUploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUploadBox.classList.add("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Release to upload or";
});

fileUploadBox.addEventListener('dragleave', (e) => {
    e.preventDefault();
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});

fileBrowseInput.addEventListener('change', (e) => handleSelectFiles(e.target.files));
fileBrowseButton.addEventListener('click', () => fileBrowseInput.click());
