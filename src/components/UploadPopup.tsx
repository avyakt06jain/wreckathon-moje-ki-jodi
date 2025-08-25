import { useState } from "react";

interface UploadPopupProps {
  triggerButton: React.ReactNode;
}

export default function UploadPopup({ triggerButton }: UploadPopupProps) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      ["image/png", "image/jpeg", "image/jpg"].includes(droppedFile.type)
    ) {
      setFile(droppedFile);
      setPreviewUrl(URL.createObjectURL(droppedFile));
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <>
      {/* Trigger button */}
      <div onClick={() => setOpen(true)}>{triggerButton}</div>

      {/* Custom popup */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 relative">
            <h2 className="text-xl font-semibold mb-4">Upload a Photo</h2>

            {/* Browse */}
            <label className="block mb-4">
              <span className="text-gray-600">Choose a file:</span>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
                className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
                           file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                           hover:file:bg-blue-100"
              />
            </label>

            {/* Drag & Drop */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-500 hover:bg-gray-50 cursor-pointer"
            >
              Drag & Drop your image here
            </div>

            {/* Preview section */}
            {previewUrl && (
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg shadow"
                />
                <p className="text-sm text-gray-600 mt-2">{file?.name}</p>
                <button
                  onClick={handleRemove}
                  className="mt-2 text-red-600 text-sm font-medium hover:underline"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Close button */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
