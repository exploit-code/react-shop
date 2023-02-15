export const getHttpHost = () => {
  const httpHost = document.URL.replace('//', '&&')
    .split('/')[0]
    .replace('&&', '//')
  return httpHost
}

export const getUrl = (relativeUrl) => {
  return `${getHttpHost()}/${relativeUrl}`
}
