/**
 *
 * @param requestPath Path begins after school id. Can use schools/all, employees/123456 don't begin with /
 * @returns Promise of TResponse
 */
export async function request<TResponse>(
  requestPath: string,
): Promise<TResponse> {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const auth = process.env.EXPO_PUBLIC_API_AUTH;
  const config: RequestInit = {
    method: "GET",
    headers: { Authorization: auth ?? "" },
  };
  const response = await fetch(`${apiUrl}/${requestPath}`, config);
  console.log(`REQUEST: ${apiUrl}/${requestPath} OK: ${response.ok}`);
  return await response.json();
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),
};
