import { useState } from "react";
import { CSVReader } from "react-papaparse";

export default function CSVParser() {
  const [data, setData] = useState([]);
  const handleOnDrop = (data) => {
    // console.log('on drop --->', data)
    setData(data);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.error({
      Error: err,
      File: file,
      InputElement: inputElem,
      Reason: reason,
    });
  };

  const handleOnRemoveFile = (data) => {
    setData([]);
  };

  return (
    <>
      {/* {console.log('data: ', data)} */}
      <CSVReader
        accept="text/csv, .csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
        style={{
          dropArea: {
            borderRadius: 0,
          },
          dropAreaActive: {
            borderColor: "#05978b",
          },
          dropFile: {
            width: "100%",
            background: "#fff",
          },
          fileSizeInfo: {
            opacity: "0%",
          },
          fileNameInfo: {
            color: "#000",
            fontSize: 14,
            lineHeight: 1,
            padding: "10px",
          },
          removeButton: {
            color: "black",
          },
          progressBar: {
            backgroundColor: "#05978b",
          },
        }}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </>
  );
}
