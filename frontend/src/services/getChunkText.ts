import { UserCredentials, chunksData } from '../types';
import api from '../API/Index';

export const getChunkText = async (userCredentials: UserCredentials, documentName: string) => {
  const formData = new FormData();
  formData.append('uri', userCredentials?.uri ?? '');
  formData.append('database', userCredentials?.database ?? '');
  formData.append('userName', userCredentials?.userName ?? '');
  formData.append('password', userCredentials?.password ?? '');
  formData.append('document_name', documentName);
  try {
    const response = await api.post<chunksData>(`/fetch_chunktext`, formData);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
