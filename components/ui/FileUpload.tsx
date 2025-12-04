// components/FileUpload.tsx
import React from "react";

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ id, name, onChange, accept, required, ...rest }, ref) => {
    return (
      <input
        type="file"
        id={id}
        name={name}
        onChange={onChange}
        accept={accept}
        required={required}
        ref={ref}
        {...rest}
        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    );
  }
);

FileUpload.displayName = "FileUpload";
export default FileUpload;
