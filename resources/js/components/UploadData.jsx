import React from 'react'

const UploadData = () => (
  <div className="custom-file">
    <form className="was-validated">
      <input type="file" className="custom-file-input" id="validatedCustomFile" required />
      <label className="custom-file-label">Choose file...</label>
      <div className="invalid-feedback">Example invalid custom file feedback</div>
    </form>
  </div>
)

export default UploadData