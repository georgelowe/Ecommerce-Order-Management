// Image Upload Testing (relocate this when configured)
var fileUpload = document.getElementById("file-upload");
var imageUploadContainer = document.getElementById("image-upload-container");
var imageURLField = document.getElementById("imageURL");

if (fileUpload) {
  fileUpload.addEventListener("change", function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", config.CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: config.CLOUDINARY_URL,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    })
      .then(function (res) {
        const div = document.createElement("div");
        div.innerHTML = `
        <img class="uploaded-image" src=${res.data.url}  />`;
        imageUploadContainer.appendChild(div);
        imageURLField.value = res.data.url;
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}
