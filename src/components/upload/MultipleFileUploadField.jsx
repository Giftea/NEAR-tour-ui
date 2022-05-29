/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { SingleFileUploadWithProgress } from './SingleFileUploadWithProgress';
import { UploadError } from './UploadError';

let currentId = 0;

function getNewId() {
  // we could use a fancier solution instead of a sequential ID :)
  return ++currentId;
}

export function MultipleFileUploadField({ name }) {
  const [_, __, helpers] = useField(name);

  const [images, setFiles] = useState([]);
  const [imageCover, setImageCover] = useState({
    id: '',
    errors: [],
    file: {}
  });
  const onDrop = useCallback((accFiles, rejFiles) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [], id: getNewId() }));
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);

  useEffect(() => {
    let imagesValue = [];
    let imgCover;
    if (name === 'images') {
      images.forEach(function (obj) {
        imagesValue.push(obj.url);
      });
      helpers.setValue(imagesValue);
    } else if (name === 'imageCover') {
      images.forEach(function (obj) {
        setImageCover(obj);
        imgCover = obj.url;
      });
      helpers.setValue(imgCover);
    }
    // helpers.setTouched(true);
  }, [images]);

  function onUpload(file, url) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  function onDelete(file) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/*'],
    maxSize: 3000 * 1024 // 300KB
  });

  return (
    <React.Fragment>
      {name == 'images' ? (
        <>
          <div>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />

              <p>Drag & drop some images here, or click to select images</p>
            </div>
          </div>

          {images.map((fileWrapper) => (
            <div key={fileWrapper.id}>
              {fileWrapper.errors.length ? (
                <UploadError
                  file={fileWrapper.file}
                  errors={fileWrapper.errors}
                  onDelete={onDelete}
                />
              ) : (
                <SingleFileUploadWithProgress
                  onDelete={onDelete}
                  onUpload={onUpload}
                  file={fileWrapper.file}
                />
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          <>
            <div>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />

                <p>Drag & drop an image file here, or click an image</p>
              </div>
            </div>{' '}
            <div key={imageCover?.id}>
              {imageCover?.errors.length ? (
                <UploadError
                  file={imageCover?.file}
                  errors={imageCover.errors}
                  onDelete={onDelete}
                />
              ) : (
                <SingleFileUploadWithProgress
                  onDelete={onDelete}
                  onUpload={onUpload}
                  file={imageCover?.file}
                />
              )}
            </div>
          </>
        </>
      )}
    </React.Fragment>
  );
}
