import JSZip from 'jszip'
import axios from 'axios'

export const load = (url: string) => {
  return axios.get(url,
    {
      responseType: 'arraybuffer'
    })
    .then((response) => {
      const file = Buffer.from(response.data, 'binary')

      const loader = new JSZip()
      // more files !
      return loader.loadAsync(file)
        .then((zip) => {
          return zip
        })
    })
}

export const parse = (zip: JSZip, filename: string) => {
  const file = zip.file(filename)
  if (!file) {
    throw new Error('Invalid file')
  }
  return file.async('string')
}