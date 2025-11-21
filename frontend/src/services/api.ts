// src/services/api.ts
import axios from "axios";

// Replace this with your Choreo API base URL
const CHOREO_API_BASE = "https://a6614c27-dcd7-4d1d-8303-ebaa5045a723-prod.e1-us-east-azure.choreoapis.dev/leco-wso2-integration/blockmanagementapi/v1.0";


const CHOREO_API_KEY = "eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI3MWI4NzAwMy0yMmE0LTRiNGQtYWRkOS1hODE4ZjdhY2E0NTdAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsIm9yZ2FuaXphdGlvbiI6eyJ1dWlkIjoiYTY2MTRjMjctZGNkNy00ZDFkLTgzMDMtZWJhYTUwNDVhNzIzIn0sImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJibG9ja21hbmFnZW1lbnRhcGkiLCJjb250ZXh0IjoiXC9hNjYxNGMyNy1kY2Q3LTRkMWQtODMwMy1lYmFhNTA0NWE3MjNcL2xlY28td3NvMi1pbnRlZ3JhdGlvblwvYmxvY2ttYW5hZ2VtZW50YXBpXC92MS4wIiwicHVibGlzaGVyIjoiNzFiODcwMDMtMjJhNC00YjRkLWFkZDktYTgxOGY3YWNhNDU3IiwidmVyc2lvbiI6InYxLjAiLCJzdWJzY3JpcHRpb25UaWVyIjpudWxsfV0sImV4cCI6MTc2MzczNjUzMiwidG9rZW5fdHlwZSI6IkludGVybmFsS2V5IiwiaWF0IjoxNzYzNzM1OTMyLCJqdGkiOiIxNTdhNTM0MC1kOTNkLTRjYWItYWU1ZC0xM2FlMDllMjc1MDcifQ.T5ZrUw8YhvDQp1v4IfJQkBO6JJ04bMmCDlk8GusOl0mHygjGmhkggukEcaXBlXXiZXNu3aIqI1T6mPw8hAJiIAnsQcsz3U7aUAwiuR3fix3JQ8JJPgzf20KBiU0AAAWFu9sqmbDfxkBP3aKcfQJK_Z1ULIz4JUB3cxzKHRdBY0AT4y7bIcjpTq00EWKZGjADAozlt3-o2X8ZeeexbpHQs3_PKQ0164KgYWHWRzuy7DnX_RsKjPSOs69KMXpIYZ_dSU3DLcNyHWgcRpWAO2Q1SOmlqqBYaiYDq64tofzr3dym3XDFAbAGMWCTEuu2SdgF9JXBm6yXmIMiwQ_ZWlrBTZuw0UELywlghOSel3_UiOb8d69hWF67uaXM9jFqEEMYkVHF2DnpBrhW1MdCukOotems6e8fj7WTMilQs687yt2A5Pel2VOSR9L3pshC1E_UmdkvbBOkW60syDQ9JJxy84pUVF68YO1r7PDUQIlSr23edPYB37M9maa87O721sYXzZ42MYkLFOYRxoxmhc1uuIO3KyJav4KRdaxeosErbbvcggQ7q9KanHQoz9Eh_9YN9LFsr6YmTwPoipOniqdrp9rCQ9w94MnlLw7uAJ2tHlkOH1IbcrFvNwoS_pw4LAi5WQLvYCdNORTpJNVMmhoZISMQo6uKFayx46llF-BWleY";

const api = axios.create({
  baseURL: CHOREO_API_BASE,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Apikey ${CHOREO_API_KEY}`,
  },
});

export const blockAPI = {
  getAll: () => api.get("/blocks"),
  getById: (id: string) => api.get(`/blocks/${id}`),
};

export const employeeAPI = {
  getAll: () => api.get("/employees"),
  getById: (id: string) => api.get(`/employees/${id}`),
  getByBlock: (blockId: string) => api.get(`/blocks/${blockId}/employees`),
  getByBlockAndId: (blockId: string, employeeId: string) =>
    api.get(`/blocks/${blockId}/employee/${employeeId}`),
};

export const taskAPI = {
  getAll: () => api.get("/tasks"),
  getById: (id: string) => api.get(`/tasks/${id}`),
  getByBlock: (blockId: string) => api.get(`/blocks/${blockId}/tasks`),
  getByBlockAndId: (blockId: string, taskId: string) =>
    api.get(`/blocks/${blockId}/task/${taskId}`),
};

export const performanceAPI = {
  getAll: () => api.get("/performance-history"),
  getByBlock: (blockId: string) =>
    api.get(`/performance-history/block/${blockId}`),
};

export const assignmentAPI = {
  getByEmployee: (employeeId: string) =>
    api.get(`/task-assignments/employee/${employeeId}`),
};

export default api;
