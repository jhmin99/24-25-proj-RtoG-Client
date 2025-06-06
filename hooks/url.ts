const serverIp = "rtg.bumsiku.kr";
const apiUrl = `https://${serverIp}/api/v1`;
const baseUrl = `https://${serverIp}`;
const wsUrl = `wss://${serverIp}/ws`;

const useApiUrl = (path: string) => {
  return `${apiUrl}/${path}`;
};

const useBaseUrl = (path: string) => {
  return `${baseUrl}${path}`;
};

export { useApiUrl, useBaseUrl, wsUrl, serverIp };
