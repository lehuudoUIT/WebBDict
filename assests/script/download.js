// download.js

document.addEventListener("DOMContentLoaded", function () {
    const androidDownloadButton = document.querySelector(".AndroidDownBtn");
    const windowsDownloadButton = document.querySelector(".WindowDownBtn");
  
    function handleDownload(filePath, fileName) {
      const downloadLink = document.createElement("a");
      downloadLink.href = filePath;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  
    androidDownloadButton.addEventListener("click", function () {
      const androidFilePath = "source/BDictAndroid.apk";
      const androidFileName = "BDictAndroid.apk";
      handleDownload(androidFilePath, androidFileName);
    });
  
    windowsDownloadButton.addEventListener("click", function () {
      const windowsFilePath = "./path/to/your/file2.zip";
      const windowsFileName = "file2.zip";
      handleDownload(windowsFilePath, windowsFileName);
    });
  });
  